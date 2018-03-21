---
title: "Fibonacci Numbers"
author: Aravind Iyer
date: 2017-09-15 16:00:00 +0530
categories: puzzles
mathjax: true
---

## Generating Fibonacci Numbers
Fibonacci numbers form a sequence denoted by $$F_n$$ and are defined as follows:

$$
\begin{align*}
  & F_1 = 1\\
  & F_2 = 1\\
  & F_n = F_{n-1} + F_{n-2} \text{ for } n \ge 3
\end{align*}
$$

For example, the first 10 Fibonacci numbers are 1, 1, 2, 3, 5, 8, 13, 21, 34, and 55.
Write a program to compute the $$n$$th Fibonacci number.

## Generating odd-valued Fibonacci numbers
Define a sequence of numbers denoted by $$G_n$$ as the sequence of odd-valued
Fibonacci numbers. To be precise, $$G_n$$ is derived from $$F_n$$ by discarding all
even-valued Fibonacci numbers. For example, the first 10 numbers in $$G_n$$ are
1, 1, 3, 5, 13, 21, 55, 89, 233, and 377. Write a program to compute $$G_n$$ given $$n$$.

## Summing Fibonacci numbers
Define a sequence of numbers denoted by $$S_n$$ as the sum of the first $$n$$ Fibonacci
numbers. To be precise, $$S_n$$ is defined as follows:

$$S_n = \sum_{i=1}^n F_i$$

For example, the first 10 numbers in $$S_n$$ are 1, 2, 4, 7, 12, 20, 33, 54, 88, and 143.
Write a program to compute $$S_n$$ given $$n$$.

## Summing odd-valued Fibonacci numbers
Define a sequence of numbers denoted by $$T_n$$ as the sum of the first $$n$$ odd-valued
Fibonacci numbers. To be precise, $$T_n$$ is defined as follows:

$$T_n = \sum_{i=1}^n G_i$$

For example, the first 10 numbers in $$T_n$$ are 1, 2, 5, 10, 23, 44, 99, 188, 421, and 798.
Write a program to compute $$T_n$$ given $$n$$.

## Summing squares of Fibonacci numbers
Define a sequence of numbers denoted by $$Z_n$$ as the sum of the squares of the first $$n$$
Fibonacci numbers. To be precise, $$Z_n$$ is defined as follows:

$$Z_n = \sum_{i=1}^n F_i^2$$

Write a program to compute $$Z_n$$ given $$n$$.

## Determining if a number is a Fibonacci number
Given a positive integer $$M$$, let us define $$n(M)$$ as follows:

$$
\begin{align*}
 & n(M) = i \text{ if there exists an index } i \text{ such that } M = F_i &  \\
 & n(M) = -1 \text{ if } M \text{ is not a Fibonacci number} & 
\end{align*}
$$

Write a program to compute $$n(M)$$ given $$M$$.

## Determining the index of a Fibonacci number
Let us assume we are given a Fibonacci number $$M$$. To be precise, there exists an index
$$i$$ such that $$M=F_i$$. Write a program to compute $$n(M)$$ given a Fibonacci number $$M$$.

*(Please write in your comments to [letters@aravindiyer.com](mailto:letters@aravindiyer.com).)*
