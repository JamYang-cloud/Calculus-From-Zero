---
title: 第 154 单元：多元微积分入门六——多元复合函数求导与链式法则
tags:
  - 数学
  - 微积分
  - 多元函数
  - 链式法则
  - 复合函数
  - 偏导数
  - 全微分
created: 2026-07-19
course: 微积分长期学习计划
unit: 154
---

# 第 154 单元：多元微积分入门六——多元复合函数求导与链式法则

第 150 单元学习了偏导数。  
第 152 单元学习了全微分。  
第 153 单元学习了方向导数与梯度。

第 154 单元学习多元函数中非常重要的工具：

$$
\text{链式法则}
$$

一元函数中，如果：

$$
y=f(u),\qquad u=g(x)
$$

那么：

$$
\frac{dy}{dx}=\frac{dy}{du}\frac{du}{dx}
$$

多元函数中，变量之间的依赖关系更多，所以链式法则也有更多形式。本单元重点不是死记公式，而是掌握“变量依赖图”的思路。

---

## 一、本课目标

完成本单元后，需要掌握：

1. 理解多元复合函数的变量依赖关系；
2. 会处理 $z=f(x,y)$，而 $x=x(t),y=y(t)$ 的情况；
3. 会处理 $z=f(x,y)$，而 $x=x(s,t),y=y(s,t)$ 的情况；
4. 会用链式法则计算 $\frac{dz}{dt}$；
5. 会用链式法则计算 $\frac{\partial z}{\partial s},\frac{\partial z}{\partial t}$；
6. 会画或想象变量依赖图；
7. 会区分直接变量和中间变量；
8. 会避免漏掉路径；
9. 会用全微分理解链式法则；
10. 为隐函数求导与多元极值打基础。

---

# 二、一元链式法则回顾

一元复合函数：

$$
z=f(u),\qquad u=g(t)
$$

则：

$$
z=f(g(t))
$$

求导：

$$
\frac{dz}{dt}=\frac{dz}{du}\frac{du}{dt}
$$

它的含义是：

$$
t\text{ 影响 }u,\quad u\text{ 影响 }z
$$

所以：

$$
t\text{ 对 }z\text{ 的影响}
=
t\text{ 对 }u\text{ 的影响}\times u\text{ 对 }z\text{ 的影响}
$$

---

# 三、多元链式法则的基本情形一

设：

$$
z=f(x,y)
$$

而：

$$
x=x(t),\qquad y=y(t)
$$

这时 $z$ 最终也是 $t$ 的函数：

$$
z=f(x(t),y(t))
$$

因为 $t$ 会通过两条路径影响 $z$：

$$
t\to x\to z
$$

$$
t\to y\to z
$$

所以总变化率是两条路径贡献之和：

$$
\frac{dz}{dt}
=
\frac{\partial z}{\partial x}\frac{dx}{dt}
+
\frac{\partial z}{\partial y}\frac{dy}{dt}
$$

也就是：

$$
\boxed{
\frac{dz}{dt}=f_x(x,y)x'(t)+f_y(x,y)y'(t)
}
$$

注意：这里 $z$ 对 $x,y$ 是偏导；而 $x,y$ 对 $t$ 是普通导数。

---

# 四、用全微分理解链式法则

对于：

$$
z=f(x,y)
$$

全微分是：

$$
dz=f_x\,dx+f_y\,dy
$$

如果：

$$
x=x(t),\qquad y=y(t)
$$

那么：

$$
dx=x'(t)\,dt
$$

$$
dy=y'(t)\,dt
$$

代入全微分：

$$
dz=f_x x'(t)\,dt+f_y y'(t)\,dt
$$

两边除以 $dt$：

$$
\frac{dz}{dt}=f_x x'(t)+f_y y'(t)
$$

这就是链式法则。

所以可以这样理解：

$$
\text{全微分是链式法则的来源。}
$$

---

# 五、例题 1：一个参数 $t$

设：

$$
z=x^2+y^2,\qquad x=t,\quad y=t^2
$$

求：

$$
\frac{dz}{dt}
$$

方法一：直接代入。

因为：

$$
z=t^2+t^4
$$

所以：

$$
\frac{dz}{dt}=2t+4t^3
$$

方法二：用链式法则。

先求偏导：

$$
f_x=2x,\qquad f_y=2y
$$

再求：

$$
\frac{dx}{dt}=1,\qquad \frac{dy}{dt}=2t
$$

所以：

$$
\frac{dz}{dt}=2x\cdot1+2y\cdot2t
$$

代入：

$$
x=t,\qquad y=t^2
$$

得到：

$$
\frac{dz}{dt}=2t+4t^3
$$

两种方法一致。

---

# 六、例题 2：乘积型函数

设：

$$
z=xy,\qquad x=t^2,\quad y=\sin t
$$

求：

$$
\frac{dz}{dt}
$$

先求偏导：

$$
z_x=y,\qquad z_y=x
$$

再求：

$$
x'=2t,\qquad y'=\cos t
$$

链式法则：

$$
\frac{dz}{dt}=z_xx'+z_yy'
$$

所以：

$$
\frac{dz}{dt}=y(2t)+x(\cos t)
$$

代入：

$$
x=t^2,\qquad y=\sin t
$$

得到：

$$
\frac{dz}{dt}=2t\sin t+t^2\cos t
$$

这其实就是直接对：

$$
z=t^2\sin t
$$

使用乘积求导。

---

# 七、多元链式法则的基本情形二

设：

$$
z=f(x,y)
$$

而：

$$
x=x(s,t),\qquad y=y(s,t)
$$

这时 $z$ 是 $s,t$ 的函数：

$$
z=f(x(s,t),y(s,t))
$$

若求对 $s$ 的偏导，则固定 $t$，让 $s$ 变化：

$$
\boxed{
\frac{\partial z}{\partial s}
=
\frac{\partial z}{\partial x}\frac{\partial x}{\partial s}
+
\frac{\partial z}{\partial y}\frac{\partial y}{\partial s}
}
$$

若求对 $t$ 的偏导，则固定 $s$，让 $t$ 变化：

$$
\boxed{
\frac{\partial z}{\partial t}
=
\frac{\partial z}{\partial x}\frac{\partial x}{\partial t}
+
\frac{\partial z}{\partial y}\frac{\partial y}{\partial t}
}
$$

这里每一个外层变量都要分别套一次链式法则。

---

# 八、例题 3：两个参数 $s,t$

设：

$$
z=x^2+y^2
$$

其中：

$$
x=s+t,\qquad y=s-t
$$

求：

$$
\frac{\partial z}{\partial s},\qquad \frac{\partial z}{\partial t}
$$

先求：

$$
z_x=2x,\qquad z_y=2y
$$

再求：

$$
x_s=1,\qquad y_s=1
$$

所以：

$$
z_s=z_xx_s+z_yy_s=2x+2y
$$

代入：

$$
x=s+t,\qquad y=s-t
$$

得到：

$$
z_s=2(s+t)+2(s-t)=4s
$$

再求 $z_t$：

$$
x_t=1,\qquad y_t=-1
$$

所以：

$$
z_t=z_xx_t+z_yy_t=2x-2y
$$

代入：

$$
z_t=2(s+t)-2(s-t)=4t
$$

因此：

$$
\frac{\partial z}{\partial s}=4s,\qquad \frac{\partial z}{\partial t}=4t
$$

验证：直接代入有：

$$
z=(s+t)^2+(s-t)^2=2s^2+2t^2
$$

所以：

$$
z_s=4s,\qquad z_t=4t
$$

一致。

---

# 九、变量依赖图

对于：

$$
z=f(x,y),\qquad x=x(s,t),\quad y=y(s,t)
$$

变量依赖关系可以画成：

$$
s\to x\to z
$$

$$
s\to y\to z
$$

所以：

$$
z_s=z_xx_s+z_yy_s
$$

同理：

$$
t\to x\to z
$$

$$
t\to y\to z
$$

所以：

$$
z_t=z_xx_t+z_yy_t
$$

核心原则：

$$
\boxed{\text{从目标变量出发，找所有通向结果变量的路径，每条路径求导相乘，最后相加。}}
$$

---

# 十、例题 4：指数复合函数

设：

$$
z=e^{xy}
$$

其中：

$$
x=s^2+t,\qquad y=st
$$

求：

$$
z_s,\qquad z_t
$$

先求外层偏导：

$$
z_x=ye^{xy},\qquad z_y=xe^{xy}
$$

再求中间变量偏导：

$$
x_s=2s,\qquad x_t=1
$$

$$
y_s=t,\qquad y_t=s
$$

所以：

$$
z_s=z_xx_s+z_yy_s
$$

即：

$$
z_s=ye^{xy}(2s)+xe^{xy}(t)
$$

所以：

$$
z_s=e^{xy}(2sy+tx)
$$

代入 $x=s^2+t,\ y=st$，可写成：

$$
z_s=e^{(s^2+t)st}\left(2s\cdot st+t(s^2+t)\right)
$$

即：

$$
z_s=e^{(s^2+t)st}(3s^2t+t^2)
$$

再求：

$$
z_t=z_xx_t+z_yy_t
$$

得到：

$$
z_t=ye^{xy}(1)+xe^{xy}(s)
$$

所以：

$$
z_t=e^{xy}(y+sx)
$$

代入：

$$
z_t=e^{(s^2+t)st}\left(st+s(s^2+t)\right)
$$

即：

$$
z_t=e^{(s^2+t)st}(s^3+2st)
$$

---

# 十一、常见结构：$u=f(x,y)$，其中 $x=r\cos\theta,\ y=r\sin\theta$

极坐标中经常出现：

$$
u=f(x,y)
$$

其中：

$$
x=r\cos\theta,\qquad y=r\sin\theta
$$

此时：

$$
u_r=u_xx_r+u_yy_r
$$

由于：

$$
x_r=\cos\theta,\qquad y_r=\sin\theta
$$

所以：

$$
u_r=u_x\cos\theta+u_y\sin\theta
$$

又：

$$
u_\theta=u_xx_\theta+u_yy_\theta
$$

其中：

$$
x_\theta=-r\sin\theta,\qquad y_\theta=r\cos\theta
$$

所以：

$$
u_\theta=-r u_x\sin\theta+r u_y\cos\theta
$$

本阶段不要求熟练变换偏微分方程，但要理解这是链式法则的直接应用。

---

# 十二、例题 5：极坐标型链式法则

设：

$$
u=x^2+y^2
$$

其中：

$$
x=r\cos\theta,\qquad y=r\sin\theta
$$

求：

$$
u_r,\qquad u_\theta
$$

方法一：直接代入。

$$
u=r^2\cos^2\theta+r^2\sin^2\theta=r^2
$$

所以：

$$
u_r=2r,\qquad u_\theta=0
$$

方法二：链式法则。

先求：

$$
u_x=2x,\qquad u_y=2y
$$

对于 $r$：

$$
x_r=\cos\theta,\qquad y_r=\sin\theta
$$

所以：

$$
u_r=2x\cos\theta+2y\sin\theta
$$

代入：

$$
x=r\cos\theta,\qquad y=r\sin\theta
$$

得到：

$$
u_r=2r\cos^2\theta+2r\sin^2\theta=2r
$$

对于 $\theta$：

$$
x_\theta=-r\sin\theta,\qquad y_\theta=r\cos\theta
$$

所以：

$$
u_\theta=2x(-r\sin\theta)+2y(r\cos\theta)
$$

代入后：

$$
u_\theta=-2r^2\cos\theta\sin\theta+2r^2\sin\theta\cos\theta=0
$$

---

# 十三、链式法则与梯度的关系

对于：

$$
z=f(x,y)
$$

若点沿参数曲线：

$$
\mathbf r(t)=(x(t),y(t))
$$

移动，则：

$$
\frac{dz}{dt}=f_xx'(t)+f_yy'(t)
$$

可以写成：

$$
\frac{dz}{dt}=\nabla f\cdot \mathbf r'(t)
$$

其中：

$$
\nabla f=(f_x,f_y)
$$

而：

$$
\mathbf r'(t)=(x'(t),y'(t))
$$

这说明：沿一条曲线移动时，函数值变化率等于梯度与路径速度向量的点积。

如果 $\mathbf r'(t)$ 是单位向量，这就变成方向导数公式。

---

# 十四、例题 6：沿曲线的变化率

设：

$$
f(x,y)=x^2+y^2
$$

点沿曲线：

$$
x=t,\qquad y=t^2
$$

移动。求 $t=1$ 时 $f$ 的变化率。

由前面例题：

$$
\frac{df}{dt}=2t+4t^3
$$

代入：

$$
t=1
$$

得到：

$$
\frac{df}{dt}=6
$$

也可用梯度形式：

$$
\nabla f=(2x,2y)
$$

当 $t=1$ 时：

$$
(x,y)=(1,1)
$$

所以：

$$
\nabla f=(2,2)
$$

路径速度：

$$
\mathbf r'(t)=(1,2t)
$$

当 $t=1$：

$$
\mathbf r'(1)=(1,2)
$$

点积：

$$
(2,2)\cdot(1,2)=2+4=6
$$

一致。

---

# 十五、常见错误

## 错误 1：漏掉一条路径

若：

$$
z=f(x,y),\quad x=x(t),\quad y=y(t)
$$

则：

$$
\frac{dz}{dt}=z_xx'+z_yy'
$$

不能只写：

$$
z_xx'
$$

也不能只写：

$$
z_yy'
$$

因为 $t$ 同时通过 $x,y$ 两条路径影响 $z$。

---

## 错误 2：偏导和普通导数混写

在：

$$
z=f(x,y),\quad x=x(t),\quad y=y(t)
$$

中：

$$
z_x,z_y
$$

是偏导数；

$$
x',y'
$$

是普通导数。

---

## 错误 3：求 $z_s$ 时把 $t$ 也当变量乱动

若求：

$$
\frac{\partial z}{\partial s}
$$

则 $t$ 固定。只计算：

$$
x_s,\quad y_s
$$

不能把 $x_t,y_t$ 混入。

---

## 错误 4：链式法则后忘记代回中间变量

如果结果要求用 $s,t$ 表示，那么最后要把：

$$
x=x(s,t),\qquad y=y(s,t)
$$

代回。

---

## 错误 5：把变量依赖关系看错

求导前先看清楚：

$$
z\text{ 依赖谁？}
$$

$$
x,y\text{ 又依赖谁？}
$$

变量依赖关系错了，公式必然错。

---

# 十六、练习题

## A 组：概念判断

1. 判断：多元链式法则的关键是看清变量依赖关系。

2. 判断：若 $z=f(x,y)$，且 $x,y$ 都依赖 $t$，则 $\frac{dz}{dt}$ 一般有两项。

3. 判断：若 $z=f(x,y)$，$x=x(s,t)$，$y=y(s,t)$，则 $z_s=z_xx_s+z_yy_s$。

4. 判断：求 $z_s$ 时，$t$ 固定。

5. 判断：链式法则中所有路径的贡献要相加。

---

## B 组：一个参数 $t$

6. 设 $z=x^2+y^2,\ x=t,\ y=t^2$，求 $\frac{dz}{dt}$。

7. 设 $z=xy,\ x=t^2,\ y=\sin t$，求 $\frac{dz}{dt}$。

8. 设 $z=e^{xy},\ x=t,\ y=t^2$，求 $\frac{dz}{dt}$。

9. 设 $z=\ln(x+y),\ x=t^2,\ y=t$，求 $\frac{dz}{dt}$。

10. 设 $z=\sin(x+y),\ x=t,\ y=2t$，求 $\frac{dz}{dt}$。

---

## C 组：两个参数 $s,t$

11. 设 $z=x^2+y^2,\ x=s+t,\ y=s-t$，求 $z_s,z_t$。

12. 设 $z=xy,\ x=s^2,\ y=t^2$，求 $z_s,z_t$。

13. 设 $z=x+y,\ x=st,\ y=s+t$，求 $z_s,z_t$。

14. 设 $z=e^{x+y},\ x=s^2+t,\ y=s-t$，求 $z_s,z_t$。

15. 设 $z=\ln(xy),\ x=s,\ y=t$，求 $z_s,z_t$。

---

## D 组：极坐标型

16. 设 $u=x^2+y^2,\ x=r\cos\theta,\ y=r\sin\theta$，求 $u_r,u_\theta$。

17. 设 $u=x,\ x=r\cos\theta,\ y=r\sin\theta$，求 $u_r,u_\theta$。

18. 设 $u=y,\ x=r\cos\theta,\ y=r\sin\theta$，求 $u_r,u_\theta$。

19. 设 $u=xy,\ x=r\cos\theta,\ y=r\sin\theta$，求 $u_r,u_\theta$。

20. 设 $u=e^{x^2+y^2}$，$x=r\cos\theta,\ y=r\sin\theta$，求 $u_r,u_\theta$。

---

## E 组：沿曲线变化率

21. 设 $f(x,y)=x^2+y^2$，$x=t,\ y=t^2$，求 $t=1$ 时 $\frac{df}{dt}$。

22. 设 $f(x,y)=xy$，$x=t^2,\ y=t+1$，求 $t=1$ 时 $\frac{df}{dt}$。

23. 设 $f(x,y)=e^{xy}$，$x=t,\ y=1-t$，求 $t=0$ 时 $\frac{df}{dt}$。

24. 设 $f(x,y)=\ln(x+y)$，$x=t^2+1,\ y=t$，求 $t=1$ 时 $\frac{df}{dt}$。

25. 设 $f(x,y)=\sin(x+y)$，$x=t,\ y=t^2$，求 $t=0$ 时 $\frac{df}{dt}$。

---

## F 组：综合判断

26. 判断：链式法则可以写成 $\frac{df}{dt}=\nabla f\cdot \mathbf r'(t)$。

27. 判断：如果 $x,y$ 都依赖 $t$，求导时可以只考虑 $x$ 的变化。

28. 判断：若要求最终结果用 $s,t$ 表示，就要把 $x,y$ 代回。

29. 判断：链式法则本质上是在统计所有变量传递路径的影响。

30. 本单元最重要的防错点是什么？

---

# 十七、答案与解析

## A 组答案

1. 正确。

2. 正确。

3. 正确。

4. 正确。

5. 正确。

---

## B 组答案

6.

$$
\frac{dz}{dt}=2t+4t^3
$$

7.

$$
\frac{dz}{dt}=2t\sin t+t^2\cos t
$$

8.

$$
z=e^{t^3}
$$

所以：

$$
\frac{dz}{dt}=3t^2e^{t^3}
$$

也可由链式法则得到。

9.

$$
z=\ln(t^2+t)
$$

所以：

$$
\frac{dz}{dt}=\frac{2t+1}{t^2+t}
$$

10.

$$
z=\sin(3t)
$$

所以：

$$
\frac{dz}{dt}=3\cos(3t)
$$

---

## C 组答案

11.

$$
z_s=4s,\qquad z_t=4t
$$

12.

因为：

$$
z=s^2t^2
$$

所以：

$$
z_s=2st^2,\qquad z_t=2s^2t
$$

13.

$$
z=st+s+t
$$

所以：

$$
z_s=t+1,\qquad z_t=s+1
$$

14.

$$
x+y=s^2+t+s-t=s^2+s
$$

所以：

$$
z=e^{s^2+s}
$$

因此：

$$
z_s=(2s+1)e^{s^2+s},\qquad z_t=0
$$

15.

$$
z=\ln(st)
$$

所以：

$$
z_s=\frac1s,\qquad z_t=\frac1t
$$

---

## D 组答案

16.

$$
u=r^2
$$

所以：

$$
u_r=2r,\qquad u_\theta=0
$$

17.

$$
u=r\cos\theta
$$

所以：

$$
u_r=\cos\theta,\qquad u_\theta=-r\sin\theta
$$

18.

$$
u=r\sin\theta
$$

所以：

$$
u_r=\sin\theta,\qquad u_\theta=r\cos\theta
$$

19.

$$
u=r^2\cos\theta\sin\theta
$$

所以：

$$
u_r=2r\cos\theta\sin\theta
$$

$$
u_\theta=r^2(\cos^2\theta-\sin^2\theta)
$$

20.

$$
u=e^{r^2}
$$

所以：

$$
u_r=2re^{r^2},\qquad u_\theta=0
$$

---

## E 组答案

21.

$$
\frac{df}{dt}=2t+4t^3
$$

代入 $t=1$：

$$
6
$$

22.

$$
f=t^2(t+1)=t^3+t^2
$$

所以：

$$
f'=3t^2+2t
$$

代入 $t=1$：

$$
5
$$

23.

$$
f=e^{t(1-t)}
$$

所以：

$$
f'=(1-2t)e^{t(1-t)}
$$

代入 $t=0$：

$$
1
$$

24.

$$
f=\ln(t^2+t+1)
$$

所以：

$$
f'=\frac{2t+1}{t^2+t+1}
$$

代入 $t=1$：

$$
1
$$

25.

$$
f=\sin(t+t^2)
$$

所以：

$$
f'=\cos(t+t^2)(1+2t)
$$

代入 $t=0$：

$$
1
$$

---

## F 组答案

26. 正确。

27. 错误。必须同时考虑 $x,y$ 两条路径。

28. 正确。

29. 正确。

30. 本单元最重要的防错点是：先画清变量依赖关系，不能漏掉任何路径；求 $z_s$ 时只用 $x_s,y_s$，求 $z_t$ 时只用 $x_t,y_t$，最后按题目要求代回中间变量。

---

# 十八、本课复习讲义

多元链式法则的核心是变量依赖关系。

若：

$$
z=f(x,y),\quad x=x(t),\quad y=y(t)
$$

则：

$$
\frac{dz}{dt}=z_x\frac{dx}{dt}+z_y\frac{dy}{dt}
$$

若：

$$
z=f(x,y),\quad x=x(s,t),\quad y=y(s,t)
$$

则：

$$
z_s=z_xx_s+z_yy_s
$$

$$
z_t=z_xx_t+z_yy_t
$$

从图像上看，就是每条从自变量到结果变量的路径都贡献一项，所有路径贡献相加。

链式法则还可以写成：

$$
\frac{df}{dt}=\nabla f\cdot \mathbf r'(t)
$$

其中：

$$
\mathbf r(t)=(x(t),y(t))
$$

---

# 十九、进入第 155 单元的条件

进入第 155 单元前，需要能够：

1. 看清变量依赖关系；
2. 处理 $z=f(x,y)$ 且 $x,y$ 依赖 $t$ 的链式法则；
3. 处理 $z=f(x,y)$ 且 $x,y$ 依赖 $s,t$ 的链式法则；
4. 会处理极坐标型复合函数；
5. 会用梯度与路径速度理解沿曲线变化率。
