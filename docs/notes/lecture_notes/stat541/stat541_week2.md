# Week 2

## A Useful Technique

Recall that the oracle predictor is given by

$$
E(y|x) = \int_{\mathcal{Y}} y\cdot p(y|x) \,\mathrm{d}y,
$$

which is a function of $x$, denoted as $f^*(x)$.

### Key Property

We will prove the following equation

$$
E_{(x,y)}\left(g(x)\cdot E(y|x)\right) = E_{(x,y)}\left(g(x)\cdot y\right),
$$

which holds for all functions $g$ where $Var\left(g(x)\right)<+\infty$(1). Specifically, when taking $g(x)\equiv 1$, we obtain the *law of total expectation,* i.e. $E\left(y\right) = E\left(E(y|x)\right)$(2).
{.annotate}

1. This a technical assumption which is usually satisfied in practical problems.
2. One special case states that if $\left\{A_i\right\}$ is a finite or countable partition of the sample space, then $E(X)=\sum_i E\left(X | A_i\right) \cdot Pr\left(A_i\right)$.

Obviously, it is equivalent to

$$
E_{(x,y)}\left(g(x)\left(y-E(y|x)\right)\right) = 0,
$$

which is an orthogonality property.

### Proof

$$
\begin{aligned}
E_(x,y)\left(g(x)\cdot E(y|x)\right) 
&= E_x\left(g(x)\cdot E(y|x)\right) \\
&= \int_{\mathcal{X}}g(x)\cdot E(y|x) p(x) \,\mathrm{d}x \\
&= \int_{\mathcal{X}}g(x)\cdot p(x) \int_{\mathcal{Y}} y\cdot p(y|x) \,\mathrm{d}y \,\mathrm{d}x \\
&= \int_{\mathcal{X}} \int_{\mathcal{Y}} g(x)\cdot y \cdot p(y|x) p(x) \,\mathrm{d}y \,\mathrm{d}x \\
&= E_{(x,y)}\left(g(x)\cdot y\right),
\end{aligned}
$$

where the last equation is from $p(y|x) p(x) = p(x,y)$.

### Reprove the Oracle Predictor

Let us show again that $E(y|x)$ is the oracle predictor under the squared error loss:

$$
\begin{aligned}
R(f,P) 
&= E_{(x,y)}\left(\left(f(x)-y\right)^2\right) \\
&= E_{(x,y)}\left(\left(f(x)-E(y|x)+E(y|x)-y\right)^2\right) \\
&= E_{(x,y)}\left(\left(f(x)-E(y|x)\right)^2\right) + 2E_{(x,y)}\left({\color{red} \left(f(x)-E(y|x)\right)}\left(E(y|x)-y\right)\right) \\ 
&\quad + E_{(x,y)}\left(\left(E(y|x)-y\right)^2\right) \\
&= {\color{green} E_{(x,y)}\left(\left(f(x)-E(y|x)\right)^2\right)} + {\color{blue} E_{(x,y)}\left(\left(E(y|x)-y\right)^2\right)},
\end{aligned}
$$

where the last equation is from the equivalent form of the [Key Property](#key-property) regarding the above $\color{red}{\text{red}}$ term as a function of $x$.
Note that both the $\color{green}{\text{green}}$ and $\color{blue}{\text{blue}}$ term are non-negative, and the $\color{blue}{\text{blue}}$ term is independent of $f$. Therefore, to minimize $R(f,P)$, it is sufficient to minimize the $\color{green}{\text{green}}$ term, and the minimizer $f^*(x) = E(y|x)$.

### Geometric Illustration

Pythagorean Decomposition of $R(f,P)$: $E(y|x)$ can be viewed as an orthogonal projection of $y$ on the space of random variables that are functions of $x$. 

To illustrate this decomposition, consider the space of all r.v. with finite variance(1) and the set of all r.v. that are functions of $x$ becomes a hyperplane lying in this space. Assume $y$ cannot simply written as certain function of $x$. The Pythagorean decomposition of $R(f,P)$ is shown in the following figure. 
{.annotate}

1. This space is a $L^2$ space. 

![Pythagorean Decomposition](stat541_week201.svg "Pythagorean Decomposition")

### An Example of Decomposition

If taking $f(x)=E(y)$, a constant, in the decomposition of the prediction error, we have

$$
\begin{aligned}
    Var(y)
    &= E_{(x,y)}\left(\left(y-E(y)\right)^2\right) \\
    &= E_{(x,y)}\left(\left(y-E(y|x)\right)^2\right) + E_{(x,y)}\left(\left(E(y|x)-E(y)\right)^2\right) \\
    &= Var\left(E(y|x)\right) + E\left(Var(y|x)\right). 
\end{aligned}
$$

The last equation is because $E\left(E(y|x)\right) = E(y)$, by [Key Property](#key-property). 

### Bias-Variance Decomposition

Denote the data set as $\mathcal{D}_n$ and the model based on learning algorithm $\phi_n$ and this data set as $\hat{f}_{\mathcal{D}_n}(x)$ (1). Consider the expected risk of the learning algorithm $\phi_n$, denoted as $\mathcal{R}$, 
{.annotate}

1. The model is the function $f$ we are looking for, which uses features to predict outputs. For details, see [Learning Algorithm](stat541_week1.md#learning-algorithm). 

$$
\begin{aligned}
    \mathcal{R}(\phi_n,P)
    &= E_{\mathcal{D}_n}\left(R\left(\hat{f}_{\mathcal{D}_n},P\right)\right) \\
    &= E_{\mathcal{D}_n}\left(E_{(x,y)}\left(\left(\hat{f}_{\mathcal{D}_n} - y\right)^2\right)\right) \\
    &= {\color{red} E_{\mathcal{D}_n}\left(E_{(x,y)}\left(\left(\hat{f}_{\mathcal{D}_n} - E(y|x)\right)^2\right)\right)} + {\color{green} E_{\mathcal{D}_n}\left(E_{(x,y)}\left(\left(y - E(y|x)\right)^2\right)\right)}, 
\end{aligned}
$$

where the ${\color{green} \text{green}}$ term is the oracle predict error $R^*(P)$ and we will focus on the ${\color{red} \text{red}}$ term. 

We can apply Fubinis's theorem to the ${\color{red} \text{red}}$ term. To illustrate this, we consider the following integral: 

$$
\begin{aligned}
    &E_{\mathcal{D}_n}\left(E_{(x,y)}\left(\left(y - E(y|x)\right)^2\right)\right) \\
    &\quad = \left(\int_{\mathcal{X}}\int_{\mathcal{Y}}\int_{\mathcal{X}}\int_{\mathcal{Y}}\cdots\right) \left(\int_{\mathcal{X}}\int_{\mathcal{Y}} \left(\hat{f}_{\mathcal{D}_n} - E(y|x)\right)^2 p(x,y)\,\mathrm{d}x\mathrm{d}y\right) \prod_{i=1}^{n}p(x^{(i)},y^{(i)})\,\mathrm{d}x^{(1)}\mathrm{d}y^{(1)}\cdots\mathrm{d}x^{(n)}\mathrm{d}y^{(n)},  
\end{aligned}
$$

where we can exchange the integrals by Fubinis's theorem and finally get the integral of $x,y$ to be the most outside integral. Then, we have 

$$
\begin{aligned}
    & E_{\mathcal{D}_n}\left(E_{(x,y)}\left(\left(y - E(y|x)\right)^2\right)\right) \\
    &\quad = E_{(x,y)}\left(E_{\mathcal{D}_n}\left(\left(\hat{f}_{\mathcal{D}_n} - E(y|x)\right)^2\right)\right)\\
    &\quad = E_{(x,y)}\left(E_{\mathcal{D}_n}\left(\left(\hat{f}_{\mathcal{D}_n} - E_{\mathcal{D}_n}\left(\hat{f}_{\mathcal{D}_n}\right)\right)^2\right)\right) + E_{(x,y)}\left(E_{\mathcal{D}_n}\left(\left(E_{\mathcal{D}_n}\left(\hat{f}_{\mathcal{D}_n}\right) - E(y|x)\right)^2\right)\right) \\
    &\quad = {\color{blue} E_{(x,y)}\left(Var_{\mathcal{D}_n}\left(\hat{f}_{\mathcal{D}_n}(x)\right)\right)} + {\color{gray} E_{(x,y)}\left(\left(E_{\mathcal{D}_n}\left(\hat{f}_{\mathcal{D}_n}\right) - E(y|x)\right)^2\right)}, 
\end{aligned}
$$

where the two terms are ${\color{blue} \text{variance term}}$ (at a fixed $x$) and ${\color{gray} \text{bias term}}$, respectively. 

### Illustrations by Polynomial Fitting

To illustrate this, if the oracle predictor $E(y|x)$ is some 3-degree polynomial, assume we fit data sets via linear functions and 3-degree polynomials. For the linear learning algorithms, since $E(y|x)$ is some 3-degree polynomial and $E_{\mathcal{D}_n}\left(\hat{f}_{\mathcal{D}_n}\right)$ is some linear function, the ${\color{gray} \text{bias term}}$ is likely to be large; on the other hand, ${\color{blue} \text{variance term}}$ may not be too large, for linear functions vary slightly compared among linear functions. This 'small variance' is shown in the following figure, 
![Linear Model](stat541_week202.svg "Linear Model") 
where the gray thick curve is $E(y|x)$, and  colored curves are different prediction functions based on different data sets, and dashed curve is $E_{\mathcal{D}_n}\left(\hat{f}_{\mathcal{D}_n}\right)$. Conversely, for 3-degree-polynomial learning algorithms, the ${\color{gray} \text{bias term}}$ is likely to be small and ${\color{blue} \text{variance term}}$ may be large. This 'large variance' is shown in the following figure. 
![Linear Model](stat541_week203.svg "Linear Model")

To better understand this, we can consider an extreme example. If we use very high degree polynomials to fit data sets, we can make our prediction function exactly go through each training data point. In this case, the bias would be small(1). However, higher degree polynomials can oscillate more freely than lower degree polynomials, and this usually leads to our prediction function shaping drastically different to each other when coming from different data sets. 
{.annotate}

1. The empirical risk is 0 in this case. 

Even if $E(y\mid x)$ is a degree $d$ polynomial. It can still be better (for small to medium(1) $n$) to fit a lower degree polynomial. For lager $n$, we can consider more complex models.  
{.annotate}

1. Usually, we say $n\leq 50$ is small, $50<n\leq 100$ is medium, and $n>100$ is large, but there is actually no formal standard. The best way to select a model is to compare different models using the [cross-validation](stat541_week4.md#data-splitting-and-cross-validation) method. 