# Week 4

## Ridge Regression

### Motivation 

For polynomial regression, if the degree $d$ is large, prediction can be highly variable. The idea here is to "dampen" the coefficients $\hat{\beta}_i$ in order to constrain higher order terms in the prediction function. 

### Ridge Regression 

Suppose we have a $C>0$ (we assume a proper $C$ is given by an oracle), and we will constrain $\boldsymbol{\beta}$ (we will omit the constant estimator $\beta_0$) so that 

$$
\|\boldsymbol{\beta}\|^2 = \sum_{i=1}^{p} \beta_i \leq C. 
$$

The ridge regression estimator $\boldsymbol{\beta}_{\rm Ridge}$ is defined as 

$$
\hat{\boldsymbol{\beta}}_{\rm Ridge}= \operatorname*{arg\, min}_{\|\boldsymbol{\beta}\|^2\leq C} \|\boldsymbol{Y} - \boldsymbol{X} \boldsymbol{\beta}\|^2. 
$$

Using Lagrange multiplies to convert the above minimization problem into an equivalent problem: 

$$
\begin{aligned}
\hat{\boldsymbol{\beta}}_{\rm Ridge}
&= \operatorname*{arg\, min}_{\boldsymbol{\beta}\in \mathbb{R}^p} \left(\|\boldsymbol{Y} - \boldsymbol{X} \boldsymbol{\beta}\|^2 + \lambda \left(\\|\boldsymbol{\beta}\|^2-C\right)\right) \\
&= \operatorname*{arg\, min}_{\boldsymbol{\beta}\in \mathbb{R}^p} \left(\|\boldsymbol{Y} - \boldsymbol{X} \boldsymbol{\beta}\|^2 + \lambda \\|\boldsymbol{\beta}\|^2\right), 
\end{aligned}
$$

where the constant $\lambda>0$ is dependent on $C$. 

Ridge is an example of ERM plus regularization term (or penalty) $\lambda \\|\boldsymbol{\beta}\|^2$. The general formulation of ERM + regularization is 

$$
\operatorname*{arg\, min}_{f} \left(\frac{1}{n} \sum_{i=1}{n} L\left(y^{(i)},f(x^{(i)})\right) + \operatorname{Penalty}(f)\right), 
$$

where the $\operatorname{Penalty}(f)$ penalize "complex" $f$ more. 

### Compute $\hat{\boldsymbol{\beta}}_{\rm Ridge}$

To find $\hat{\boldsymbol{\beta}}_{\rm Ridge}$, we let 

$$
\begin{aligned}
0 
&= \nabla_{\boldsymbol{\beta}}\left(\|\boldsymbol{Y} - \boldsymbol{X} \boldsymbol{\beta}\|^2 + \lambda \\|\boldsymbol{\beta}\|^2\right) \\
&= -2\boldsymbol{X}^T\boldsymbol{Y} + 2(\boldsymbol{X}^T\boldsymbol{X})\boldsymbol{\beta} + 2\lambda \boldsymbol{\beta}. 
\end{aligned}
$$

Then we have 

$$
\hat{\boldsymbol{\beta}}_{\rm Ridge} = (\boldsymbol{X}^T\boldsymbol{X}+\lambda I)^{-1} \boldsymbol{X}^T\boldsymbol{Y}, 
$$

where the matrix $\boldsymbol{X}^T\boldsymbol{X}+\lambda I$ is always invertible unlike OLS. 

If assume $\boldsymbol{X}$ has SVD given by $X = UDV^T$, then we have 

$$
\begin{aligned}
\hat{\boldsymbol{\beta}}_{\rm Ridge} 
&= (VDU^TUDV^T+\lambda VV^T)^{-1}VDU^T\boldsymbol{Y} \\
&= (V^T)^{-1}(D^2+\lambda I)^{-1} V^{-1} VDU^T\boldsymbol{Y} \\
&= V(D^2+\lambda I)^{-1} DU^T\boldsymbol{Y}
\end{aligned}, 
$$

where $(D^2+\lambda I)^{-1} D$ is a diagonal matrix given by $diag\{\frac{d_1}{d_1^2+\lambda},\dots,\frac{d_p}{d_p^2+\lambda}\}$ while OLS has $\hat{\boldsymbol{\beta}}_{\rm OLS} = VD^{-1}U^T\boldsymbol{Y}$. Therefore, the coefficients in $\hat{\boldsymbol{\beta}}_{\rm Ridge}$ are usually smaller in magnitude compared to $\hat{\boldsymbol{\beta}}_{\rm OLS}$. 