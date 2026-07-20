---
title: 第 100 单元：分部积分法进阶——重复分部与循环分部
tags:
  - 数学
  - 微积分
  - 积分
  - 分部积分法
  - 重复分部
  - 循环分部
created: 2026-07-01
course: 微积分长期学习计划
unit: 100
---

# 第 100 单元：分部积分法进阶——重复分部与循环分部

第 99 单元学习了分部积分法入门。

分部积分公式是：

$$
\int u\,dv=uv-\int v\,du
$$

它本质上是乘积法则的逆过程。

第 100 单元继续学习分部积分法的两类进阶用法：

1. 重复分部积分；
2. 循环分部积分。

重复分部积分常见于：

$$
\int x^2 e^x\,dx,\quad \int x^2\sin x\,dx,\quad \int x^2\cos x\,dx
$$

循环分部积分常见于：

$$
\int e^x\sin x\,dx,\quad \int e^x\cos x\,dx
$$

---

## 一、本课目标

学完本课后，需要掌握：

1. 理解为什么有些题需要连续使用分部积分；
2. 能处理 $\int x^2 e^x\,dx$ 型积分；
3. 能处理 $\int x^2\sin x\,dx$ 型积分；
4. 能处理 $\int x^2\cos x\,dx$ 型积分；
5. 能识别循环分部积分；
6. 能处理 $\int e^x\sin x\,dx$；
7. 能处理 $\int e^x\cos x\,dx$；
8. 能在循环分部中把原积分移项求解；
9. 能处理简单定积分中的分部积分；
10. 能避免符号错误和漏写常数。

---

# 二、复习：分部积分公式

分部积分公式：

$$
\int u\,dv=uv-\int v\,du
$$

使用时要做两件事：

1. 选 $u$，然后求 $du$；
2. 选 $dv$，然后积分得到 $v$。

一般经验：让 $u$ 越求导越简单。

常见选择：

$$
\ln x,\quad x,\quad x^2,\quad x^3
$$

通常适合作为 $u$。

---

# 三、重复分部积分的直觉

考虑：

$$
\int x^2e^x\,dx
$$

如果令：

$$
u=x^2,
\quad dv=e^x\,dx
$$

则：

$$
du=2x\,dx,
\quad v=e^x
$$

于是：

$$
\int x^2e^x\,dx=x^2e^x-\int 2xe^x\,dx
$$

但右边还有：

$$
\int 2xe^x\,dx
$$

仍然需要分部积分。

这就是重复分部积分。

---

# 四、例题 1：计算 $\int x^2e^x\,dx$

设：

$$
I=\int x^2e^x\,dx
$$

第一次分部：

$$
u=x^2,
\quad dv=e^x\,dx
$$

所以：

$$
du=2x\,dx,
\quad v=e^x
$$

由公式：

$$
I=x^2e^x-\int 2xe^x\,dx
$$

继续计算：

$$
\int 2xe^x\,dx=2\int xe^x\,dx
$$

对 $\int xe^x\,dx$ 分部：

$$
u=x,
\quad dv=e^x\,dx
$$

$$
du=dx,
\quad v=e^x
$$

所以：

$$
\int xe^x\,dx=xe^x-\int e^x\,dx=xe^x-e^x
$$

因此：

$$
\int 2xe^x\,dx=2xe^x-2e^x
$$

代回：

$$
I=x^2e^x-(2xe^x-2e^x)
$$

所以：

$$
\int x^2e^x\,dx=x^2e^x-2xe^x+2e^x+C
$$

也可以写成：

$$
e^x(x^2-2x+2)+C
$$

---

# 五、例题 2：计算 $\int x^2\sin x\,dx$

设：

$$
I=\int x^2\sin x\,dx
$$

第一次分部：

$$
u=x^2,
\quad dv=\sin x\,dx
$$

注意：

$$
v=-\cos x
$$

因为：

$$
(-\cos x)'=\sin x
$$

于是：

$$
I=-x^2\cos x-\int (-\cos x)2x\,dx
$$

即：

$$
I=-x^2\cos x+2\int x\cos x\,dx
$$

继续计算：

$$
\int x\cos x\,dx
$$

令：

$$
u=x,
\quad dv=\cos x\,dx
$$

则：

$$
du=dx,
\quad v=\sin x
$$

所以：

$$
\int x\cos x\,dx=x\sin x-\int \sin x\,dx
$$

而：

$$
\int \sin x\,dx=-\cos x
$$

所以：

$$
\int x\cos x\,dx=x\sin x+\cos x
$$

代回：

$$
I=-x^2\cos x+2(x\sin x+\cos x)+C
$$

答案：

$$
\int x^2\sin x\,dx=-x^2\cos x+2x\sin x+2\cos x+C
$$

---

# 六、例题 3：计算 $\int x^2\cos x\,dx$

设：

$$
I=\int x^2\cos x\,dx
$$

第一次分部：

$$
u=x^2,
\quad dv=\cos x\,dx
$$

所以：

$$
du=2x\,dx,
\quad v=\sin x
$$

得到：

$$
I=x^2\sin x-2\int x\sin x\,dx
$$

继续计算：

$$
\int x\sin x\,dx
$$

令：

$$
u=x,
\quad dv=\sin x\,dx
$$

则：

$$
du=dx,
\quad v=-\cos x
$$

所以：

$$
\int x\sin x\,dx=-x\cos x+\int \cos x\,dx
$$

即：

$$
\int x\sin x\,dx=-x\cos x+\sin x
$$

代回：

$$
I=x^2\sin x-2(-x\cos x+\sin x)
$$

答案：

$$
\int x^2\cos x\,dx=x^2\sin x+2x\cos x-2\sin x+C
$$

---

# 七、循环分部积分的直觉

有些积分分部两次以后，会重新出现原积分。

例如：

$$
I=\int e^x\sin x\,dx
$$

第一次分部后会出现：

$$
\int e^x\cos x\,dx
$$

第二次分部后又会出现：

$$
\int e^x\sin x\,dx
$$

也就是原来的 $I$。

这时不能继续无限做下去，而要把原积分移项求解。

---

# 八、例题 4：计算 $\int e^x\sin x\,dx$

设：

$$
I=\int e^x\sin x\,dx
$$

第一次分部，令：

$$
u=\sin x,
\quad dv=e^x\,dx
$$

则：

$$
du=\cos x\,dx,
\quad v=e^x
$$

所以：

$$
I=e^x\sin x-\int e^x\cos x\,dx
$$

设：

$$
J=\int e^x\cos x\,dx
$$

对 $J$ 分部。令：

$$
u=\cos x,
\quad dv=e^x\,dx
$$

则：

$$
du=-\sin x\,dx,
\quad v=e^x
$$

所以：

$$
J=e^x\cos x-\int e^x(-\sin x)\,dx
$$

即：

$$
J=e^x\cos x+I
$$

代回：

$$
I=e^x\sin x-(e^x\cos x+I)
$$

所以：

$$
I=e^x\sin x-e^x\cos x-I
$$

移项：

$$
2I=e^x(\sin x-\cos x)
$$

因此：

$$
I=\frac12e^x(\sin x-\cos x)+C
$$

所以：

$$
\int e^x\sin x\,dx=\frac12e^x(\sin x-\cos x)+C
$$

---

# 九、例题 5：计算 $\int e^x\cos x\,dx$

设：

$$
I=\int e^x\cos x\,dx
$$

第一次分部，令：

$$
u=\cos x,
\quad dv=e^x\,dx
$$

则：

$$
du=-\sin x\,dx,
\quad v=e^x
$$

所以：

$$
I=e^x\cos x+\int e^x\sin x\,dx
$$

设：

$$
K=\int e^x\sin x\,dx
$$

对 $K$ 分部，令：

$$
u=\sin x,
\quad dv=e^x\,dx
$$

则：

$$
du=\cos x\,dx,
\quad v=e^x
$$

所以：

$$
K=e^x\sin x-\int e^x\cos x\,dx
$$

也就是：

$$
K=e^x\sin x-I
$$

代回：

$$
I=e^x\cos x+e^x\sin x-I
$$

所以：

$$
2I=e^x(\sin x+\cos x)
$$

得到：

$$
\int e^x\cos x\,dx=\frac12e^x(\sin x+\cos x)+C
$$

---

# 十、定积分中的分部积分

定积分分部积分公式是：

$$
\int_a^b u\,dv=uv\big|_a^b-\int_a^b v\,du
$$

注意：定积分结果不加 $C$。

---

# 十一、例题 6：计算 $\int_0^1 xe^x\,dx$

令：

$$
u=x,
\quad dv=e^x\,dx
$$

则：

$$
du=dx,
\quad v=e^x
$$

所以：

$$
\int_0^1 xe^x\,dx=xe^x\big|_0^1-\int_0^1 e^x\,dx
$$

计算：

$$
xe^x\big|_0^1=e
$$

$$
\int_0^1 e^x\,dx=e-1
$$

所以：

$$
\int_0^1 xe^x\,dx=e-(e-1)=1
$$

---

# 十二、常见错误

## 错误 1：循环分部后继续无限循环

遇到原积分重新出现时，应当移项求解，而不是继续重复。

---

## 错误 2：符号错误

尤其注意：

$$
\int \sin x\,dx=-\cos x+C
$$

$$
\int \cos x\,dx=\sin x+C
$$

---

## 错误 3：分部积分公式写错符号

正确是：

$$
\int u\,dv=uv-\int v\,du
$$

中间是减号。

---

## 错误 4：重复分部时丢系数

例如：

$$
\int x^2e^x\,dx=x^2e^x-\int 2xe^x\,dx
$$

后面有系数 $2$，不能漏。

---

## 错误 5：定积分分部后加 $C$

定积分不加 $C$。

---

# 十三、练习题

## A 组：概念判断

1. 分部积分法是哪一个求导法则的逆过程？

2. 写出分部积分公式。

3. 判断：重复分部积分中可能需要连续使用两次分部积分。

4. 判断：循环分部积分中如果原积分重新出现，应当移项求解。

5. 判断：定积分分部积分结果要加 $C$。

---

## B 组：重复分部——指数型

6. 求 $\int x^2e^x\,dx$。

7. 求 $\int x^3e^x\,dx$。

8. 求 $\int x^2e^{2x}\,dx$。

9. 求 $\int_0^1 xe^x\,dx$。

10. 求 $\int_0^1 x^2e^x\,dx$。

---

## C 组：重复分部——三角型

11. 求 $\int x^2\sin x\,dx$。

12. 求 $\int x^2\cos x\,dx$。

13. 求 $\int x^3\sin x\,dx$。

14. 求 $\int x\sin x\,dx$。

15. 求 $\int x\cos x\,dx$。

---

## D 组：循环分部

16. 求 $\int e^x\sin x\,dx$。

17. 求 $\int e^x\cos x\,dx$。

18. 判断：$\int e^x\sin x\,dx$ 分部两次后会重新出现原积分。

19. 判断：循环分部时原积分出现后要把它移到等式同一侧。

20. 判断：$\int e^x\cos x\,dx=\frac12e^x(\sin x+\cos x)+C$。

---

## E 组：定积分分部

21. 求 $\int_0^1 xe^x\,dx$。

22. 求 $\int_0^1 x e^{2x}\,dx$。

23. 求 $\int_0^\pi x\sin x\,dx$。

24. 求 $\int_0^\pi x\cos x\,dx$。

25. 判断：定积分分部公式是 $\int_a^b u\,dv=uv\big|_a^b-\int_a^b v\,du$。

---

## F 组：综合防错

26. 判断：$\int \sin x\,dx=\cos x+C$。

27. 判断：$\int u\,dv=uv+\int v\,du$。

28. 判断：$\int x^2e^x\,dx$ 一次分部后仍需要继续处理 $\int xe^x\,dx$。

29. 判断：$\int e^x\sin x\,dx$ 是循环分部积分的典型例子。

30. 判断：不定积分可以用求导检查答案。

---

# 十四、答案与解析

## A 组答案

1. 乘积法则。

2.

$$
\int u\,dv=uv-\int v\,du
$$

3. 正确。

4. 正确。

5. 错误。定积分结果不加 $C$。

---

## B 组答案

6.

$$
\int x^2e^x\,dx=e^x(x^2-2x+2)+C
$$

7.

连续分部可得：

$$
\int x^3e^x\,dx=e^x(x^3-3x^2+6x-6)+C
$$

8.

第一次分部可得：

$$
\int x^2e^{2x}\,dx=\frac12x^2e^{2x}-\int xe^{2x}\,dx
$$

而：

$$
\int xe^{2x}\,dx=\frac12xe^{2x}-\frac14e^{2x}
$$

所以：

$$
\int x^2e^{2x}\,dx=\frac12x^2e^{2x}-\frac12xe^{2x}+\frac14e^{2x}+C
$$

9.

$$
\int_0^1 xe^x\,dx=1
$$

10.

原函数：

$$
e^x(x^2-2x+2)
$$

所以：

$$
\int_0^1 x^2e^x\,dx=e(1-2+2)-2=e-2
$$

---

## C 组答案

11.

$$
\int x^2\sin x\,dx=-x^2\cos x+2x\sin x+2\cos x+C
$$

12.

$$
\int x^2\cos x\,dx=x^2\sin x+2x\cos x-2\sin x+C
$$

13.

第一次分部：

$$
\int x^3\sin x\,dx=-x^3\cos x+3\int x^2\cos x\,dx
$$

代入第 12 题结果：

$$
\int x^3\sin x\,dx=-x^3\cos x+3x^2\sin x+6x\cos x-6\sin x+C
$$

14.

$$
\int x\sin x\,dx=-x\cos x+\sin x+C
$$

15.

$$
\int x\cos x\,dx=x\sin x+\cos x+C
$$

---

## D 组答案

16.

$$
\int e^x\sin x\,dx=\frac12e^x(\sin x-\cos x)+C
$$

17.

$$
\int e^x\cos x\,dx=\frac12e^x(\sin x+\cos x)+C
$$

18. 正确。

19. 正确。

20. 正确。

---

## E 组答案

21.

$$
\int_0^1 xe^x\,dx=1
$$

22.

不定积分：

$$
\int xe^{2x}\,dx=\frac12xe^{2x}-\frac14e^{2x}
$$

所以：

$$
\int_0^1 xe^{2x}\,dx=rac12e^2-rac14e^2-igg(0-rac14\bigg)
$$

$$
=\frac14e^2+rac14=\frac{e^2+1}{4}
$$

23.

$$
\int x\sin x\,dx=-x\cos x+\sin x
$$

所以：

$$
\int_0^\pi x\sin x\,dx=(-x\cos x+\sin x)\big|_0^\pi=\pi
$$

24.

$$
\int x\cos x\,dx=x\sin x+\cos x
$$

所以：

$$
\int_0^\pi x\cos x\,dx=(x\sin x+\cos x)\big|_0^\pi=-1-1=-2
$$

25. 正确。

---

## F 组答案

26. 错误。正确是：

$$
\int \sin x\,dx=-\cos x+C
$$

27. 错误。正确公式中间是减号：

$$
\int u\,dv=uv-\int v\,du
$$

28. 正确。

29. 正确。

30. 正确。

---

# 十五、本课复习讲义

重复分部积分适用于：

$$
\int x^ne^x\,dx,\quad \int x^n\sin x\,dx,\quad \int x^n\cos x\,dx
$$

做法是连续选择多项式部分为 $u$，让它不断求导降低次数。

循环分部积分适用于：

$$
\int e^x\sin x\,dx,\quad \int e^x\cos x\,dx
$$

分部两次后原积分重新出现，要移项求解。

核心公式仍然是：

$$
\int u\,dv=uv-\int v\,du
$$

定积分版本：

$$
\int_a^b u\,dv=uv\big|_a^b-\int_a^b v\,du
$$

---

# 十六、进入第 101 单元的条件

第 101 单元将学习“部分分式积分入门”。

进入前需要满足：

1. 掌握重复分部积分；
2. 掌握循环分部积分；
3. 不再把分部积分公式符号写错；
4. 能处理 $\int x^2e^x\,dx$；
5. 能处理 $\int x^2\sin x\,dx$；
6. 能处理 $\int e^x\sin x\,dx$；
7. 能处理简单定积分分部积分。
