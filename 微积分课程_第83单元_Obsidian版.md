---
title: 第 83 单元：洛必达法则入门
tags:
  - 数学
  - 微积分
  - 导数应用
  - 极限
  - 洛必达法则
  - 未定式
created: 2026-06-28
course: 微积分长期学习计划
unit: 83
---

# 第 83 单元：洛必达法则入门

第 82 单元完成了函数图像综合分析。

第 83 单元进入一个非常实用的极限工具：

> 洛必达法则。

它用导数来处理某些极限中的未定式，尤其是：

$$
\frac{0}{0}
$$

和：

$$
\frac{\infty}{\infty}
$$

本单元是入门，不追求证明洛必达法则，而是先学会判断能不能用、什么时候用、怎么用，以及最常见的错误。

---

## 一、本课目标

学完本课后，需要掌握：

1. 理解什么是未定式。
2. 能识别 $\frac{0}{0}$ 型极限。
3. 能识别 $\frac{\infty}{\infty}$ 型极限。
4. 掌握洛必达法则的基本形式。
5. 会在使用洛必达法则前检查条件。
6. 会对分子和分母分别求导。
7. 知道洛必达法则不是对整个分式求导。
8. 能处理需要连续多次使用洛必达法则的题。
9. 能识别不能直接使用洛必达法则的情况。
10. 能把简单的 $0\cdot\infty$ 型转化为分式型。
11. 能把简单的 $\infty-\infty$ 型转化为分式型。
12. 为后续极限综合与泰勒展开打基础。

---

# 二、什么是未定式

未定式不是“没有答案”，而是说：

> 仅凭形式还不能判断极限值。

例如：

$$
\lim_{x\to0}\frac{\sin x}{x}
$$

代入形式是：

$$
\frac00
$$

但极限不是不存在，而是：

$$
1
$$

所以 $\frac00$ 型只是说明直接代入失败，需要进一步处理。

---

# 三、最基本的两类未定式

洛必达法则最直接处理两类：

## 1. $\frac00$ 型

如果：

$$
\lim_{x\to a}f(x)=0
$$

且：

$$
\lim_{x\to a}g(x)=0
$$

那么：

$$
\lim_{x\to a}\frac{f(x)}{g(x)}
$$

是 $\frac00$ 型。

---

## 2. $\frac{\infty}{\infty}$ 型

如果：

$$
\lim_{x\to a}f(x)=\pm\infty
$$

且：

$$
\lim_{x\to a}g(x)=\pm\infty
$$

那么：

$$
\lim_{x\to a}\frac{f(x)}{g(x)}
$$

是 $\frac{\infty}{\infty}$ 型。

这里的 $\infty$ 可以是 $+\infty$ 或 $-\infty$。

---

# 四、洛必达法则的基本形式

如果：

$$
\lim_{x\to a}\frac{f(x)}{g(x)}
$$

是：

$$
\frac00
$$

或：

$$
\frac{\infty}{\infty}
$$

型，并且在相应区间内 $f,g$ 可导，$g'(x)\ne0$，且：

$$
\lim_{x\to a}\frac{f'(x)}{g'(x)}
$$

存在或为无穷大，那么：

$$
\lim_{x\to a}\frac{f(x)}{g(x)}
=
\lim_{x\to a}\frac{f'(x)}{g'(x)}
$$

注意：是分子、分母分别求导。

不是对整个分式求导。

---

# 五、最重要的警告

洛必达法则不是：

$$
\left(\frac{f(x)}{g(x)}\right)'
$$

也不是商法则。

它是把：

$$
\frac{f(x)}{g(x)}
$$

变成：

$$
\frac{f'(x)}{g'(x)}
$$

也就是：

$$
\text{分子求导，分母求导}
$$

例如：

$$
\frac{\sin x}{x}
$$

用洛必达法则变为：

$$
\frac{\cos x}{1}
$$

而不是用商法则变为：

$$
\frac{x\cos x-\sin x}{x^2}
$$

---

# 六、例题 1：最经典的 $\frac00$ 型

求：

$$
\lim_{x\to0}\frac{\sin x}{x}
$$

直接代入：

$$
\frac{\sin0}{0}=\frac00
$$

是 $\frac00$ 型。

使用洛必达法则：

$$
\lim_{x\to0}\frac{\sin x}{x}
=
\lim_{x\to0}\frac{\cos x}{1}
$$

代入：

$$
\frac{\cos0}{1}=1
$$

所以：

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

---

# 七、例题 2：指数函数与多项式

求：

$$
\lim_{x\to0}\frac{e^x-1}{x}
$$

直接代入：

$$
\frac{e^0-1}{0}=\frac{0}{0}
$$

是 $\frac00$ 型。

用洛必达法则：

$$
\lim_{x\to0}\frac{e^x-1}{x}
=
\lim_{x\to0}\frac{e^x}{1}
$$

代入：

$$
e^0=1
$$

所以：

$$
\lim_{x\to0}\frac{e^x-1}{x}=1
$$

这其实也是 $e^x$ 在 $x=0$ 处导数为 $1$ 的体现。

---

# 八、例题 3：对数函数

求：

$$
\lim_{x\to0}\frac{\ln(1+x)}{x}
$$

直接代入：

$$
\frac{\ln1}{0}=\frac00
$$

用洛必达法则：

$$
\lim_{x\to0}\frac{\ln(1+x)}{x}
=
\lim_{x\to0}\frac{\frac1{1+x}}{1}
$$

代入：

$$
\frac1{1+0}=1
$$

所以：

$$
\lim_{x\to0}\frac{\ln(1+x)}{x}=1
$$

---

# 九、例题 4：$\frac{\infty}{\infty}$ 型

求：

$$
\lim_{x\to+\infty}\frac{x^2}{e^x}
$$

当：

$$
x\to+\infty
$$

时：

$$
x^2\to+\infty
$$

且：

$$
e^x\to+\infty
$$

是：

$$
\frac{\infty}{\infty}
$$

型。

第一次使用洛必达法则：

$$
\lim_{x\to+\infty}\frac{x^2}{e^x}
=
\lim_{x\to+\infty}\frac{2x}{e^x}
$$

仍然是：

$$
\frac{\infty}{\infty}
$$

型。

第二次使用洛必达法则：

$$
\lim_{x\to+\infty}\frac{2x}{e^x}
=
\lim_{x\to+\infty}\frac2{e^x}
$$

此时：

$$
\frac2{e^x}\to0
$$

所以：

$$
\lim_{x\to+\infty}\frac{x^2}{e^x}=0
$$

这说明指数函数最终增长得比多项式快。

---

# 十、例题 5：多次使用洛必达法则

求：

$$
\lim_{x\to0}\frac{1-\cos x}{x^2}
$$

直接代入：

$$
\frac{1-\cos0}{0^2}=\frac00
$$

第一次使用洛必达法则：

$$
\lim_{x\to0}\frac{1-\cos x}{x^2}
=
\lim_{x\to0}\frac{\sin x}{2x}
$$

仍然是：

$$
\frac00
$$

第二次使用洛必达法则：

$$
\lim_{x\to0}\frac{\sin x}{2x}
=
\lim_{x\to0}\frac{\cos x}{2}
$$

代入：

$$
\frac{\cos0}{2}=\frac12
$$

所以：

$$
\lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12
$$

---

# 十一、例题 6：先判断能不能用

求：

$$
\lim_{x\to0}\frac{x+1}{x+2}
$$

直接代入：

$$
\frac{1}{2}
$$

不是：

$$
\frac00
$$

也不是：

$$
\frac{\infty}{\infty}
$$

所以不需要也不能用洛必达法则。

答案直接是：

$$
\frac12
$$

常见错误是看到分式就用洛必达法则。这是错误的。

---

# 十二、例题 7：不能直接用洛必达的形式

求：

$$
\lim_{x\to0}x\ln x
$$

这个式子在实数范围下应该考虑：

$$
x\to0^+
$$

即：

$$
\lim_{x\to0^+}x\ln x
$$

当：

$$
x\to0^+
$$

时：

$$
x\to0
$$

且：

$$
\ln x\to-\infty
$$

形式是：

$$
0\cdot(-\infty)
$$

这不是洛必达法则的直接形式。

需要转化为分式：

$$
x\ln x=\frac{\ln x}{1/x}
$$

此时：

$$
\ln x\to-\infty
$$

且：

$$
1/x\to+\infty
$$

是：

$$
\frac{-\infty}{+\infty}
$$

型，可以用洛必达法则。

求导：

$$
\lim_{x\to0^+}\frac{\ln x}{1/x}
=
\lim_{x\to0^+}\frac{1/x}{-1/x^2}
$$

化简：

$$
\frac{1/x}{-1/x^2}=-x
$$

所以：

$$
\lim_{x\to0^+}(-x)=0
$$

因此：

$$
\lim_{x\to0^+}x\ln x=0
$$

---

# 十三、例题 8：$\infty-\infty$ 型要先通分

求：

$$
\lim_{x\to0^+}\left(\frac1x-\frac1{\sin x}\right)
$$

当：

$$
x\to0^+
$$

时：

$$
\frac1x\to+\infty
$$

$$
\frac1{\sin x}\to+\infty
$$

形式是：

$$
\infty-\infty
$$

不能直接用洛必达法则。

先通分：

$$
\frac1x-\frac1{\sin x}
=
\frac{\sin x-x}{x\sin x}
$$

当：

$$
x\to0^+
$$

时，分子：

$$
\sin x-x\to0
$$

分母：

$$
x\sin x\to0
$$

得到：

$$
\frac00
$$

可以用洛必达法则。

第一次：

$$
\lim_{x\to0^+}\frac{\sin x-x}{x\sin x}
=
\lim_{x\to0^+}\frac{\cos x-1}{\sin x+x\cos x}
$$

仍是：

$$
\frac00
$$

第二次：

$$
=
\lim_{x\to0^+}\frac{-\sin x}{\cos x+\cos x-x\sin x}
$$

代入：

$$
\frac{0}{2}=0
$$

所以：

$$
\lim_{x\to0^+}\left(\frac1x-\frac1{\sin x}\right)=0
$$

---

# 十四、例题 9：幂指型未定式

有些极限形式如：

$$
1^\infty
$$

$$
0^0
$$

$$
\infty^0
$$

不能直接用洛必达法则，需要先取对数。

例如：

$$
\lim_{x\to0}(1+x)^{1/x}
$$

这是：

$$
1^\infty
$$

型。

设：

$$
y=(1+x)^{1/x}
$$

取对数：

$$
\ln y=\frac{\ln(1+x)}{x}
$$

右边是：

$$
\frac00
$$

用洛必达法则：

$$
\lim_{x\to0}\frac{\ln(1+x)}{x}
=
\lim_{x\to0}\frac{1/(1+x)}{1}=1
$$

所以：

$$
\lim_{x\to0}\ln y=1
$$

因此：

$$
\lim_{x\to0}y=e
$$

所以：

$$
\lim_{x\to0}(1+x)^{1/x}=e
$$

---

# 十五、洛必达法则的使用流程

遇到极限题时，不要直接求导。

按照以下步骤：

1. 先直接代入或判断极限形式；
2. 如果是 $\frac00$ 或 $\frac{\infty}{\infty}$，可以考虑洛必达；
3. 如果不是这两类，先不要用；
4. 对分子和分母分别求导；
5. 再判断新极限；
6. 如果仍是 $\frac00$ 或 $\frac{\infty}{\infty}$，可以再次使用；
7. 如果变成可直接代入的形式，直接代入；
8. 如果变得更复杂，应考虑其他方法。

---

# 十六、洛必达法则不替代基本技巧

有些极限用因式分解、有理化、等价无穷小更快。

例如：

$$
\lim_{x\to1}\frac{x^2-1}{x-1}
$$

可以因式分解：

$$
\frac{(x-1)(x+1)}{x-1}=x+1
$$

所以极限是：

$$
2
$$

也可以用洛必达：

$$
\lim_{x\to1}\frac{2x}{1}=2
$$

但对于这种题，因式分解更能保留结构直觉。

---

# 十七、常见错误

## 错误 1：没有未定式就用洛必达法则

例如：

$$
\lim_{x\to0}\frac{x+1}{x+2}
$$

直接是：

$$
\frac12
$$

不能用洛必达法则。

---

## 错误 2：把洛必达法则当成商法则

错误：

$$
\frac{f(x)}{g(x)}
\longrightarrow
\frac{f'(x)g(x)-f(x)g'(x)}{g(x)^2}
$$

这是商法则，不是洛必达法则。

洛必达法则是：

$$
\frac{f(x)}{g(x)}
\longrightarrow
\frac{f'(x)}{g'(x)}
$$

---

## 错误 3：只对分子求导

错误：

$$
\frac{\sin x}{x}
\longrightarrow
\frac{\cos x}{x}
$$

正确：

$$
\frac{\sin x}{x}
\longrightarrow
\frac{\cos x}{1}
$$

---

## 错误 4：多次洛必达时忘记每次都要检查形式

每次使用前都要确认仍是：

$$
\frac00
$$

或：

$$
\frac{\infty}{\infty}
$$

---

## 错误 5：遇到 $0\cdot\infty$、$\infty-\infty$、$1^\infty$ 直接使用洛必达

这些不是直接分式型，必须先转化。

---

# 十八、练习题

## A 组：判断能否直接使用洛必达

1. 判断 $\lim_{x\to0}\frac{\sin x}{x}$ 是否可直接使用洛必达法则。

2. 判断 $\lim_{x\to0}\frac{x+1}{x+2}$ 是否可直接使用洛必达法则。

3. 判断 $\lim_{x\to+\infty}\frac{x^2}{e^x}$ 是否可直接使用洛必达法则。

4. 判断 $\lim_{x\to0^+}x\ln x$ 是否可直接使用洛必达法则。

5. 判断 $\lim_{x\to0}\frac{1-\cos x}{x^2}$ 是否可直接使用洛必达法则。

---

## B 组：$\frac00$ 型

6. 求 $\lim_{x\to0}\frac{\sin x}{x}$。

7. 求 $\lim_{x\to0}\frac{e^x-1}{x}$。

8. 求 $\lim_{x\to0}\frac{\ln(1+x)}{x}$。

9. 求 $\lim_{x\to0}\frac{\tan x}{x}$。

10. 求 $\lim_{x\to0}\frac{1-\cos x}{x^2}$。

---

## C 组：$\frac{\infty}{\infty}$ 型

11. 求 $\lim_{x\to+\infty}\frac{x}{e^x}$。

12. 求 $\lim_{x\to+\infty}\frac{x^2}{e^x}$。

13. 求 $\lim_{x\to+\infty}\frac{\ln x}{x}$。

14. 求 $\lim_{x\to+\infty}\frac{x^3}{e^x}$。

15. 求 $\lim_{x\to+\infty}\frac{e^x}{x^3}$。

---

## D 组：转化后使用洛必达

16. 求 $\lim_{x\to0^+}x\ln x$。

17. 求 $\lim_{x\to+\infty}x e^{-x}$。

18. 求 $\lim_{x\to0^+}\left(\frac1x-\frac1{\sin x}\right)$。

19. 求 $\lim_{x\to0}(1+x)^{1/x}$。

20. 求 $\lim_{x\to+\infty}\left(1+\frac1x\right)^x$。

---

## E 组：综合判断

21. 判断：洛必达法则可以处理 $\frac00$ 型。

22. 判断：洛必达法则可以处理 $\frac{\infty}{\infty}$ 型。

23. 判断：只要是分式，就可以使用洛必达法则。

24. 判断：洛必达法则是对整个分式使用商法则。

25. 判断：每次重复使用洛必达法则前，都要重新检查是否仍是未定式。

---

## F 组：混合训练

26. 求 $\lim_{x\to0}\frac{x-\sin x}{x^3}$。

27. 求 $\lim_{x\to0}\frac{e^x-1-x}{x^2}$。

28. 求 $\lim_{x\to0}\frac{\ln(1+x)-x}{x^2}$。

29. 求 $\lim_{x\to+\infty}\frac{x^2+3x}{e^x}$。

30. 求 $\lim_{x\to0}\frac{\sin(2x)}{x}$。

---

# 十九、练习答案与解析

## A 组答案

1. 可以。直接代入是 $\frac00$ 型。

2. 不可以。直接代入是 $\frac12$，不是未定式。

3. 可以。是 $\frac{\infty}{\infty}$ 型。

4. 不可以直接使用。它是 $0\cdot(-\infty)$ 型，要先改写成分式。

5. 可以。直接代入是 $\frac00$ 型。

---

## B 组答案

6.

$$
\lim_{x\to0}\frac{\sin x}{x}
=
\lim_{x\to0}\frac{\cos x}{1}
=1
$$

7.

$$
\lim_{x\to0}\frac{e^x-1}{x}
=
\lim_{x\to0}\frac{e^x}{1}
=1
$$

8.

$$
\lim_{x\to0}\frac{\ln(1+x)}{x}
=
\lim_{x\to0}\frac{1/(1+x)}{1}
=1
$$

9.

$$
\lim_{x\to0}\frac{\tan x}{x}
=
\lim_{x\to0}\frac{\sec^2 x}{1}
=1
$$

10.

第一次：

$$
\lim_{x\to0}\frac{1-\cos x}{x^2}
=
\lim_{x\to0}\frac{\sin x}{2x}
$$

第二次：

$$
\lim_{x\to0}\frac{\sin x}{2x}
=
\lim_{x\to0}\frac{\cos x}{2}
=
\frac12
$$

---

## C 组答案

11.

$$
\lim_{x\to+\infty}\frac{x}{e^x}
=
\lim_{x\to+\infty}\frac1{e^x}=0
$$

12.

$$
\lim_{x\to+\infty}\frac{x^2}{e^x}
=
\lim_{x\to+\infty}\frac{2x}{e^x}
=
\lim_{x\to+\infty}\frac2{e^x}
=0
$$

13.

$$
\lim_{x\to+\infty}\frac{\ln x}{x}
=
\lim_{x\to+\infty}\frac{1/x}{1}
=0
$$

14.

$$
\lim_{x\to+\infty}\frac{x^3}{e^x}
=
\lim_{x\to+\infty}\frac{3x^2}{e^x}
=
\lim_{x\to+\infty}\frac{6x}{e^x}
=
\lim_{x\to+\infty}\frac6{e^x}
=0
$$

15.

$$
\lim_{x\to+\infty}\frac{e^x}{x^3}=+\infty
$$

也可多次洛必达后得到：

$$
\lim_{x\to+\infty}\frac{e^x}{6}=+\infty
$$

---

## D 组答案

16.

$$
x\ln x=\frac{\ln x}{1/x}
$$

所以：

$$
\lim_{x\to0^+}x\ln x
=
\lim_{x\to0^+}\frac{1/x}{-1/x^2}
=
\lim_{x\to0^+}(-x)=0
$$

17.

$$
x e^{-x}=\frac{x}{e^x}
$$

所以：

$$
\lim_{x\to+\infty}x e^{-x}
=
\lim_{x\to+\infty}\frac{x}{e^x}
=
0
$$

18.

$$
\frac1x-\frac1{\sin x}
=
\frac{\sin x-x}{x\sin x}
$$

第一次洛必达：

$$
\lim_{x\to0^+}\frac{\sin x-x}{x\sin x}
=
\lim_{x\to0^+}\frac{\cos x-1}{\sin x+x\cos x}
$$

第二次洛必达：

$$
=
\lim_{x\to0^+}\frac{-\sin x}{\cos x+\cos x-x\sin x}
=
0
$$

19. 设：

$$
y=(1+x)^{1/x}
$$

取对数：

$$
\ln y=\frac{\ln(1+x)}{x}
$$

右侧极限：

$$
\lim_{x\to0}\frac{\ln(1+x)}{x}=1
$$

所以：

$$
\lim_{x\to0}\ln y=1
$$

因此：

$$
\lim_{x\to0}y=e
$$

20. 设：

$$
y=\left(1+\frac1x\right)^x
$$

取对数：

$$
\ln y=x\ln\left(1+\frac1x\right)
$$

改写为：

$$
\ln y=\frac{\ln(1+1/x)}{1/x}
$$

令：

$$
u=\frac1x
$$

当：

$$
x\to+\infty
$$

时：

$$
u\to0^+
$$

所以：

$$
\lim_{x\to+\infty}\ln y
=
\lim_{u\to0^+}\frac{\ln(1+u)}{u}=1
$$

因此：

$$
\lim_{x\to+\infty}\left(1+\frac1x\right)^x=e
$$

---

## E 组答案

21. 正确。

22. 正确。

23. 错误。必须是 $\frac00$ 或 $\frac{\infty}{\infty}$ 型等可转化的未定式。

24. 错误。洛必达法则不是商法则，而是分子、分母分别求导。

25. 正确。

---

## F 组答案

26.

$$
\lim_{x\to0}\frac{x-\sin x}{x^3}
$$

第一次：

$$
=
\lim_{x\to0}\frac{1-\cos x}{3x^2}
$$

第二次：

$$
=
\lim_{x\to0}\frac{\sin x}{6x}
$$

第三次：

$$
=
\lim_{x\to0}\frac{\cos x}{6}
=
\frac16
$$

27.

$$
\lim_{x\to0}\frac{e^x-1-x}{x^2}
$$

第一次：

$$
=
\lim_{x\to0}\frac{e^x-1}{2x}
$$

第二次：

$$
=
\lim_{x\to0}\frac{e^x}{2}
=
\frac12
$$

28.

$$
\lim_{x\to0}\frac{\ln(1+x)-x}{x^2}
$$

第一次：

$$
=
\lim_{x\to0}\frac{\frac1{1+x}-1}{2x}
$$

整理分子：

$$
\frac1{1+x}-1=\frac{-x}{1+x}
$$

所以：

$$
\lim_{x\to0}\frac{-x}{2x(1+x)}
=
-\frac12
$$

也可以继续洛必达得到同样结果。

29.

$$
\lim_{x\to+\infty}\frac{x^2+3x}{e^x}
$$

第一次：

$$
=
\lim_{x\to+\infty}\frac{2x+3}{e^x}
$$

第二次：

$$
=
\lim_{x\to+\infty}\frac2{e^x}
=0
$$

30.

$$
\lim_{x\to0}\frac{\sin(2x)}{x}
$$

用洛必达：

$$
=
\lim_{x\to0}\frac{2\cos(2x)}{1}
=
2
$$

也可用重要极限：

$$
\frac{\sin(2x)}{x}
=
2\cdot\frac{\sin(2x)}{2x}
\to2
$$

---

# 二十、本课复习讲义

洛必达法则用于处理：

$$
\frac00
$$

和：

$$
\frac{\infty}{\infty}
$$

基本形式：

$$
\lim\frac{f(x)}{g(x)}
=
\lim\frac{f'(x)}{g'(x)}
$$

前提是原式为相应未定式，且导数比的极限存在或趋于无穷大。

使用流程：

1. 先判断形式；
2. 是 $\frac00$ 或 $\frac{\infty}{\infty}$ 才能直接用；
3. 分子、分母分别求导；
4. 不是商法则；
5. 每次重复使用前都要重新检查形式；
6. $0\cdot\infty$、$\infty-\infty$、$1^\infty$ 等形式要先转化。

典型结论：

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

$$
\lim_{x\to0}\frac{e^x-1}{x}=1
$$

$$
\lim_{x\to0}\frac{\ln(1+x)}{x}=1
$$

$$
\lim_{x\to+\infty}\frac{x^n}{e^x}=0
$$

其中 $n$ 为正整数。

---

# 二十一、进入第 84 单元的条件

第 84 单元是“罗尔定理与拉格朗日中值定理”。

进入前需要满足：

1. 能识别 $\frac00$ 型；
2. 能识别 $\frac{\infty}{\infty}$ 型；
3. 知道洛必达法则不是商法则；
4. 能连续多次使用洛必达法则；
5. 能把简单的 $0\cdot\infty$ 型改写成分式型；
6. 能把简单的 $\infty-\infty$ 型通分成分式型；
7. 能处理简单的 $1^\infty$ 型。
