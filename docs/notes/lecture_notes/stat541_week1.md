# Week 1

## Requirement

Statistics: Multiple Regression, Bias-var Decomposition

Calculus: Interated Intigration

## Supervised Learning

Suppose we have data pairs

$$
(x^{(1)},y^{(1)}),\dots, (x^{(n)},y^{(n)}) \sim P \quad(iid.)
$$

where $P$ is some distribution.

### Our Goal

Find a function $f:\mathcal{X}\rightarrow \mathcal{Y}$ such that $f(x)\approx y$ when $(x,y)\sim P$, where

- $x$ is called: predictor variable / covariates / independent var. / inputs / features
- $y$ is called: response var. / output var. / dependent var.

### Examples:

- $\mathcal{Y} = \mathbb{R}$: Regression Problem
- $\mathcal{Y}$ is a finite set: Image Classification

### Learning Algorithm

To obtain an $f$ we use the training data to output on Learning algorithm

$$
\phi_n: (\mathcal{X}\times \mathcal{Y})^n \longrightarrow \mathcal{Y}^\mathcal{X}
$$

where $\mathcal{Y}^\mathcal{X}$ is the set of all functions from $\mathcal{X}$ to $\mathcal{Y}$. Therefore,

$$
\hat{f} = \phi_n(x^{(1)},y^{(1)},\dots, x^{(n)},y^{(n)})
$$

is a random function(1) determined by the data and the learning algorithm $\phi_n$. 
{.annotate}

1.  Note that a random function is a deterministic function. More precisely, a function of an arbitrary argument $t$ (defined on the set $T$ of its values, and taking numerical values or, more generally, values in a vector space) whose values are defined in terms of a certain experiment and may vary with the outcome of this experiment according to a given probability distribution.

### **Definition** Loss function

Loss function $L: \mathcal{Y} \times \mathcal{Y} \rightarrow [0,+\infty)$ is to estimate the error of $f$. How close $f(x)$ is to $y$ is gauged by $L(f(x),y)$. Examples: squared error loss

$$
L(f(x),y) = (y - f(x))^2, 
$$

and $0-1$ loss

$$
L(f(x),y) = I\left(f(x) \neq y\right) = \left\{\begin{matrix}
1,\quad & \text{ if } f(x) \neq y, \\
0,\quad & \text{ if } f(x) = y,
\end{matrix}\right.
$$

where $I$ is the indicator function. 

### **Definition** Risk function

- Risk function (a.k.a. prediction error)

$$
R(f,P) = E_{(x,y)}\left(L(f(x),y)\right) = \int_{\mathcal{X}\times \mathcal{Y}} L\left(f(x),y\right) p(x,y) \,\mathrm{d}x\mathrm{d}y
$$

- Oracle prediction error (a.k.a. Bayes Risk):

$$
R^*(P) = \inf_{f} R(f,P)
$$

- Oracle predictor $f^*$ satisfies

$$
R(f^*,P) = R^*(P)
$$

### Compute the Oracle Predictor

Compute $R^*(P)$ for squared error loss:

$$
\begin{aligned}
R(f,P) 
&= E_{(x,y)}\left((f(x) - y)^2\right) \\
&= \int_{\mathcal{X}} \int_{\mathcal{Y}} (y - f(x))^2 p(y|x) p(x) \,\mathrm{d}y \mathrm{d}x \\
&= \int_{\mathcal{X}}p(x)\left(\int_{\mathcal{Y}}(y - f(x))^2 p(y|x)\,\mathrm{d}y\right)\,\mathrm{d}x
\end{aligned}
$$

For fixed $x$, we minimize over the value of $f(x)$, that is, it's suffice to set

$$
f(x) = \operatorname*{arg\, min}\limits_z \int_{\mathcal{Y}}(y - z)^2 p(y|x)\,\mathrm{d}y.
$$

It is equivalent to minimize:

$$
\int_{\mathcal{Y}} y^2 p(y|x)\,\mathrm{d}y - 2z\cdot \int_{\mathcal{Y}} y\cdot p(y|x)\,\mathrm{d}y + z^2\cdot \int_{\mathcal{Y}} p(y|x)\,\mathrm{d}y.
$$

For the above equation, the first term is independent on $z$ and

$$
\int_{\mathcal{Y}} p(y|x)\,\mathrm{d}y = 1,
$$

for fixed $x$. Then we have

$$
\begin{aligned}
f(x)
&= \operatorname*{arg\, min}\limits_{z} \left(- 2z\cdot \int_{\mathcal{Y}} y\cdot p(y|x)\,\mathrm{d}y + z^2 \right) \\
&= \int_{\mathcal{Y}} y\cdot p(y|x)\,\mathrm{d}y \\
&= E(y|x). 
\end{aligned}
$$

Therefore, oracle predictor is given by $f^*(\tilde{x})=E(y|X=\tilde{x})$. Similar arguments can be obtained for other loss functions. 

Additionally, our computation shows that making assumptions about the allowable $f$, i.e. assume $f$ lies in some set of functions $\mathcal{F}$, is somewhat equivalent to making assumptions about $P$.

### Making Assumptions

Ideally we would like a $f$ such that $R(f,P)$ is small for all distribution $P$. However, this is not possible by the *No Free Lunch Theorem*. Roughly, this says that for any $f$, there exists a $P$ such that $R(f,P)$ is large. In classification, this says that there exists a $P$ such that $f$ is no better than random guessing(1). 
{.annotate}

1. Random guessing is that we flip a coin and predict $y$ based on the coin being heads or tails.

Our solution is to make assumptions about $P$:  

Assume $P\in\mathcal{P}$, where $\mathcal{P}$ is some subset of probability distributions. This suggest assumptions that we can make about the function class of predictors that we use. For example, $E(y|x)$ is optimal for squared error loss. Given $\mathcal{P}$ we may want to restrict $\mathcal{F}$ to functions that have the form $E(y|x)$ for $P\in \mathcal{P}$.  

### Complexity (bias-variance) tradeoff:

- More complex function classes $\mathcal{F}$ -- low bias (i.e. able to approximate the oracle $E(y|x)$)
- Large class of $\mathcal{F}$ -- it is hard to find the best $f$.

### Error Decomposition

For $f\in \mathcal{F}$, since $\mathcal{F}$ may not be large enough, $R^*(P)$ and $\inf_{f\in \mathcal{F}} R(f,P)$ may not be equal. We have the following decomposition of the risk function $R(f,P)$:

$$
{\color{red} R(f,P) - \inf_{f\in \mathcal{F}} R(f,P)} + {\color{green} \inf_{f\in \mathcal{F}} R(f,P) - R^*(P)} + {\color{blue} R^*(P)}.
$$

- ${\color{red} \text{Red}}$: Estimation error, which is non-negative.
- ${\color{green} \text{Green}}$: Approximation error, which is non-negative.
- ${\color{blue} \text{Blue}}$: the inherent error, which is the best we can do!


## Emperical Risk Minimization (ERM)

Idea is to find an approximation of $R(f,P)$ and minimize this over $f$ (also assume that $f$ lies in some specified class of functions $\mathcal{F}$). The ERM predictor $\hat{f}$ is defined as 

$$
\hat{f} = \operatorname*{arg\, min}_{g\in \mathcal{F}}\left(\frac{1}{n}\sum_{i=1}^{n}L\left(g(x^{(i)}),y^{(i)}\right)\right),
$$

which is called the average loss or emperical risk. Note that 

- The emperical risk depends on the choice of function class $\mathcal{F}$, such as linear functions and complicated neural networks.
- Finding the `argmin` is not always easy, and hence there are various optimization algorithms approximating the `argmin`.

### Gauge Learning Algorithms

Given a learning algorithm $\phi_n$, how can we gauge the performance of $\phi_n$? We can look at $R(\hat{f},P)$, that is, we view the training data $\mathcal{D}_n$ as random and then $R(\hat{f},P)$(1) is a random variable. The expected risk (a.k.a. expected prediction error) is given by
{.annotate}

1. Here $\hat{f}$ is dependent on $\mathcal{D}_n$, which should be written as $\hat{f}_{\mathcal{D}_n}$, but for simplicity, we still denote it as $\hat{f}$. 

$$
R(\phi_n,P) = E_{\mathcal{D}_n}\left(R(\hat{f},P)\right) = E_{\mathcal{D}_n}\left(E_{(x,y)}\left(L(\hat{f},y)\right)\right). 
$$

There are two sources of randomness: 

- The training data $\mathcal{D}_n$ that determines $\hat{f}$. 
- The pair $(x,y)$ where we predict $y$ using $\hat{f}(x)$. 
