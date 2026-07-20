---
title: 第 36 单元：三角函数阶段总结与测试
tags:
  - 数学
  - 微积分
  - 三角函数
  - 阶段测试
  - 综合复习
  - 单位圆
  - 三角恒等式
  - 三角方程
  - 三角建模
created: 2026-06-22
course: 微积分长期学习计划
unit: 36
---

# 第 36 单元：三角函数阶段总结与测试

第 25–35 单元完成了三角函数模块的主要内容。

本单元是三角函数阶段总结与测试。完成本单元后，如果通过，就进入下一大模块：

> 指数函数与对数函数。

三角函数是微积分中非常重要的一类函数。后续会在以下内容中反复出现：

1. 三角函数极限；
2. 三角函数导数；
3. 三角函数积分；
4. 周期函数建模；
5. 振动、波动与简谐运动；
6. 泰勒展开；
7. 微分方程；
8. 多元微积分中的极坐标和圆周运动。

因此，本单元不是简单复习，而是一次阶段性确认。

---

## 一、本课目标

完成本课后，需要确认：

1. 能熟练进行角度和弧度换算。
2. 能用单位圆解释 $\sin,\cos,\tan$。
3. 能熟练写出特殊角三角函数值。
4. 能根据象限确定正负号。
5. 能掌握 $\sin x,\cos x,\tan x$ 的图像性质。
6. 能处理振幅、周期、中线和值域。
7. 能熟练使用三角恒等式。
8. 能使用和差角公式。
9. 能使用倍角公式和降幂公式。
10. 能解基础三角方程。
11. 能建立简单三角函数模型。
12. 能知道哪些地方需要写限制条件。

---

# 二、知识框架总览

三角函数模块可以整理为以下链条：

$$
\text{角与弧度}
\rightarrow
\text{单位圆}
\rightarrow
\sin,\cos,\tan
\rightarrow
\text{特殊角值}
\rightarrow
\text{图像性质}
\rightarrow
\text{图像变换}
\rightarrow
\text{恒等式}
\rightarrow
\text{和差角公式}
\rightarrow
\text{倍角公式}
\rightarrow
\text{三角方程}
\rightarrow
\text{应用建模}
$$

这条链条中，前面的内容是后面内容的基础。

如果单位圆不清楚，特殊角值容易混乱。

如果特殊角值不熟，方程和公式计算会出错。

如果图像不熟，周期、振幅和建模会出错。

如果恒等式不熟，后续导数、积分和极限会受影响。

---

# 三、角度与弧度总结

核心关系：

$$
180^\circ=\pi
$$

$$
360^\circ=2\pi
$$

角度转弧度：

$$
\text{弧度}=\text{角度}\cdot\frac{\pi}{180^\circ}
$$

弧度转角度：

$$
\text{角度}=\text{弧度}\cdot\frac{180^\circ}{\pi}
$$

常用角：

|          角度 |               弧度 |
| ----------: | ---------------: |
|  $30^\circ$ |  $\frac{\pi}{6}$ |
|  $45^\circ$ |  $\frac{\pi}{4}$ |
|  $60^\circ$ |  $\frac{\pi}{3}$ |
|  $90^\circ$ |  $\frac{\pi}{2}$ |
| $120^\circ$ | $\frac{2\pi}{3}$ |
| $135^\circ$ | $\frac{3\pi}{4}$ |
| $150^\circ$ | $\frac{5\pi}{6}$ |
| $180^\circ$ |            $\pi$ |
| $270^\circ$ | $\frac{3\pi}{2}$ |
| $360^\circ$ |           $2\pi$ |

微积分中默认使用弧度。

原因是：弧度由弧长和半径定义：

$$
\theta=\frac{s}{r}
$$

在单位圆中：

$$
r=1
$$

所以：

$$
\theta=s
$$

即角的弧度数等于单位圆上的弧长。这使得角的变化与长度变化直接对应。

---

# 四、单位圆总结

单位圆：

$$
x^2+y^2=1
$$

单位圆上角 $\theta$ 对应点：

$$
(\cos\theta,\sin\theta)
$$

因此：

$$
\cos\theta=\text{横坐标}
$$

$$
\sin\theta=\text{纵坐标}
$$

正切：

$$
\tan\theta=\frac{\sin\theta}{\cos\theta}
$$

限制条件：

$$
\cos\theta\ne0
$$

也就是：

$$
\theta\ne\frac{\pi}{2}+k\pi,\quad k\in\mathbb{Z}
$$

这是必须保留的条件。

---

# 五、特殊角值总结

第一象限特殊角表：

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
|---:|---:|---:|---:|
| $0$ | $0$ | $1$ | $0$ |
| $\frac{\pi}{6}$ | $\frac12$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt3}{3}$ |
| $\frac{\pi}{4}$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt2}{2}$ | $1$ |
| $\frac{\pi}{3}$ | $\frac{\sqrt3}{2}$ | $\frac12$ | $\sqrt3$ |
| $\frac{\pi}{2}$ | $1$ | $0$ | 无定义 |

记忆重点：

$$
\sin:
0,\frac12,\frac{\sqrt2}{2},\frac{\sqrt3}{2},1
$$

$$
\cos:
1,\frac{\sqrt3}{2},\frac{\sqrt2}{2},\frac12,0
$$

正切由：

$$
\tan\theta=\frac{\sin\theta}{\cos\theta}
$$

得到。

---

# 六、象限符号总结

| 象限 | $\sin$ | $\cos$ | $\tan$ |
|---|---:|---:|---:|
| 第一象限 | 正 | 正 | 正 |
| 第二象限 | 正 | 负 | 负 |
| 第三象限 | 负 | 负 | 正 |
| 第四象限 | 负 | 正 | 负 |

参考角只决定绝对值，象限决定正负号。

例如：

$$
\sin\frac{5\pi}{6}=\frac12
$$

$$
\cos\frac{5\pi}{6}=-\frac{\sqrt3}{2}
$$

$$
\tan\frac{5\pi}{6}=-\frac{\sqrt3}{3}
$$

因为 $\frac{5\pi}{6}$ 在第二象限，正弦为正，余弦和正切为负。

---

# 七、三大基本三角函数性质

## 1. 正弦函数

$$
y=\sin x
$$

关键点：

$$
(0,0),\quad \left(\frac{\pi}{2},1\right),\quad (\pi,0),\quad \left(\frac{3\pi}{2},-1\right),\quad (2\pi,0)
$$

性质：

- 定义域：$(-\infty,+\infty)$；
- 值域：$[-1,1]$；
- 周期：$2\pi$；
- 奇偶性：奇函数；
- 零点：$x=k\pi,\ k\in\mathbb{Z}$。

---

## 2. 余弦函数

$$
y=\cos x
$$

关键点：

$$
(0,1),\quad \left(\frac{\pi}{2},0\right),\quad (\pi,-1),\quad \left(\frac{3\pi}{2},0\right),\quad (2\pi,1)
$$

性质：

- 定义域：$(-\infty,+\infty)$；
- 值域：$[-1,1]$；
- 周期：$2\pi$；
- 奇偶性：偶函数；
- 零点：$x=\frac{\pi}{2}+k\pi,\ k\in\mathbb{Z}$。

---

## 3. 正切函数

$$
y=\tan x
$$

性质：

- 定义域：$x\ne\frac{\pi}{2}+k\pi,\ k\in\mathbb{Z}$；
- 值域：$(-\infty,+\infty)$；
- 周期：$\pi$；
- 奇偶性：奇函数；
- 零点：$x=k\pi,\ k\in\mathbb{Z}$；
- 竖直渐近线：$x=\frac{\pi}{2}+k\pi,\ k\in\mathbb{Z}$。

正切函数没有振幅，因为它没有最大值和最小值。

---

# 八、图像变换总结

对于：

$$
y=A\sin(Bx)+D
$$

或：

$$
y=A\cos(Bx)+D
$$

振幅：

$$
|A|
$$

周期：

$$
\frac{2\pi}{|B|}
$$

中线：

$$
y=D
$$

值域：

$$
[D-|A|,D+|A|]
$$

对于：

$$
y=\tan(Bx)+D
$$

周期：

$$
\frac{\pi}{|B|}
$$

值域仍是：

$$
(-\infty,+\infty)
$$

没有振幅。

常见错误是忘记中线平移。

例如：

$$
y=4\sin x-2
$$

不是值域 $[-4,4]$，而是：

$$
[-6,2]
$$

因为中线是：

$$
y=-2
$$

振幅是：

$$
4
$$

---

# 九、基本恒等式总结

最基本恒等式：

$$
\sin^2 x+\cos^2 x=1
$$

变形：

$$
1-\sin^2 x=\cos^2 x
$$

$$
1-\cos^2 x=\sin^2 x
$$

商数恒等式：

$$
\tan x=\frac{\sin x}{\cos x},\quad \cos x\ne0
$$

奇偶恒等式：

$$
\sin(-x)=-\sin x
$$

$$
\cos(-x)=\cos x
$$

$$
\tan(-x)=-\tan x
$$

周期恒等式：

$$
\sin(x+2k\pi)=\sin x,\quad k\in\mathbb{Z}
$$

$$
\cos(x+2k\pi)=\cos x,\quad k\in\mathbb{Z}
$$

$$
\tan(x+k\pi)=\tan x,\quad k\in\mathbb{Z}
$$

余角恒等式：

$$
\sin\left(\frac{\pi}{2}-x\right)=\cos x
$$

$$
\cos\left(\frac{\pi}{2}-x\right)=\sin x
$$

---

# 十、和差角公式总结

正弦和角：

$$
\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta
$$

正弦差角：

$$
\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta
$$

余弦和角：

$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta
$$

余弦差角：

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

$$
\text{正弦同号，余弦反号}
$$

---

# 十一、倍角公式总结

正弦倍角：

$$
\sin 2x=2\sin x\cos x
$$

余弦倍角：

$$
\cos 2x=\cos^2 x-\sin^2 x
$$

$$
\cos 2x=1-2\sin^2 x
$$

$$
\cos 2x=2\cos^2 x-1
$$

正切倍角：

$$
\tan 2x=\frac{2\tan x}{1-\tan^2 x}
$$

需要注意限制条件：

$$
1-\tan^2 x\ne0
$$

降幂公式：

$$
\sin^2 x=\frac{1-\cos 2x}{2}
$$

$$
\cos^2 x=\frac{1+\cos 2x}{2}
$$

这些公式后续在积分中非常重要。

---

# 十二、三角方程总结

在区间：

$$
[0,2\pi]
$$

上解三角方程时：

1. 化成 $\sin x=a$、$\cos x=a$ 或 $\tan x=a$。
2. 检查是否在值域内。
3. 找参考角。
4. 根据象限判断正负号。
5. 写出所有解。
6. 注意端点是否包含。

例如：

$$
\sin x=\frac12
$$

解为：

$$
x=\frac{\pi}{6},\quad \frac{5\pi}{6}
$$

$$
\cos x=-\frac12
$$

解为：

$$
x=\frac{2\pi}{3},\quad \frac{4\pi}{3}
$$

$$
\tan x=1
$$

解为：

$$
x=\frac{\pi}{4},\quad \frac{5\pi}{4}
$$

---

# 十三、三角建模总结

常用模型：

$$
y=A\sin(B(t-C))+D
$$

或：

$$
y=A\cos(B(t-C))+D
$$

振幅：

$$
|A|=\frac{\text{最大值}-\text{最小值}}{2}
$$

中线：

$$
D=\frac{\text{最大值}+\text{最小值}}{2}
$$

周期：

$$
T=\frac{2\pi}{|B|}
$$

所以：

$$
B=\frac{2\pi}{T}
$$

选择模型：

- 从中线向上开始：用正弦；
- 从最高点开始：用余弦；
- 从最低点开始：用负余弦；
- 不在特殊位置开始：使用水平平移。

---

# 十四、阶段测试题

本测试共 36 题。建议独立完成，不看答案。

---

## A 组：弧度、单位圆与特殊值

1. 把 $150^\circ$ 转成弧度。

2. 把 $\frac{4\pi}{3}$ 转成角度。

3. 单位圆上角 $\theta$ 对应点为 $(x,y)$，写出 $\sin\theta,\cos\theta,\tan\theta$。

4. 求 $\sin\frac{\pi}{6},\cos\frac{\pi}{6},\tan\frac{\pi}{6}$。

5. 求 $\sin\frac{2\pi}{3},\cos\frac{2\pi}{3},\tan\frac{2\pi}{3}$。

6. 求 $\sin\frac{7\pi}{4},\cos\frac{7\pi}{4},\tan\frac{7\pi}{4}$。

---

## B 组：图像性质与图像变换

7. 写出 $y=\sin x$ 的定义域、值域、周期和奇偶性。

8. 写出 $y=\cos x$ 的定义域、值域、周期和奇偶性。

9. 写出 $y=\tan x$ 的定义域、值域和周期。

10. 求 $y=3\sin(2x)-1$ 的振幅、周期、中线和值域。

11. 求 $y=-4\cos\left(\frac12x\right)+2$ 的振幅、周期、中线和值域。

12. 求 $y=\tan(3x)$ 的周期和定义域。

---

## C 组：恒等式与化简

13. 化简 $1-\sin^2 x$。

14. 化简 $1-\cos^2 x$。

15. 化简 $\frac{\sin x}{\cos x}$，并写出限制条件。

16. 化简 $\frac{1-\sin^2 x}{\cos x}$。

17. 化简 $2\sin x\cos x$。

18. 化简 $1-2\sin^2 x$。

---

## D 组：和差角与倍角

19. 写出 $\sin(\alpha+\beta)$ 的公式。

20. 写出 $\cos(\alpha-\beta)$ 的公式。

21. 计算 $\sin75^\circ$。

22. 计算 $\cos15^\circ$。

23. 写出 $\sin 2x$ 的公式。

24. 写出 $\cos 2x$ 的三种公式。

---

## E 组：三角方程

25. 解 $\sin x=\frac12,\ x\in[0,2\pi]$。

26. 解 $\cos x=-\frac12,\ x\in[0,2\pi]$。

27. 解 $\tan x=-1,\ x\in[0,2\pi]$。

28. 解 $2\sin x+\sqrt3=0,\ x\in[0,2\pi]$。

29. 解 $2\cos x-\sqrt2=0,\ x\in[0,2\pi]$。

30. 说明为什么 $\sin x=2$ 无解。

---

## F 组：三角建模与概念解释

31. 某量最大值为 $18$，最小值为 $6$，求振幅和中线。

32. 某周期函数周期为 $24$，求正弦模型中的 $B$。

33. 某温度最高 $30^\circ C$，最低 $10^\circ C$，周期 $24$ 小时，且 $t=0$ 时从中线向上变化，建立模型。

34. 摩天轮半径 $20$ 米，中心高度 $25$ 米，周期 $60$ 秒，且 $t=0$ 时在最高点，建立高度模型。

35. 为什么微积分中使用弧度而不是角度？

36. 为什么使用 $\tan x=\frac{\sin x}{\cos x}$ 时必须写 $\cos x\ne0$？

---

# 十五、阶段测试答案

## A 组答案

1.

$$
150^\circ=\frac{5\pi}{6}
$$

2.

$$
\frac{4\pi}{3}=240^\circ
$$

3.

$$
\sin\theta=y
$$

$$
\cos\theta=x
$$

$$
\tan\theta=\frac{y}{x},\quad x\ne0
$$

4.

$$
\sin\frac{\pi}{6}=\frac12
$$

$$
\cos\frac{\pi}{6}=\frac{\sqrt3}{2}
$$

$$
\tan\frac{\pi}{6}=\frac{\sqrt3}{3}
$$

5.

$$
\sin\frac{2\pi}{3}=\frac{\sqrt3}{2}
$$

$$
\cos\frac{2\pi}{3}=-\frac12
$$

$$
\tan\frac{2\pi}{3}=-\sqrt3
$$

6.

$$
\sin\frac{7\pi}{4}=-\frac{\sqrt2}{2}
$$

$$
\cos\frac{7\pi}{4}=\frac{\sqrt2}{2}
$$

$$
\tan\frac{7\pi}{4}=-1
$$

---

## B 组答案

7.

定义域：

$$
(-\infty,+\infty)
$$

值域：

$$
[-1,1]
$$

周期：

$$
2\pi
$$

奇偶性：奇函数。

8.

定义域：

$$
(-\infty,+\infty)
$$

值域：

$$
[-1,1]
$$

周期：

$$
2\pi
$$

奇偶性：偶函数。

9.

定义域：

$$
x\ne\frac{\pi}{2}+k\pi,\quad k\in\mathbb{Z}
$$

值域：

$$
(-\infty,+\infty)
$$

周期：

$$
\pi
$$

10.

$$
y=3\sin(2x)-1
$$

振幅：

$$
3
$$

周期：

$$
\frac{2\pi}{2}=\pi
$$

中线：

$$
y=-1
$$

值域：

$$
[-1-3,-1+3]=[-4,2]
$$

11.

$$
y=-4\cos\left(\frac12x\right)+2
$$

振幅：

$$
4
$$

周期：

$$
\frac{2\pi}{1/2}=4\pi
$$

中线：

$$
y=2
$$

值域：

$$
[2-4,2+4]=[-2,6]
$$

12.

周期：

$$
\frac{\pi}{3}
$$

定义域：

$$
3x\ne\frac{\pi}{2}+k\pi,\quad k\in\mathbb{Z}
$$

所以：

$$
x\ne\frac{\pi}{6}+\frac{k\pi}{3},\quad k\in\mathbb{Z}
$$

---

## C 组答案

13.

$$
\cos^2 x
$$

14.

$$
\sin^2 x
$$

15.

$$
\frac{\sin x}{\cos x}=\tan x,\quad \cos x\ne0
$$

16.

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

17.

$$
2\sin x\cos x=\sin 2x
$$

18.

$$
1-2\sin^2 x=\cos 2x
$$

---

## D 组答案

19.

$$
\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta
$$

20.

$$
\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta
$$

21.

$$
\sin75^\circ=\frac{\sqrt6+\sqrt2}{4}
$$

22.

$$
\cos15^\circ=\frac{\sqrt6+\sqrt2}{4}
$$

23.

$$
\sin 2x=2\sin x\cos x
$$

24.

$$
\cos 2x=\cos^2 x-\sin^2 x
$$

$$
\cos 2x=1-2\sin^2 x
$$

$$
\cos 2x=2\cos^2 x-1
$$

---

## E 组答案

25.

$$
x=\frac{\pi}{6},\quad \frac{5\pi}{6}
$$

26.

$$
x=\frac{2\pi}{3},\quad \frac{4\pi}{3}
$$

27.

$$
x=\frac{3\pi}{4},\quad \frac{7\pi}{4}
$$

28.

$$
2\sin x+\sqrt3=0
$$

$$
\sin x=-\frac{\sqrt3}{2}
$$

所以：

$$
x=\frac{4\pi}{3},\quad \frac{5\pi}{3}
$$

29.

$$
2\cos x-\sqrt2=0
$$

$$
\cos x=\frac{\sqrt2}{2}
$$

所以：

$$
x=\frac{\pi}{4},\quad \frac{7\pi}{4}
$$

30. 因为：

$$
-1\le\sin x\le1
$$

所以 $\sin x$ 不可能等于 $2$。

---

## F 组答案

31.

振幅：

$$
\frac{18-6}{2}=6
$$

中线：

$$
\frac{18+6}{2}=12
$$

32.

$$
B=\frac{2\pi}{24}=\frac{\pi}{12}
$$

33.

最大值 $30$，最小值 $10$：

$$
A=10,\quad D=20
$$

周期 $24$：

$$
B=\frac{\pi}{12}
$$

从中线向上变化，用正弦：

$$
T(t)=10\sin\left(\frac{\pi}{12}t\right)+20
$$

34.

半径为振幅：

$$
A=20
$$

中心高度为中线：

$$
D=25
$$

周期：

$$
60
$$

所以：

$$
B=\frac{2\pi}{60}=\frac{\pi}{30}
$$

最高点开始，用余弦：

$$
h(t)=20\cos\left(\frac{\pi}{30}t\right)+25
$$

35. 因为弧度来自：

$$
\theta=\frac{s}{r}
$$

在单位圆中弧度数等于弧长，能让角的变化与长度变化直接对应。这样三角函数的极限、导数和积分公式最自然。

36. 因为分母不能为 $0$。当：

$$
\cos x=0
$$

时：

$$
\frac{\sin x}{\cos x}
$$

无定义，所以必须写：

$$
\cos x\ne0
$$

---

# 十六、通过标准

如果出现以下情况，建议复习对应单元：

1. 弧度换算错误：复习第 25 单元。
2. 特殊角值混淆：复习第 26 单元。
3. 图像性质错误：复习第 27 单元。
4. 振幅、周期、中线、值域错误：复习第 28、35 单元。
5. 恒等式化简错误：复习第 29、30 单元。
6. 三角方程错误：复习第 31 单元。
7. 和差角、倍角公式错误：复习第 33、34 单元。

如果本测试整体通过，就进入：

> 第 37 单元：指数函数基础。

---

# 十七、进入第 37 单元的条件

进入指数与对数模块前，需要满足：

1. 三角函数基本概念清楚。
2. 特殊角值没有系统性错误。
3. 能正确处理定义域和限制条件。
4. 能处理基本三角函数图像和变换。
5. 能使用基础三角恒等式。
6. 能使用和差角公式和倍角公式。
7. 能解基础三角方程。
8. 能建立简单周期模型。
