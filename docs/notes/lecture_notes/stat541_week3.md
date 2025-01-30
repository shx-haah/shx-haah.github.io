# Week3

## Recap on Singular Value Decomposition

### Orthogonal Matrix

Let $V\in \mathbb{R}^{p\times k}$, given by

$$
V = \begin{bmatrix}
\mid & & \mid \\
v_1 & \cdots & v_k \\
\mid & & \mid
\end{bmatrix}.
$$

Then $V$ has orthogonal columns if

$$
v_i^T v_j =\left\{\begin{matrix}
    &  1, \quad \text{ if } i=j, \\
    &  0, \quad \text{ if } i\neq j. 
\end{matrix}\right.
$$

For such $V$, we have $V^T V = I_k$. Note that it is often NOT the case that $V V^T = I_p$.

A square matrix $V\in \mathbb{R}^{k\times k}$ with orthogonal columns is called an orthogonal matrix. Note that $V^{-1} = V^T$.

### **Definition** Thin SVD

For a matrix $A\in \mathbb{R}^{p\times q}$ ($p\geq q$), the thin SVD of $A$ is a representation of the form

$$
A = VDU^T, \quad V\in \mathbb{R}^{p\times q}, D\in \mathbb{R}^{q\times q}, U\in \mathbb{R}^{q\times q},
$$

whrere $V$ and $U$ have orthogonal columns and $D$ is diagonal.

The column vectors of $V$ and $U$ are respectively called the left and right singular vectors. The singular values of $A$ are the diagonal elements of $D$.

**Remarkable results**: Every matrix $A\in \mathbb{R}^{p\times q}$ has an SVD. 

### Spectral Decomposition

A spectral decomposition of a symmetric matrix $A\in \mathbb{p\times p}$ is a representation of $A$ as 

$$
A = VDV^T, \quad V\in \mathbb{R}^{p\times p}, D\in \mathbb{R}^{p\times p},
$$

where $V = \begin{bmatrix}v_1 & v_2 & \dots & v_p \end{bmatrix}$ is orthogonal and $D = diag\{d_1,d_2,\dots,d_p\}$ is diagonal. 

The columns of $V$ are the eigenvector of $A$ and $d_i$ is the associated eigenvalue: 

$$
Av_i = VDV^Tv_i = d_i v_i. 
$$

**Remarkable results** (spectral theorem): Every symmetric matrix $A\in \mathbb{R}^{p\times p}$ has a spectral decomposition. 

## Recap on Multivariate Statistics

### Notations

Let $\boldsymbol{X}$ be a $k$-dimensional random vector (a special case of random matrices)

$$
\boldsymbol{X}= \begin{bmatrix} 
X_1 \\
\vdots \\
X_k
\end{bmatrix},
$$

or a $p\times q$ random matrix

$$
\boldsymbol{X}= \begin{bmatrix}
X_{11} &\cdots & X_{1q} \\
\vdots & \ddots & \vdots \\
X_{p1} & \cdots & X_{pq}
\end{bmatrix},
$$

where each $X_i\in$ or $X_{ij}$ is a random variable. $E(\boldsymbol{X})$ is defined componentwise, i.e.

$$
E(\boldsymbol{X})= \begin{bmatrix}
E(X_{11}) &\cdots & E(X_{1q}) \\
\vdots & \ddots & \vdots \\
E(X_{p1}) & \cdots & E(X_{pq})
\end{bmatrix},
$$

and $E(\boldsymbol{X})$ has linearity: for constant matrices $A\in\mathbb{R}^{d\times p}$, $B\in\mathbb{R}^{q\times q}, $C\in\mathbb{R}^{d\times q}$,

$$
E(A\boldsymbol{X}B + C) = AE(\boldsymbol{X})B + C. 
$$

For random vectors $\boldsymbol{X}\in \mathbb{R}^p$, its covariance matrix is defined as the $p\times p$ symmetric matrix $Cov(\boldsymbol{X})$, given by

$$
[Cov(\boldsymbol{X})]_{ij} = Cov(X_i,X_j). 
$$

Similar to the covariance of random variable, we have

$$
\begin{aligned}
    Cov(\boldsymbol{X}) 
    &= E\left(\left(\boldsymbol{X}-E(\boldsymbol{X})\right)\left(\boldsymbol{X}-E(v)\right)^T\right) \\
    &= E(\boldsymbol{X} \boldsymbol{X}^T) - E(\boldsymbol{X})E(\boldsymbol{X})^T.  
\end{aligned}
$$

From the above, we have 

$$
Cov(A\boldsymbol{X}) = A \cdot Cov(X) \cdot A^T. 
$$

### Multivariate Normal Distribution

The multivariate normal distribution of a $k$-dimensional random vector $\boldsymbol{X}=\left(X_1, \ldots, X_k\right)^{T}$ can be written in the following notation:

$$
\boldsymbol{X} \sim \mathcal{N}(\boldsymbol{\mu}, \boldsymbol{\Sigma}) \quad \text{ or } \quad \boldsymbol{X} \sim \mathcal{N}_k(\boldsymbol{\mu}, \boldsymbol{\Sigma}), 
$$

with $k$-dimensional mean vector

$$
\boldsymbol{\mu}=E(\boldsymbol{X})=\begin{bmatrix}
E\left(X_1\right) \\
E\left(X_2\right)  \\
\vdots \\
E\left(X_k\right)
\end{bmatrix}
$$

and $k \times k$ covariance matrix

$$
\Sigma_{i, j}=E\left(\left(X_i-\mu_i\right)\left(X_j-\mu_j\right)\right)=Cov\left(X_i, X_j\right), \quad \forall i,j = 1,\dots, k.
$$

$\boldsymbol{\Sigma}$ is assumed to be positive definite (i.e. non-degenerate) and therefore, $\boldsymbol{\Sigma}^{-1}$ is also positive definite. In this case, the density of $\boldsymbol{X}$ is given by

$$
p(\boldsymbol{z}) = \frac{1}{\sqrt{(2\pi)^k\det(\boldsymbol{\Sigma})}}\exp\left(-\frac{1}{2}(\boldsymbol{z}-\boldsymbol{\mu})^T\boldsymbol{\Sigma}^{-1}(\boldsymbol{z}-\boldsymbol{\mu})\right). 
$$

**Fact:** for a full-rank matrix $A\in \mathbb{R}^{p\times q}$ ($q\leq p$) and $b\in\mathbb{R}^q$, we have 

$$
A\boldsymbol{X} + b\sim \mathcal{N}_k(A\boldsymbol{\mu}+b, A\boldsymbol{\Sigma}A^T). 
$$

## Linear Regression

The basic idea of linear regression is to assume that 

$$
y \approx \beta_0 + \sum_{i=1}^{p} \beta_i x_i,
$$

where $\boldsymbol{X} = [x_1, x_2, \dots, x_p]^T$ (for now we assume $\boldsymbol{x}\in \mathbb{R}^p$). More precisely, we make a statement about $p(y\mid\boldsymbol{x})$ as follows: 

$$
y = \beta_0 + \sum_{i=1}^{p} \beta_i x_i + \varepsilon, 
$$

where $\varepsilon$ is noise with $\varepsilon \sim \mathcal{N}({0,\sigma^2})$ and $\boldsymbol{x}$ is independent of the noise. Thus, we have 

$$
y\mid \boldsymbol{x} \sim \mathcal{N}(\beta_0 + \sum_{i=1}^{p} \beta_i x_i, \sigma^2).
$$

We know that (under squared error loss) the oracle predictor is 

$$
E(y\mid\boldsymbol{x}) = \beta_0 + \sum_{i=1}^{p} \beta_i x_i = f^*(\boldsymbol{x}). 
$$

The goal is to find $\beta_0,\dots,\beta_p$ and thus $f^*$. 

### Rewrite Training Data in Matrix Form

Assume training data $\{(\boldsymbol{x}^{(i)},y^{(i)})\}_{i=1}^n$ were i.i.d. generated via the statement about $p(y\mid\boldsymbol{x})$. To simplify the notations, we define 

$$
\boldsymbol{Y} = \begin{bmatrix} 
y^{(1)} \\
\vdots \\
y^{(n)}
\end{bmatrix}, \quad 
\boldsymbol{\varepsilon} = \begin{bmatrix}
\varepsilon^{(1)} \\
\vdots  \\ 
\varepsilon^{(n)}
\end{bmatrix}, \quad 
\boldsymbol{\beta} = \begin{bmatrix}
\beta^{(0)} \\
\vdots \\
\beta^{(n)}
\end{bmatrix},
$$ 

and design matrix $\boldsymbol{X}\in \mathbb{R}^{n\times(p+1)}$ given by 

$$
\boldsymbol{X} = \begin{bmatrix}
1 & \left(\boldsymbol{x}^{(1)}\right)^T \\
1 & \left(\boldsymbol{x}^{(2)}\right)^T \\
\qquad \vdots \\
1 & \left(\boldsymbol{x}^{(n)}\right)^T 
\end{bmatrix}. 
$$

Then training data can written as 

$$
\boldsymbol{Y} = \boldsymbol{X}\boldsymbol{\beta} + \boldsymbol{\varepsilon}. 
$$

Now we want to use training data to estimate $\beta_0,\dots,\beta_p$ and thus $f^*$. 

### Recap on Likelihood Function

The likelihood function $L(\theta\mid \boldsymbol{x})$ illustrates the probability of $\theta$ given data set $\boldsymbol{x} = (x_1,\dots,x_n)^T$. 

More precisely, assume we have $n$ samples $(x_1,\dots,x_n)$ observed from a distribution $p_{\theta}(x)$ with an unknown parameter $\theta$, and our goal is to estimate $\theta$ using the observed data. 

We view the observed samples are realizations of some random variables $X_1, X_2, \dots, X_n$, which has a joint density function $p\left(X_1, \dots, X_n \mid \theta\right)$. Given $X_1=x_1, \dots, X_n=x_n$, we may consider the probability of this event being observed, which is the likelihood function (a function of $\theta$) defined by:

$$
L(\theta)=L\left(\theta \mid x_1, \dots, x_n\right)=p\left(X_1=x_1, \dots, X_n=x_n \mid \theta\right). 
$$

Note that the likelihood function is NOT a probability density function. It measures the support provided by the data for each possible value of the parameter. If we compare the likelihood function at two parameter points and find that 

$$
L\left(\theta_1 \mid \boldsymbol{x}\right)>L\left(\theta_2 \mid \boldsymbol{x}\right)
$$ 

then the sample we actually observed is more likely to have occurred if $\theta=\theta_1$ than if $\theta=\theta_2$. This can be interpreted as $\theta_1$ is a more plausible value for $\theta$ than $\theta_2$. Therefore, one approach to estimate $\theta$ is to choose the value of $\theta$ which gives you the highest probability among all possible values. 

With the assumption that samples are drawn i.i.d., the joint probability is given by multiplied probabilities, i.e.  

$$
p\left(X_1, \dots, X_n \mid \theta\right) = \prod_{i=1}^n p_\theta\left(X_i\right), 
$$

hence taking the log transforms this into a summation, which is usually easier to maximize analytically. Thus, we often write the log-likelihood rather than the likelihood. 

### Estimate the Coefficients $\beta_i$

Here we find an estimate of $\boldsymbol{\beta}$ by maximum likelihood estimation: 

By $\boldsymbol{X}$ is independent of the noise (and vice versa), we have 

$$
\boldsymbol{Y} \mid \boldsymbol{X} \sim \mathcal{N}_{n}(\boldsymbol{X}\boldsymbol{\beta}, \sigma^2I_n),
$$

and thus, the (log-)likelihood function is given by the density function of the above multivariate normal distribution. 

By maximizing the likelihood function, we can estimate $\boldsymbol{\beta}$: 

$$
\begin{aligned}
\hat{\boldsymbol{\beta}}
&= \operatorname*{arg\, max}_\beta \ln(p(\boldsymbol{Y} \mid \boldsymbol{X})) \\
&= \operatorname*{arg\, max}_\beta \left(\frac{1}{2\sigma^2} (\boldsymbol{Y} - \boldsymbol{X}\boldsymbol{\beta})^T (\boldsymbol{Y} - \boldsymbol{X}\boldsymbol{\beta})\right) \\
&= \operatorname*{arg\, max}_\beta \|\boldsymbol{Y} - \boldsymbol{X}\boldsymbol{\beta}\|^2,
\end{aligned}
$$

which becomes a least squares problem. We take a gradient with respect to $\boldsymbol{\beta}$ and set the gradient for 0, and after solving for $\boldsymbol{\beta}$, we have 

$$
\hat{\boldsymbol{\beta}} = \left(\boldsymbol{X}^T \boldsymbol{X}\right)^{-1} \boldsymbol{X}^T\boldsymbol{Y}, 
$$

where we assume $\boldsymbol{X}$ is a full-rank matrix and thus $\boldsymbol{X}^T \boldsymbol{X}$ has an inverse. 

Furthermore, we can find the distribution of $\hat{\boldsymbol{\beta}}$ conditional on the training features $\boldsymbol{X}$: 

$$
E(\hat{\boldsymbol{\beta}}\mid \boldsymbol{X}) = E\left(\left(\boldsymbol{X}^T \boldsymbol{X}\right)^{-1} \boldsymbol{X}^T\boldsymbol{Y}\mid \boldsymbol{X}\right) = \boldsymbol{\beta}, 
$$

which indicates that $\hat{\boldsymbol{\beta}}$ is unbiased; 

$$
Cov(\hat{\boldsymbol{\beta}}\mid \boldsymbol{X}) = Cov\left(\left(\boldsymbol{X}^T \boldsymbol{X}\right)^{-1} \boldsymbol{X}^T\boldsymbol{Y}\mid \boldsymbol{X}\right) = \sigma^2(\boldsymbol{X}^T \boldsymbol{X})^{-1};
$$

and therefore, 

$$
\hat{\boldsymbol{\beta}}\mid \boldsymbol{X} \sim \mathcal{N}_{p+1}(\boldsymbol{\beta}, \sigma^2(\boldsymbol{X}^T \boldsymbol{X})^{-1}). 
$$

### Evaluate OLS Prediction Estimate

The above estimation is called ordinary least squares (OLS) in statistics. Now we evaluate our estimation when receiving a new data pair $(\boldsymbol{x_{*}},y_*)$. We make our prediction by

$$
\hat{f}(\boldsymbol{x_{*}}) = \tilde{\boldsymbol{x}}^T \hat{\boldsymbol{\beta}}, \quad
\tilde{\boldsymbol{x}} = \begin{bmatrix}
1 \\
\boldsymbol{x_{*}}
\end{bmatrix}.
$$

Consider the bias of $\hat{f}$ (conditional on $\boldsymbol{X},\boldsymbol{x_{*}}$), 

$$
E(\hat{f}(\boldsymbol{x_{*}}) \mid \boldsymbol{X},\boldsymbol{x_{*}}) = \tilde{\boldsymbol{x}}^T E(\hat{\boldsymbol{\beta}} \mid \boldsymbol{X},\boldsymbol{x_{*}}). 
$$

We know that $E(y_* \mid \boldsymbol{x_{*}}) = \tilde{\boldsymbol{x}}^T \hat{\boldsymbol{\beta}}$,and thus the OLS prediction is unbiased(1). 
{.annotate}

1. This conclusion relied on the assumption that the data has a linear relationship. In practice, our model is only an approximation to the true distribution. So we will have bias. 

Now, we consider the variance:

$$
Var(\hat{f}(\boldsymbol{x_{*}}) \mid \boldsymbol{X},\boldsymbol{x_{*}}) = \tilde{\boldsymbol{x}}^T\cdot Var(\hat{\boldsymbol{\beta}} \mid \boldsymbol{X},\boldsymbol{x_{*}}) \tilde{\boldsymbol{x}} = \sigma^2\tilde{\boldsymbol{x}}^T(\boldsymbol{X}^T \boldsymbol{X})^{-1}\tilde{\boldsymbol{x}}. 
$$

Roughly speaking, if $\boldsymbol{x_{*}}$ is similar to the training data features, the variance will be small; otherwise, the variance will be large. 

### Interval Estimate 