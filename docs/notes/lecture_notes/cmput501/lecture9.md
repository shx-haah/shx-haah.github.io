# Lecture 9

<embed src="https://shx-haah.github.io/notes/lecture_notes/cmput501/Scribed9.pdf" type="application/pdf" width="100%" height="750px"/>


> Notes below are meant to supplement the scribed notes.

## Universal Hash Functions

### Introduction

- $\mathcal{H}$ is a family of deterministic hash functions mapping a universe $U$ to the indices of a hash table $T$ of size $n$.
- We want to hash a subset $S \subset U$ (may be chosen adversarially) into $T$.
- To get a good expected performance regardless of $S$, for each set $S$, we sample a function $h\in\mathcal{H}$ uniformly at random. 
- Use hash function $h$ to hash elements in $S$ into table $T$.

### Interpretation of Different Hash Function Properties

The universal hash function property (Definition 2) requires a family $\mathcal{H}$ to have an **expected collision bound**, even for adversarially chosen sets $S$. 
The (strongly) 2-universal hash function property (Definition 3) indicates for any distinct elements $x,y\in U$,

:material-triangle-small-up: $\mathrm{Pr}_{h\in\mathcal{H}}[h(x) = a] = \frac{1}{n}$ for any $a\in [n]$,(1)
{.annotate}

1. By $\mathrm{Pr}_{h\in\mathcal{H}}[h(x) = a] = \sum_{b\in [n]} \mathrm{Pr}_{h\in\mathcal{H}}[h(x) = a \wedge h(y)=b]$.

:material-triangle-small-up: $h(x)$ and $h(y)$ are independent random variables when $h$ is sampled uniformly from $\mathcal{H}$.(1)
{.annotate}

1. For any $a,b\in [n]$, $\mathrm{Pr}[h(x) = a \wedge h(y)=b]= \frac{1}{n^2} = \mathrm{Pr}[h(x) = a] \cdot \mathrm{Pr}[h(y) = b]$. 

Note that pairwise independence **DOES NOT** imply mutual independence for three or more random variables.(1)
{.annotate}

1. For example, consider three random variables $X,Y,Z$ such that each takes values in $\{0,1\}$ with equal probability, and $Z = X \oplus Y$ (XOR operation). Then any pair of them are independent, but all three are not mutually independent since knowing any two determines the third.

The inequality in the definition of the $k$-wise independent property (Definition 4) actually holds as **an equality**(1) for any distinct $x_1,x_2,\dots,x_k\in U$ and any $\alpha_1,\alpha_2,\dots,\alpha_k\in [n]$. Therefore, the $k$-wise independent property generalizes the independence property in the 2-universal property to $k$ elements, and the above two properties extend naturally to the $k$-wise independent property.(2)
{.annotate}

1. Since $\sum_{\alpha_1,\alpha_2,\dots,\alpha_k\in [n]} \mathrm{Pr}_{h\in\mathcal{H}}[h(x_1) = \alpha_1 \wedge \dots \wedge h(x_k) = \alpha_k] = 1$, we have each term must equal $\frac{1}{n^k}$. Some authors write “$\leq$” out of habit or to emphasize a collision bound rather than strict independence. 

2. That is, each $h(x_i)$ is uniformly distributed over $[n]$, and any subset of $\{h(x_1),h(x_2),\dots,h(x_k)\}$ are mutually independent random variables when $h$ is sampled uniformly from $\mathcal{H}$.

