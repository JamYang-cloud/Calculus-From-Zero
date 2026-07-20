---
title: 第 66 单元：三角函数求导公式
tags:
  - 数学
  - 微积分
  - 导数
  - 三角函数求导
  - 链式法则
  - 正弦
  - 余弦
  - 正切
created: 2026-06-24
course: 微积分长期学习计划
unit: 66
---

# 第 66 单元：三角函数求导公式

第 65 单元学习了链式法则：

$$
[f(g(x))]'=f'(g(x))g'(x)
$$

本单元学习三角函数的导数。三角函数求导会频繁出现在后续导数应用、高阶导数、振动问题、泰勒展开与积分反向理解中。

本单元默认所有角度都使用弧度制。

---

## 一、本课目标

学完本课后，需要掌握：

1. 熟记 $(\sin x)'=\cos x$。
2. 熟记 $(\cos x)'=-\sin x$。
3. 熟记 $(\tan x)'=\sec^2 x$。
4. 知道三角函数求导公式默认使用弧度制。
5. 能对 $a\sin x+b\cos x$ 求导。
6. 能对 $\sin(kx)$、$\cos(kx)$、$\tan(kx)$ 求导。
7. 能用链式法则处理 $\sin(g(x))$、$\cos(g(x))$、$\tan(g(x))$。
8. 能处理三角函数与多项式的乘积。
9. 能处理三角函数与商法则的简单综合。
10. 能求三角函数曲线的切线斜率和切线方程。

---

# 二、三个基本三角导数公式

需要首先记住：

$$
(\sin x)'=\cos x
$$

$$
(\cos x)'=-\sin x
$$

$$
(\tan x)'=\sec^2 x
$$

其中：

$$
\sec x=\frac1{\cos x}
$$

所以：

$$
\sec^2 x=\frac1{\cos^2 x}
$$

---

# 三、为什么必须是弧度制

三角函数导数公式：

$$
(\sin x)'=\cos x
$$

成立的前提是 $x$ 使用弧度制。

原因是它依赖重要极限：

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

而这个极限只在弧度制下成立。因此微积分中的三角函数求导默认使用弧度制。

---

# 四、从定义理解 $(\sin x)'=\cos x$

根据导数定义：

$$
(\sin x)'=\lim_{h\to0}\frac{\sin(x+h)-\sin x}{h}
$$

使用和角公式：

$$
\sin(x+h)=\sin x\cos h+\cos x\sin h
$$

所以：

$$
\sin(x+h)-\sin x=\sin x(\cos h-1)+\cos x\sin h
$$

于是：

$$
\frac{\sin(x+h)-\sin x}{h}
=
\sin x\frac{\cos h-1}{h}+\cos x\frac{\sin h}{h}
$$

当 $h\to0$ 时：

$$
\frac{\sin h}{h}\to1
$$

并且：

$$
\frac{\cos h-1}{h}\to0
$$

所以：

$$
(\sin x)'=\cos x
$$

本阶段只要求理解推导结构，不要求完整证明辅助极限。

---

# 五、从定义理解 $(\cos x)'=-\sin x$

根据导数定义：

$$
(\cos x)'=\lim_{h\to0}\frac{\cos(x+h)-\cos x}{h}
$$

使用和角公式：

$$
\cos(x+h)=\cos x\cos h-\sin x\sin h
$$

所以：

$$
\cos(x+h)-\cos x=\cos x(\cos h-1)-\sin x\sin h
$$

于是：

$$
\frac{\cos(x+h)-\cos x}{h}
=
\cos x\frac{\cos h-1}{h}-\sin x\frac{\sin h}{h}
$$

当 $h\to0$ 时：

$$
\frac{\cos h-1}{h}\to0
$$

$$
\frac{\sin h}{h}\to1
$$

所以：

$$
(\cos x)'=-\sin x
$$

这里的负号非常重要。

---

# 六、从商法则理解 $(\tan x)'=\sec^2 x$

因为：

$$
\tan x=\frac{\sin x}{\cos x}
$$

用商法则：

$$
\left(\frac{u}{v}\right)'=\frac{u'v-uv'}{v^2}
$$

设：

$$
u=\sin x,\quad v=\cos x
$$

则：

$$
u'=\cos x,\quad v'=-\sin x
$$

所以：

$$
(\tan x)'=\frac{\cos x\cdot\cos x-\sin x(-\sin x)}{\cos^2 x}
$$

分子为：

$$
\cos^2 x+\sin^2 x=1
$$

所以：

$$
(\tan x)'=\frac1{\cos^2 x}=\sec^2 x
$$

---

# 七、例题 1：基本三角函数求导

求：

$$
f(x)=3\sin x-2\cos x+5\tan x
$$

逐项求导：

$$
(3\sin x)'=3\cos x
$$

$$
(-2\cos x)'=-2(-\sin x)=2\sin x
$$

$$
(5\tan x)'=5\sec^2 x
$$

所以：

$$
f'(x)=3\cos x+2\sin x+5\sec^2 x
$$

---

# 八、链式法则与 $\sin(kx)$

求：

$$
y=\sin(3x)
$$

外层函数是 $\sin u$，内层函数是 $u=3x$。

外层导数：

$$
\cos u
$$

内层导数：

$$
u'=3
$$

所以：

$$
y'=3\cos(3x)
$$

一般地：

$$
[\sin(kx)]'=k\cos(kx)
$$

---

# 九、链式法则与 $\cos(kx)$

求：

$$
y=\cos(5x)
$$

外层函数是 $\cos u$，内层函数是 $u=5x$。

外层导数：

$$
-\sin u
$$

内层导数：

$$
u'=5
$$

所以：

$$
y'=-5\sin(5x)
$$

一般地：

$$
[\cos(kx)]'=-k\sin(kx)
$$

注意负号不能漏。

---

# 十、链式法则与 $\tan(kx)$

求：

$$
y=\tan(2x)
$$

外层函数是 $\tan u$，内层函数是 $u=2x$。

外层导数：

$$
\sec^2 u
$$

内层导数：

$$
u'=2
$$

所以：

$$
y'=2\sec^2(2x)
$$

一般地：

$$
[\tan(kx)]'=k\sec^2(kx)
$$

---

# 十一、一般链式形式

如果：

$$
y=\sin(g(x))
$$

那么：

$$
y'=\cos(g(x))g'(x)
$$

如果：

$$
y=\cos(g(x))
$$

那么：

$$
y'=-\sin(g(x))g'(x)
$$

如果：

$$
y=\tan(g(x))
$$

那么：

$$
y'=\sec^2(g(x))g'(x)
$$

---

# 十二、例题 2：$\sin(x^2+1)$

求：

$$
y=\sin(x^2+1)
$$

内层：

$$
u=x^2+1
$$

内层导数：

$$
u'=2x
$$

外层导数：

$$
(\sin u)'=\cos u
$$

所以：

$$
y'=2x\cos(x^2+1)
$$

---

# 十三、例题 3：$\cos(x^3-2x)$

求：

$$
y=\cos(x^3-2x)
$$

内层：

$$
u=x^3-2x
$$

内层导数：

$$
u'=3x^2-2
$$

外层导数：

$$
(\cos u)'=-\sin u
$$

所以：

$$
y'=-(3x^2-2)\sin(x^3-2x)
$$

---

# 十四、例题 4：$\tan(x^2)$

求：

$$
y=\tan(x^2)
$$

内层：

$$
u=x^2
$$

内层导数：

$$
u'=2x
$$

外层导数：

$$
(\tan u)'=\sec^2 u
$$

所以：

$$
y'=2x\sec^2(x^2)
$$

---

# 十五、三角函数与多项式乘积

求：

$$
y=x^2\sin x
$$

这是乘积：

$$
x^2\cdot\sin x
$$

设：

$$
u=x^2,\quad v=\sin x
$$

则：

$$
u'=2x,\quad v'=\cos x
$$

用乘积法则：

$$
y'=u'v+uv'
$$

所以：

$$
y'=2x\sin x+x^2\cos x
$$

---

# 十六、三角函数与复合函数乘积

求：

$$
y=x^2\sin(3x)
$$

这是乘积：

$$
x^2\cdot\sin(3x)
$$

设：

$$
u=x^2,\quad v=\sin(3x)
$$

则：

$$
u'=2x
$$

而：

$$
v'=3\cos(3x)
$$

所以：

$$
y'=2x\sin(3x)+3x^2\cos(3x)
$$

---

# 十七、三角函数与商法则

求：

$$
y=\frac{\sin x}{x}
$$

设：

$$
u=\sin x,\quad v=x
$$

则：

$$
u'=\cos x,\quad v'=1
$$

用商法则：

$$
y'=\frac{u'v-uv'}{v^2}
$$

代入：

$$
y'=\frac{x\cos x-\sin x}{x^2}
$$

注意：原函数 $\frac{\sin x}{x}$ 在 $x=0$ 处无定义。本题求导默认在 $x\ne0$ 的区间上进行。

---

# 十八、切线方程例题

求：

$$
y=\sin x
$$

在：

$$
x=\frac{\pi}{2}
$$

处的切线方程。

第一步，求切点：

$$
f\left(\frac{\pi}{2}\right)=\sin\frac{\pi}{2}=1
$$

所以切点为：

$$
\left(\frac{\pi}{2},1\right)
$$

第二步，求导数：

$$
f'(x)=\cos x
$$

所以：

$$
f'\left(\frac{\pi}{2}\right)=\cos\frac{\pi}{2}=0
$$

切线斜率为 $0$，所以切线方程为：

$$
y=1
$$

---

# 十九、再求一条切线

求：

$$
y=\sin x
$$

在 $x=0$ 处的切线方程。

函数值：

$$
f(0)=\sin0=0
$$

切点：

$$
(0,0)
$$

导数：

$$
f'(x)=\cos x
$$

所以：

$$
f'(0)=\cos0=1
$$

切线：

$$
y-0=1(x-0)
$$

所以：

$$
y=x
$$

这也解释了小角度近似：

$$
\sin x\approx x
$$

---

# 二十、常见错误

## 错误 1：余弦求导忘记负号

错误：

$$
(\cos x)'=\sin x
$$

正确：

$$
(\cos x)'=-\sin x
$$

---

## 错误 2：对 $\sin(3x)$ 漏乘 $3$

错误：

$$
[\sin(3x)]'=\cos(3x)
$$

正确：

$$
[\sin(3x)]'=3\cos(3x)
$$

---

## 错误 3：对 $\cos(5x)$ 同时漏负号和内层导数

错误：

$$
[\cos(5x)]'=\sin(5x)
$$

正确：

$$
[\cos(5x)]'=-5\sin(5x)
$$

---

## 错误 4：把 $\tan x$ 的导数写成 $\frac1{\sin^2 x}$

正确：

$$
(\tan x)'=\sec^2 x=\frac1{\cos^2 x}
$$

---

## 错误 5：三角乘积题只导一个因子

例如：

$$
[x^2\sin x]'
$$

必须用乘积法则：

$$
2x\sin x+x^2\cos x
$$

不能只写：

$$
x^2\cos x
$$

---

# 二十一、练习题

## A 组：基本三角导数

1. 求 $(\sin x)'$。

2. 求 $(\cos x)'$。

3. 求 $(\tan x)'$。

4. 求 $(3\sin x)'$。

5. 求 $(-2\cos x)'$。

---

## B 组：线性内层链式法则

6. 求 $[\sin(3x)]'$。

7. 求 $[\cos(5x)]'$。

8. 求 $[\tan(2x)]'$。

9. 求 $[\sin(4x-1)]'$。

10. 求 $[\cos(7x+3)]'$。

---

## C 组：非线性内层链式法则

11. 求 $[\sin(x^2+1)]'$。

12. 求 $[\cos(x^3-2x)]'$。

13. 求 $[\tan(x^2)]'$。

14. 求 $[\sin(2x^2+3x)]'$。

15. 求 $[\cos(x^4+1)]'$。

---

## D 组：乘积与三角函数

16. 求 $[x^2\sin x]'$。

17. 求 $[x^3\cos x]'$。

18. 求 $[x\sin(3x)]'$。

19. 求 $[x^2\cos(2x)]'$。

20. 求 $[(x^2+1)\tan x]'$。

---

## E 组：商与三角函数

21. 求 $\left[\frac{\sin x}{x}\right]'$。

22. 求 $\left[\frac{\cos x}{x}\right]'$。

23. 求 $\left[\frac{x}{\sin x}\right]'$。

24. 求 $\left[\frac{\tan x}{x^2}\right]'$。

25. 求 $\left[\frac{x^2}{\cos x}\right]'$。

---

## F 组：切线与概念判断

26. 求 $y=\sin x$ 在 $x=0$ 处的切线方程。

27. 求 $y=\cos x$ 在 $x=0$ 处的切线方程。

28. 判断：$[\cos(3x)]'=-3\sin(3x)$。

29. 判断：$[\sin(x^2)]'=2x\cos(x^2)$。

30. 判断：三角函数求导公式默认使用角度制。

---

# 二十二、练习答案与解析

## A 组答案

1.

$$
(\sin x)'=\cos x
$$

2.

$$
(\cos x)'=-\sin x
$$

3.

$$
(\tan x)'=\sec^2 x
$$

4.

$$
(3\sin x)'=3\cos x
$$

5.

$$
(-2\cos x)'=-2(-\sin x)=2\sin x
$$

---

## B 组答案

6.

$$
[\sin(3x)]'=3\cos(3x)
$$

7.

$$
[\cos(5x)]'=-5\sin(5x)
$$

8.

$$
[\tan(2x)]'=2\sec^2(2x)
$$

9.

$$
[\sin(4x-1)]'=4\cos(4x-1)
$$

10.

$$
[\cos(7x+3)]'=-7\sin(7x+3)
$$

---

## C 组答案

11.

$$
[\sin(x^2+1)]'=2x\cos(x^2+1)
$$

12.

$$
[\cos(x^3-2x)]'=-(3x^2-2)\sin(x^3-2x)
$$

13.

$$
[\tan(x^2)]'=2x\sec^2(x^2)
$$

14.

$$
[\sin(2x^2+3x)]'=(4x+3)\cos(2x^2+3x)
$$

15.

$$
[\cos(x^4+1)]'=-4x^3\sin(x^4+1)
$$

---

## D 组答案

16.

$$
[x^2\sin x]'=2x\sin x+x^2\cos x
$$

17.

$$
[x^3\cos x]'=3x^2\cos x-x^3\sin x
$$

18.

$$
[x\sin(3x)]'=\sin(3x)+3x\cos(3x)
$$

19.

$$
[x^2\cos(2x)]'=2x\cos(2x)-2x^2\sin(2x)
$$

20.

$$
[(x^2+1)\tan x]'=2x\tan x+(x^2+1)\sec^2 x
$$

---

## E 组答案

21.

$$
\left[\frac{\sin x}{x}\right]'=
\frac{x\cos x-\sin x}{x^2}
$$

22.

$$
\left[\frac{\cos x}{x}\right]'=
\frac{x(-\sin x)-\cos x}{x^2}
=
\frac{-x\sin x-\cos x}{x^2}
$$

23.

$$
\left[\frac{x}{\sin x}\right]'=
\frac{\sin x-x\cos x}{\sin^2 x}
$$

24.

$$
\left[\frac{\tan x}{x^2}\right]'=
\frac{x^2\sec^2 x-2x\tan x}{x^4}
$$

25.

$$
\left[\frac{x^2}{\cos x}\right]'=
\frac{2x\cos x+x^2\sin x}{\cos^2 x}
$$

---

## F 组答案

26. 对 $y=\sin x$，有：

$$
f(0)=0
$$

$$
f'(x)=\cos x
$$

$$
f'(0)=1
$$

所以切线方程为：

$$
y=x
$$

27. 对 $y=\cos x$，有：

$$
f(0)=1
$$

$$
f'(x)=-\sin x
$$

$$
f'(0)=0
$$

所以切线方程为：

$$
y=1
$$

28. 正确。

29. 正确。

30. 错误。默认使用弧度制。

---

# 二十三、本课复习讲义

三角函数基本导数：

$$
(\sin x)'=\cos x
$$

$$
(\cos x)'=-\sin x
$$

$$
(\tan x)'=\sec^2 x
$$

链式法则形式：

$$
[\sin(g(x))]'=\cos(g(x))g'(x)
$$

$$
[\cos(g(x))]'=-\sin(g(x))g'(x)
$$

$$
[\tan(g(x))]'=\sec^2(g(x))g'(x)
$$

典型：

$$
[\sin(3x)]'=3\cos(3x)
$$

$$
[\cos(5x)]'=-5\sin(5x)
$$

$$
[\tan(x^2)]'=2x\sec^2(x^2)
$$

切线方程：

$$
y-f(a)=f'(a)(x-a)
$$

注意：三角函数求导公式默认使用弧度制。

---

# 二十四、进入第 67 单元的条件

第 67 单元是“指数函数与对数函数求导公式”。

进入前需要满足：

1. 熟记 $\sin x,\cos x,\tan x$ 的导数；
2. 不漏掉 $\cos x$ 求导的负号；
3. 能用链式法则求 $\sin(g(x))$、$\cos(g(x))$、$\tan(g(x))$；
4. 能处理三角函数与乘积法则、商法则的综合；
5. 能求三角函数曲线的切线方程。
