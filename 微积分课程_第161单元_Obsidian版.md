---
title: 第 161 单元：多元微积分入门十三——极坐标下的二重积分
tags:
  - 数学
  - 微积分
  - 多元函数
  - 二重积分
  - 极坐标
created: 2026-07-20
course: 微积分长期学习计划
unit: 161
---

# 第 161 单元：多元微积分入门十三——极坐标下的二重积分

第 158 单元学习了矩形区域上的二重积分，第 159 单元学习了一般区域上的竖向切片与横向切片，第 160 单元学习了二重积分换序。第 161 单元进入另一种重要坐标系：极坐标。

当积分区域涉及圆、圆环、扇形，或者被积函数出现 $x^2+y^2$、$\sqrt{x^2+y^2}$ 时，极坐标通常比直角坐标更简单。

---

## 一、本课目标

完成本单元后，需要掌握：

1. 极坐标与直角坐标的转换；
2. 会使用 $x=r\cos\theta,\ y=r\sin\theta$；
3. 会使用 $x^2+y^2=r^2$；
4. 理解极坐标面积微元 $dA=r\,dr\,d\theta$；
5. 会描述圆盘、圆环、扇形区域；
6. 会把二重积分转化为极坐标；
7. 会计算基础极坐标二重积分；
8. 明白为什么必须多乘一个 $r$；
9. 会判断什么时候适合用极坐标；
10. 为后续复杂区域积分打基础。

---

# 二、极坐标回顾

极坐标用 $(r,\theta)$ 描述平面上的点。其中 $r$ 是点到原点的距离，$\theta$ 是从 $x$ 轴正方向转到该点方向的角度。

直角坐标与极坐标的关系是：

$$
x=r\cos\theta
$$

$$
y=r\sin\theta
$$

所以：

$$
x^2+y^2=r^2
$$

因为：

$$
x^2+y^2=r^2\cos^2\theta+r^2\sin^2\theta=r^2
$$

---

# 三、为什么要用极坐标

圆盘：

$$
x^2+y^2\le R^2
$$

用直角坐标写，通常是：

$$
-R\le x\le R,\qquad -\sqrt{R^2-x^2}\le y\le \sqrt{R^2-x^2}
$$

而用极坐标只要写成：

$$
0\le r\le R,\qquad 0\le\theta\le2\pi
$$

因此，以原点为中心的圆、圆环、扇形，通常适合用极坐标。

---

# 四、极坐标中的面积微元

直角坐标中：

$$
dA=dx\,dy
$$

极坐标中不能写成 $dr\,d\theta$，而必须写成：

$$
\boxed{dA=r\,dr\,d\theta}
$$

原因是：在半径为 $r$ 的地方，角度变化 $d\theta$ 对应的弧长约为 $r\,d\theta$，径向厚度是 $dr$，所以小面积约为：

$$
(r\,d\theta)\,dr=r\,dr\,d\theta
$$

这个 $r$ 是极坐标二重积分中最容易漏掉的部分。

---

# 五、极坐标二重积分公式

若区域 $D$ 可写成：

$$
\alpha\le\theta\le\beta,\qquad a(\theta)\le r\le b(\theta)
$$

则：

$$
\iint_D f(x,y)\,dA
=
\int_\alpha^\beta\int_{a(\theta)}^{b(\theta)}
f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta
$$

转化时必须同时做三件事：

1. 把 $x$ 换成 $r\cos\theta$；
2. 把 $y$ 换成 $r\sin\theta$；
3. 把 $dA$ 换成 $r\,dr\,d\theta$。

---

# 六、例题 1：用极坐标求圆面积

求半径为 $R$ 的圆盘面积。

区域：

$$
x^2+y^2\le R^2
$$

极坐标为：

$$
0\le r\le R,\qquad 0\le\theta\le2\pi
$$

面积：

$$
A=\iint_D1\,dA
=
\int_0^{2\pi}\int_0^R r\,dr\,d\theta
$$

先对 $r$ 积分：

$$
\int_0^R r\,dr=\frac{R^2}{2}
$$

再对 $\theta$ 积分：

$$
\int_0^{2\pi}\frac{R^2}{2}\,d\theta=\pi R^2
$$

所以圆面积为：

$$
\pi R^2
$$

---

# 七、例题 2：单位圆盘上的常数函数积分

计算：

$$
\iint_D3\,dA
$$

其中：

$$
D:x^2+y^2\le1
$$

极坐标：

$$
0\le r\le1,\qquad 0\le\theta\le2\pi
$$

所以：

$$
\iint_D3\,dA
=
\int_0^{2\pi}\int_0^1 3r\,dr\,d\theta
$$

内层：

$$
\int_0^1 3r\,dr=\frac32
$$

外层：

$$
\int_0^{2\pi}\frac32\,d\theta=3\pi
$$

---

# 八、例题 3：积分 $x^2+y^2$

计算：

$$
\iint_D(x^2+y^2)\,dA
$$

其中：

$$
D:x^2+y^2\le1
$$

在极坐标下：

$$
x^2+y^2=r^2
$$

且：

$$
dA=r\,dr\,d\theta
$$

所以：

$$
\int_0^{2\pi}\int_0^1r^2\cdot r\,dr\,d\theta
=
\int_0^{2\pi}\int_0^1r^3\,dr\,d\theta
$$

内层：

$$
\int_0^1r^3\,dr=\frac14
$$

外层：

$$
\int_0^{2\pi}\frac14\,d\theta=\frac{\pi}{2}
$$

---

# 九、例题 4：圆环面积

求圆环：

$$
1\le x^2+y^2\le4
$$

的面积。

因为：

$$
x^2+y^2=r^2
$$

所以：

$$
1\le r^2\le4
$$

又 $r\ge0$，所以：

$$
1\le r\le2
$$

完整一圈：

$$
0\le\theta\le2\pi
$$

面积：

$$
A=\int_0^{2\pi}\int_1^2r\,dr\,d\theta
=
3\pi
$$

---

# 十、例题 5：第一象限单位圆

计算第一象限单位圆的面积：

$$
D:x^2+y^2\le1,\quad x\ge0,\quad y\ge0
$$

第一象限对应：

$$
0\le\theta\le\frac{\pi}{2}
$$

单位圆对应：

$$
0\le r\le1
$$

所以：

$$
A=\int_0^{\pi/2}\int_0^1r\,dr\,d\theta
=
\frac{\pi}{4}
$$

---

# 十一、例题 6：扇形区域

求扇形区域：

$$
0\le r\le3,\qquad 0\le\theta\le\frac{\pi}{3}
$$

的面积。

$$
A=\int_0^{\pi/3}\int_0^3r\,dr\,d\theta
=
\frac{3\pi}{2}
$$

这与扇形面积公式一致：

$$
A=\frac12R^2\theta
$$

---

# 十二、例题 7：含 $x$ 的极坐标积分

计算：

$$
\iint_Dx\,dA
$$

其中 $D$ 是第一象限单位圆。

极坐标下：

$$
x=r\cos\theta
$$

区域：

$$
0\le r\le1,\qquad 0\le\theta\le\frac{\pi}{2}
$$

所以：

$$
\iint_Dx\,dA
=
\int_0^{\pi/2}\int_0^1(r\cos\theta)r\,dr\,d\theta
$$

即：

$$
\int_0^{\pi/2}\int_0^1r^2\cos\theta\,dr\,d\theta
$$

分离计算：

$$
\left(\int_0^1r^2\,dr\right)\left(\int_0^{\pi/2}\cos\theta\,d\theta\right)
=
\frac13
$$

---

# 十三、例题 8：指数函数

计算：

$$
\iint_D e^{-(x^2+y^2)}\,dA
$$

其中：

$$
D:x^2+y^2\le1
$$

极坐标下：

$$
e^{-(x^2+y^2)}=e^{-r^2}
$$

所以：

$$
\int_0^{2\pi}\int_0^1e^{-r^2}r\,dr\,d\theta
$$

令：

$$
u=-r^2,\qquad du=-2r\,dr
$$

则：

$$
\int_0^1e^{-r^2}r\,dr=\frac12(1-e^{-1})
$$

所以原积分为：

$$
\pi(1-e^{-1})
$$

---

# 十四、极坐标适用的典型信号

看到以下结构，应优先考虑极坐标：

1. $x^2+y^2\le R^2$；
2. $a^2\le x^2+y^2\le b^2$；
3. 扇形区域；
4. 被积函数含 $x^2+y^2$；
5. 被积函数含 $\sqrt{x^2+y^2}$。

---

# 十五、常见错误

## 错误 1：漏乘 $r$

错误：

$$
\int\int f(r\cos\theta,r\sin\theta)\,dr\,d\theta
$$

正确：

$$
\int\int f(r\cos\theta,r\sin\theta)r\,dr\,d\theta
$$

---

## 错误 2：把 $x^2+y^2$ 写成 $r$

正确是：

$$
x^2+y^2=r^2
$$

而：

$$
\sqrt{x^2+y^2}=r
$$

---

## 错误 3：半径范围写错

若：

$$
x^2+y^2\le4
$$

则：

$$
r^2\le4
$$

所以：

$$
0\le r\le2
$$

不是 $0\le r\le4$。

---

## 错误 4：角度范围写错

完整圆盘：

$$
0\le\theta\le2\pi
$$

第一象限：

$$
0\le\theta\le\frac{\pi}{2}
$$

上半圆：

$$
0\le\theta\le\pi
$$

右半圆：

$$
-\frac{\pi}{2}\le\theta\le\frac{\pi}{2}
$$

---

## 错误 5：区域不是以原点为中心时机械套公式

例如：

$$
(x-1)^2+y^2\le1
$$

不是直接写成 $0\le r\le1$。本单元先处理以原点为中心的圆形区域。

---

# 十六、练习题

## A 组：概念判断

1. 判断：极坐标中 $x=r\cos\theta,\ y=r\sin\theta$。

2. 判断：极坐标中 $x^2+y^2=r$。

3. 判断：极坐标面积微元是 $dA=r\,dr\,d\theta$。

4. 判断：极坐标积分中可以漏掉 $r$。

5. 判断：圆盘、圆环、扇形区域通常适合用极坐标。

---

## B 组：区域转化

6. 把 $x^2+y^2\le1$ 写成极坐标范围。

7. 把 $x^2+y^2\le4$ 写成极坐标范围。

8. 把 $1\le x^2+y^2\le4$ 写成极坐标范围。

9. 把第一象限单位圆写成极坐标范围。

10. 把上半单位圆写成极坐标范围。

---

## C 组：面积计算

11. 用极坐标计算单位圆面积。

12. 用极坐标计算半径为 $2$ 的圆面积。

13. 用极坐标计算圆环 $1\le x^2+y^2\le4$ 的面积。

14. 用极坐标计算第一象限单位圆面积。

15. 用极坐标计算 $0\le r\le3,\ 0\le\theta\le\frac{\pi}{3}$ 的扇形面积。

---

## D 组：函数积分

16. 计算 $\iint_D(x^2+y^2)\,dA$，其中 $D:x^2+y^2\le1$。

17. 计算 $\iint_D(x^2+y^2)\,dA$，其中 $D:x^2+y^2\le4$。

18. 计算 $\iint_D3\,dA$，其中 $D:x^2+y^2\le1$。

19. 计算 $\iint_Dx\,dA$，其中 $D$ 是第一象限单位圆。

20. 计算 $\iint_Dy\,dA$，其中 $D$ 是第一象限单位圆。

---

## E 组：指数与根式

21. 计算 $\iint_De^{-(x^2+y^2)}\,dA$，其中 $D:x^2+y^2\le1$。

22. 计算 $\iint_D\sqrt{x^2+y^2}\,dA$，其中 $D:x^2+y^2\le1$。

23. 计算 $\iint_D(x^2+y^2)^2\,dA$，其中 $D:x^2+y^2\le1$。

24. 计算 $\iint_D r\,dA$，其中 $D:0\le r\le2,\ 0\le\theta\le\pi$。

25. 计算 $\iint_D1\,dA$，其中 $D:2\le r\le3,\ 0\le\theta\le\frac{\pi}{2}$。

---

## F 组：综合理解

26. 解释为什么极坐标面积微元不是 $dr\,d\theta$。

27. 解释为什么 $x^2+y^2\le4$ 对应 $0\le r\le2$。

28. 判断：若 $D$ 是完整单位圆，则 $\theta$ 可以取 $0\le\theta\le2\pi$。

29. 判断：若 $D$ 是第一象限单位圆，则 $\theta$ 可以取 $0\le\theta\le\frac{\pi}{2}$。

30. 本单元最重要的防错点是什么？

---

# 十七、答案与解析

## A 组答案

1. 正确。

2. 错误。正确是 $x^2+y^2=r^2$。

3. 正确。

4. 错误。

5. 正确。

---

## B 组答案

6.

$$
0\le r\le1,\qquad 0\le\theta\le2\pi
$$

7.

$$
0\le r\le2,\qquad 0\le\theta\le2\pi
$$

8.

$$
1\le r\le2,\qquad 0\le\theta\le2\pi
$$

9.

$$
0\le r\le1,\qquad 0\le\theta\le\frac{\pi}{2}
$$

10.

$$
0\le r\le1,\qquad 0\le\theta\le\pi
$$

---

## C 组答案

11.

$$
\pi
$$

12.

$$
4\pi
$$

13.

$$
3\pi
$$

14.

$$
\frac{\pi}{4}
$$

15.

$$
\frac{3\pi}{2}
$$

---

## D 组答案

16.

$$
\int_0^{2\pi}\int_0^1r^3\,dr\,d\theta=\frac{\pi}{2}
$$

17.

$$
\int_0^{2\pi}\int_0^2r^3\,dr\,d\theta=8\pi
$$

18.

$$
3\pi
$$

19.

$$
\int_0^{\pi/2}\int_0^1r^2\cos\theta\,dr\,d\theta=\frac13
$$

20.

$$
\int_0^{\pi/2}\int_0^1r^2\sin\theta\,dr\,d\theta=\frac13
$$

---

## E 组答案

21.

$$
\pi(1-e^{-1})
$$

22.

$$
\sqrt{x^2+y^2}=r
$$

所以：

$$
\int_0^{2\pi}\int_0^1r^2\,dr\,d\theta=\frac{2\pi}{3}
$$

23.

$$
(x^2+y^2)^2=r^4
$$

所以：

$$
\int_0^{2\pi}\int_0^1r^5\,dr\,d\theta=\frac{\pi}{3}
$$

24.

注意被积函数是 $r$，面积微元仍然还要再乘一个 $r$：

$$
\int_0^\pi\int_0^2r^2\,dr\,d\theta=\frac{8\pi}{3}
$$

25.

$$
\int_0^{\pi/2}\int_2^3r\,dr\,d\theta
=
\frac{5\pi}{4}
$$

---

## F 组答案

26. 因为极坐标小面积块近似是一个小扇形片，径向宽度是 $dr$，横向弧长是 $r\,d\theta$，所以面积是 $r\,dr\,d\theta$。

27. 因为 $x^2+y^2=r^2$，所以 $r^2\le4$。又 $r\ge0$，因此 $0\le r\le2$。

28. 正确。

29. 正确。

30. 本单元最重要的防错点是：极坐标积分中必须把 $dA$ 换成 $r\,dr\,d\theta$，不能漏掉 $r$；同时要正确使用 $x=r\cos\theta,\ y=r\sin\theta,\ x^2+y^2=r^2$，并根据区域确定 $r$ 与 $\theta$ 的范围。

---

# 十八、本课复习讲义

极坐标转换：

$$
x=r\cos\theta,\qquad y=r\sin\theta
$$

$$
x^2+y^2=r^2
$$

面积微元：

$$
dA=r\,dr\,d\theta
$$

因此：

$$
\iint_D f(x,y)\,dA
=
\int_\alpha^\beta\int_{a(\theta)}^{b(\theta)}
f(r\cos\theta,r\sin\theta)r\,dr\,d\theta
$$

圆盘：

$$
x^2+y^2\le R^2
$$

对应：

$$
0\le r\le R,\qquad 0\le\theta\le2\pi
$$

圆环：

$$
a^2\le x^2+y^2\le b^2
$$

对应：

$$
a\le r\le b,\qquad 0\le\theta\le2\pi
$$

极坐标最常见错误是漏掉面积微元中的 $r$。

---

# 十九、进入第 162 单元的条件

进入第 162 单元前，需要能够：

1. 熟练使用 $x=r\cos\theta,\ y=r\sin\theta$；
2. 熟练使用 $x^2+y^2=r^2$；
3. 知道 $dA=r\,dr\,d\theta$；
4. 会描述圆盘、圆环、扇形区域；
5. 会计算基础极坐标二重积分；
6. 不漏乘面积微元中的 $r$。
