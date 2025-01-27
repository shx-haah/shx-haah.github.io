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

Let $\mathbf{X}$ be a $k$-dimensional random vector (a special case of random matrices)

$$
\mathbf{X}= \begin{bmatrix}
X_1 \\
\vdots \\
X_k
\end{bmatrix},
$$

or a $p\times q$ random matrix

$$
\mathbf{X}= \begin{bmatrix}
X_{11} &\cdots & X_{1q} \\
\vdots & \ddots & \vdots \\
X_{p1} & \cdots & X_{pq}
\end{bmatrix},
$$

where each $X_i\in$ or $X_{ij}$ is a random variable. $E(\mathbf{X})$ is defined componentwise, i.e.

$$
E(\mathbf{X})= \begin{bmatrix}
E(X_{11}) &\cdots & E(X_{1q}) \\
\vdots & \ddots & \vdots \\
E(X_{p1}) & \cdots & E(X_{pq})
\end{bmatrix},
$$

and $E(\mathbf{X})$ has linearity: for constant matrices $A\in\mathbb{R}^{d\times p}$, $B\in\mathbb{R}^{q\times q}, $C\in\mathbb{R}^{d\times q}$,

$$
E(A\mathbf{X}B + C) = AE(\mathbf{X})B + C. 
$$

For random vectors $\mathbf{X}\in \mathbb{R}^p$, its covariance matrix is defined as the $p\times p$ symmetric matrix $Cov(\mathbf{X})$, given by

$$
[Cov(\mathbf{X})]_{ij} = Cov(X_i,X_j). 
$$

Similar to the covariance of random variable, we have

$$
\begin{aligned}
    Cov(\mathbf{X}) 
    &= E\left(\left(\mathbf{X}-E(\mathbf{X})\right)\left(\mathbf{X}-E(v)\right)^T\right) \\
    &= E(\mathbf{X} \mathbf{X}^T) - E(\mathbf{X})E(\mathbf{X})^T.  
\end{aligned}
$$

### Multivariate Normal Distribution

The multivariate normal distribution of a $k$-dimensional random vector $\mathbf{X}=\left(X_1, \ldots, X_k\right)^{T}$ can be written in the following notation:

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
