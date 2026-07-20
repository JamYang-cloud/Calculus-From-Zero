---
title: 第 58 单元：两个重要极限的直观与应用
tags:
  - 数学
  - 微积分
  - 极限
  - 重要极限
  - 夹逼定理
  - 三角函数
  - 自然常数e
created: 2026-06-24
course: 微积分长期学习计划
unit: 58
---

# 第 58 单元：两个重要极限的直观与应用

第 57 单元正式训练了夹逼定理。

第 58 单元学习两个非常重要的极限：

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

以及：

$$
\lim_{x\to0}(1+x)^{\frac1x}=e
$$

这两个极限会在后续导数学习中频繁出现。

其中第一个极限用于推出：

$$
(\sin x)'=\cos x
$$

第二个极限用于理解自然常数 $e$、连续复利和指数函数的导数。

本单元重点是理解、识别和使用，不要求完全掌握严格证明。

---

## 一、本课目标

学完本课后，需要掌握：

1. 记住第一个重要极限：$\lim_{x\to0}\frac{\sin x}{x}=1$。
2. 理解第一个重要极限必须使用弧度制。
3. 能用第一个重要极限求简单三角极限。
4. 能处理 $\frac{\sin kx}{x}$、$\frac{\sin ax}{\sin bx}$ 类型极限。
5. 记住第二个重要极限：$\lim_{x\to0}(1+x)^{1/x}=e$。
6. 理解 $(1+x)^{1/x}$ 与自然常数 $e$ 的关系。
7. 能识别等价形式：$\lim_{t\to\infty}(1+\frac1t)^t=e$。
8. 能处理简单的 $e$ 型极限。
9. 能区分直接代入、夹逼定理和重要极限。
10. 为后续导数公式做准备。

---

# 二、第一个重要极限

第一个重要极限是：

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

注意这里的 $x$ 必须用弧度制。

如果使用角度制，这个极限不等于 $1$。

原因是：微积分中的三角函数极限和导数公式都建立在弧度制上。

---

# 三、为什么它直观上等于 1

当 $x$ 很小时，单位圆上的弧长、正弦线段、切线线段非常接近。

在弧度制下：

$$
x
$$

本身就是单位圆上对应的弧长。

当 $x\to0$ 时：

$$
\sin x
$$

与：

$$
x
$$

非常接近。

所以：

$$
\frac{\sin x}{x}
$$

趋向：

$$
1
$$

直观地说：

> 小角度下，$\sin x$ 与 $x$ 几乎相等。

这个近似可以写成：

$$
\sin x\sim x,\quad x\to0
$$

这里的 $\sim$ 表示“等价无穷小”，意思是二者比值趋向 $1$。

---

# 四、用夹逼定理的证明思路

对于：

$$
0<x<\frac{\pi}{2}
$$

可以通过单位圆面积关系得到：

$$
\sin x < x < \tan x
$$

两边除以 $\sin x$：

$$
1<\frac{x}{\sin x}<\frac{1}{\cos x}
$$

取倒数得到：

$$
\cos x<\frac{\sin x}{x}<1
$$

当：

$$
x\to0
$$

时：

$$
\cos x\to1
$$

而右边恒等于：

$$
1
$$

所以由夹逼定理：

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

对于 $x<0$ 的情况，也可以通过奇偶性得到同样结论。

本阶段只要求理解这个证明思路，不要求完整几何证明。

---

# 五、直接应用 1

求：

$$
\lim_{x\to0}\frac{\sin 3x}{3x}
$$

这是标准形式。

令：

$$
u=3x
$$

当：

$$
x\to0
$$

时：

$$
u\to0
$$

所以：

$$
\lim_{x\to0}\frac{\sin 3x}{3x}=1
$$

---

# 六、直接应用 2

求：

$$
\lim_{x\to0}\frac{\sin 3x}{x}
$$

把它改写成标准形式：

$$
\frac{\sin 3x}{x}
=
3\cdot\frac{\sin 3x}{3x}
$$

所以：

$$
\lim_{x\to0}\frac{\sin 3x}{x}
=
3\cdot1=3
$$

---

# 七、直接应用 3

求：

$$
\lim_{x\to0}\frac{\sin 5x}{\sin 2x}
$$

处理这类题时，把分子分母都与自己的角度配套。

$$
\frac{\sin 5x}{\sin 2x}
=
\frac{\sin 5x}{5x}\cdot\frac{5x}{2x}\cdot\frac{2x}{\sin 2x}
$$

当：

$$
x\to0
$$

时：

$$
\frac{\sin 5x}{5x}\to1
$$

$$
\frac{2x}{\sin 2x}\to1
$$

所以：

$$
\lim_{x\to0}\frac{\sin 5x}{\sin 2x}
=
1\cdot\frac52\cdot1
=
\frac52
$$

更简洁地说：

$$
\sin 5x\sim5x
$$

$$
\sin 2x\sim2x
$$

所以：

$$
\frac{\sin 5x}{\sin 2x}\sim\frac{5x}{2x}=\frac52
$$

---

# 八、直接应用 4：含常数倍

求：

$$
\lim_{x\to0}\frac{2\sin 4x}{x}
$$

先处理：

$$
\frac{\sin 4x}{x}=4\cdot\frac{\sin 4x}{4x}
$$

所以：

$$
\lim_{x\to0}\frac{\sin 4x}{x}=4
$$

因此：

$$
\lim_{x\to0}\frac{2\sin 4x}{x}=8
$$

---

# 九、常见变形：$\tan x$

因为：

$$
\tan x=\frac{\sin x}{\cos x}
$$

所以：

$$
\frac{\tan x}{x}
=
\frac{\sin x}{x}\cdot\frac1{\cos x}
$$

当：

$$
x\to0
$$

时：

$$
\frac{\sin x}{x}\to1
$$

$$
\cos x\to1
$$

所以：

$$
\lim_{x\to0}\frac{\tan x}{x}=1
$$

更一般地：

$$
\lim_{x\to0}\frac{\tan kx}{kx}=1
$$

---

# 十、例题：正切型极限

求：

$$
\lim_{x\to0}\frac{\tan 3x}{x}
$$

改写：

$$
\frac{\tan 3x}{x}
=
3\cdot\frac{\tan 3x}{3x}
$$

由于：

$$
\lim_{x\to0}\frac{\tan 3x}{3x}=1
$$

所以：

$$
\lim_{x\to0}\frac{\tan 3x}{x}=3
$$

---

# 十一、第二个重要极限

第二个重要极限是：

$$
\lim_{x\to0}(1+x)^{\frac1x}=e
$$

它与自然常数：

$$
e\approx2.71828
$$

密切相关。

这一定义可以看作 $e$ 的一个来源。

---

# 十二、第二个重要极限的等价形式

令：

$$
t=\frac1x
$$

当：

$$
x\to0^+
$$

时：

$$
t\to+\infty
$$

于是：

$$
(1+x)^{\frac1x}
=
\left(1+\frac1t\right)^t
$$

所以：

$$
\lim_{t\to+\infty}\left(1+\frac1t\right)^t=e
$$

这是第二个重要极限的另一种常见形式。

也可以记为：

$$
\lim_{n\to\infty}\left(1+\frac1n\right)^n=e
$$

---

# 十三、为什么它和复利有关

假设年利率为 $100\%$，本金为 $1$。

如果一年计息一次，年底金额是：

$$
2
$$

如果一年计息 $n$ 次，每次利率为：

$$
\frac1n
$$

年底金额是：

$$
\left(1+\frac1n\right)^n
$$

当计息次数越来越多：

$$
n\to\infty
$$

金额趋向：

$$
e
$$

所以：

$$
e
$$

可以理解为连续复利下自然增长的基准常数。

---

# 十四、第二个重要极限的简单应用

求：

$$
\lim_{x\to0}(1+2x)^{\frac1x}
$$

令：

$$
u=2x
$$

则：

$$
u\to0
$$

且：

$$
\frac1x=\frac{2}{2x}=\frac2u
$$

所以：

$$
(1+2x)^{\frac1x}
=
(1+u)^{\frac2u}
=
\left[(1+u)^{\frac1u}\right]^2
$$

当：

$$
u\to0
$$

时：

$$
(1+u)^{\frac1u}\to e
$$

所以：

$$
\lim_{x\to0}(1+2x)^{\frac1x}=e^2
$$

---

# 十五、一般形式

更一般地：

$$
\lim_{x\to0}(1+ax)^{\frac1x}=e^a
$$

原因是令：

$$
u=ax
$$

则：

$$
(1+ax)^{\frac1x}
=
(1+u)^{\frac{a}{u}}
=
\left[(1+u)^{\frac1u}\right]^a
\to e^a
$$

---

# 十六、另一种常见形式

还会遇到：

$$
\lim_{x\to0}(1+x)^{\frac{k}{x}}
$$

因为：

$$
(1+x)^{\frac{k}{x}}
=
\left[(1+x)^{\frac1x}\right]^k
$$

所以：

$$
\lim_{x\to0}(1+x)^{\frac{k}{x}}=e^k
$$

---

# 十七、指数型例题 1

求：

$$
\lim_{x\to0}(1+x)^{\frac3x}
$$

因为：

$$
(1+x)^{\frac3x}
=
\left[(1+x)^{\frac1x}\right]^3
$$

所以：

$$
\lim_{x\to0}(1+x)^{\frac3x}=e^3
$$

---

# 十八、指数型例题 2

求：

$$
\lim_{x\to0}(1-4x)^{\frac1x}
$$

使用一般形式：

$$
\lim_{x\to0}(1+ax)^{\frac1x}=e^a
$$

这里：

$$
a=-4
$$

所以：

$$
\lim_{x\to0}(1-4x)^{\frac1x}=e^{-4}
$$

---

# 十九、指数型例题 3

求：

$$
\lim_{n\to\infty}\left(1+\frac{3}{n}\right)^n
$$

将其看作：

$$
\left(1+\frac{3}{n}\right)^n
=
\left[\left(1+\frac{3}{n}\right)^{\frac{n}{3}}\right]^3
$$

当：

$$
n\to\infty
$$

时：

$$
\left(1+\frac{3}{n}\right)^{\frac{n}{3}}\to e
$$

所以：

$$
\lim_{n\to\infty}\left(1+\frac{3}{n}\right)^n=e^3
$$

一般地：

$$
\lim_{n\to\infty}\left(1+\frac{a}{n}\right)^n=e^a
$$

---

# 二十、两个重要极限的地位

本阶段需要牢牢记住：

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

以及：

$$
\lim_{x\to0}(1+x)^{\frac1x}=e
$$

第一个用于三角函数导数。

第二个用于指数函数、自然对数和连续复利模型。

它们都是后续导数模块的基础。

---

# 二十一、常见错误

## 错误 1：忘记三角重要极限要求弧度制

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

只在弧度制下成立。

---

## 错误 2：把 $\frac{\sin 3x}{x}$ 直接写成 $1$

错误：

$$
\lim_{x\to0}\frac{\sin 3x}{x}=1
$$

正确：

$$
\frac{\sin 3x}{x}
=
3\cdot\frac{\sin 3x}{3x}
\to3
$$

---

## 错误 3：处理 $\frac{\sin ax}{\sin bx}$ 时漏系数

正确：

$$
\lim_{x\to0}\frac{\sin ax}{\sin bx}=\frac ab
$$

前提是 $b\ne0$。

---

## 错误 4：把 $(1+x)^{1/x}$ 的极限写成 1

虽然：

$$
1+x\to1
$$

但指数：

$$
\frac1x
$$

趋向无穷，不能直接说极限为 $1$。

正确结果是：

$$
e
$$

---

## 错误 5：把 $(1+ax)^{1/x}$ 写成 $e$

正确结果是：

$$
e^a
$$

---

# 二十二、练习题

## A 组：三角重要极限基础

1. 写出第一个重要极限。

2. 为什么 $\lim_{x\to0}\frac{\sin x}{x}=1$ 必须使用弧度制？

3. 求 $\lim_{x\to0}\frac{\sin 2x}{2x}$。

4. 求 $\lim_{x\to0}\frac{\sin 2x}{x}$。

5. 求 $\lim_{x\to0}\frac{\sin 5x}{x}$。

---

## B 组：三角比例型

6. 求 $\lim_{x\to0}\frac{\sin 3x}{\sin x}$。

7. 求 $\lim_{x\to0}\frac{\sin 5x}{\sin 2x}$。

8. 求 $\lim_{x\to0}\frac{\sin 7x}{\sin 4x}$。

9. 求 $\lim_{x\to0}\frac{\tan x}{x}$。

10. 求 $\lim_{x\to0}\frac{\tan 3x}{x}$。

---

## C 组：混合三角极限

11. 求 $\lim_{x\to0}\frac{2\sin 4x}{x}$。

12. 求 $\lim_{x\to0}\frac{x}{\sin x}$。

13. 求 $\lim_{x\to0}\frac{x}{\tan x}$。

14. 求 $\lim_{x\to0}\frac{\sin 3x}{\tan 2x}$。

15. 求 $\lim_{x\to0}\frac{\tan 5x}{\sin 2x}$。

---

## D 组：第二个重要极限基础

16. 写出第二个重要极限。

17. 写出 $\lim_{n\to\infty}(1+\frac1n)^n$ 的值。

18. 求 $\lim_{x\to0}(1+x)^{\frac3x}$。

19. 求 $\lim_{x\to0}(1+2x)^{\frac1x}$。

20. 求 $\lim_{x\to0}(1-4x)^{\frac1x}$。

---

## E 组：指数型变形

21. 求 $\lim_{x\to0}(1+5x)^{\frac2x}$。

22. 求 $\lim_{x\to0}(1-3x)^{\frac4x}$。

23. 求 $\lim_{n\to\infty}(1+\frac{2}{n})^n$。

24. 求 $\lim_{n\to\infty}(1-\frac{5}{n})^n$。

25. 为什么不能直接把 $(1+x)^{1/x}$ 在 $x\to0$ 时看成 $1^\infty$ 后说结果为 $1$？

---

# 二十三、练习答案与解析

## A 组答案

1.

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

2. 因为在弧度制下，角度 $x$ 等于单位圆上的弧长，$\sin x$ 与 $x$ 才在小角度下等价。微积分中的三角极限和导数公式都基于弧度制。

3.

$$
\lim_{x\to0}\frac{\sin 2x}{2x}=1
$$

4.

$$
\frac{\sin 2x}{x}
=
2\cdot\frac{\sin 2x}{2x}
\to2
$$

5.

$$
\frac{\sin 5x}{x}
=
5\cdot\frac{\sin 5x}{5x}
\to5
$$

---

## B 组答案

6.

$$
\sin 3x\sim3x,\quad \sin x\sim x
$$

所以：

$$
\lim_{x\to0}\frac{\sin 3x}{\sin x}=3
$$

7.

$$
\lim_{x\to0}\frac{\sin 5x}{\sin 2x}=\frac52
$$

8.

$$
\lim_{x\to0}\frac{\sin 7x}{\sin 4x}=\frac74
$$

9.

$$
\lim_{x\to0}\frac{\tan x}{x}=1
$$

10.

$$
\frac{\tan 3x}{x}
=
3\cdot\frac{\tan 3x}{3x}
\to3
$$

---

## C 组答案

11.

$$
\frac{2\sin 4x}{x}
=
8\cdot\frac{\sin 4x}{4x}
\to8
$$

12.

$$
\lim_{x\to0}\frac{x}{\sin x}=1
$$

13.

$$
\lim_{x\to0}\frac{x}{\tan x}=1
$$

14.

$$
\sin 3x\sim3x,\quad \tan 2x\sim2x
$$

所以：

$$
\lim_{x\to0}\frac{\sin 3x}{\tan 2x}=\frac32
$$

15.

$$
\tan 5x\sim5x,\quad \sin 2x\sim2x
$$

所以：

$$
\lim_{x\to0}\frac{\tan 5x}{\sin 2x}=\frac52
$$

---

## D 组答案

16.

$$
\lim_{x\to0}(1+x)^{\frac1x}=e
$$

17.

$$
\lim_{n\to\infty}\left(1+\frac1n\right)^n=e
$$

18.

$$
\lim_{x\to0}(1+x)^{\frac3x}=e^3
$$

19.

$$
\lim_{x\to0}(1+2x)^{\frac1x}=e^2
$$

20.

$$
\lim_{x\to0}(1-4x)^{\frac1x}=e^{-4}
$$

---

## E 组答案

21.

$$
(1+5x)^{\frac2x}
=
\left[(1+5x)^{\frac1x}\right]^2
\to (e^5)^2=e^{10}
$$

22.

$$
(1-3x)^{\frac4x}\to(e^{-3})^4=e^{-12}
$$

23.

$$
\lim_{n\to\infty}\left(1+\frac2n\right)^n=e^2
$$

24.

$$
\lim_{n\to\infty}\left(1-\frac5n\right)^n=e^{-5}
$$

25. 因为这是 $1^\infty$ 型不定式。底数趋向 $1$，指数趋向无穷，二者的相互作用会产生非平凡极限，结果是 $e$，不是 $1$。

---

# 二十四、本课复习讲义

两个重要极限：

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

$$
\lim_{x\to0}(1+x)^{\frac1x}=e
$$

常见三角推论：

$$
\lim_{x\to0}\frac{\sin ax}{x}=a
$$

$$
\lim_{x\to0}\frac{\sin ax}{\sin bx}=\frac ab
$$

$$
\lim_{x\to0}\frac{\tan ax}{x}=a
$$

$$
\lim_{x\to0}\frac{\tan ax}{\tan bx}=\frac ab
$$

常见指数推论：

$$
\lim_{x\to0}(1+ax)^{\frac1x}=e^a
$$

$$
\lim_{x\to0}(1+x)^{\frac{k}{x}}=e^k
$$

$$
\lim_{n\to\infty}\left(1+\frac an\right)^n=e^a
$$

---

# 二十五、进入第 59 单元的条件

第 59 单元开始进入导数基础。

进入前需要满足：

1. 熟记 $\lim_{x\to0}\frac{\sin x}{x}=1$。
2. 熟记 $\lim_{x\to0}(1+x)^{1/x}=e$。
3. 能处理 $\frac{\sin ax}{x}$。
4. 能处理 $\frac{\sin ax}{\sin bx}$。
5. 能处理简单正切型极限。
6. 能处理 $(1+ax)^{1/x}$。
7. 能理解 $1^\infty$ 是不定式，不能直接代入。
