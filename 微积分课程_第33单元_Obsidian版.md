---
title: 第 33 单元：和差角公式
tags:
  - 数学
  - 微积分
  - 三角函数
  - 和差角公式
  - 三角恒等式
created: 2026-06-21
course: 微积分长期学习计划
unit: 33
---

# 第 33 单元：和差角公式

第 32 单元完成了三角函数第一阶段综合复习。

从第 33 单元开始，进入三角恒等式的第二层：和差角公式。

和差角公式用于处理：

$$
\sin(\alpha+\beta)
$$

$$
\sin(\alpha-\beta)
$$

$$
\cos(\alpha+\beta)
$$

$$
\cos(\alpha-\beta)
$$

它们不是简单地等于：

$$
\sin\alpha+\sin\beta
$$

或：

$$
\cos\alpha+\cos\beta
$$

这是本单元最重要的纠错点。

---

## 一、本课目标

学完本课后，需要掌握：

1. 知道 $\sin(\alpha+\beta)$ 不能拆成 $\sin\alpha+\sin\beta$。
2. 掌握正弦和角公式。
3. 掌握正弦差角公式。
4. 掌握余弦和角公式。
5. 掌握余弦差角公式。
6. 能用和差角公式计算非基本特殊角。
7. 能用公式推导简单三角恒等式。
8. 能识别公式中的符号规律。
9. 能为下一单元倍角公式做准备。
10. 知道这些公式后续会用于极限、导数、积分和三角函数化简。

---

# 二、为什么需要和差角公式

已知：

$$
30^\circ+45^\circ=75^\circ
$$

如果想求：

$$
\sin75^\circ
$$

就需要处理：

$$
\sin(30^\circ+45^\circ)
$$

但：

$$
\sin(30^\circ+45^\circ)\ne \sin30^\circ+\sin45^\circ
$$

因为左边最大不超过 $1$，而右边：

$$
\sin30^\circ+\sin45^\circ
=
\frac12+\frac{\sqrt2}{2}
$$

这个值大于 $1$，不可能等于某个正弦值。

因此，三角函数不能像普通括号那样直接拆开。

---

# 三、正弦和角公式

正弦和角公式是：

$$
\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta
$$

注意右边有两项：

1. $\sin\alpha\cos\beta$
2. $\cos\alpha\sin\beta$

符号是加号。

记忆方式：

> 正弦和角：正弦乘余弦，加上余弦乘正弦。

---

# 四、正弦差角公式

正弦差角公式是：

$$
\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta
$$

与正弦和角公式相比，只是中间符号变成减号。

所以：

$$
\sin(\alpha\pm\beta)=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta
$$

这里正负号保持一致。

---

# 五、余弦和角公式

余弦和角公式是：

$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta
$$

注意：余弦和角公式中间是减号。

这点很容易错。

---

# 六、余弦差角公式

余弦差角公式是：

$$
\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta
$$

所以：

$$
\cos(\alpha\pm\beta)=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta
$$

注意这里是“反号”：

- $\cos(\alpha+\beta)$ 用减号；
- $\cos(\alpha-\beta)$ 用加号。

这是余弦公式最容易出错的地方。

---

# 七、四个公式汇总

| 类型 | 公式 |
|---|---|
| 正弦和角 | $\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta$ |
| 正弦差角 | $\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta$ |
| 余弦和角 | $\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta$ |
| 余弦差角 | $\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta$ |

简记：

$$
\sin(\alpha\pm\beta)=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta
$$

$$
\cos(\alpha\pm\beta)=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta
$$

---

# 八、符号规律

正弦公式：

$$
\sin(\alpha+\beta)
$$

对应右边加号。

$$
\sin(\alpha-\beta)
$$

对应右边减号。

正弦公式“同号”。

余弦公式：

$$
\cos(\alpha+\beta)
$$

对应右边减号。

$$
\cos(\alpha-\beta)
$$

对应右边加号。

余弦公式“反号”。

---

# 九、例题 1：求 $\sin75^\circ$

因为：

$$
75^\circ=45^\circ+30^\circ
$$

所以：

$$
\sin75^\circ=\sin(45^\circ+30^\circ)
$$

使用：

$$
\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta
$$

得到：

$$
\sin75^\circ
=
\sin45^\circ\cos30^\circ+\cos45^\circ\sin30^\circ
$$

代入特殊值：

$$
=
\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2}
+
\frac{\sqrt2}{2}\cdot\frac12
$$

$$
=
\frac{\sqrt6}{4}+\frac{\sqrt2}{4}
$$

所以：

$$
\sin75^\circ=\frac{\sqrt6+\sqrt2}{4}
$$

---

# 十、例题 2：求 $\cos75^\circ$

因为：

$$
75^\circ=45^\circ+30^\circ
$$

所以：

$$
\cos75^\circ=\cos(45^\circ+30^\circ)
$$

使用：

$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta
$$

得到：

$$
\cos75^\circ
=
\cos45^\circ\cos30^\circ-\sin45^\circ\sin30^\circ
$$

代入特殊值：

$$
=
\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2}
-
\frac{\sqrt2}{2}\cdot\frac12
$$

$$
=
\frac{\sqrt6}{4}-\frac{\sqrt2}{4}
$$

所以：

$$
\cos75^\circ=\frac{\sqrt6-\sqrt2}{4}
$$

---

# 十一、例题 3：求 $\sin15^\circ$

因为：

$$
15^\circ=45^\circ-30^\circ
$$

所以：

$$
\sin15^\circ=\sin(45^\circ-30^\circ)
$$

使用：

$$
\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta
$$

得到：

$$
\sin15^\circ
=
\sin45^\circ\cos30^\circ-\cos45^\circ\sin30^\circ
$$

代入特殊值：

$$
=
\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2}
-
\frac{\sqrt2}{2}\cdot\frac12
$$

$$
=
\frac{\sqrt6-\sqrt2}{4}
$$

所以：

$$
\sin15^\circ=\frac{\sqrt6-\sqrt2}{4}
$$

---

# 十二、例题 4：求 $\cos15^\circ$

因为：

$$
15^\circ=45^\circ-30^\circ
$$

所以：

$$
\cos15^\circ=\cos(45^\circ-30^\circ)
$$

使用：

$$
\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta
$$

得到：

$$
\cos15^\circ
=
\cos45^\circ\cos30^\circ+\sin45^\circ\sin30^\circ
$$

代入特殊值：

$$
=
\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2}
+
\frac{\sqrt2}{2}\cdot\frac12
$$

$$
=
\frac{\sqrt6+\sqrt2}{4}
$$

所以：

$$
\cos15^\circ=\frac{\sqrt6+\sqrt2}{4}
$$

---

# 十三、用弧度表示

在微积分中，建议把角写成弧度。

例如：

$$
75^\circ=\frac{5\pi}{12}
$$

因为：

$$
75^\circ\cdot\frac{\pi}{180^\circ}=\frac{5\pi}{12}
$$

而：

$$
45^\circ=\frac{\pi}{4}
$$

$$
30^\circ=\frac{\pi}{6}
$$

所以：

$$
\frac{5\pi}{12}=\frac{\pi}{4}+\frac{\pi}{6}
$$

于是：

$$
\sin\frac{5\pi}{12}
=
\sin\left(\frac{\pi}{4}+\frac{\pi}{6}\right)
$$

计算结果仍是：

$$
\frac{\sqrt6+\sqrt2}{4}
$$

---

# 十四、常见错误

## 错误 1：把 $\sin(\alpha+\beta)$ 拆成 $\sin\alpha+\sin\beta$

错误：

$$
\sin(\alpha+\beta)=\sin\alpha+\sin\beta
$$

正确：

$$
\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta
$$

---

## 错误 2：余弦和角符号写错

错误：

$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta
$$

正确：

$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta
$$

---

## 错误 3：余弦差角符号写错

错误：

$$
\cos(\alpha-\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta
$$

正确：

$$
\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta
$$

---

## 错误 4：特殊角值混淆

例如：

$$
\sin\frac{\pi}{3}=\frac{\sqrt3}{2}
$$

而：

$$
\sin\frac{\pi}{4}=\frac{\sqrt2}{2}
$$

不要混淆 $\sqrt2$ 与 $\sqrt3$。

---

## 错误 5：角度和弧度混写

如果写：

$$
\sin(45+30)
$$

不够严谨。角度制要写：

$$
\sin(45^\circ+30^\circ)
$$

弧度制写：

$$
\sin\left(\frac{\pi}{4}+\frac{\pi}{6}\right)
$$

---

# 十五、为什么这些公式放在这里学习

和差角公式并不是三角函数入门的第一步。

必须先掌握：

1. 单位圆；
2. 特殊角值；
3. 象限正负号；
4. 基本图像；
5. 基本恒等式；
6. 简单化简；
7. 基础三角方程。

否则和差角公式会变成机械背诵。

现在学习它们更合适，因为你已经知道：

$$
\sin,\cos,\tan
$$

的几何含义、特殊值和恒等式基础。

---

# 十六、练习题

## A 组：公式识别

1. 写出 $\sin(\alpha+\beta)$ 的公式。

2. 写出 $\sin(\alpha-\beta)$ 的公式。

3. 写出 $\cos(\alpha+\beta)$ 的公式。

4. 写出 $\cos(\alpha-\beta)$ 的公式。

5. 判断：$\sin(\alpha+\beta)=\sin\alpha+\sin\beta$ 是否正确？

---

## B 组：计算 $75^\circ$ 和 $15^\circ$

6. 用和角公式计算 $\sin75^\circ$。

7. 用和角公式计算 $\cos75^\circ$。

8. 用差角公式计算 $\sin15^\circ$。

9. 用差角公式计算 $\cos15^\circ$。

10. 把 $75^\circ$ 转成弧度。

---

## C 组：弧度计算

11. 计算 $\sin\left(\frac{\pi}{4}+\frac{\pi}{6}\right)$。

12. 计算 $\cos\left(\frac{\pi}{4}+\frac{\pi}{6}\right)$。

13. 计算 $\sin\left(\frac{\pi}{4}-\frac{\pi}{6}\right)$。

14. 计算 $\cos\left(\frac{\pi}{4}-\frac{\pi}{6}\right)$。

15. 判断 $\frac{\pi}{4}+\frac{\pi}{6}$ 等于多少。

---

## D 组：符号与公式结构

16. 为什么 $\cos(\alpha+\beta)$ 中间是减号？

17. 为什么 $\cos(\alpha-\beta)$ 中间是加号？

18. 正弦和角公式中右边有哪两项？

19. 余弦和角公式中右边有哪两项？

20. 说明“正弦同号、余弦反号”的含义。

---

## E 组：综合理解

21. 为什么三角函数不能像普通代数括号一样直接拆开？

22. 用和差角公式说明 $\sin75^\circ$ 为什么小于 $1$。

23. 为什么学习和差角公式前需要先掌握特殊角值？

24. 和差角公式对后续倍角公式有什么作用？

25. 和差角公式在后续微积分学习中有什么用？

---

# 十七、练习答案与解析

## A 组答案

1.

$$
\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta
$$

2.

$$
\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta
$$

3.

$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta
$$

4.

$$
\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta
$$

5. 不正确。正确公式是：

$$
\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta
$$

---

## B 组答案

6.

$$
\sin75^\circ
=
\sin(45^\circ+30^\circ)
$$

$$
=
\sin45^\circ\cos30^\circ+\cos45^\circ\sin30^\circ
$$

$$
=
\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2}
+
\frac{\sqrt2}{2}\cdot\frac12
$$

$$
=
\frac{\sqrt6+\sqrt2}{4}
$$

7.

$$
\cos75^\circ
=
\cos(45^\circ+30^\circ)
$$

$$
=
\cos45^\circ\cos30^\circ-\sin45^\circ\sin30^\circ
$$

$$
=
\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2}
-
\frac{\sqrt2}{2}\cdot\frac12
$$

$$
=
\frac{\sqrt6-\sqrt2}{4}
$$

8.

$$
\sin15^\circ
=
\sin(45^\circ-30^\circ)
$$

$$
=
\sin45^\circ\cos30^\circ-\cos45^\circ\sin30^\circ
$$

$$
=
\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2}
-
\frac{\sqrt2}{2}\cdot\frac12
$$

$$
=
\frac{\sqrt6-\sqrt2}{4}
$$

9.

$$
\cos15^\circ
=
\cos(45^\circ-30^\circ)
$$

$$
=
\cos45^\circ\cos30^\circ+\sin45^\circ\sin30^\circ
$$

$$
=
\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2}
+
\frac{\sqrt2}{2}\cdot\frac12
$$

$$
=
\frac{\sqrt6+\sqrt2}{4}
$$

10.

$$
75^\circ=\frac{5\pi}{12}
$$

---

## C 组答案

11.

$$
\sin\left(\frac{\pi}{4}+\frac{\pi}{6}\right)
=
\frac{\sqrt6+\sqrt2}{4}
$$

12.

$$
\cos\left(\frac{\pi}{4}+\frac{\pi}{6}\right)
=
\frac{\sqrt6-\sqrt2}{4}
$$

13.

$$
\sin\left(\frac{\pi}{4}-\frac{\pi}{6}\right)
=
\frac{\sqrt6-\sqrt2}{4}
$$

14.

$$
\cos\left(\frac{\pi}{4}-\frac{\pi}{6}\right)
=
\frac{\sqrt6+\sqrt2}{4}
$$

15.

$$
\frac{\pi}{4}+\frac{\pi}{6}
=
\frac{3\pi}{12}+\frac{2\pi}{12}
=
\frac{5\pi}{12}
$$

---

## D 组答案

16. 因为余弦和角公式本身是：

$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta
$$

它来自单位圆旋转关系。需要记住余弦公式采用“反号”。

17. 因为余弦差角公式是：

$$
\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta
$$

差角在余弦公式中对应加号。

18. 两项是：

$$
\sin\alpha\cos\beta
$$

和：

$$
\cos\alpha\sin\beta
$$

19. 两项是：

$$
\cos\alpha\cos\beta
$$

和：

$$
\sin\alpha\sin\beta
$$

20. “正弦同号”表示：

$$
\sin(\alpha+\beta)
$$

右边用加号，

$$
\sin(\alpha-\beta)
$$

右边用减号。

“余弦反号”表示：

$$
\cos(\alpha+\beta)
$$

右边用减号，

$$
\cos(\alpha-\beta)
$$

右边用加号。

---

## E 组答案

21. 因为三角函数不是线性函数。一般情况下：

$$
\sin(\alpha+\beta)\ne\sin\alpha+\sin\beta
$$

三角函数的输入变化对应单位圆旋转，不能按普通加法拆括号。

22.

$$
\sin75^\circ=\frac{\sqrt6+\sqrt2}{4}
$$

近似小于 $1$，而错误拆法：

$$
\sin45^\circ+\sin30^\circ
$$

会大于 $1$，这说明直接拆开是错误的。

23. 因为和差角公式计算时要代入 $\sin30^\circ,\cos30^\circ,\sin45^\circ,\cos45^\circ$ 等特殊值。如果特殊角值不熟，公式无法实际使用。

24. 倍角公式可以由和角公式令 $\alpha=\beta$ 推出。例如：

$$
\sin(2\alpha)=\sin(\alpha+\alpha)
$$

所以和差角公式是倍角公式的基础。

25. 后续三角函数极限、导数、积分、波动模型和函数变换中，经常需要把复杂角度拆开或合并。和差角公式是三角表达式变形的核心工具。

---

# 十八、本课复习讲义

四个基本和差角公式：

$$
\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta
$$

$$
\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta
$$

$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta
$$

$$
\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta
$$

简记：

$$
\sin(\alpha\pm\beta)=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta
$$

$$
\cos(\alpha\pm\beta)=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta
$$

重点：

1. $\sin(\alpha+\beta)$ 不能拆成 $\sin\alpha+\sin\beta$。
2. 正弦公式同号。
3. 余弦公式反号。
4. $75^\circ=45^\circ+30^\circ$。
5. $15^\circ=45^\circ-30^\circ$。
6. 倍角公式可以从和角公式推出。

---

# 十九、进入第 34 单元的条件

第 34 单元是“倍角公式”。

进入前需要满足：

1. 能写出四个和差角公式。
2. 知道正弦公式同号、余弦公式反号。
3. 能计算 $\sin75^\circ,\cos75^\circ,\sin15^\circ,\cos15^\circ$。
4. 知道 $\sin(\alpha+\beta)$ 不能拆成 $\sin\alpha+\sin\beta$。
5. 理解倍角公式来自令 $\alpha=\beta$。
