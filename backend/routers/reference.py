"""
Reference router — parses two reference manuals into structured JSON
for the formula quick-reference and application quick-reference modules.

Input files (from CONTENT_DIR):
  - 微积分全课程快速查询手册_v1.0.md  →  /api/reference/formula
  - 微积分现实应用说明手册_v1.0.md     →  /api/reference/applications
"""
import os
import re
from typing import Optional
from fastapi import APIRouter, HTTPException

router = APIRouter(prefix="/api/reference", tags=["reference"])

CONTENT_DIR = os.environ.get(
    "CALCULUS_CONTENT_DIR",
    "/mnt/c/Users/jam08/OneDrive/文档/公众号写作/矩阵学习/微积分学习 从零开始"
)

FORMULA_FILE = os.path.join(CONTENT_DIR, "微积分全课程快速查询手册_v1.0.md")
APPLICATION_FILE = os.path.join(CONTENT_DIR, "微积分现实应用说明手册_v1.0.md")

# Cache — rebuild on restart
_formula_cache = None
_application_cache = None


# ═══════════════════════════════════════════════════════════════════
# Parser: formula reference manual
# ═══════════════════════════════════════════════════════════════════

def _parse_formula_manual(text: str) -> list:
    """
    Parse formula manual into sections → subsections → concepts.
    Returns: [{id, title, subsections: [{id, title, concepts: [{id, name, formulas, explanation}]}]}]
    """
    lines = text.split('\n')
    sections = []
    current_section = None
    current_subsection = None
    buffer_lines = []
    in_frontmatter = False

    for i, line in enumerate(lines):
        if i == 0 and line.strip() == '---':
            in_frontmatter = True
            continue
        if in_frontmatter:
            if line.strip() == '---':
                in_frontmatter = False
            continue

        # H1: major section (e.g. "# 3. 三角函数、指数函数、对数函数")
        m_h1 = re.match(r'^# (\d+)\.?\s*(.+)$', line)
        if m_h1 and not in_frontmatter:
            _flush_concept(current_subsection, buffer_lines)
            current_section = {
                'id': f"sec-{m_h1.group(1)}",
                'title': f"{m_h1.group(1)}. {m_h1.group(2).strip()}",
                'subsections': [],
            }
            sections.append(current_section)
            current_subsection = None
            buffer_lines = []
            continue

        # H2: subsection (e.g. "## 5.2 常用导数公式")
        m_h2 = re.match(r'^## (\d+\.?\d*)\s*(.+)$', line)
        if m_h2 and current_section:
            _flush_concept(current_subsection, buffer_lines)
            current_subsection = {
                'id': f"sub-{m_h2.group(1)}",
                'title': f"{m_h2.group(1)} {m_h2.group(2).strip()}",
                'concepts': [],
            }
            current_section['subsections'].append(current_subsection)
            buffer_lines = []
            continue

        buffer_lines.append(line)

    _flush_concept(current_subsection, buffer_lines)
    return sections


def _flush_concept(subsection: Optional[dict], buffer_lines: list):
    """Extract concept entries from multi-line $$...$$ formula blocks.

    Concept names are detected by: ending with ：/:, **bold**, or short lines (≤15 chars).
    Fallback: if no concepts found, entire content becomes one concept.
    """
    if not subsection or not buffer_lines:
        return

    content = '\n'.join(buffer_lines).strip()
    if not content:
        return

    lines = content.split('\n')
    current_name = None
    current_formulas = []
    current_text = []
    in_formula = False
    formula_buf = []

    def _emit():
        nonlocal current_name
        if current_name and (current_formulas or current_text):
            subsection['concepts'].append({
                'id': f"{subsection['id']}-c{len(subsection['concepts'])+1}",
                'name': current_name,
                'formulas': list(current_formulas),
                'explanation': '\n'.join(current_text).strip(),
            })
        current_name = None
        current_formulas.clear()
        current_text.clear()

    for line in lines:
        stripped = line.strip()

        # Formula block boundary
        if stripped == '$$':
            if in_formula:
                in_formula = False
                if formula_buf:
                    current_formulas.append('\n'.join(formula_buf))
                    formula_buf = []
            else:
                in_formula = True
            continue

        # Inside formula block
        if in_formula:
            if stripped:
                formula_buf.append(stripped)
            continue

        # Empty line
        if not stripped:
            continue

        # Skip \boxed and horizontal rules
        if stripped.startswith('\\boxed') or stripped == '---':
            current_text.append(stripped)
            continue

        # Concept name detection
        is_name = False
        if len(stripped) <= 60:
            if stripped.endswith('：') or stripped.endswith(':'):
                is_name = True
            elif stripped.startswith('**'):
                is_name = True
            elif len(stripped) <= 15:
                is_name = True

        if is_name:
            _emit()
            current_name = stripped.rstrip('：:')
        else:
            current_text.append(stripped)

    _emit()

    # Fallback: no concepts detected but we have content
    if not subsection['concepts'] and (current_formulas or current_text):
        subsection['concepts'].append({
            'id': f"{subsection['id']}-c1",
            'name': _extract_name_from_lines(content.split('\n')) or '概念',
            'formulas': list(current_formulas),
            'explanation': '\n'.join(current_text).strip(),
        })


def _extract_name_from_lines(lines: list) -> Optional[str]:
    """Find first meaningful text line to use as fallback concept name."""
    for line in lines:
        s = line.strip()
        if not s or s.startswith('$$') or s == '---':
            continue
        if len(s) <= 40:
            return s.rstrip('：:')
        return s[:40]
    return None


# ═══════════════════════════════════════════════════════════════════
# Parser: application reference manual
# ═══════════════════════════════════════════════════════════════════

def _parse_application_manual(text: str) -> list:
    """
    Parse application manual into domain chapters → application items.
    Returns: [{id, title, icon, items: [{id, title, detail, formulas}]}]
    """
    lines = text.split('\n')
    chapters = []
    current_chapter = None
    buffer_lines = []
    in_frontmatter = False

    icons = {
        '物理': '⚛️', '经济': '📊', '金融': '💰', '工程': '⚙️',
        '数据科学': '🤖', '机器': '🤖', '生物': '🧬', '医学': '🏥',
        '环境': '🌍', '地理': '🗺️',
    }

    for i, line in enumerate(lines):
        if i == 0 and line.strip() == '---':
            in_frontmatter = True
            continue
        if in_frontmatter:
            if line.strip() == '---':
                in_frontmatter = False
            continue

        # H1: domain chapter (matches # 四、... through # 十九、...)
        # Skip preamble chapters (一, 二, 三) which are usage guides, not application domains
        m_h1 = re.match(r'^# ([一二三四五六七八九十]+)、(.+)$', line)
        if m_h1:
            num = m_h1.group(1)
            if num in ('一', '二', '三'):
                continue  # preamble, not a domain chapter
            _flush_app_item(current_chapter, buffer_lines)
            title = f"{m_h1.group(1)}、{m_h1.group(2)}"
            icon = '📐'
            for kw, ic in icons.items():
                if kw in title:
                    icon = ic
                    break
            current_chapter = {
                'id': f"app-ch{len(chapters)+1}",
                'title': title,
                'icon': icon,
                'items': [],
            }
            chapters.append(current_chapter)
            buffer_lines = []
            continue

        # H2: application item (## 1. 标题  or  ## 问题)
        m_h2 = re.match(r'^## (?:(\d+)\.\s*)?(.+)$', line)
        if m_h2 and current_chapter:
            _flush_app_item(current_chapter, buffer_lines)
            buffer_lines = [m_h2.group(2)]
            continue

        # H3: example sub-item
        m_h3 = re.match(r'^### (.+)$', line)
        if m_h3:
            buffer_lines.append(f"[示例] {m_h3.group(1)}")
            continue

        buffer_lines.append(line)

    _flush_app_item(current_chapter, buffer_lines)
    return chapters


def _flush_app_item(chapter: Optional[dict], buffer_lines: list):
    """Extract application detail from accumulated text."""
    if not chapter or not buffer_lines:
        return

    # Strip leading empty lines for title discovery
    content = '\n'.join(buffer_lines).strip()
    if not content:
        return

    formulas = [m.group(1).strip() for m in re.finditer(r'\$\$\s*(.+?)\s*\$\$', content, re.DOTALL)]
    # Keep original $$...$$ blocks intact for frontend KaTeX rendering
    text = re.sub(r'\\boxed\{(.+?)\}', r'\1', content)

    # Extract title: first non-empty, non-formula, non-divider line
    title = None
    for line in buffer_lines:
        stripped = line.strip()
        if not stripped:
            continue
        if stripped.startswith('$$') or stripped.startswith('|'):
            continue
        if re.match(r'^[-=]{2,}$', stripped):
            continue
        title = stripped
        break
    if not title:
        # Fallback: extract from chapter name
        cn = chapter.get('title', '')
        title = cn.replace('十二、', '').replace('二十、', '')[:30] or '应用场景'

    chapter['items'].append({
        'id': f"{chapter['id']}-a{len(chapter['items'])+1}",
        'title': title,
        'detail': text.strip(),
        'formulas': formulas,
    })
    buffer_lines.clear()


# ═══════════════════════════════════════════════════════════════════
# API endpoints
# ═══════════════════════════════════════════════════════════════════

@router.get("/formula")
def get_formula_reference():
    """Return structured formula quick-reference data (19 sections, ~435 concepts)."""
    global _formula_cache
    if _formula_cache is not None:
        return {"sections": _formula_cache}

    if not os.path.exists(FORMULA_FILE):
        raise HTTPException(status_code=404, detail=f"公式手册文件不存在: {FORMULA_FILE}")

    with open(FORMULA_FILE, 'r', encoding='utf-8') as f:
        _formula_cache = _parse_formula_manual(f.read())

    return {"sections": _formula_cache}


@router.get("/applications")
def get_application_reference():
    """Return structured application quick-reference data (13 chapters, 48 items)."""
    global _application_cache
    if _application_cache is not None:
        return {"chapters": _application_cache}

    if not os.path.exists(APPLICATION_FILE):
        raise HTTPException(status_code=404, detail=f"应用手册文件不存在: {APPLICATION_FILE}")

    with open(APPLICATION_FILE, 'r', encoding='utf-8') as f:
        _application_cache = _parse_application_manual(f.read())

    return {"chapters": _application_cache}
