---
title: 第 29 单元：三角函数基本恒等式
tags:
  - 数学
  - 微积分
  - 三角函数
  - 三角恒等式
  - 单位圆
  - 正弦
  - 余弦
  - 正切
created: 2026-06-21
course: 微积分长期学习计划
unit: 29
---

# 第 29 单元：三角函数基本恒等式

前面已经学习了：

1. 单位圆；
2. 特殊角的三角函数值；
3. 三角函数图像；
4. 三角函数图像变换。

第 29 单元学习三角函数基本恒等式。

恒等式的意思是：

> 对于所有允许的输入，这个等式恒成立。

例如：

$$
\sin^2 x+\cos^2 x=1
$$

就是最重要的三角恒等式之一。

它不是只在某几个特殊角成立，而是在所有实数 $x$ 上都成立。

---

## 一、本课目标

学完本课后，需要掌握：

1. 理解恒等式的含义。
2. 熟练使用基本恒等式 $\sin^2 x+\cos^2 x=1$。
3. 熟练使用商数恒等式 $\tan x=\frac{\sin x}{\cos x}$。
4. 知道使用 $\tan x=\frac{\sin x}{\cos x}$ 时必须要求 $\cos x\ne0$。
5. 掌握奇偶恒等式。
6. 掌握周期恒等式。
7. 掌握余角恒等式的基本形式。
8. 能用恒等式化简简单表达式。
9. 能用恒等式求未知三角函数值。
10. 为后续三角函数极限和导数打基础。

---

# 二、什么是恒等式

方程通常只在某些 $x$ 值下成立。

例如：

$$
x^2=4
$$

只在：

$$
x=2
$$

或：

$$
x=-2
$$

时成立。

但恒等式是在所有允许输入下都成立。

例如：

$$
(a+b)^2=a^2+2ab+b^2
$$

对所有 $a,b$ 都成立。

三角恒等式也是同样的概念。

---

# 三、最基本恒等式

单位圆的方程是：

$$
x^2+y^2=1
$$

单位圆上角 $t$ 对应的点是：

$$
(\cos t,\sin t)
$$

因此：

$$
x=\cos t
$$

$$
y=\sin t
$$

代入单位圆方程：

$$
x^2+y^2=1
$$

得到：

$$
\cos^2 t+\sin^2 t=1
$$

通常写成：

$$
\sin^2 t+\cos^2 t=1
$$

这就是最重要的三角恒等式。

---

# 四、符号说明：$\sin^2 x$ 的含义

注意：

$$
\sin^2 x
$$

表示：

$$
(\sin x)^2
$$

不是：

$$
\sin(x^2)
$$

同理：

$$
\cos^2 x=(\cos x)^2
$$

所以：

$$
\sin^2 x+\cos^2 x=1
$$

意思是：

$$
(\sin x)^2+(\cos x)^2=1
$$

---

# 五、由基本恒等式变形

从：

$$
\sin^2 x+\cos^2 x=1
$$

可以得到：

$$
\sin^2 x=1-\cos^2 x
$$

也可以得到：

$$
\cos^2 x=1-\sin^2 x
$$

这些变形很常用。

例如，如果：

$$
\sin x=\frac35
$$

则：

$$
\sin^2 x=\frac{9}{25}
$$

由：

$$
\sin^2 x+\cos^2 x=1
$$

得：

$$
\cos^2 x=1-\frac{9}{25}=\frac{16}{25}
$$

所以：

$$
\cos x=\pm\frac45
$$

正负号要由象限决定。

---

# 六、用象限决定正负号

如果只知道：

$$
\cos^2 x=\frac{16}{25}
$$

则只能得到：

$$
\cos x=\pm\frac45
$$

不能直接确定正负号。

要确定正负号，必须知道角在哪个象限。

例如：

如果 $x$ 在第一象限，则：

$$
\cos x>0
$$

所以：

$$
\cos x=\frac45
$$

如果 $x$ 在第二象限，则：

$$
\cos x<0
$$

所以：

$$
\cos x=-\frac45
$$

这是常见错误点：平方会丢失符号，必须用象限补回符号。

---

# 七、商数恒等式

正切定义为：

$$
\tan x=\frac{\sin x}{\cos x}
$$

但这里必须满足：

$$
\cos x\ne0
$$

因为分母不能为 $0$。

所以严格写法是：

$$
\tan x=\frac{\sin x}{\cos x},\quad \cos x\ne0
$$

或写成：

$$
\tan x=\frac{\sin x}{\cos x},\quad x\ne\frac{\pi}{2}+k\pi,\quad k\in\mathbb{Z}
$$

这是本单元要特别注意的限制条件。

---

# 八、由商数恒等式求值

例如：

$$
\sin x=\frac35,\quad \cos x=\frac45
$$

则：

$$
\tan x=\frac{\sin x}{\cos x}
=
\frac{3/5}{4/5}
=
\frac34
$$

再如：

$$
\sin x=\frac12,\quad \cos x=-\frac{\sqrt3}{2}
$$

则：

$$
\tan x=
\frac{1/2}{-\sqrt3/2}
=
-\frac{1}{\sqrt3}
=
-\frac{\sqrt3}{3}
$$

---

# 九、奇偶恒等式

由图像和单位圆可以得到：

$$
\sin(-x)=-\sin x
$$

$$
\cos(-x)=\cos x
$$

$$
\tan(-x)=-\tan x
$$

这说明：

- $\sin x$ 是奇函数；
- $\cos x$ 是偶函数；
- $\tan x$ 是奇函数。

这些恒等式常用于化简负角。

例如：

$$
\sin\left(-\frac{\pi}{6}\right)
=
-\sin\frac{\pi}{6}
=
-\frac12
$$

再如：

$$
\cos\left(-\frac{\pi}{3}\right)
=
\cos\frac{\pi}{3}
=
\frac12
$$

---

# 十、周期恒等式

正弦和余弦的周期是：

$$
2\pi
$$

所以：

$$
\sin(x+2\pi)=\sin x
$$

$$
\cos(x+2\pi)=\cos x
$$

更一般地：

$$
\sin(x+2k\pi)=\sin x,\quad k\in\mathbb{Z}
$$

$$
\cos(x+2k\pi)=\cos x,\quad k\in\mathbb{Z}
$$

正切的周期是：

$$
\pi
$$

所以：

$$
\tan(x+\pi)=\tan x
$$

更一般地：

$$
\tan(x+k\pi)=\tan x,\quad k\in\mathbb{Z}
$$

注意这里的 $k$ 必须是整数。

---

# 十一、余角恒等式

正弦和余弦之间有一组重要关系：

$$
\sin\left(\frac{\pi}{2}-x\right)=\cos x
$$

$$
\cos\left(\frac{\pi}{2}-x\right)=\sin x
$$

这叫余角恒等式。

直观理解：

在直角三角形中，两个锐角互余。如果一个角变大，另一个角变小。一个角的正弦等于另一个余角的余弦。

例如：

$$
\sin\frac{\pi}{6}=\cos\frac{\pi}{3}
$$

因为：

$$
\frac{\pi}{6}+\frac{\pi}{3}=\frac{\pi}{2}
$$

也就是：

$$
30^\circ+60^\circ=90^\circ
$$

---

# 十二、用恒等式化简

## 例 1

化简：

$$
1-\sin^2 x
$$

由：

$$
\sin^2 x+\cos^2 x=1
$$

得：

$$
1-\sin^2 x=\cos^2 x
$$

---

## 例 2

化简：

$$
1-\cos^2 x
$$

由：

$$
\sin^2 x+\cos^2 x=1
$$

得：

$$
1-\cos^2 x=\sin^2 x
$$

---

## 例 3

化简：

$$
\frac{\sin x}{\cos x}
$$

在：

$$
\cos x\ne0
$$

时：

$$
\frac{\sin x}{\cos x}=\tan x
$$

---

## 例 4

化简：

$$
\sin^2 x+\cos^2 x+3
$$

因为：

$$
\sin^2 x+\cos^2 x=1
$$

所以：

$$
\sin^2 x+\cos^2 x+3=4
$$

---

# 十三、用恒等式求值

## 例 1

已知：

$$
\sin x=\frac{5}{13}
$$

且 $x$ 在第一象限，求 $\cos x$。

由：

$$
\sin^2 x+\cos^2 x=1
$$

得：

$$
\cos^2 x=1-\sin^2 x
$$

$$
=1-\left(\frac{5}{13}\right)^2
$$

$$
=1-\frac{25}{169}
$$

$$
=\frac{144}{169}
$$

所以：

$$
\cos x=\pm\frac{12}{13}
$$

因为 $x$ 在第一象限，$\cos x>0$，所以：

$$
\cos x=\frac{12}{13}
$$

---

## 例 2

已知：

$$
\cos x=-\frac{3}{5}
$$

且 $x$ 在第二象限，求 $\sin x$。

由：

$$
\sin^2 x=1-\cos^2 x
$$

得：

$$
\sin^2 x=1-\left(-\frac35\right)^2
$$

$$
=1-\frac{9}{25}
$$

$$
=\frac{16}{25}
$$

所以：

$$
\sin x=\pm\frac45
$$

第二象限中 $\sin x>0$，所以：

$$
\sin x=\frac45
$$

---

## 例 3

已知：

$$
\sin x=\frac35,\quad \cos x=-\frac45
$$

求：

$$
\tan x
$$

使用：

$$
\tan x=\frac{\sin x}{\cos x}
$$

得：

$$
\tan x=\frac{3/5}{-4/5}=-\frac34
$$

---

# 十四、恒等式与函数图像的关系

恒等式不是孤立公式，它和图像、单位圆完全一致。

例如：

$$
\sin^2 x+\cos^2 x=1
$$

来自单位圆：

$$
x^2+y^2=1
$$

而：

$$
\sin(-x)=-\sin x
$$

来自正弦函数图像关于原点对称。

$$
\cos(-x)=\cos x
$$

来自余弦函数图像关于 $y$ 轴对称。

$$
\tan(x+\pi)=\tan x
$$

来自正切函数周期为 $\pi$。

所以三角恒等式不是死记硬背，而是单位圆、图像、周期性的代数表达。

---

# 十五、常见错误

## 错误 1：平方后忘记正负号

从：

$$
\cos^2 x=\frac{16}{25}
$$

只能推出：

$$
\cos x=\pm\frac45
$$

不能直接写：

$$
\cos x=\frac45
$$

必须根据象限决定正负号。

---

## 错误 2：使用 $\tan x=\frac{\sin x}{\cos x}$ 时忘记条件

必须要求：

$$
\cos x\ne0
$$

也就是：

$$
x\ne\frac{\pi}{2}+k\pi,\quad k\in\mathbb{Z}
$$

---

## 错误 3：把 $\sin^2 x$ 理解成 $\sin(x^2)$

正确是：

$$
\sin^2 x=(\sin x)^2
$$

---

## 错误 4：周期恒等式忘记 $k\in\mathbb{Z}$

例如：

$$
\sin(x+2k\pi)=\sin x
$$

必须说明：

$$
k\in\mathbb{Z}
$$

因为只有整数个周期平移才保证回到原函数值。

---

## 错误 5：把余角恒等式方向记错

正确是：

$$
\sin\left(\frac{\pi}{2}-x\right)=\cos x
$$

$$
\cos\left(\frac{\pi}{2}-x\right)=\sin x
$$

---

# 十六、练习题

## A 组：基本恒等式

1. 写出最基本的三角恒等式。

2. $\sin^2 x$ 表示什么？

3. 由 $\sin^2 x+\cos^2 x=1$，写出 $\sin^2 x$ 的表达式。

4. 由 $\sin^2 x+\cos^2 x=1$，写出 $\cos^2 x$ 的表达式。

5. 化简 $1-\sin^2 x$。

---

## B 组：商数恒等式与限制条件

6. 写出 $\tan x$ 与 $\sin x,\cos x$ 的关系。

7. 使用 $\tan x=\frac{\sin x}{\cos x}$ 时，需要什么限制条件？

8. 当 $\cos x=0$ 时，$\tan x$ 是否有定义？

9. 求 $\frac{\sin x}{\cos x}$ 的化简结果。

10. 若 $\sin x=\frac35,\cos x=\frac45$，求 $\tan x$。

---

## C 组：奇偶与周期

11. 化简 $\sin(-x)$。

12. 化简 $\cos(-x)$。

13. 化简 $\tan(-x)$。

14. 化简 $\sin(x+2\pi)$。

15. 化简 $\tan(x+\pi)$。

---

## D 组：求值

16. 已知 $\sin x=\frac35$，且 $x$ 在第一象限，求 $\cos x$。

17. 已知 $\sin x=\frac35$，且 $x$ 在第二象限，求 $\cos x$。

18. 已知 $\cos x=-\frac{5}{13}$，且 $x$ 在第二象限，求 $\sin x$。

19. 已知 $\cos x=\frac{12}{13}$，且 $x$ 在第四象限，求 $\sin x$。

20. 已知 $\sin x=\frac{7}{25}$，$\cos x=\frac{24}{25}$，求 $\tan x$。

---

## E 组：综合化简与解释

21. 化简 $\sin^2 x+\cos^2 x+5$。

22. 化简 $3(1-\cos^2 x)$。

23. 化简 $\sin\left(\frac{\pi}{2}-x\right)$。

24. 为什么从 $\sin^2 x=\frac14$ 不能直接推出 $\sin x=\frac12$？

25. 为什么三角恒等式对后续学习三角函数求导和积分重要？

---

# 十七、练习答案与解析

## A 组答案

1.

$$
\sin^2 x+\cos^2 x=1
$$

2.

$$
\sin^2 x=(\sin x)^2
$$

3.

$$
\sin^2 x=1-\cos^2 x
$$

4.

$$
\cos^2 x=1-\sin^2 x
$$

5.

$$
1-\sin^2 x=\cos^2 x
$$

---

## B 组答案

6.

$$
\tan x=\frac{\sin x}{\cos x}
$$

7. 需要：

$$
\cos x\ne0
$$

也就是：

$$
x\ne\frac{\pi}{2}+k\pi,\quad k\in\mathbb{Z}
$$

8. 无定义。

9.

$$
\frac{\sin x}{\cos x}=\tan x,\quad \cos x\ne0
$$

10.

$$
\tan x=\frac{3/5}{4/5}=\frac34
$$

---

## C 组答案

11.

$$
\sin(-x)=-\sin x
$$

12.

$$
\cos(-x)=\cos x
$$

13.

$$
\tan(-x)=-\tan x
$$

14.

$$
\sin(x+2\pi)=\sin x
$$

15.

$$
\tan(x+\pi)=\tan x
$$

---

## D 组答案

16.

$$
\cos^2 x=1-\left(\frac35\right)^2=\frac{16}{25}
$$

第一象限中 $\cos x>0$，所以：

$$
\cos x=\frac45
$$

17.

$$
\cos^2 x=\frac{16}{25}
$$

第二象限中 $\cos x<0$，所以：

$$
\cos x=-\frac45
$$

18.

$$
\sin^2 x=1-\left(-\frac{5}{13}\right)^2
=
1-\frac{25}{169}
=
\frac{144}{169}
$$

第二象限中 $\sin x>0$，所以：

$$
\sin x=\frac{12}{13}
$$

19.

$$
\sin^2 x=1-\left(\frac{12}{13}\right)^2
=
1-\frac{144}{169}
=
\frac{25}{169}
$$

第四象限中 $\sin x<0$，所以：

$$
\sin x=-\frac{5}{13}
$$

20.

$$
\tan x=\frac{7/25}{24/25}=\frac{7}{24}
$$

---

## E 组答案

21.

$$
\sin^2 x+\cos^2 x+5=1+5=6
$$

22.

$$
3(1-\cos^2 x)=3\sin^2 x
$$

23.

$$
\sin\left(\frac{\pi}{2}-x\right)=\cos x
$$

24. 因为：

$$
\sin^2 x=\frac14
$$

只能推出：

$$
\sin x=\pm\frac12
$$

正负号必须由象限或题目条件决定。

25. 因为三角函数求导、积分和极限中，经常需要把复杂表达式化成更简单的形式。三角恒等式可以把正弦、余弦、正切之间互相转换，也可以帮助判断符号、化简表达式和证明公式。

---

# 十八、本课复习讲义

最基本恒等式：

$$
\sin^2 x+\cos^2 x=1
$$

等价变形：

$$
\sin^2 x=1-\cos^2 x
$$

$$
\cos^2 x=1-\sin^2 x
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

# 十九、进入第 30 单元的条件

第 30 单元是“三角恒等式化简与证明入门”。

进入前需要满足：

1. 熟记 $\sin^2 x+\cos^2 x=1$。
2. 能由基本恒等式推出 $1-\sin^2 x=\cos^2 x$。
3. 能由基本恒等式推出 $1-\cos^2 x=\sin^2 x$。
4. 熟记 $\tan x=\frac{\sin x}{\cos x}$ 并写出 $\cos x\ne0$。
5. 能用象限判断平方开方后的正负号。
6. 能使用奇偶恒等式和周期恒等式化简简单表达式。
