# Assignment 2

Key Takeaways

- Problem 1(e): When design matrix $X$ has orthonormal columns, the best subset variable selection problem becomes easier -- we can minimize the AIC by including variable $i$ if and only if $2 \hat{\sigma}^2 \leq \hat{\beta}_{i}^2$. Thus, in this special case minimizing the AIC is no harder computationally than finding $\hat{\boldsymbol{\beta}}_{\text {Full }}$!

- Problem 2(b): The $i$ th ($i=1, \dots, p$) largest eigenvalue of the ridge regression covariance matrix is always smaller than the $i$ th largest eigenvalue of the OLS covariance matrix, which implies $\operatorname{Var}\left(\mathbf{x}_*^{\top} \hat{\boldsymbol{\beta}}_{\text {Ridge }} \mid \mathbf{X}, \mathbf{x}_*\right) \leq \operatorname{Var}\left(\mathbf{x}_*^{\top} \hat{\boldsymbol{\beta}}_{O L S} \mid \mathbf{X}, \mathbf{x}_*\right)$ for every $\mathbf{x}_*$. 

- Problem 2(c): For $\lambda=0$ we recover the OLS estimates which we know are unbiased. For $\lambda \rightarrow \infty$ we penalize the regression coefficients more and more and the ridge estimates converge to zero. The corresponding bias is then $\mathbf{X} \boldsymbol{\beta}-\mathbf{0}=\mathbf{X} \boldsymbol{\beta}$.

- Problem 2(d): By minimizing over each $\beta_i$, we get: The coefficient $\hat{\beta}_{L A S S O, i}=0$ if and only if $\left|\left[\mathbf{X}^{\top} \mathbf{Y}\right]_i\right| \leq \frac{\lambda}{2}$, meaning that the signal from the data $\left[\mathbf{X}^{\top} \mathbf{Y}\right]_i$ is not large enough relative to the penalty $\lambda$ to justify keeping this feature around. (Of course, a judicious choice of $\lambda$ is needed in order for this estimator to)

<embed src="https://shx-haah.github.io/notes/lecture_notes/stat541_assignment2.pdf" type="application/pdf" width="100%" height="750px"/>