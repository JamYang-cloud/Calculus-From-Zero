---
title: 第 136 单元：数列与级数十三——积分判别法与对数型级数
tags:
  - 数学
  - 微积分
  - 数列与级数
  - 积分判别法
  - 对数型级数
  - 交错级数
  - 条件收敛
created: 2026-07-08
course: 微积分长期学习计划
unit: 136
---

# 第 136 单元：数列与级数十三——积分判别法与对数型级数

第 135 单元中暴露出的主要问题是：对含有 $\ln n$ 的级数不熟悉，尤其是：

$$
\sum (-1)^n\frac{1}{\ln(n+1)}
$$

以及：

$$
\sum (-1)^n\frac{\ln n}{n}
$$

这类题不能只凭“看起来很小”判断。对数增长很慢，但它是否出现在分子、分母，以及是否与 $n$ 相乘，会显著改变级数的敛散性。

本单元专门补强：

$$
\text{积分判别法} \quad + \quad \text{对数型级数} \quad + \quad \text{交错对数型级数}
$$

---

## 一、本课目标

完成本单元后，需要掌握：

1. 知道积分判别法的使用条件；
2. 会用积分判别法判断 $\sum \frac{\ln n}{n}$；
3. 会判断 $\sum \frac{1}{n\ln n}$ 与 $\sum \frac{1}{n(\ln n)^p}$；
4. 会区分 $\sum \frac1{\ln n}$、$\sum \frac1{n\ln n}$、$\sum \frac{\ln n}{n}$；
5. 会判断交错对数型级数的条件收敛；
6. 会检查交错级数中的 $b_n\to0$ 与最终单调递减；
7. 能避免“含对数就一定收敛”的错误。

---

# 二、积分判别法

## 1. 基本形式

设：

$$
a_n=f(n)
$$

如果函数 $f(x)$ 在 $[N,+\infty)$ 上满足：

1. $f(x)>0$；
2. $f(x)$ 连续；
3. $f(x)$ 单调递减；

那么正项级数：

$$
\sum_{n=N}^{\infty}a_n
$$

与反常积分：

$$
\int_N^{\infty}f(x)\,dx
$$

同敛散。

也就是说：

若：

$$
\int_N^{\infty}f(x)\,dx
$$

收敛，则：

$$
\sum_{n=N}^{\infty}f(n)
$$

收敛。

若：

$$
\int_N^{\infty}f(x)\,dx
$$

发散，则：

$$
\sum_{n=N}^{\infty}f(n)
$$

发散。

---

## 2. 积分判别法的直觉

级数：

$$
\sum_{n=1}^{\infty}f(n)
$$

可以理解为一排矩形面积的总和。

积分：

$$
\int_1^{\infty}f(x)\,dx
$$

可以理解为曲线下方面积。

当 $f(x)$ 正、连续、递减时，矩形总面积与曲线下面积的敛散性一致。

所以积分判别法的本质是：

$$
\text{用反常积分判断正项级数的总面积是否有限。}
$$

---

# 三、最重要例子：$\sum \frac{\ln n}{n}$ 发散

考虑正项级数：

$$
\sum_{n=2}^{\infty}\frac{\ln n}{n}
$$

令：

$$
f(x)=\frac{\ln x}{x}
$$

用积分判别法，看：

$$
\int_2^{\infty}\frac{\ln x}{x}\,dx
$$

令：

$$
u=\ln x
$$

则：

$$
du=\frac1x\,dx
$$

所以：

$$
\int\frac{\ln x}{x}\,dx
=
\int u\,du
=
\frac{u^2}{2}+C
$$

代回：

$$
\int\frac{\ln x}{x}\,dx
=
\frac{(\ln x)^2}{2}+C
$$

因此：

$$
\int_2^{\infty}\frac{\ln x}{x}\,dx
=
\lim_{b\to\infty}\left[\frac{(\ln x)^2}{2}\right]_2^b
$$

$$
=
\lim_{b\to\infty}\left(\frac{(\ln b)^2}{2}-\frac{(\ln 2)^2}{2}\right)
$$

由于：

$$
\ln b\to\infty
$$

所以：

$$
\frac{(\ln b)^2}{2}\to\infty
$$

积分发散。

因此：

$$
\sum_{n=2}^{\infty}\frac{\ln n}{n}
$$

发散。

这说明：即使 $\frac{\ln n}{n}\to0$，对应级数仍然可以发散。

---

# 四、交错级数 $\sum(-1)^n\frac{\ln n}{n}$

现在考虑：

$$
\sum_{n=2}^{\infty}(-1)^n\frac{\ln n}{n}
$$

先看绝对值级数：

$$
\sum_{n=2}^{\infty}\left|(-1)^n\frac{\ln n}{n}\right|
=
\sum_{n=2}^{\infty}\frac{\ln n}{n}
$$

上一节已经证明：

$$
\sum_{n=2}^{\infty}\frac{\ln n}{n}
$$

发散。

所以原级数不是绝对收敛。

再看交错级数判别法。令：

$$
b_n=\frac{\ln n}{n}
$$

第一，检查极限：

$$
\lim_{n\to\infty}\frac{\ln n}{n}=0
$$

这是因为 $n$ 比 $\ln n$ 增长快得多。

第二，检查最终单调递减。

令：

$$
f(x)=\frac{\ln x}{x}
$$

求导：

$$
f'(x)=\frac{1-\ln x}{x^2}
$$

当：

$$
x>e
$$

有：

$$
\ln x>1
$$

所以：

$$
f'(x)<0
$$

因此 $\frac{\ln n}{n}$ 从某一项以后单调递减。

所以由交错级数判别法，原级数收敛。

综合起来：

$$
\sum_{n=2}^{\infty}(-1)^n\frac{\ln n}{n}
$$

收敛，但不绝对收敛。

因此它是：

$$
\boxed{\text{条件收敛}}
$$

---

# 五、$\sum \frac1{\ln(n+1)}$ 为什么发散

考虑正项级数：

$$
\sum_{n=1}^{\infty}\frac1{\ln(n+1)}
$$

它的通项：

$$
\frac1{\ln(n+1)}
$$

确实趋于 $0$，因为：

$$
\ln(n+1)\to\infty
$$

但是通项趋于 $0$ 不代表级数收敛。

要判断正项级数，比较它和调和级数。

当 $n$ 足够大时：

$$
\ln(n+1)<n
$$

所以：

$$
\frac1{\ln(n+1)}>\frac1n
$$

而：

$$
\sum_{n=1}^{\infty}\frac1n
$$

发散。

因此由比较判别法：

$$
\sum_{n=1}^{\infty}\frac1{\ln(n+1)}
$$

发散。

注意：

$$
\frac1{\ln n}
$$

比：

$$
\frac1n
$$

大得多，所以它的级数当然发散。

---

# 六、交错级数 $\sum(-1)^n\frac1{\ln(n+1)}$

考虑：

$$
\sum_{n=1}^{\infty}(-1)^n\frac1{\ln(n+1)}
$$

先看绝对值级数：

$$
\sum_{n=1}^{\infty}\frac1{\ln(n+1)}
$$

上一节已经说明它发散，所以原级数不是绝对收敛。

再看交错级数判别法。令：

$$
b_n=\frac1{\ln(n+1)}
$$

由于：

$$
\ln(n+1)\to\infty
$$

所以：

$$
b_n\to0
$$

又因为 $\ln(n+1)$ 随 $n$ 增大而增大，所以：

$$
\frac1{\ln(n+1)}
$$

随 $n$ 增大而减小。

因此 $b_n$ 单调递减且趋于 $0$。

由交错级数判别法：

$$
\sum_{n=1}^{\infty}(-1)^n\frac1{\ln(n+1)}
$$

收敛。

由于绝对值级数发散，所以它是：

$$
\boxed{\text{条件收敛}}
$$

---

# 七、三类非常容易混淆的对数型级数

## 1. $\sum \frac1{\ln n}$

从 $n=2$ 开始考虑：

$$
\sum_{n=2}^{\infty}\frac1{\ln n}
$$

它发散。

原因：

$$
\ln n<n
$$

所以：

$$
\frac1{\ln n}>\frac1n
$$

比发散的调和级数还大。

---

## 2. $\sum \frac1{n\ln n}$

从 $n=2$ 开始考虑：

$$
\sum_{n=2}^{\infty}\frac1{n\ln n}
$$

用积分判别法：

$$
\int_2^{\infty}\frac1{x\ln x}\,dx
$$

令：

$$
u=\ln x
$$

则：

$$
du=\frac1x\,dx
$$

于是：

$$
\int\frac1{x\ln x}\,dx
=
\int\frac1u\,du
=
\ln|u|+C
$$

代回：

$$
\int\frac1{x\ln x}\,dx=\ln(\ln x)+C
$$

所以：

$$
\int_2^{\infty}\frac1{x\ln x}\,dx
=
\lim_{b\to\infty}\left[\ln(\ln x)\right]_2^b
$$

由于：

$$
\ln(\ln b)\to\infty
$$

积分发散。

所以：

$$
\sum_{n=2}^{\infty}\frac1{n\ln n}
$$

发散。

---

## 3. $\sum \frac{\ln n}{n}$

已经证明：

$$
\sum_{n=2}^{\infty}\frac{\ln n}{n}
$$

发散。

因为：

$$
\int\frac{\ln x}{x}\,dx=\frac{(\ln x)^2}{2}+C
$$

发散。

---

# 八、经典推广：$\sum \frac1{n(\ln n)^p}$

考虑：

$$
\sum_{n=2}^{\infty}\frac1{n(\ln n)^p}
$$

它的敛散性是：

$$
\boxed{p>1 \text{ 时收敛，}p\le1 \text{ 时发散}}
$$

证明来自积分判别法。

看：

$$
\int_2^{\infty}\frac1{x(\ln x)^p}\,dx
$$

令：

$$
u=\ln x
$$

则：

$$
du=\frac1x\,dx
$$

积分变成：

$$
\int_{\ln 2}^{\infty}\frac1{u^p}\,du
$$

这就是 $p$ 型反常积分。

当：

$$
p>1
$$

时收敛。

当：

$$
p\le1
$$

时发散。

因此：

$$
\sum_{n=2}^{\infty}\frac1{n(\ln n)^p}
$$

同样满足：

$$
p>1 \Rightarrow \text{收敛}
$$

$$
p\le1 \Rightarrow \text{发散}
$$

---

# 九、对数型级数的速记表

从 $n=2$ 开始考虑。

| 级数 | 敛散性 |
|---|---|
| $\sum \frac1{\ln n}$ | 发散 |
| $\sum \frac1{n}$ | 发散 |
| $\sum \frac1{n\ln n}$ | 发散 |
| $\sum \frac1{n(\ln n)^p}$ | $p>1$ 收敛，$p\le1$ 发散 |
| $\sum \frac{\ln n}{n}$ | 发散 |
| $\sum \frac{\ln n}{n^2}$ | 收敛 |

最后一个为什么收敛？因为 $n^2$ 在分母中增长很快，$\ln n$ 增长很慢。可用比较或积分判别法证明。

---

# 十、交错对数型级数的判断流程

对：

$$
\sum (-1)^n b_n
$$

其中 $b_n>0$，判断时不要直接说“交错所以收敛”。固定流程是：

第一步：看 $b_n\to0$。

第二步：看 $b_n$ 是否最终单调递减。

第三步：若满足，则原交错级数收敛。

第四步：再看绝对值级数 $\sum b_n$ 是否收敛。

若 $\sum b_n$ 收敛，则原级数绝对收敛。

若 $\sum b_n$ 发散，则原级数条件收敛。

---

# 十一、例题 1：判断 $\sum(-1)^n\frac1{n\ln n}$

从 $n=2$ 开始。

绝对值级数：

$$
\sum_{n=2}^{\infty}\frac1{n\ln n}
$$

发散。

再看交错级数。令：

$$
b_n=\frac1{n\ln n}
$$

显然：

$$
b_n\to0
$$

且 $n\ln n$ 增大，所以 $b_n$ 递减。

因此原交错级数收敛。

由于绝对值级数发散，所以：

$$
\sum_{n=2}^{\infty}(-1)^n\frac1{n\ln n}
$$

条件收敛。

---

# 十二、例题 2：判断 $\sum(-1)^n\frac1{n(\ln n)^2}$

绝对值级数：

$$
\sum_{n=2}^{\infty}\frac1{n(\ln n)^2}
$$

这里：

$$
p=2>1
$$

所以绝对值级数收敛。

因此原级数：

$$
\sum_{n=2}^{\infty}(-1)^n\frac1{n(\ln n)^2}
$$

绝对收敛。

不需要再讨论条件收敛。

---

# 十三、例题 3：判断 $\sum(-1)^n\frac{\ln n}{n^2}$

绝对值级数：

$$
\sum_{n=2}^{\infty}\frac{\ln n}{n^2}
$$

它收敛。

一种直观理由是：$\ln n$ 增长很慢，$n^2$ 增长很快。更严谨地说，当 $n$ 足够大时：

$$
\ln n<\sqrt n
$$

所以：

$$
\frac{\ln n}{n^2}<\frac{\sqrt n}{n^2}=\frac1{n^{3/2}}
$$

而：

$$
\sum\frac1{n^{3/2}}
$$

收敛。

所以：

$$
\sum\frac{\ln n}{n^2}
$$

收敛。

因此原交错级数绝对收敛。

---

# 十四、常见错误

## 错误 1：觉得 $\ln n$ 很慢，所以一定帮助收敛

不一定。

如果 $\ln n$ 在分子上，例如：

$$
\frac{\ln n}{n}
$$

它比：

$$
\frac1n
$$

更大，所以正项级数更不可能收敛。

---

## 错误 2：觉得 $1/\ln n$ 趋于 $0$，所以级数收敛

错误。

$$
\frac1{\ln n}\to0
$$

但它趋于 $0$ 非常慢，甚至比：

$$
\frac1n
$$

还大得多，所以：

$$
\sum\frac1{\ln n}
$$

发散。

---

## 错误 3：忽视 $n\ln n$ 与 $\ln n$ 的巨大区别

$$
\sum\frac1{\ln n}
$$

发散。

$$
\sum\frac1{n\ln n}
$$

也发散，但已经比前者小很多。

$$
\sum\frac1{n(\ln n)^2}
$$

收敛。

多出来的 $n$ 与 $\ln n$ 的幂次非常关键。

---

## 错误 4：交错级数不判断绝对收敛

判断交错级数时，必须区分：

$$
\text{绝对收敛}
$$

和：

$$
\text{条件收敛}
$$

只说“收敛”通常不够。

---

# 十五、练习题

## A 组：积分判别法基础

1. 判断 $\sum_{n=2}^{\infty}\frac1{n\ln n}$ 的敛散性。

2. 判断 $\sum_{n=2}^{\infty}\frac1{n(\ln n)^2}$ 的敛散性。

3. 判断 $\sum_{n=2}^{\infty}\frac1{n(\ln n)^{1/2}}$ 的敛散性。

4. 判断 $\sum_{n=2}^{\infty}\frac{\ln n}{n}$ 的敛散性。

5. 判断 $\sum_{n=2}^{\infty}\frac1{\ln n}$ 的敛散性。

---

## B 组：比较与对数增长

6. 判断 $\sum_{n=2}^{\infty}\frac{\ln n}{n^2}$ 的敛散性。

7. 判断 $\sum_{n=2}^{\infty}\frac{(\ln n)^2}{n^2}$ 的敛散性。

8. 判断 $\sum_{n=2}^{\infty}\frac{\ln n}{\sqrt n}$ 的敛散性。

9. 判断 $\sum_{n=2}^{\infty}\frac1{\sqrt n\ln n}$ 的敛散性。

10. 判断 $\sum_{n=2}^{\infty}\frac1{n^2\ln n}$ 的敛散性。

---

## C 组：交错对数型级数

11. 判断 $\sum_{n=2}^{\infty}(-1)^n\frac1{\ln n}$ 的收敛类型。

12. 判断 $\sum_{n=2}^{\infty}(-1)^n\frac1{n\ln n}$ 的收敛类型。

13. 判断 $\sum_{n=2}^{\infty}(-1)^n\frac1{n(\ln n)^2}$ 的收敛类型。

14. 判断 $\sum_{n=2}^{\infty}(-1)^n\frac{\ln n}{n}$ 的收敛类型。

15. 判断 $\sum_{n=2}^{\infty}(-1)^n\frac{\ln n}{n^2}$ 的收敛类型。

---

## D 组：单调性与通项极限

16. 判断：$\frac{\ln n}{n}\to0$。

17. 判断：$\frac1{\ln n}\to0$。

18. 判断：$\sum \frac1{\ln n}$ 收敛。

19. 判断：$\frac{\ln n}{n}$ 从某一项以后递减。

20. 判断：$\frac1{\ln n}$ 从某一项以后递减。

---

## E 组：综合判断

21. 判断 $\sum_{n=2}^{\infty}\frac1{n(\ln n)^3}$ 的敛散性。

22. 判断 $\sum_{n=2}^{\infty}\frac1{n\sqrt{\ln n}}$ 的敛散性。

23. 判断 $\sum_{n=2}^{\infty}(-1)^n\frac1{n\sqrt{\ln n}}$ 的收敛类型。

24. 判断 $\sum_{n=2}^{\infty}(-1)^n\frac{(\ln n)^2}{n}$ 的敛散性。

25. 判断 $\sum_{n=2}^{\infty}\frac{1}{n\ln n\ln(\ln n)}$ 的敛散性。

---

## F 组：方法总结

26. 为什么 $\sum\frac{\ln n}{n}$ 发散？

27. 为什么 $\sum(-1)^n\frac{\ln n}{n}$ 条件收敛？

28. 为什么 $\sum\frac1{\ln n}$ 发散？

29. $\sum\frac1{n(\ln n)^p}$ 的敛散结论是什么？

30. 本单元最重要的防错点是什么？

---

# 十六、答案与解析

## A 组答案

1. 发散。因为：

$$
\int_2^{\infty}\frac1{x\ln x}\,dx=\infty
$$

2. 收敛。它属于：

$$
\sum\frac1{n(\ln n)^p},\quad p=2>1
$$

3. 发散。这里：

$$
p=\frac12\le1
$$

4. 发散。因为：

$$
\int_2^{\infty}\frac{\ln x}{x}\,dx
=
\infty
$$

5. 发散。因为：

$$
\frac1{\ln n}>\frac1n
$$

最终成立，而调和级数发散。

---

## B 组答案

6. 收敛。因为对充分大的 $n$，有：

$$
\ln n<\sqrt n
$$

所以：

$$
\frac{\ln n}{n^2}<\frac1{n^{3/2}}
$$

而右侧级数收敛。

7. 收敛。对充分大的 $n$，有：

$$
(\ln n)^2<\sqrt n
$$

所以：

$$
\frac{(\ln n)^2}{n^2}<\frac1{n^{3/2}}
$$

右侧级数收敛。

8. 发散。因为当 $n$ 足够大时：

$$
\ln n>1
$$

所以：

$$
\frac{\ln n}{\sqrt n}>\frac1{\sqrt n}
$$

而 $\sum\frac1{\sqrt n}$ 发散。

9. 发散。虽然多了 $\ln n$，但分母中 $\sqrt n$ 的幂次仍不够大。可用积分判别法或比较思想理解其发散。

10. 收敛。因为：

$$
\frac1{n^2\ln n}<\frac1{n^2}
$$

而 $\sum\frac1{n^2}$ 收敛。

---

## C 组答案

11. 条件收敛。绝对值级数 $\sum\frac1{\ln n}$ 发散，但 $\frac1{\ln n}\to0$ 且递减。

12. 条件收敛。绝对值级数 $\sum\frac1{n\ln n}$ 发散，但交错级数判别法成立。

13. 绝对收敛。因为 $\sum\frac1{n(\ln n)^2}$ 收敛。

14. 条件收敛。绝对值级数 $\sum\frac{\ln n}{n}$ 发散；但 $\frac{\ln n}{n}\to0$ 且最终递减。

15. 绝对收敛。因为 $\sum\frac{\ln n}{n^2}$ 收敛。

---

## D 组答案

16. 正确。$n$ 比 $\ln n$ 增长快，所以 $\frac{\ln n}{n}\to0$。

17. 正确。因为 $\ln n\to\infty$。

18. 错误。通项趋于 $0$ 不代表级数收敛。事实上它发散。

19. 正确。因为 $f(x)=\frac{\ln x}{x}$ 的导数为：

$$
f'(x)=\frac{1-\ln x}{x^2}
$$

当 $x>e$ 时小于 $0$。

20. 正确。因为 $\ln n$ 增大，所以 $\frac1{\ln n}$ 减小。

---

## E 组答案

21. 收敛。因为 $p=3>1$。

22. 发散。因为 $p=\frac12\le1$。

23. 条件收敛。绝对值级数发散，但交错级数判别法成立。

24. 条件收敛。正项级数 $\sum\frac{(\ln n)^2}{n}$ 发散；但 $\frac{(\ln n)^2}{n}\to0$ 且最终递减，所以交错级数收敛。

25. 发散。用积分判别法，令 $u=\ln x$，再令 $v=\ln u$，可得到类似 $\int \frac1v\,dv$ 的发散结构。

---

## F 组答案

26. 因为：

$$
\int_2^{\infty}\frac{\ln x}{x}\,dx
=
\lim_{b\to\infty}\frac{(\ln b)^2}{2}-\frac{(\ln2)^2}{2}
=
\infty
$$

所以由积分判别法发散。

27. 因为绝对值级数 $\sum\frac{\ln n}{n}$ 发散；但 $\frac{\ln n}{n}\to0$ 且最终递减，所以交错级数收敛。因此条件收敛。

28. 因为：

$$
\ln n<n
$$

所以：

$$
\frac1{\ln n}>\frac1n
$$

而调和级数发散。

29.

$$
\sum_{n=2}^{\infty}\frac1{n(\ln n)^p}
$$

当 $p>1$ 时收敛；当 $p\le1$ 时发散。

30. 最重要防错点：不能因为含有对数或通项趋于 $0$ 就判断收敛；必须看对数在分子还是分母、是否有 $n$，并区分绝对收敛与条件收敛。

---

# 十七、本课复习讲义

本单元的核心是掌握对数型级数。

最重要的三个正项级数：

$$
\sum\frac1{\ln n}\quad\text{发散}
$$

$$
\sum\frac1{n\ln n}\quad\text{发散}
$$

$$
\sum\frac1{n(\ln n)^p}\quad p>1\text{ 收敛，}p\le1\text{ 发散}
$$

另一个必须记住的是：

$$
\sum\frac{\ln n}{n}\quad\text{发散}
$$

但：

$$
\sum(-1)^n\frac{\ln n}{n}
$$

条件收敛。

判断交错对数型级数时，一定要先检查绝对值级数，再检查交错级数判别法条件。

---

# 十八、进入第 137 单元的条件

进入第 137 单元前，需要能够：

1. 使用积分判别法；
2. 判断 $\sum\frac{\ln n}{n}$ 发散；
3. 判断 $\sum(-1)^n\frac{\ln n}{n}$ 条件收敛；
4. 判断 $\sum\frac1{\ln n}$ 发散；
5. 判断 $\sum\frac1{n(\ln n)^p}$ 的敛散性；
6. 区分绝对收敛与条件收敛。
