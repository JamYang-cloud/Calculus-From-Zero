"""
Markdown parser for calculus course units.

Parses Obsidian-formatted markdown files with YAML frontmatter and
converts them to structured data + HTML for frontend rendering.

Extension points for future subjects (linear algebra, probability):
  - ContentSource base class
  - register_source() for new subject types
"""
import os
import re
import yaml
from dataclasses import dataclass, field
from typing import Optional
import markdown


# ─── Data structures ───────────────────────────────────────────

@dataclass
class UnitMeta:
    """Metadata extracted from YAML frontmatter."""
    unit_id: int
    title: str = ""
    tags: list = field(default_factory=list)
    created: str = ""
    course: str = ""
    stage: int = 0  # 0-13


@dataclass
class UnitContent:
    """Full parsed content of a course unit."""
    meta: UnitMeta
    html_body: str  # HTML with {{MATH_BLOCK_xxx}} / {{MATH_INLINE_xxx}} placeholders
    raw_markdown: str
    learning_objectives: list = field(default_factory=list)
    exercise_groups: dict = field(default_factory=dict)
    prerequisites: list = field(default_factory=list)
    math_tokens: list = field(default_factory=list)  # [{placeholder, tex, is_block}]


@dataclass
class StageInfo:
    """Information about a learning stage (阶段)."""
    stage_id: int
    name: str
    unit_range: tuple  # (start, end)
    core_task: str
    main_line: str  # which knowledge main line this belongs to


# ─── Stage definitions ─────────────────────────────────────────

# Centralized stage definitions — easy to modify for future subjects
STAGES: dict[int, StageInfo] = {
    0:  StageInfo(0,  "学习方式与诊断",        (0, 0),   "明确基础、目标、学习规则",                    "全部"),
    1:  StageInfo(1,  "数、式子、坐标与图像基础", (1, 12),  "重建代数、坐标、初等图像基础",                  "函数主线"),
    2:  StageInfo(2,  "函数基础",              (13, 24), "建立「函数是微积分对象」的意识",                "函数主线"),
    3:  StageInfo(3,  "三角函数",              (25, 36), "掌握弧度制、单位圆、三角图像与恒等式",           "函数主线"),
    4:  StageInfo(4,  "指数与对数",            (37, 44), "掌握指数、对数、增长与渐近线",                  "函数主线"),
    5:  StageInfo(5,  "极限与连续",            (45, 58), "理解靠近、左右极限、连续与间断",               "极限连续主线"),
    6:  StageInfo(6,  "导数基础",              (59, 75), "从变化率到求导规则",                         "导数主线"),
    7:  StageInfo(7,  "导数应用",              (76, 91), "单调性、极值、凹凸性、优化与中值定理",          "导数主线"),
    8:  StageInfo(8,  "积分基础",              (92, 108),"原函数、不定积分、定积分与基本定理",           "积分主线"),
    9:  StageInfo(9,  "积分应用",              (109, 122),"面积、体积、平均值、位移、做功与边际总量",     "积分主线"),
    10: StageInfo(10, "数列、级数与泰勒展开",    (123, 138),"无穷累加、幂级数、泰勒近似与误差",           "级数泰勒主线"),
    11: StageInfo(11, "微分方程初步",           (139, 148),"从变化规律反推出函数",                      "微分方程主线"),
    12: StageInfo(12, "多元微积分入门",         (149, 164),"多元变化率、多元极值、二重积分",             "多元微积分主线"),
    13: StageInfo(13, "综合复习与最终收束",      (165, 172),"全课程知识地图、模拟测试、错题清单与后续路线","全部"),
}

# Main knowledge lines (八条知识主线)
MAIN_LINES = [
    "函数主线",
    "极限连续主线",
    "导数主线",
    "积分主线",
    "级数泰勒主线",
    "微分方程主线",
    "多元微积分主线",
    "二重积分主线",
]


# ─── Content source abstraction (extensible) ───────────────────

class ContentSource:
    """
    Abstract base for content sources.
    
    Future subjects (linear algebra, probability) implement this interface.
    """
    
    def __init__(self, content_dir: str, file_pattern: str):
        self.content_dir = content_dir
        self.file_pattern = file_pattern  # e.g. "微积分课程_第*单元_Obsidian版.md"
    
    def list_units(self) -> list[dict]:
        raise NotImplementedError
    
    def load_unit(self, unit_id: int) -> Optional[UnitContent]:
        raise NotImplementedError
    
    def get_stages(self) -> dict[int, StageInfo]:
        raise NotImplementedError


class CalculusContentSource(ContentSource):
    """Content source for calculus course materials."""
    
    def __init__(self, content_dir: str):
        super().__init__(content_dir, "微积分课程_第*单元_Obsidian版.md")
    
    def get_stages(self) -> dict[int, StageInfo]:
        return STAGES
    
    def list_units(self) -> list[dict]:
        """Scan directory and return list of available units with metadata."""
        units = []
        for filename in sorted(os.listdir(self.content_dir)):
            if not (filename.startswith("微积分课程_第") and filename.endswith(".md")):
                continue
            filepath = os.path.join(self.content_dir, filename)
            meta = self._parse_frontmatter_only(filepath)
            if meta:
                units.append({
                    "unit_id": meta.unit_id,
                    "title": meta.title,
                    "tags": meta.tags,
                    "stage": meta.stage,
                    "filename": filename,
                })
        units.sort(key=lambda u: u["unit_id"])
        return units
    
    def load_unit(self, unit_id: int) -> Optional[UnitContent]:
        """Load and fully parse a single unit."""
        filepath = self._find_unit_file(unit_id)
        if filepath is None:
            return None
        return self._parse_full(filepath)
    
    def _find_unit_file(self, unit_id: int) -> Optional[str]:
        """Find the markdown file for a given unit ID."""
        # Try exact match first (padded format)
        for fmt in [f"微积分课程_第{unit_id:02d}单元_Obsidian版.md",
                     f"微积分课程_第{unit_id}单元_Obsidian版.md"]:
            path = os.path.join(self.content_dir, fmt)
            if os.path.exists(path):
                return path
        
        # Fallback: scan directory
        for filename in os.listdir(self.content_dir):
            if f"第{unit_id:02d}单元" in filename or f"第{unit_id}单元" in filename:
                return os.path.join(self.content_dir, filename)
        return None
    
    def _parse_frontmatter_only(self, filepath: str) -> Optional[UnitMeta]:
        """Parse only YAML frontmatter for quick listing."""
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        if not content.startswith("---"):
            return None
        
        parts = content.split("---", 2)
        if len(parts) < 3:
            return None
        
        try:
            fm = yaml.safe_load(parts[1])
        except yaml.YAMLError:
            return None
        
        return UnitMeta(
            unit_id=fm.get("unit", 0),
            title=fm.get("title", ""),
            tags=fm.get("tags", []),
            created=str(fm.get("created", "")),
            course=fm.get("course", ""),
            stage=self._unit_id_to_stage(fm.get("unit", 0)),
        )
    
    def _parse_full(self, filepath: str) -> Optional[UnitContent]:
        """Parse complete unit file: frontmatter + markdown body."""
        with open(filepath, "r", encoding="utf-8") as f:
            raw = f.read()
        
        if not raw.startswith("---"):
            return None
        
        parts = raw.split("---", 2)
        if len(parts) < 3:
            return None
        
        try:
            fm = yaml.safe_load(parts[1])
        except yaml.YAMLError:
            return None
        
        body_md = parts[2].strip()
        
        # PROTECT math: replace $$...$$ and $...$ with safe placeholders
        # before markdown conversion, so markdown doesn't escape < inside math
        protected_md, placeholder_map = _protect_math(body_md)
        
        # Convert markdown to HTML (math placeholders are safe plain text)
        md = markdown.Markdown(extensions=[
            "markdown.extensions.tables",
            "markdown.extensions.fenced_code",
            "markdown.extensions.codehilite",
            "markdown.extensions.toc",
        ])
        html_body = md.convert(protected_md)
        # Keep placeholders in HTML — frontend will render with KaTeX
        # to avoid browser HTML parser mangling `<` inside math content.
        
        # Post-process: add start attributes to ordered lists after group headings
        # so that numbering is continuous across groups (A组 1-5, B组 6-10, etc.)
        html_body = _fix_exercise_list_numbering(html_body)
        
        # Build math_tokens list for frontend
        math_tokens = [
            {"placeholder": key, "tex": content, "is_block": is_block}
            for key, (content, is_block) in placeholder_map.items()
        ]
        
        meta = UnitMeta(
            unit_id=fm.get("unit", 0),
            title=fm.get("title", ""),
            tags=fm.get("tags", []),
            created=str(fm.get("created", "")),
            course=fm.get("course", ""),
            stage=self._unit_id_to_stage(fm.get("unit", 0)),
        )
        
        # Extract learning objectives and exercises (from raw body_md)
        learning_objectives = self._extract_learning_objectives(body_md)
        exercise_groups = self._extract_exercise_groups(body_md)
        prerequisites = self._extract_prerequisites(body_md)
        
        # Protect math in extracted text fields (prerequisites, etc.)
        # Each field may contain $...$ that needs placeholder protection
        protected_prereqs = []
        for p in prerequisites:
            protected_text, p_tokens = _protect_math(p)
            protected_prereqs.append(protected_text)
            math_tokens.extend([
                {"placeholder": k, "tex": v[0], "is_block": v[1]}
                for k, v in p_tokens.items()
            ])
        
        # Also protect math in exercise texts and answers
        exercise_answers = self._extract_exercise_answers(body_md)
        protected_exercise_groups = {}
        for group, exercises in exercise_groups.items():
            protected_exercise_groups[group] = []
            group_answers = exercise_answers.get(group, {})
            for ex in exercises:
                protected_text, ex_tokens = _protect_math(ex["text"])
                protected_exercise_groups[group].append({
                    "number": ex["number"],
                    "text": protected_text,
                })
                math_tokens.extend([
                    {"placeholder": k, "tex": v[0], "is_block": v[1]}
                    for k, v in ex_tokens.items()
                ])
                # Also protect the answer text
                answer = group_answers.get(ex["number"], "")
                if answer:
                    protected_answer, ans_tokens = _protect_math(answer)
                    protected_exercise_groups[group][-1]["answer"] = protected_answer
                    math_tokens.extend([
                        {"placeholder": k, "tex": v[0], "is_block": v[1]}
                        for k, v in ans_tokens.items()
                    ])
                else:
                    protected_exercise_groups[group][-1]["answer"] = ""
        
        return UnitContent(
            meta=meta,
            html_body=html_body,
            raw_markdown=body_md,
            learning_objectives=learning_objectives,
            exercise_groups=protected_exercise_groups,
            prerequisites=protected_prereqs,
            math_tokens=math_tokens,
        )
    
    def _unit_id_to_stage(self, unit_id: int) -> int:
        """Map a unit ID to its stage number."""
        for stage_id, info in STAGES.items():
            if info.unit_range[0] <= unit_id <= info.unit_range[1]:
                return stage_id
        return 0
    
    def _extract_learning_objectives(self, md_body: str) -> list:
        """Extract numbered learning objectives from the '本课目标' section."""
        objectives = []
        in_section = False
        for line in md_body.split("\n"):
            if "本课目标" in line:
                in_section = True
                continue
            if in_section:
                if line.strip().startswith("##") or line.strip().startswith("# "):
                    break
                match = re.match(r"^\d+\.\s+(.+)", line.strip())
                if match:
                    objectives.append(match.group(1))
                elif line.strip() == "" and objectives:
                    break
        return objectives
    
    def _extract_exercise_groups(self, md_body: str) -> dict:
        """Extract exercise groups (A组, B组, etc.) from unit content.
        Captures numbered items AND any block math ($$...$$) on following lines."""
        groups = {}
        current_group = None
        in_answers = False
        lines = md_body.split("\n")
        i = 0
        while i < len(lines):
            line = lines[i]
            ls = line.strip()
            
            # Stop collecting once we enter the answers section
            if "答案" in ls and re.match(r"^##\s+[A-Z]\s*组答案", ls):
                in_answers = True
                current_group = None
                i += 1
                continue
            if in_answers:
                i += 1
                continue
            
            match = re.match(r"^##\s+([A-Z])\s*组(?!答案)", ls)
            if match:
                current_group = f"{match.group(1)}组"
                groups[current_group] = []
                i += 1
                continue
            
            if current_group:
                if ls.startswith("##") and not ls.startswith("###") and "答案" not in ls:
                    current_group = None
                    i += 1
                    continue
                
                # Match "N. text" or "### N. text"
                match = re.match(r"^(?:###\s+)?(\d+)\.\s*(.*)", ls)
                if match:
                    num = int(match.group(1))
                    text = match.group(2)
                    
                    # Scan forward for block math ($$...$$) on subsequent lines
                    j = i + 1
                    while j < len(lines):
                        nls = lines[j].strip()
                        # Skip blank lines between exercise text and block math
                        if nls == "":
                            j += 1
                            continue
                        if nls.startswith("$$"):
                            # Find closing $$
                            math_lines = [nls]
                            k = j + 1
                            while k < len(lines) and not lines[k].strip().startswith("$$"):
                                math_lines.append(lines[k].strip())
                                k += 1
                            if k < len(lines):
                                math_lines.append(lines[k].strip())  # closing $$
                                text = text + "\n" + "\n".join(math_lines)
                                j = k + 1
                            else:
                                j += 1
                            break
                        elif re.match(r"^\d+\.\s", nls) or nls.startswith("##") or nls.startswith("---"):
                            break  # next exercise or section separator
                        else:
                            # Accumulate continuation lines
                            text = text + " " + nls
                        j += 1
                    i = j
                    
                    groups[current_group].append({
                        "number": num,
                        "text": text,
                    })
                    continue
            
            i += 1
        return groups

    def _extract_exercise_answers(self, md_body: str) -> dict:
        """Extract answers for exercise groups.
        Handles two formats:
          1. '### N.' sub-headings with content blocks (Unit 0 style)
          2. 'N. text' numbered list items (Unit 3 style)
        Returns {group_name: {number: answer_text}}"""
        answers = {}
        current_group = None
        current_number = None
        current_lines = []
        format_type = None  # 'heading' or 'list'
        
        for line in md_body.split("\n"):
            ls = line.strip()
            
            # Match "## X组答案" header
            match = re.match(r"^##\s+([A-Z])\s*组答案", ls)
            if match:
                if current_group and current_number is not None:
                    answers.setdefault(current_group, {})[current_number] = "\n".join(current_lines).strip()
                current_group = f"{match.group(1)}组"
                current_number = None
                current_lines = []
                format_type = None
                continue
            
            if not current_group:
                continue
            
            # Stop at next major section (next ## group header or # heading)
            if re.match(r"^#\s", ls) and "答案" not in ls and "组" not in ls:
                if current_number is not None:
                    answers.setdefault(current_group, {})[current_number] = "\n".join(current_lines).strip()
                current_group = None
                continue
            
            # Try "### N." sub-heading format
            match = re.match(r"^###\s+(\d+)\.", ls)
            if match:
                if current_number is not None:
                    answers.setdefault(current_group, {})[current_number] = "\n".join(current_lines).strip()
                current_number = int(match.group(1))
                current_lines = []
                format_type = 'heading'
                continue
            
            # Try "N. text" numbered list format (only if not already in heading mode)
            if format_type != 'heading':
                match = re.match(r"^(\d+)\.\s*(.*)", ls)
                if match:
                    if current_number is not None:
                        answers.setdefault(current_group, {})[current_number] = "\n".join(current_lines).strip()
                    current_number = int(match.group(1))
                    current_lines = [match.group(2)]
                    format_type = 'list'
                    continue
            
            # For list format: accumulate subsequent lines until blank or next number/heading
            if format_type == 'list' and current_number is not None:
                if ls == '':
                    # Empty line after list item — could be continuation or separator
                    # Only break if next non-empty line starts a new number
                    pass
                elif re.match(r"^\d+\.\s", ls) or re.match(r"^###\s+\d+\.", ls):
                    # New numbered item starts — save current and reset
                    answers.setdefault(current_group, {})[current_number] = "\n".join(current_lines).strip()
                    # Re-process this line as a new item
                    nm = re.match(r"^\d+\.\s*(.*)", ls)
                    if nm:
                        current_number = int(nm.group(1))
                        current_lines = [nm.group(2)]
                    continue
                else:
                    current_lines.append(ls)
            
            # For heading format: accumulate all lines until next sub-heading
            elif format_type == 'heading' and current_number is not None:
                current_lines.append(ls)
        
        # Flush last
        if current_group and current_number is not None:
            answers.setdefault(current_group, {})[current_number] = "\n".join(current_lines).strip()
        
        return answers
    
    def _extract_prerequisites(self, md_body: str) -> list:
        """Extract prerequisites for entering next unit."""
        prereqs = []
        in_section = False
        for line in md_body.split("\n"):
            if "进入" in line and "单元的条件" in line:
                in_section = True
                continue
            if in_section:
                if line.strip().startswith("#"):
                    break
                match = re.match(r"^\d+\.\s+(.+)", line.strip())
                if match:
                    prereqs.append(match.group(1))
                elif line.strip() == "" and prereqs:
                    break
        return prereqs


# ─── Math placeholder protection ──────────────────────────────
#
# CRITICAL: We CANNOT wrap LaTeX math in HTML tags (<div>, <span>)
# before markdown conversion, because Python's markdown library
# interprets < inside those wrappers as HTML tags and escapes them:
#   <span class="math-inline">a<x<b</span>  →  a&lt;x&lt;b
# This breaks KaTeX (|x-3|&lt;2 → parse error).
#
# Solution: Replace math with safe text placeholders, run markdown,
# then restore math as proper HTML wrappers.

import uuid

# Patterns for block and inline math
_BLOCK_MATH_RE = re.compile(r"\$\$(.+?)\$\$", re.DOTALL)
_INLINE_MATH_RE = re.compile(r"(?<!\$)\$(?!\$)(.+?)(?<!\$)\$(?!\$)")


def _protect_math(text: str) -> tuple[str, dict[str, tuple[str, bool]]]:
    """
    Replace $$...$$ and $...$ with safe placeholders.
    
    Returns:
        protected_text: text with placeholders instead of math
        placeholder_map: {placeholder_key: (math_content, is_block)}
    """
    placeholder_map = {}
    
    def _block_replacer(m):
        key = f"BLOCK_{uuid.uuid4().hex[:8]}"
        placeholder_map[key] = (m.group(1), True)
        return f"{{{{MATH_{key}}}}}"
    
    def _inline_replacer(m):
        key = f"INLINE_{uuid.uuid4().hex[:8]}"
        placeholder_map[key] = (m.group(1), False)
        return f"{{{{MATH_{key}}}}}"
    
    text = _BLOCK_MATH_RE.sub(_block_replacer, text)
    text = _INLINE_MATH_RE.sub(_inline_replacer, text)
    
    return text, placeholder_map


def _restore_math(html: str, placeholder_map: dict[str, tuple[str, bool]]) -> str:
    """
    Replace placeholders in HTML output with proper math wrappers.
    """
    for key, (content, is_block) in placeholder_map.items():
        placeholder = "{{MATH_" + key + "}}"
        if is_block:
            replacement = f'<div class="math-block">{content}</div>'
        else:
            replacement = f'<span class="math-inline">{content}</span>'
        html = html.replace(placeholder, replacement)
    return html


def _fix_exercise_list_numbering(html: str) -> str:
    """Add start attributes to <ol> elements in the exercise section
    so numbering is continuous across groups (A组 1-5, B组 6-10, etc.)."""
    # Find the exercises section (after "练习题" heading)
    idx = html.find('<h1')  
    while idx != -1:
        end = html.find('>', idx)
        if end != -1 and ('练习题' in html[idx:end+30] or '练习' in html[idx:end+30]):
            idx = end + 1
            break
        idx = html.find('<h1', end)
    else:
        return html  # No exercise section
    
    prefix = html[:idx]
    suffix = html[idx:]
    
    cumulative = 0
    def replacer(m):
        nonlocal cumulative
        li_count = len(re.findall(r'<li>', m.group(0)))
        if cumulative > 0:
            result = m.group(0).replace('<ol>', f'<ol start="{cumulative + 1}">')
        else:
            result = m.group(0)
        cumulative += li_count
        return result
    
    suffix = re.sub(r'<ol>.*?</ol>', replacer, suffix, flags=re.DOTALL)
    return prefix + suffix


# ─── Content registry (extensible) ─────────────────────────────

class ContentRegistry:
    """
    Registry for multiple content sources.
    
    When new subjects are added (linear algebra, probability),
    register them here and they become available via the same API.
    """
    
    def __init__(self):
        self._sources: dict[str, ContentSource] = {}
    
    def register(self, subject_id: str, source: ContentSource):
        self._sources[subject_id] = source
    
    def get(self, subject_id: str) -> Optional[ContentSource]:
        return self._sources.get(subject_id)
    
    def list_subjects(self) -> list[str]:
        return list(self._sources.keys())


# Global registry instance
content_registry = ContentRegistry()
