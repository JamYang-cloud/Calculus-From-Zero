---
title: 第 99 单元：分部积分法入门
tags:
  - 数学
  - 微积分
  - 积分
  - 分部积分法
  - 乘积法则
created: 2026-07-01
course: 微积分长期学习计划
unit: 99
---

# 第 99 单元：分部积分法入门

第 97、98 单元学习了换元积分法。换元积分法本质上是链式法则的逆过程。

第 99 单元学习分部积分法。分部积分法本质上是乘积法则的逆过程。

乘积法则是：

$$
(uv)'=u'v+uv'
$$

把它改写成微分形式：

$$
d(uv)=u\,dv+v\,du
$$

移项并积分：

$$
\int u\,dv=uv-\int v\,du
$$

这就是分部积分公式。

---

## 一、本课目标

学完本课后，需要掌握：

1. 理解分部积分法是乘积法则的逆过程；
2. 掌握公式 $\int u\,dv=uv-\int v\,du$；
3. 会选择 $u$ 和 $dv$；
4. 会由 $u$ 求 $du$；
5. 会由 $dv$ 求 $v$；
6. 会处理 $\int x e^x\,dx$；
7. 会处理 $\int x\cos x\,dx$；
8. 会处理 $\int x\sin x\,dx$；
9. 会处理 $\int \ln x\,dx$；
10. 会处理简单定积分中的分部积分。

---

# 二、公式来源

从乘积法则开始：

$$
(uv)'=u'v+uv'
$$

两边积分：

$$
uv=\int u'v\,dx+\int uv'\,dx
$$

把其中一项移到左边：

$$
\int uv'\,dx=uv-\int u'v\,dx
$$

如果写成微分形式：

$$
du=u'\,dx,
\qquad
 dv=v'\,dx
$$

就得到：

$$
\int u\,dv=uv-\int v\,du
$$

---

# 三、分部积分的标准流程

处理：

$$
\int u\,dv
$$

按照以下步骤：

1. 选择 $u$；
2. 选择 $dv$；
3. 计算 $du$；
4. 计算 $v$；
5. 代入公式：

$$
\int u\,dv=uv-\int v\,du
$$

6. 计算剩余积分；
7. 不定积分最后加 $C$；
8. 用求导检查。

---

# 四、如何选择 $u$ 和 $dv$

初学阶段，常见选择原则是：

让 $u$ 选为“求导后会变简单”的部分。

让 $dv$ 选为“容易积分”的部分。

常见情况：

1. 多项式乘指数：通常令多项式为 $u$；
2. 多项式乘三角函数：通常令多项式为 $u$；
3. 对数函数单独出现：通常令 $u=\ln x$，令 $dv=dx$。

例如：

$$
\int x e^x\,dx
$$

通常令：

$$
u=x,
\qquad
 dv=e^x\,dx
$$

因为 $x$ 求导会变成 $1$，而 $e^x$ 容易积分。

---

# 五、例题 1：$\int x e^x\,dx$

求：

$$
\int x e^x\,dx
$$

令：

$$
u=x,
\qquad
 dv=e^x\,dx
$$

于是：

$$
du=dx,
\qquad
 v=e^x
$$

代入公式：

$$
\int u\,dv=uv-\int v\,du
$$

得到：

$$
\int x e^x\,dx=x e^x-\int e^x\,dx
$$

所以：

$$
\int x e^x\,dx=x e^x-e^x+C
$$

也可以写成：

$$
e^x(x-1)+C
$$

---

# 六、例题 2：$\int x\cos x\,dx$

求：

$$
\int x\cos x\,dx
$$

令：

$$
u=x,
\qquad
 dv=\cos x\,dx
$$

则：

$$
du=dx,
\qquad
 v=\sin x
$$

所以：

$$
\int x\cos x\,dx=x\sin x-\int \sin x\,dx
$$

因为：

$$
\int \sin x\,dx=-\cos x
$$

所以：

$$
\int x\cos x\,dx=x\sin x+\cos x+C
$$

注意最后是加 $\cos x$。

---

# 七、例题 3：$\int x\sin x\,dx$

求：

$$
\int x\sin x\,dx
$$

令：

$$
u=x,
\qquad
 dv=\sin x\,dx
$$

则：

$$
du=dx,
\qquad
 v=-\cos x
$$

所以：

$$
\int x\sin x\,dx=-x\cos x-\int (-\cos x)\,dx
$$

即：

$$
\int x\sin x\,dx=-x\cos x+\int \cos x\,dx
$$

因此：

$$
\int x\sin x\,dx=-x\cos x+\sin x+C
$$

---

# 八、例题 4：$\int \ln x\,dx$

求：

$$
\int \ln x\,dx
$$

这里看起来只有一个函数，但可以写成：

$$
\int \ln x\cdot 1\,dx
$$

令：

$$
u=\ln x,
\qquad
 dv=dx
$$

则：

$$
du=\frac1x\,dx,
\qquad
 v=x
$$

所以：

$$
\int \ln x\,dx=x\ln x-\int x\cdot\frac1x\,dx
$$

即：

$$
\int \ln x\,dx=x\ln x-\int 1\,dx
$$

所以：

$$
\int \ln x\,dx=x\ln x-x+C
$$

---

# 九、例题 5：定积分中的分部积分

求：

$$
\int_0^1 x e^x\,dx
$$

先求原函数：

$$
\int x e^x\,dx=x e^x-e^x+C
$$

所以：

$$
\int_0^1 x e^x\,dx=(x e^x-e^x)\big|_0^1
$$

代入上限：

$$
1\cdot e-e=0
$$

代入下限：

$$
0\cdot 1-1=-1
$$

所以：

$$
\int_0^1 x e^x\,dx=0-(-1)=1
$$

定积分结果不加 $C$。

---

# 十、例题 6：带系数的分部积分

求：

$$
\int x e^{2x}\,dx
$$

令：

$$
u=x,
\qquad
 dv=e^{2x}\,dx
$$

则：

$$
du=dx,
\qquad
 v=\frac12e^{2x}
$$

代入：

$$
\int x e^{2x}\,dx=\frac12x e^{2x}-\int \frac12 e^{2x}\,dx
$$

所以：

$$
\int x e^{2x}\,dx=\frac12x e^{2x}-\frac14e^{2x}+C
$$

---

# 十一、分部积分与换元积分的区别

换元积分处理的是链式法则结构：

$$
\int f(g(x))g'(x)\,dx
$$

分部积分处理的是乘积法则结构：

$$
\int u\,dv
$$

如果看到“复合函数和内层导数”，优先考虑换元。

如果看到“两个不同类型函数相乘”，例如：

$$
x e^x,
\quad
x\sin x,
\quad
x\cos x,
\quad
\ln x
$$

就考虑分部积分。

---

# 十二、常见错误

## 错误 1：把公式符号写反

正确公式：

$$
\int u\,dv=uv-\int v\,du
$$

不是：

$$
\int u\,dv=uv+\int v\,du
$$

中间是减号。

---

## 错误 2：只求 $du$，忘记求 $v$

选择 $dv$ 后，必须积分得到 $v$。

例如：

$$
dv=e^x\,dx
$$

则：

$$
v=e^x
$$

---

## 错误 3：把 $dv$ 当成 $v$

如果：

$$
dv=\cos x\,dx
$$

那么：

$$
v=\sin x
$$

不能把 $v$ 写成 $\cos x$。

---

## 错误 4：三角函数积分符号错误

必须记住：

$$
\int \sin x\,dx=-\cos x+C
$$

$$
\int \cos x\,dx=\sin x+C
$$

---

## 错误 5：定积分加 $C$

不定积分加 $C$，定积分不加 $C$。

---

# 十三、练习题

## A 组：概念判断

1. 分部积分法本质上是哪一个求导法则的逆过程？

2. 写出分部积分公式。

3. 判断：$\int u\,dv=uv+\int v\,du$ 是否正确？

4. 判断：若 $dv=e^x\,dx$，则 $v=e^x$。

5. 判断：若 $dv=\cos x\,dx$，则 $v=\sin x$。

---

## B 组：指数型

6. 求 $\int x e^x\,dx$。

7. 求 $\int 2x e^x\,dx$。

8. 求 $\int x e^{2x}\,dx$。

9. 求 $\int x e^{-x}\,dx$。

10. 求 $\int (x+1)e^x\,dx$。

---

## C 组：三角型

11. 求 $\int x\cos x\,dx$。

12. 求 $\int x\sin x\,dx$。

13. 求 $\int 2x\cos x\,dx$。

14. 求 $\int 3x\sin x\,dx$。

15. 求 $\int x\cos(2x)\,dx$。

---

## D 组：对数型

16. 求 $\int \ln x\,dx$。

17. 求 $\int 2\ln x\,dx$。

18. 求 $\int x\ln x\,dx$。

19. 判断：$\int \ln x\,dx=\frac1x+C$。

20. 判断：求 $\int \ln x\,dx$ 时可以令 $u=\ln x, dv=dx$。

---

## E 组：定积分

21. 求 $\int_0^1 x e^x\,dx$。

22. 求 $\int_0^\pi x\sin x\,dx$。

23. 求 $\int_0^{\pi/2} x\cos x\,dx$。

24. 求 $\int_1^e \ln x\,dx$。

25. 判断：定积分用分部积分计算后结果是否加 $C$。

---

## F 组：综合判断

26. 判断：分部积分常用于两个不同类型函数相乘的积分。

27. 判断：换元积分法是链式法则的逆过程。

28. 判断：分部积分法是乘积法则的逆过程。

29. 判断：选择 $u$ 时通常希望 $u$ 求导后变简单。

30. 判断：求完分部积分后可以通过求导检查答案。

---

# 十四、答案与解析

## A 组答案

1. 乘积法则。

2.

$$
\int u\,dv=uv-\int v\,du
$$

3. 错误。中间应该是减号。

4. 正确。

5. 正确。

---

## B 组答案

6.

$$
\int x e^x\,dx=x e^x-e^x+C
$$

7.

$$
\int 2x e^x\,dx=2x e^x-2e^x+C
$$

8.

$$
\int x e^{2x}\,dx=\frac12x e^{2x}-\frac14e^{2x}+C
$$

9.

令 $u=x$，$dv=e^{-x}\,dx$，则 $du=dx$，$v=-e^{-x}$。

$$
\int x e^{-x}\,dx=-xe^{-x}+\int e^{-x}\,dx
$$

所以：

$$
\int x e^{-x}\,dx=-xe^{-x}-e^{-x}+C
$$

10.

$$
\int (x+1)e^x\,dx=\int x e^x\,dx+\int e^x\,dx
$$

$$
=(x e^x-e^x)+e^x+C=x e^x+C
$$

---

## C 组答案

11.

$$
\int x\cos x\,dx=x\sin x+\cos x+C
$$

12.

$$
\int x\sin x\,dx=-x\cos x+\sin x+C
$$

13.

$$
\int 2x\cos x\,dx=2x\sin x+2\cos x+C
$$

14.

$$
\int 3x\sin x\,dx=-3x\cos x+3\sin x+C
$$

15.

令 $u=x$，$dv=\cos(2x)\,dx$，则 $du=dx$，$v=\frac12\sin(2x)$。

$$
\int x\cos(2x)\,dx=\frac12x\sin(2x)-\frac12\int \sin(2x)\,dx
$$

因为：

$$
\int \sin(2x)\,dx=-\frac12\cos(2x)
$$

所以：

$$
\int x\cos(2x)\,dx=\frac12x\sin(2x)+\frac14\cos(2x)+C
$$

---

## D 组答案

16.

$$
\int \ln x\,dx=x\ln x-x+C
$$

17.

$$
\int 2\ln x\,dx=2x\ln x-2x+C
$$

18.

令 $u=\ln x$，$dv=x\,dx$，则 $du=\frac1x\,dx$，$v=\frac{x^2}{2}$。

$$
\int x\ln x\,dx=\frac{x^2}{2}\ln x-\int \frac{x^2}{2}\cdot\frac1x\,dx
$$

$$
=\frac{x^2}{2}\ln x-\frac12\int x\,dx
$$

$$
=\frac{x^2}{2}\ln x-\frac{x^2}{4}+C
$$

19. 错误。

20. 正确。

---

## E 组答案

21.

原函数：

$$
x e^x-e^x
$$

所以：

$$
\int_0^1 x e^x\,dx=(x e^x-e^x)\big|_0^1=1
$$

22.

原函数：

$$
-x\cos x+\sin x
$$

所以：

$$
\int_0^\pi x\sin x\,dx=(-x\cos x+\sin x)\big|_0^\pi=\pi
$$

23.

原函数：

$$
x\sin x+\cos x
$$

所以：

$$
\int_0^{\pi/2} x\cos x\,dx=(x\sin x+\cos x)\big|_0^{\pi/2}
$$

$$
=\frac{\pi}{2}-1
$$

24.

原函数：

$$
x\ln x-x
$$

所以：

$$
\int_1^e \ln x\,dx=(x\ln x-x)\big|_1^e
$$

$$
=0-(-1)=1
$$

25. 不加 $C$。

---

## F 组答案

26. 正确。

27. 正确。

28. 正确。

29. 正确。

30. 正确。

---

# 十五、本课复习讲义

分部积分法公式：

$$
\int u\,dv=uv-\int v\,du
$$

本质：乘积法则的逆过程。

常见选择：

1. $\int x e^x\,dx$：令 $u=x$，$dv=e^x\,dx$；
2. $\int x\cos x\,dx$：令 $u=x$，$dv=\cos x\,dx$；
3. $\int x\sin x\,dx$：令 $u=x$，$dv=\sin x\,dx$；
4. $\int \ln x\,dx$：令 $u=\ln x$，$dv=dx$。

核心防错：

1. 公式中间是减号；
2. $dv$ 要积分成 $v$；
3. $du$ 要由 $u$ 求导得到；
4. 不定积分加 $C$；
5. 定积分不加 $C$；
6. 三角函数积分符号要小心。

---

# 十六、进入第 100 单元的条件

第 100 单元将学习“分部积分法进阶”。

进入前需要满足：

1. 会写分部积分公式；
2. 能区分 $u,du,dv,v$；
3. 能处理 $\int x e^x\,dx$；
4. 能处理 $\int x\sin x\,dx$；
5. 能处理 $\int x\cos x\,dx$；
6. 能处理 $\int \ln x\,dx$；
7. 定积分分部积分不加 $C$。
