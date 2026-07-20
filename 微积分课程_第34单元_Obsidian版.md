---
title: 第 34 单元：倍角公式
tags:
  - 数学
  - 微积分
  - 三角函数
  - 倍角公式
  - 和差角公式
  - 三角恒等式
created: 2026-06-22
course: 微积分长期学习计划
unit: 34
---

# 第 34 单元：倍角公式

第 33 单元学习了和差角公式。第 34 单元学习倍角公式。

倍角公式处理的是：

$$
\sin 2x
$$

$$
\cos 2x
$$

$$
\tan 2x
$$

它们都来自和角公式中令两个角相等。

---

## 一、本课目标

学完本课后，需要掌握：

1. 理解倍角公式来自和角公式。
2. 掌握 $\sin 2x=2\sin x\cos x$。
3. 掌握 $\cos 2x=\cos^2 x-\sin^2 x$。
4. 掌握 $\cos 2x=1-2\sin^2 x$。
5. 掌握 $\cos 2x=2\cos^2 x-1$。
6. 初步掌握 $\tan 2x=\frac{2\tan x}{1-\tan^2 x}$。
7. 知道正切倍角公式有额外限制条件。
8. 能用倍角公式计算特殊角。
9. 能用倍角公式化简简单表达式。
10. 为后续三角函数极限、导数和积分做准备。

---

# 二、倍角公式从哪里来

所谓倍角，就是把两个相同的角相加：

$$
2x=x+x
$$

因此：

$$
\sin 2x=\sin(x+x)
$$

$$
\cos 2x=\cos(x+x)
$$

$$
\tan 2x=\tan(x+x)
$$

所以倍角公式不是孤立新公式，而是和角公式的特殊情况。

---

# 三、正弦倍角公式

从正弦和角公式出发：

$$
\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta
$$

令：

$$
\alpha=x,\quad \beta=x
$$

得到：

$$
\sin(x+x)=\sin x\cos x+\cos x\sin x
$$

所以：

$$
\sin 2x=2\sin x\cos x
$$

这就是正弦倍角公式。

---

# 四、余弦倍角公式第一种形式

从余弦和角公式出发：

$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta
$$

令：

$$
\alpha=x,\quad \beta=x
$$

得到：

$$
\cos(x+x)=\cos x\cos x-\sin x\sin x
$$

所以：

$$
\cos 2x=\cos^2 x-\sin^2 x
$$

这是余弦倍角公式的第一种形式。

---

# 五、余弦倍角公式第二种形式

由：

$$
\cos 2x=\cos^2 x-\sin^2 x
$$

又因为：

$$
\sin^2 x+\cos^2 x=1
$$

所以：

$$
\cos^2 x=1-\sin^2 x
$$

代入得：

$$
\cos 2x=(1-\sin^2 x)-\sin^2 x
$$

因此：

$$
\cos 2x=1-2\sin^2 x
$$

---

# 六、余弦倍角公式第三种形式

由：

$$
\cos 2x=\cos^2 x-\sin^2 x
$$

又因为：

$$
\sin^2 x=1-\cos^2 x
$$

代入得：

$$
\cos 2x=\cos^2 x-(1-\cos^2 x)
$$

因此：

$$
\cos 2x=2\cos^2 x-1
$$

---

# 七、余弦倍角公式汇总

$$
\cos 2x=\cos^2 x-\sin^2 x
$$

$$
\cos 2x=1-2\sin^2 x
$$

$$
\cos 2x=2\cos^2 x-1
$$

三个公式等价，但用途不同。

如果表达式中同时出现 $\sin^2 x$ 和 $\cos^2 x$，常用：

$$
\cos 2x=\cos^2 x-\sin^2 x
$$

如果表达式中只有 $\sin^2 x$，常用：

$$
\cos 2x=1-2\sin^2 x
$$

如果表达式中只有 $\cos^2 x$，常用：

$$
\cos 2x=2\cos^2 x-1
$$

---

# 八、正切倍角公式

正切和角公式是：

$$
\tan(\alpha+\beta)=\frac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta}
$$

令：

$$
\alpha=x,\quad \beta=x
$$

得到：

$$
\tan(2x)=\frac{\tan x+\tan x}{1-\tan x\tan x}
$$

所以：

$$
\tan 2x=\frac{2\tan x}{1-\tan^2 x}
$$

使用正切倍角公式时必须注意限制条件。至少需要：

$$
\cos x\ne0
$$

并且右边分母不能为 $0$：

$$
1-\tan^2 x\ne0
$$

也就是：

$$
\tan x\ne\pm1
$$

本阶段先记住一句话：正切公式出现分母时，必须检查分母不为 $0$。

---

# 九、倍角公式汇总

| 函数 | 倍角公式 |
|---|---|
| 正弦 | $\sin 2x=2\sin x\cos x$ |
| 余弦 1 | $\cos 2x=\cos^2 x-\sin^2 x$ |
| 余弦 2 | $\cos 2x=1-2\sin^2 x$ |
| 余弦 3 | $\cos 2x=2\cos^2 x-1$ |
| 正切 | $\tan 2x=\frac{2\tan x}{1-\tan^2 x}$ |

---

# 十、例题 1：计算 $\sin120^\circ$

因为：

$$
120^\circ=2\cdot60^\circ
$$

所以：

$$
\sin120^\circ=\sin(2\cdot60^\circ)
$$

使用：

$$
\sin 2x=2\sin x\cos x
$$

得到：

$$
\sin120^\circ=2\sin60^\circ\cos60^\circ
$$

代入：

$$
\sin60^\circ=\frac{\sqrt3}{2},\quad \cos60^\circ=\frac12
$$

所以：

$$
\sin120^\circ=2\cdot\frac{\sqrt3}{2}\cdot\frac12=\frac{\sqrt3}{2}
$$

---

# 十一、例题 2：计算 $\cos120^\circ$

因为：

$$
120^\circ=2\cdot60^\circ
$$

所以：

$$
\cos120^\circ=\cos(2\cdot60^\circ)
$$

使用：

$$
\cos 2x=2\cos^2 x-1
$$

得到：

$$
\cos120^\circ=2\cos^2 60^\circ-1
$$

代入：

$$
\cos60^\circ=\frac12
$$

所以：

$$
\cos120^\circ=2\left(\frac12\right)^2-1=-\frac12
$$

---

# 十二、例题 3：化简 $2\sin x\cos x$

由正弦倍角公式：

$$
\sin 2x=2\sin x\cos x
$$

所以：

$$
2\sin x\cos x=\sin 2x
$$

这是从右到左使用倍角公式。

---

# 十三、例题 4：化简 $1-2\sin^2 x$

由余弦倍角公式：

$$
\cos 2x=1-2\sin^2 x
$$

所以：

$$
1-2\sin^2 x=\cos 2x
$$

---

# 十四、例题 5：化简 $2\cos^2 x-1$

由余弦倍角公式：

$$
\cos 2x=2\cos^2 x-1
$$

所以：

$$
2\cos^2 x-1=\cos 2x
$$

---

# 十五、降幂公式

由：

$$
\cos 2x=1-2\sin^2 x
$$

移项可得：

$$
\sin^2 x=\frac{1-\cos 2x}{2}
$$

由：

$$
\cos 2x=2\cos^2 x-1
$$

移项可得：

$$
\cos^2 x=\frac{1+\cos 2x}{2}
$$

这两个公式也叫降幂公式，后续在积分中非常重要。

---

# 十六、常见错误

## 错误 1：把 $\sin 2x$ 写成 $2\sin x$

错误：

$$
\sin 2x=2\sin x
$$

正确：

$$
\sin 2x=2\sin x\cos x
$$

---

## 错误 2：把 $\cos 2x$ 写成 $2\cos x$

错误：

$$
\cos 2x=2\cos x
$$

正确：

$$
\cos 2x=\cos^2 x-\sin^2 x
$$

---

## 错误 3：余弦倍角公式符号错

错误：

$$
\cos 2x=\cos^2 x+\sin^2 x
$$

右边恒等于 $1$，不可能总等于 $\cos 2x$。

正确：

$$
\cos 2x=\cos^2 x-\sin^2 x
$$

---

## 错误 4：正切倍角公式分母写错

正确：

$$
\tan 2x=\frac{2\tan x}{1-\tan^2 x}
$$

分母是：

$$
1-\tan^2 x
$$

不是：

$$
1+\tan^2 x
$$

---

## 错误 5：忘记正切倍角公式的限制条件

使用：

$$
\tan 2x=\frac{2\tan x}{1-\tan^2 x}
$$

时，需要检查右边分母不能为 $0$：

$$
1-\tan^2 x\ne0
$$

---

# 十七、练习题

## A 组：公式记忆

1. 写出 $\sin 2x$ 的倍角公式。

2. 写出 $\cos 2x$ 的第一种公式。

3. 写出 $\cos 2x$ 只含 $\sin^2 x$ 的公式。

4. 写出 $\cos 2x$ 只含 $\cos^2 x$ 的公式。

5. 写出 $\tan 2x$ 的倍角公式。

---

## B 组：公式来源

6. 用 $\sin(\alpha+\beta)$ 推出 $\sin 2x$。

7. 用 $\cos(\alpha+\beta)$ 推出 $\cos 2x$。

8. 为什么 $\sin 2x$ 不等于 $2\sin x$？

9. 为什么 $\cos 2x$ 不等于 $2\cos x$？

10. 为什么 $\cos 2x$ 有三种常用形式？

---

## C 组：计算特殊角

11. 用倍角公式计算 $\sin120^\circ$。

12. 用倍角公式计算 $\cos120^\circ$。

13. 用倍角公式计算 $\sin\frac{2\pi}{3}$。

14. 用倍角公式计算 $\cos\frac{2\pi}{3}$。

15. 用正切倍角公式计算 $\tan\frac{\pi}{2}$ 是否合适？说明原因。

---

## D 组：化简

16. 化简 $2\sin x\cos x$。

17. 化简 $\cos^2 x-\sin^2 x$。

18. 化简 $1-2\sin^2 x$。

19. 化简 $2\cos^2 x-1$。

20. 化简 $\frac{2\tan x}{1-\tan^2 x}$。

---

## E 组：降幂与概念

21. 由 $\cos 2x=1-2\sin^2 x$ 推出 $\sin^2 x$ 的表达式。

22. 由 $\cos 2x=2\cos^2 x-1$ 推出 $\cos^2 x$ 的表达式。

23. 为什么降幂公式对后续积分很重要？

24. 使用正切倍角公式时需要注意什么限制条件？

25. 倍角公式为什么可以看作和角公式的特殊情况？

---

# 十八、练习答案与解析

## A 组答案

1.

$$
\sin 2x=2\sin x\cos x
$$

2.

$$
\cos 2x=\cos^2 x-\sin^2 x
$$

3.

$$
\cos 2x=1-2\sin^2 x
$$

4.

$$
\cos 2x=2\cos^2 x-1
$$

5.

$$
\tan 2x=\frac{2\tan x}{1-\tan^2 x}
$$

---

## B 组答案

6.

$$
\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta
$$

令 $\alpha=x,\beta=x$，得：

$$
\sin 2x=\sin x\cos x+\cos x\sin x=2\sin x\cos x
$$

7.

$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta
$$

令 $\alpha=x,\beta=x$，得：

$$
\cos 2x=\cos^2 x-\sin^2 x
$$

8. 因为三角函数不是线性函数，不能把输入中的 $2$ 直接提出。正确公式是：

$$
\sin 2x=2\sin x\cos x
$$

9. 因为三角函数不是线性函数，不能把输入中的 $2$ 直接提出。正确公式是：

$$
\cos 2x=\cos^2 x-\sin^2 x
$$

10. 因为：

$$
\sin^2 x+\cos^2 x=1
$$

可以把 $\cos^2 x-\sin^2 x$ 改写成只含 $\sin^2 x$ 或只含 $\cos^2 x$ 的形式，所以余弦倍角公式有三种等价形式。

---

## C 组答案

11.

$$
\sin120^\circ=2\sin60^\circ\cos60^\circ=2\cdot\frac{\sqrt3}{2}\cdot\frac12=\frac{\sqrt3}{2}
$$

12.

$$
\cos120^\circ=2\cos^260^\circ-1=2\left(\frac12\right)^2-1=-\frac12
$$

13.

$$
\sin\frac{2\pi}{3}=2\sin\frac{\pi}{3}\cos\frac{\pi}{3}=2\cdot\frac{\sqrt3}{2}\cdot\frac12=\frac{\sqrt3}{2}
$$

14.

$$
\cos\frac{2\pi}{3}=2\cos^2\frac{\pi}{3}-1=2\left(\frac12\right)^2-1=-\frac12
$$

15. 不合适。因为：

$$
\tan\frac{\pi}{2}
$$

无定义。正切倍角公式不能用于得到一个无定义角的有限值。

---

## D 组答案

16.

$$
2\sin x\cos x=\sin 2x
$$

17.

$$
\cos^2 x-\sin^2 x=\cos 2x
$$

18.

$$
1-2\sin^2 x=\cos 2x
$$

19.

$$
2\cos^2 x-1=\cos 2x
$$

20.

$$
\frac{2\tan x}{1-\tan^2 x}=\tan 2x
$$

要求分母不为 $0$，即：

$$
1-\tan^2 x\ne0
$$

---

## E 组答案

21.

由：

$$
\cos 2x=1-2\sin^2 x
$$

得：

$$
2\sin^2 x=1-\cos 2x
$$

所以：

$$
\sin^2 x=\frac{1-\cos 2x}{2}
$$

22.

由：

$$
\cos 2x=2\cos^2 x-1
$$

得：

$$
2\cos^2 x=1+\cos 2x
$$

所以：

$$
\cos^2 x=\frac{1+\cos 2x}{2}
$$

23. 因为积分中 $\sin^2 x$ 和 $\cos^2 x$ 不能像 $\sin x,\cos x$ 那样直接处理。降幂公式可以把平方形式变成含 $\cos 2x$ 的一次形式，方便积分。

24. 需要注意 $\tan x$ 本身要有定义，并且公式右边分母不能为 $0$：

$$
1-\tan^2 x\ne0
$$

25. 因为：

$$
2x=x+x
$$

所以：

$$
\sin 2x=\sin(x+x)
$$

$$
\cos 2x=\cos(x+x)
$$

它们就是和角公式在两个角相等时的特殊情况。

---

# 十九、本课复习讲义

倍角公式：

$$
\sin 2x=2\sin x\cos x
$$

$$
\cos 2x=\cos^2 x-\sin^2 x
$$

$$
\cos 2x=1-2\sin^2 x
$$

$$
\cos 2x=2\cos^2 x-1
$$

$$
\tan 2x=\frac{2\tan x}{1-\tan^2 x}
$$

降幂公式：

$$
\sin^2 x=\frac{1-\cos 2x}{2}
$$

$$
\cos^2 x=\frac{1+\cos 2x}{2}

$$

重点：

1. $\sin 2x$ 不等于 $2\sin x$。
2. $\cos 2x$ 不等于 $2\cos x$。
3. 余弦倍角公式有三种等价形式。
4. 正切倍角公式要注意分母不为 $0$。
5. 倍角公式来自和角公式令两个角相等。

---

# 二十、进入第 35 单元的条件

第 35 单元是“三角函数应用与建模初步”。

进入前需要满足：

1. 能写出 $\sin 2x$ 的公式。
2. 能写出 $\cos 2x$ 的三种公式。
3. 能写出 $\tan 2x$ 的公式并知道要检查分母。
4. 能从和角公式推出倍角公式。
5. 能使用倍角公式计算和化简简单表达式。
6. 知道降幂公式后续会用于积分。
