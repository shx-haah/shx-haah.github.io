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

## Recap on Multivariate Statistics

### Multivariate Normal Distribution

The multivariate normal distribution of a $k$-dimensional random vector $\mathbf{X}=\left(X_1, \ldots, X_k\right)^{\mathrm{T}}$ can be written in the following notation:

$$
\mathbf{X} \sim \mathcal{N}(\boldsymbol{\mu}, \mathbf{\Sigma}) \quad \text{ or } \quad \mathbf{X} \sim \mathcal{N}_k(\boldsymbol{\mu}, \boldsymbol{\Sigma})
$$

with $k$-dimensional mean vector

$$
\boldsymbol{\mu}=E(\mathbf{X})=\begin{bmatrix}
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