---
title: 第 30 单元：三角恒等式化简与证明入门
tags:
  - 数学
  - 微积分
  - 三角函数
  - 三角恒等式
  - 恒等式证明
  - 化简
created: 2026-06-21
course: 微积分长期学习计划
unit: 30
---

# 第 30 单元：三角恒等式化简与证明入门

第 29 单元学习了三角函数基本恒等式：

$$
\sin^2 x+\cos^2 x=1
$$

$$
\tan x=\frac{\sin x}{\cos x},\quad \cos x\ne0
$$

以及奇偶恒等式、周期恒等式、余角恒等式。

第 30 单元开始学习如何使用这些恒等式进行化简和证明。

本单元重点不是背更多公式，而是学习“怎么动手”。

---

## 一、本课目标

学完本课后，需要掌握：

1. 理解三角恒等式证明的目标。
2. 知道不能随意对等式两边同时变形，除非逻辑清楚。
3. 掌握“从复杂一边化向简单一边”的基本策略。
4. 能使用 $\sin^2 x+\cos^2 x=1$ 化简表达式。
5. 能使用 $\tan x=\frac{\sin x}{\cos x}$ 化简表达式。
6. 能把 $1-\sin^2 x$ 换成 $\cos^2 x$。
7. 能把 $1-\cos^2 x$ 换成 $\sin^2 x$。
8. 能处理简单分式三角表达式。
9. 能判断证明过程是否严谨。
10. 为后续三角函数极限、导数、积分中的化简做准备。

---

# 二、什么是三角恒等式证明

三角恒等式证明通常要求证明：

$$
\text{左边}=\text{右边}
$$

并且这个等式对所有允许的 $x$ 都成立。

例如证明：

$$
\frac{\sin x}{\cos x}=\tan x
$$

这其实就是正切定义。

再如证明：

$$
1-\sin^2 x=\cos^2 x
$$

这是由：

$$
\sin^2 x+\cos^2 x=1
$$

移项得到的。

---

# 三、证明恒等式的基本原则

证明三角恒等式时，常用原则是：

> 从较复杂的一边出发，通过合法恒等变形，化成较简单的一边。

例如要证明：

$$
\frac{1-\cos^2 x}{\sin x}=\sin x
$$

左边更复杂，所以从左边开始：

$$
\frac{1-\cos^2 x}{\sin x}
$$

利用：

$$
1-\cos^2 x=\sin^2 x
$$

得到：

$$
\frac{\sin^2 x}{\sin x}
$$

在 $\sin x\ne0$ 时：

$$
\frac{\sin^2 x}{\sin x}=\sin x
$$

所以原式成立，但必须注意限制条件。

---

# 四、常用变形工具

本单元主要使用以下恒等式：

## 1. 平方恒等式

$$
\sin^2 x+\cos^2 x=1
$$

变形为：

$$
1-\sin^2 x=\cos^2 x
$$

$$
1-\cos^2 x=\sin^2 x
$$

---

## 2. 正切恒等式

$$
\tan x=\frac{\sin x}{\cos x},\quad \cos x\ne0
$$

---

## 3. 奇偶恒等式

$$
\sin(-x)=-\sin x
$$

$$
\cos(-x)=\cos x
$$

$$
\tan(-x)=-\tan x
$$

---

## 4. 余角恒等式

$$
\sin\left(\frac{\pi}{2}-x\right)=\cos x
$$

$$
\cos\left(\frac{\pi}{2}-x\right)=\sin x
$$

---

# 五、化简策略 1：看到 $1-\sin^2 x$ 或 $1-\cos^2 x$

如果看到：

$$
1-\sin^2 x
$$

通常换成：

$$
\cos^2 x
$$

如果看到：

$$
1-\cos^2 x
$$

通常换成：

$$
\sin^2 x
$$

例如：

$$
\frac{1-\sin^2 x}{\cos x}
$$

先换：

$$
1-\sin^2 x=\cos^2 x
$$

所以：

$$
\frac{1-\sin^2 x}{\cos x}
=
\frac{\cos^2 x}{\cos x}
=
\cos x
$$

这里要求：

$$
\cos x\ne0
$$

因为原式分母是 $\cos x$。

---

# 六、化简策略 2：看到 $\tan x$，可以换成 $\frac{\sin x}{\cos x}$

例如化简：

$$
\tan x\cos x
$$

把：

$$
\tan x=\frac{\sin x}{\cos x}
$$

代入：

$$
\tan x\cos x
=
\frac{\sin x}{\cos x}\cdot\cos x
=
\sin x
$$

这里要求：

$$
\cos x\ne0
$$

因为 $\tan x$ 本身在 $\cos x=0$ 时无定义。

---

# 七、化简策略 3：统一成 $\sin x$ 和 $\cos x$

很多三角表达式可以先全部写成正弦和余弦。

例如：

$$
\frac{\tan x}{\sin x}
$$

将：

$$
\tan x=\frac{\sin x}{\cos x}
$$

代入：

$$
\frac{\tan x}{\sin x}
=
\frac{\frac{\sin x}{\cos x}}{\sin x}
=
\frac{\sin x}{\cos x}\cdot\frac{1}{\sin x}
=
\frac{1}{\cos x}
$$

要求：

$$
\sin x\ne0,\quad \cos x\ne0
$$

因为原式中既有 $\tan x$，又除以 $\sin x$。

---

# 八、化简策略 4：先因式分解

有些表达式需要先因式分解。

例如：

$$
\frac{\sin^2 x-\cos^2 x}{\sin x-\cos x}
$$

分子是平方差：

$$
\sin^2 x-\cos^2 x=(\sin x-\cos x)(\sin x+\cos x)
$$

所以：

$$
\frac{\sin^2 x-\cos^2 x}{\sin x-\cos x}
=
\frac{(\sin x-\cos x)(\sin x+\cos x)}{\sin x-\cos x}
=
\sin x+\cos x
$$

要求：

$$
\sin x-\cos x\ne0
$$

因为原式分母不能为 $0$。

---

# 九、证明例题 1

证明：

$$
\frac{1-\sin^2 x}{\cos x}=\cos x
$$

从左边开始：

$$
\frac{1-\sin^2 x}{\cos x}
$$

因为：

$$
1-\sin^2 x=\cos^2 x
$$

所以：

$$
\frac{1-\sin^2 x}{\cos x}
=
\frac{\cos^2 x}{\cos x}
=
\cos x
$$

因此：

$$
\frac{1-\sin^2 x}{\cos x}=\cos x
$$

在：

$$
\cos x\ne0
$$

时成立。

---

# 十、证明例题 2

证明：

$$
\frac{1-\cos^2 x}{\sin x}=\sin x
$$

从左边开始：

$$
\frac{1-\cos^2 x}{\sin x}
$$

因为：

$$
1-\cos^2 x=\sin^2 x
$$

所以：

$$
\frac{1-\cos^2 x}{\sin x}
=
\frac{\sin^2 x}{\sin x}
=
\sin x
$$

因此原式成立。

限制条件：

$$
\sin x\ne0
$$

---

# 十一、证明例题 3

证明：

$$
\tan x+\frac{\cos x}{\sin x}=\frac{1}{\sin x\cos x}
$$

从左边开始：

$$
\tan x+\frac{\cos x}{\sin x}
$$

先把：

$$
\tan x=\frac{\sin x}{\cos x}
$$

代入：

$$
\frac{\sin x}{\cos x}+\frac{\cos x}{\sin x}
$$

通分：

$$
\frac{\sin^2 x+\cos^2 x}{\sin x\cos x}
$$

利用：

$$
\sin^2 x+\cos^2 x=1
$$

得到：

$$
\frac{1}{\sin x\cos x}
$$

所以：

$$
\tan x+\frac{\cos x}{\sin x}=\frac{1}{\sin x\cos x}
$$

限制条件：

$$
\sin x\ne0,\quad \cos x\ne0
$$

---

# 十二、证明例题 4

证明：

$$
\sin(-x)\cos(-x)=-\sin x\cos x
$$

从左边开始：

$$
\sin(-x)\cos(-x)
$$

使用奇偶恒等式：

$$
\sin(-x)=-\sin x
$$

$$
\cos(-x)=\cos x
$$

所以：

$$
\sin(-x)\cos(-x)
=
(-\sin x)(\cos x)
=
-\sin x\cos x
$$

证毕。

---

# 十三、不要犯的证明错误

## 错误 1：从要证明的结论直接出发

比如要证明：

$$
\frac{1-\sin^2 x}{\cos x}=\cos x
$$

错误写法：

$$
\frac{1-\sin^2 x}{\cos x}=\cos x
$$

两边乘以 $\cos x$：

$$
1-\sin^2 x=\cos^2 x
$$

因为这是真的，所以原式成立。

这种写法不是完全不能用，但初学阶段容易逻辑混乱。更推荐从左边出发，逐步化成右边。

---

## 错误 2：约分时忘记分母不能为零

例如：

$$
\frac{\cos^2 x}{\cos x}=\cos x
$$

这个约分要求：

$$
\cos x\ne0
$$

如果原式中分母就是 $\cos x$，那么本来就要求 $\cos x\ne0$。

---

## 错误 3：平方开方时忘记正负号

从：

$$
\sin^2 x=\frac14
$$

只能得到：

$$
\sin x=\pm\frac12
$$

不能直接写：

$$
\sin x=\frac12
$$

---

## 错误 4：把恒等式当成方程求解

恒等式证明不是求某个 $x$。它要说明等式在允许的所有 $x$ 上都成立。

---

# 十四、化简例题

## 例 1

化简：

$$
\sin^2 x+1-\cos^2 x
$$

利用：

$$
1-\cos^2 x=\sin^2 x
$$

得到：

$$
\sin^2 x+\sin^2 x=2\sin^2 x
$$

答案：

$$
2\sin^2 x
$$

---

## 例 2

化简：

$$
1+\tan x\cdot\frac{\cos x}{\sin x}
$$

把：

$$
\tan x=\frac{\sin x}{\cos x}
$$

代入：

$$
1+\frac{\sin x}{\cos x}\cdot\frac{\cos x}{\sin x}
$$

化简：

$$
1+1=2
$$

限制条件：

$$
\sin x\ne0,\quad \cos x\ne0
$$

---

## 例 3

化简：

$$
\frac{1-\cos^2 x}{\sin^2 x}
$$

因为：

$$
1-\cos^2 x=\sin^2 x
$$

所以：

$$
\frac{1-\cos^2 x}{\sin^2 x}
=
\frac{\sin^2 x}{\sin^2 x}
=
1
$$

限制条件：

$$
\sin x\ne0
$$

---

# 十五、练习题

## A 组：基础化简

1. 化简 $1-\sin^2 x$。

2. 化简 $1-\cos^2 x$。

3. 化简 $\sin^2 x+\cos^2 x+7$。

4. 化简 $3\sin^2 x+3\cos^2 x$。

5. 化简 $\frac{\sin x}{\cos x}$。

---

## B 组：分式化简

6. 化简 $\frac{1-\sin^2 x}{\cos x}$。

7. 化简 $\frac{1-\cos^2 x}{\sin x}$。

8. 化简 $\frac{1-\cos^2 x}{\sin^2 x}$。

9. 化简 $\tan x\cos x$。

10. 化简 $\frac{\tan x}{\sin x}$。

---

## C 组：证明入门

11. 证明 $\frac{1-\sin^2 x}{\cos x}=\cos x$。

12. 证明 $\frac{1-\cos^2 x}{\sin x}=\sin x$。

13. 证明 $\tan x\cos x=\sin x$。

14. 证明 $\sin(-x)\cos(-x)=-\sin x\cos x$。

15. 证明 $\sin^2 x+\cos^2 x+2=3$。

---

## D 组：稍综合化简

16. 化简 $\frac{\sin^2 x-\cos^2 x}{\sin x-\cos x}$。

17. 化简 $\frac{\cos^2 x-\sin^2 x}{\cos x-\sin x}$。

18. 化简 $\tan x+\frac{\cos x}{\sin x}$。

19. 化简 $1+\tan x\cdot\frac{\cos x}{\sin x}$。

20. 化简 $\sin^2 x+1-\cos^2 x$。

---

## E 组：概念解释

21. 为什么证明恒等式时通常从复杂的一边开始？

22. 为什么约分时必须注意分母不能为 $0$？

23. 为什么 $\sin^2 x=\frac14$ 不能直接推出 $\sin x=\frac12$？

24. 化简 $\frac{\sin x}{\cos x}$ 时需要说明什么条件？

25. 三角恒等式化简为什么对后续微积分有用？

---

# 十六、练习答案与解析

## A 组答案

1.

$$
\cos^2 x
$$

2.

$$
\sin^2 x
$$

3.

$$
8
$$

4.

$$
3
$$

5.

$$
\tan x,\quad \cos x\ne0
$$

---

## B 组答案

6.

$$
\frac{1-\sin^2 x}{\cos x}
=
\frac{\cos^2 x}{\cos x}
=
\cos x
$$

限制条件：

$$
\cos x\ne0
$$

7.

$$
\frac{1-\cos^2 x}{\sin x}
=
\frac{\sin^2 x}{\sin x}
=
\sin x
$$

限制条件：

$$
\sin x\ne0
$$

8.

$$
\frac{1-\cos^2 x}{\sin^2 x}
=
\frac{\sin^2 x}{\sin^2 x}
=
1
$$

限制条件：

$$
\sin x\ne0
$$

9.

$$
\tan x\cos x
=
\frac{\sin x}{\cos x}\cdot\cos x
=
\sin x
$$

限制条件：

$$
\cos x\ne0
$$

10.

$$
\frac{\tan x}{\sin x}
=
\frac{\sin x/\cos x}{\sin x}
=
\frac{1}{\cos x}
$$

限制条件：

$$
\sin x\ne0,\quad \cos x\ne0
$$

---

## C 组答案

11.

从左边开始：

$$
\frac{1-\sin^2 x}{\cos x}
=
\frac{\cos^2 x}{\cos x}
=
\cos x
$$

所以原式成立，限制条件：

$$
\cos x\ne0
$$

12.

从左边开始：

$$
\frac{1-\cos^2 x}{\sin x}
=
\frac{\sin^2 x}{\sin x}
=
\sin x
$$

所以原式成立，限制条件：

$$
\sin x\ne0
$$

13.

$$
\tan x\cos x
=
\frac{\sin x}{\cos x}\cdot\cos x
=
\sin x
$$

限制条件：

$$
\cos x\ne0
$$

14.

$$
\sin(-x)\cos(-x)
=
(-\sin x)(\cos x)
=
-\sin x\cos x
$$

15.

$$
\sin^2 x+\cos^2 x+2
=
1+2
=
3
$$

---

## D 组答案

16.

$$
\frac{\sin^2 x-\cos^2 x}{\sin x-\cos x}
=
\frac{(\sin x-\cos x)(\sin x+\cos x)}{\sin x-\cos x}
=
\sin x+\cos x
$$

限制条件：

$$
\sin x-\cos x\ne0
$$

17.

$$
\frac{\cos^2 x-\sin^2 x}{\cos x-\sin x}
=
\frac{(\cos x-\sin x)(\cos x+\sin x)}{\cos x-\sin x}
=
\cos x+\sin x
$$

限制条件：

$$
\cos x-\sin x\ne0
$$

18.

$$
\tan x+\frac{\cos x}{\sin x}
=
\frac{\sin x}{\cos x}+\frac{\cos x}{\sin x}
=
\frac{\sin^2 x+\cos^2 x}{\sin x\cos x}
=
\frac{1}{\sin x\cos x}
$$

限制条件：

$$
\sin x\ne0,\quad \cos x\ne0
$$

19.

$$
1+\tan x\cdot\frac{\cos x}{\sin x}
=
1+\frac{\sin x}{\cos x}\cdot\frac{\cos x}{\sin x}
=
2
$$

限制条件：

$$
\sin x\ne0,\quad \cos x\ne0
$$

20.

$$
\sin^2 x+1-\cos^2 x
=
\sin^2 x+\sin^2 x
=
2\sin^2 x
$$

---

# 十七、本课复习讲义

证明三角恒等式时，通常从复杂的一边开始，逐步化成另一边。

常用工具：

$$
\sin^2 x+\cos^2 x=1
$$

$$
1-\sin^2 x=\cos^2 x
$$

$$
1-\cos^2 x=\sin^2 x
$$

$$
\tan x=\frac{\sin x}{\cos x},\quad \cos x\ne0
$$

常见策略：

1. 看到 $1-\sin^2 x$，换成 $\cos^2 x$。
2. 看到 $1-\cos^2 x$，换成 $\sin^2 x$。
3. 看到 $\tan x$，可以换成 $\frac{\sin x}{\cos x}$。
4. 遇到分式，注意分母不能为 $0$。
5. 遇到平方开方，注意正负号。
6. 能因式分解时先因式分解。

---

# 十八、进入第 31 单元的条件

第 31 单元是“三角函数方程入门”。

进入前需要满足：

1. 能化简 $1-\sin^2 x$。
2. 能化简 $1-\cos^2 x$。
3. 能正确使用 $\tan x=\frac{\sin x}{\cos x}$。
4. 能在分式化简时写出分母不为 $0$ 的条件。
5. 能从复杂一边开始证明简单恒等式。
6. 能处理简单的三角分式化简。
