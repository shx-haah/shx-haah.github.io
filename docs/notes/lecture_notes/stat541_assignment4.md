# Assignment 4

Key Takeaways

- Problem 1(b): A regression tree for a univariate feature space $\mathcal{X} = \mathbb{R}$ is simply a piecewise constant function. Suppose we have determined that the splits for our regression tree and get the disjoint regions $R_s$. We find that $\hat{\beta}_s$ is the average of all the response values for all observations that have features contained in $R_s$.

- Problem 2(a): A bagged prediction function $\hat{f}$ is a linear function of $\mathbf{x}$ with a regression coefficient $\frac{1}{B} \sum_{i=1}^B \hat{\boldsymbol{\beta}}^{(i)}$ that is the average of the regression coefficients of the fits on $\mathcal{D}^{(i)}$.

- Problem 2(d): The model averaging (functions of different degrees) regularizes the coefficients of the higher order polynomial terms by shrinking them toward zero.

- Problem 3(e): We see that the function plot for pH versus potassium (K) shows a trend reversal. (For the observed data as we increase potassium it seems that the pH also increases. However, in our GAM fit the fitted partial function is mostly decreasing as K increases.) A trend reversal of this nature does not necessarily indicate that the GAM fit is poor, but it does suggest that there is dependence or collinearity between the different features.

<embed src="https://shx-haah.github.io/notes/lecture_notes/stat541_assignment4.pdf" type="application/pdf" width="100%" height="750px"/>