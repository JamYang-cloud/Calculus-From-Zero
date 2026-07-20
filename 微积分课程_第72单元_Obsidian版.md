---
title: 第 72 单元：参数方程求导入门
tags:
  - 数学
  - 微积分
  - 导数
  - 参数方程
  - 参数求导
  - 切线斜率
created: 2026-06-25
course: 微积分长期学习计划
unit: 72
---

# 第 72 单元：参数方程求导入门

前面多数函数都写成：

$$
y=f(x)
$$

也就是直接把 $y$ 表示成 $x$ 的函数。

但有些曲线不是直接写成 $y=f(x)$，而是通过第三个变量 $t$ 同时表示 $x$ 和 $y$：

$$
x=x(t),\quad y=y(t)
$$

这种形式叫参数方程。$t$ 叫参数。

本单元学习如何对参数方程表示的曲线求导。

---

## 一、本课目标

学完本课后，需要掌握：

1. 理解什么是参数方程；
2. 理解参数 $t$ 的作用；
3. 掌握参数方程的一阶导数公式；
4. 能求 $\frac{dy}{dx}$；
5. 能根据参数值求切线斜率；
6. 能写参数曲线在某点处的切线方程；
7. 能判断水平切线和竖直切线；
8. 初步理解参数方程二阶导数；
9. 避免把 $\frac{dy}{dt}$ 误当成 $\frac{dy}{dx}$。

---

# 二、什么是参数方程

普通函数写成：

$$
y=f(x)
$$

例如：

$$
y=x^2
$$

参数方程写成：

$$
x=x(t),\quad y=y(t)
$$

例如：

$$
x=t,\quad y=t^2
$$

当 $t$ 改变时，点 $(x(t),y(t))$ 在平面上运动，形成一条曲线。

在这个例子中，因为 $x=t$，所以 $t=x$，代入 $y=t^2$ 得：

$$
y=x^2
$$

所以它表示的仍然是抛物线。

---

# 三、参数方程求导公式

如果：

$$
x=x(t),\quad y=y(t)
$$

并且：

$$
\frac{dx}{dt}\ne0
$$

那么：

$$
\frac{dy}{dx}=\frac{\frac{dy}{dt}}{\frac{dx}{dt}}
$$

也就是：

$$
\frac{dy}{dx}=\frac{y'(t)}{x'(t)}
$$

注意：

$$
\frac{dy}{dt}
$$

只是 $y$ 对参数 $t$ 的变化率，不是曲线关于 $x$ 的斜率。曲线斜率是：

$$
\frac{dy}{dx}
$$

必须用：

$$
\frac{dy/dt}{dx/dt}
$$

---

# 四、公式来源

由链式法则：

$$
\frac{dy}{dt}=\frac{dy}{dx}\cdot\frac{dx}{dt}
$$

如果 $\frac{dx}{dt}\ne0$，两边除以 $\frac{dx}{dt}$，得到：

$$
\frac{dy}{dx}=\frac{\frac{dy}{dt}}{\frac{dx}{dt}}
$$

所以参数方程求导本质上仍然来自链式法则。

---

# 五、例题 1：基本参数方程

已知：

$$
x=t,\quad y=t^2
$$

求 $\frac{dy}{dx}$。

先分别对 $t$ 求导：

$$
\frac{dx}{dt}=1
$$

$$
\frac{dy}{dt}=2t
$$

所以：

$$
\frac{dy}{dx}=\frac{2t}{1}=2t
$$

因为 $x=t$，也可以写成：

$$
\frac{dy}{dx}=2x
$$

这与 $y=x^2$ 的导数一致。

---

# 六、例题 2：一般参数方程

已知：

$$
x=t^2,\quad y=t^3
$$

求 $\frac{dy}{dx}$。

$$
\frac{dx}{dt}=2t
$$

$$
\frac{dy}{dt}=3t^2
$$

所以：

$$
\frac{dy}{dx}=\frac{3t^2}{2t}
$$

当 $t\ne0$ 时：

$$
\frac{dy}{dx}=\frac32t
$$

注意：这里不能忽略 $t\ne0$，因为公式要求 $\frac{dx}{dt}\ne0$。

---

# 七、例题 3：指定参数值的切线斜率

已知：

$$
x=t^2+1,\quad y=t^3-t
$$

求 $t=2$ 时的切线斜率。

先求：

$$
\frac{dx}{dt}=2t
$$

$$
\frac{dy}{dt}=3t^2-1
$$

所以：

$$
\frac{dy}{dx}=\frac{3t^2-1}{2t}
$$

代入 $t=2$：

$$
\frac{dy}{dx}=\frac{3(2)^2-1}{2(2)}=\frac{11}{4}
$$

所以切线斜率为：

$$
\frac{11}{4}
$$

---

# 八、例题 4：切线方程

已知：

$$
x=t^2+1,\quad y=t^3-t
$$

求 $t=2$ 时的切线方程。

先求切点：

$$
x(2)=2^2+1=5
$$

$$
y(2)=2^3-2=6
$$

切点是：

$$
(5,6)
$$

再求斜率：

$$
\frac{dy}{dx}\bigg|_{t=2}=\frac{11}{4}
$$

所以切线方程为：

$$
y-6=\frac{11}{4}(x-5)
$$

---

# 九、水平切线与竖直切线

参数方程中：

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}
$$

## 1. 水平切线

如果：

$$
\frac{dy}{dt}=0
$$

且：

$$
\frac{dx}{dt}\ne0
$$

则：

$$
\frac{dy}{dx}=0
$$

此时切线水平。

水平切线条件：

$$
\frac{dy}{dt}=0,\quad \frac{dx}{dt}\ne0
$$

## 2. 竖直切线

如果：

$$
\frac{dx}{dt}=0
$$

且：

$$
\frac{dy}{dt}\ne0
$$

则 $\frac{dy}{dx}$ 不是有限数，此时切线竖直。

竖直切线条件：

$$
\frac{dx}{dt}=0,\quad \frac{dy}{dt}\ne0
$$

---

# 十、例题 5：水平与竖直切线

已知：

$$
x=t^2,\quad y=t^3-3t
$$

求水平切线和竖直切线对应的 $t$。

先求：

$$
\frac{dx}{dt}=2t
$$

$$
\frac{dy}{dt}=3t^2-3=3(t^2-1)
$$

水平切线要求：

$$
3(t^2-1)=0
$$

所以：

$$
t=\pm1
$$

检查 $\frac{dx}{dt}\ne0$，当 $t=1,-1$ 时都成立。

竖直切线要求：

$$
2t=0
$$

所以：

$$
t=0
$$

检查：

$$
\frac{dy}{dt}\bigg|_{t=0}=-3\ne0
$$

所以 $t=0$ 对应竖直切线。

---

# 十一、参数方程的二阶导数

普通函数中：

$$
\frac{d^2y}{dx^2}
$$

表示对 $\frac{dy}{dx}$ 再关于 $x$ 求导。

参数方程中，$\frac{dy}{dx}$ 通常是 $t$ 的函数，所以：

$$
\frac{d^2y}{dx^2}
=
\frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}
$$

前提仍然是：

$$
\frac{dx}{dt}\ne0
$$

注意：

$$
\frac{d^2y}{dx^2}
$$

不是简单的：

$$
\frac{d}{dt}\left(\frac{dy}{dx}\right)
$$

还要再除以 $\frac{dx}{dt}$。

---

# 十二、例题 6：二阶导数

已知：

$$
x=t^2,\quad y=t^3
$$

求：

$$
\frac{d^2y}{dx^2}
$$

先求一阶导数：

$$
\frac{dx}{dt}=2t
$$

$$
\frac{dy}{dt}=3t^2
$$

所以：

$$
\frac{dy}{dx}=\frac{3t^2}{2t}=\frac32t
$$

再对 $t$ 求导：

$$
\frac{d}{dt}\left(\frac{dy}{dx}\right)=\frac32
$$

最后除以：

$$
\frac{dx}{dt}=2t
$$

所以：

$$
\frac{d^2y}{dx^2}=\frac{\frac32}{2t}=\frac{3}{4t}
$$

---

# 十三、常见错误

## 错误 1：把 $\frac{dy}{dt}$ 当成 $\frac{dy}{dx}$

错误：

$$
\frac{dy}{dx}=\frac{dy}{dt}
$$

正确：

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}
$$

---

## 错误 2：忘记检查 $\frac{dx}{dt}\ne0$

参数方程公式要求：

$$
\frac{dx}{dt}\ne0
$$

若 $\frac{dx}{dt}=0$，可能出现竖直切线或更复杂情况。

---

## 错误 3：水平切线不检查分母

水平切线不是只令 $\frac{dy}{dt}=0$，还要检查：

$$
\frac{dx}{dt}\ne0
$$

---

## 错误 4：竖直切线不检查分子

竖直切线不是只令 $\frac{dx}{dt}=0$，还要检查：

$$
\frac{dy}{dt}\ne0
$$

---

## 错误 5：二阶导数直接对 $t$ 求导结束

参数方程中：

$$
\frac{d^2y}{dx^2}
=
\frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}
$$

不能只算分子。

---

# 十四、练习题

## A 组：概念与公式

1. 参数方程的一阶导数公式是什么？

2. 公式 $\frac{dy}{dx}=\frac{dy/dt}{dx/dt}$ 的前提是什么？

3. 参数方程中，$\frac{dy}{dt}$ 是否就是曲线斜率？

4. 水平切线的条件是什么？

5. 竖直切线的条件是什么？

---

## B 组：一阶导数

6. 已知 $x=t,\ y=t^2$，求 $\frac{dy}{dx}$。

7. 已知 $x=t^2,\ y=t^3$，求 $\frac{dy}{dx}$。

8. 已知 $x=t^2+1,\ y=t^3-t$，求 $\frac{dy}{dx}$。

9. 已知 $x=\sin t,\ y=\cos t$，求 $\frac{dy}{dx}$。

10. 已知 $x=e^t,\ y=t^2$，求 $\frac{dy}{dx}$。

---

## C 组：指定参数值的斜率

11. 对 $x=t^2+1,\ y=t^3-t$，求 $t=2$ 时的切线斜率。

12. 对 $x=t^2,\ y=t^3$，求 $t=1$ 时的切线斜率。

13. 对 $x=\sin t,\ y=\cos t$，求 $t=\frac{\pi}{4}$ 时的切线斜率。

14. 对 $x=e^t,\ y=t^2$，求 $t=0$ 时的切线斜率。

15. 对 $x=t^3,\ y=t^2$，求 $t=2$ 时的切线斜率。

---

## D 组：切线方程

16. 对 $x=t^2+1,\ y=t^3-t$，求 $t=2$ 时的切线方程。

17. 对 $x=t,\ y=t^2$，求 $t=1$ 时的切线方程。

18. 对 $x=t^2,\ y=t^3$，求 $t=1$ 时的切线方程。

19. 对 $x=\sin t,\ y=\cos t$，求 $t=\frac{\pi}{4}$ 时的切线方程。

20. 对 $x=e^t,\ y=t^2$，求 $t=0$ 时的切线方程。

---

## E 组：水平、竖直切线

设：

$$
x=t^2,\quad y=t^3-3t
$$

21. 求 $\frac{dx}{dt}$ 与 $\frac{dy}{dt}$。

22. 求水平切线对应的 $t$。

23. 求竖直切线对应的 $t$。

24. 求 $t=1$ 时的点坐标。

25. 求 $t=0$ 时的点坐标，并说明此处切线方向。

---

## F 组：二阶导数与判断

26. 已知 $x=t,\ y=t^3$，求 $\frac{d^2y}{dx^2}$。

27. 已知 $x=t^2,\ y=t^3$，求 $\frac{d^2y}{dx^2}$。

28. 已知 $x=t^2+1,\ y=t^3-t$，求 $\frac{d^2y}{dx^2}$。

29. 判断：参数方程中的 $\frac{d^2y}{dx^2}$ 等于 $\frac{d}{dt}(\frac{dy}{dx})$。

30. 判断：参数方程求切线方程时，需要先求点坐标，再求斜率。

---

# 十五、练习答案与解析

## A 组答案

1.

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}
$$

2.

$$
\frac{dx}{dt}\ne0
$$

3. 不是。$\frac{dy}{dt}$ 是 $y$ 对 $t$ 的变化率，曲线斜率是 $\frac{dy}{dx}$。

4.

$$
\frac{dy}{dt}=0,\quad \frac{dx}{dt}\ne0
$$

5.

$$
\frac{dx}{dt}=0,\quad \frac{dy}{dt}\ne0
$$

---

## B 组答案

6.

$$
\frac{dy}{dx}=2t
$$

7.

$$
\frac{dy}{dx}=\frac{3t^2}{2t}=\frac32t,\quad t\ne0
$$

8.

$$
\frac{dy}{dx}=\frac{3t^2-1}{2t}
$$

9.

$$
\frac{dy}{dx}=\frac{-\sin t}{\cos t}=-\tan t,\quad \cos t\ne0
$$

10.

$$
\frac{dy}{dx}=\frac{2t}{e^t}=2te^{-t}
$$

---

## C 组答案

11.

$$
\frac{11}{4}
$$

12.

$$
\frac32
$$

13.

$$
-1
$$

14.

$$
0
$$

15.

$$
\frac{dy}{dx}=\frac{2t}{3t^2}=\frac{2}{3t}
$$

代入 $t=2$：

$$
\frac13
$$

---

## D 组答案

16.

$$
y-6=\frac{11}{4}(x-5)
$$

17. 点为 $(1,1)$，斜率为 $2$，所以：

$$
y-1=2(x-1)
$$

18. 点为 $(1,1)$，斜率为 $\frac32$，所以：

$$
y-1=\frac32(x-1)
$$

19. 点为：

$$
\left(\frac{\sqrt2}{2},\frac{\sqrt2}{2}\right)
$$

斜率为 $-1$，所以：

$$
y-\frac{\sqrt2}{2}=-(x-\frac{\sqrt2}{2})
$$

20. 点为 $(1,0)$，斜率为 $0$，所以：

$$
y=0
$$

---

## E 组答案

21.

$$
\frac{dx}{dt}=2t
$$

$$
\frac{dy}{dt}=3t^2-3
$$

22. 水平切线：

$$
3t^2-3=0
$$

所以：

$$
t=\pm1
$$

且 $2t\ne0$，成立。

23. 竖直切线：

$$
2t=0
$$

所以：

$$
t=0
$$

且此时：

$$
\frac{dy}{dt}=-3\ne0
$$

成立。

24. 当 $t=1$：

$$
(x,y)=(1,-2)
$$

25. 当 $t=0$：

$$
(x,y)=(0,0)
$$

此时 $\frac{dx}{dt}=0$，$\frac{dy}{dt}=-3\ne0$，所以切线竖直。

---

## F 组答案

26.

$$
\frac{dy}{dx}=3t^2
$$

所以：

$$
\frac{d^2y}{dx^2}=6t
$$

27.

$$
\frac{dy}{dx}=\frac32t
$$

所以：

$$
\frac{d}{dt}\left(\frac{dy}{dx}\right)=\frac32
$$

又：

$$
\frac{dx}{dt}=2t
$$

所以：

$$
\frac{d^2y}{dx^2}=\frac{3}{4t}
$$

28.

$$
\frac{dy}{dx}=\frac{3t^2-1}{2t}=\frac32t-\frac1{2t}
$$

对 $t$ 求导：

$$
\frac{d}{dt}\left(\frac{dy}{dx}\right)=\frac32+\frac1{2t^2}
$$

又：

$$
\frac{dx}{dt}=2t
$$

所以：

$$
\frac{d^2y}{dx^2}
=
\frac{\frac32+\frac1{2t^2}}{2t}
=
\frac{3t^2+1}{4t^3}
$$

29. 错误。还要除以 $\frac{dx}{dt}$。

30. 正确。

---

# 十六、本课复习讲义

参数方程：

$$
x=x(t),\quad y=y(t)
$$

一阶导数：

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}
$$

水平切线：

$$
\frac{dy}{dt}=0,\quad \frac{dx}{dt}\ne0
$$

竖直切线：

$$
\frac{dx}{dt}=0,\quad \frac{dy}{dt}\ne0
$$

二阶导数：

$$
\frac{d^2y}{dx^2}
=
\frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}
$$

切线方程：

先求：

$$
(x(t_0),y(t_0))
$$

再求：

$$
\frac{dy}{dx}\bigg|_{t=t_0}
$$

最后写：

$$
y-y_0=m(x-x_0)
$$

---

# 十七、进入第 73 单元的条件

第 73 单元是“相关变化率问题”。

进入前需要满足：

1. 能用参数方程求 $\frac{dy}{dx}$；
2. 能在指定 $t$ 求切线斜率；
3. 能写参数曲线切线方程；
4. 能判断水平切线与竖直切线；
5. 能计算简单二阶导数；
6. 不把 $\frac{dy}{dt}$ 误认为 $\frac{dy}{dx}$。
