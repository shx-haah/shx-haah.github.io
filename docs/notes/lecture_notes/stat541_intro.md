# Introduction 

- Statistics for Learning (STAT 541, Winter 2025) [course website](https://sites.google.com/view/andrewmccormack/course-websites/stat-541-statistics-for-learning). 
- Instructor: Andrew McCormack

## Course Description

The course focuses on statistical learning techniques, in particular those of supervised classification, both from statistical (logistic regression, discriminant analysis, nearest neighbours, and others) and machine learning background (tree-based methods, neural networks, support vector machines), with the emphasis on decision-theoretic underpinnings and other statistical aspects, flexible model building (regularization with penalties), and algorithmic solutions. Selected methods of unsupervised classification (clustering) and some related regression methods are covered as well.

## Concepts and References

### [Week 1](stat541_week1.md#week-1)

Concepts:  Types of learning, supervised learning problem setup, regression, classification, loss, risk, oracle (Bayes) risk and predictors, conditional expectation, expected risk.

References: A more in-depth treatment of the topics covered this week can be found in Chapter 2, *Learning theory from first principles* (1).
{.annotate}

1. F. Bach, Learning theory from first principles. in Adaptive computation and machine learning. Cambridge, Massachusetts: The MIT Press, 2024.


### [Week 2](stat541_week2.md#week-2)

Concepts:  Empirical risk minimization, bias-variance decomposition. 

References: For the bias-variance decomposition see *Introduction to Statistical Learning with R* (ISLR)(1) Section 2.2 and *Elements of Statistical Learning* (ESL)(2) Section 7.3. In particular, equation (7.9) of ESL is essentially the bias-variance decomposition we derived in class, except that we also took an expectation over $x_0$. 
{.annotate}

1. G. James, D. Witten, T. Hastie, and R. Tibshirani, An introduction to statistical learning: with applications in R, Second edition. in Springer texts in statistics. New York: Springer, 2021.
2. T. Hastie, R. Tibshirani, and J. Friedman, The Elements of Statistical Learning. in Springer Series in Statistics. New York, NY: Springer New York, 2009. doi: 10.1007/978-0-387-84858-7.


### [Week 3](stat541_week3.md#week3)

Concepts: Manipulation of means and covariances of random vectors, orthogonal matrices, the singular value decomposition, the spectral decomposition, the linear regression model, ordinary least squares estimates of regression coefficients, bias and variance of the OLS beta along with the bias and variance of predictions, prediction interval based on the t-distribution, existence of the OLS estimator, feature transformations, regression with categorical predictors, interaction effects, overfitting and issues with including too many features, AIC and BIC as variable selection criteria, optimizing AIC and BIC via forward or backward selection.  

References: Section 3.3.1 of Izenman's Modern Multivariate Statistical Techniques (MMST) discusses means and covariances of random vectors; equations (3.92) and (3.93) are very important. MMST also discusses the full SVD in 3.2.6 for a short and wide matrix (take a transpose to get the full SVD for a tall and narrow matrix). The full SVD is almost the same as the thin SVD discussed in class except that the full SVD includes extra, unnecessary rows/columns in the constituent matrix factors. For the rest, see ISLR: 3.1-3.3, 7.1-7.3, 6.1, ESL: 3.1-3.3. 

### [Week 4](stat541_week4.md#week-4)

Concepts: Properties and the various optimization problem formulations of ridge regression and the LASSO, data splitting, K-fold cross-validation, leave-one-out cross-validation.

References: ISLR: 6.2, 5.1, ESL: 3.4, 7.10.

### [Week 5](stat541_week5.md#week-5)

Concepts: Introduction to the logistic function and logistic regression. How to make predictions using a logistic regression model. Finding the beta coefficients in logistic regression via maximum likelihood estimation. 

References: ISLR: 4.1-4.3.  

### [Week 6](stat541_week6.md#week-6) 

Concepts: Linear discriminant analysis (LDA), quadratic discriminant analysis (QDA) and naive Bayes, classification boundaries for multi-class problems. 

References: ISLR: 4.4-4.5. 

### Week 7 – Reading Week

### [Week 8](stat541_week8.md#week-8)

Concepts: Basis functions. Regression splines as piecewise polynomials with smoothness and continuity constraints. Counting the number of basis functions for splines. Smoothing spline optimization problem. The smoothing matrix and effective degrees of freedom. Kernel smoothers. Boxcar, Gaussian, and Epanechnikov kernels. The effect of the bandwidth parameter.

References: ISLR: 7.3-7.5, ESL: 5.2, 5.4, Have a look at equation (5.30) to see how smoothing splines can be applied to logistic regression. 6.1-6.2 (Note ISLR does not have any material on kernel smoothing). 

### [Week 9](stat541_week9.md#week-9)

Concepts: Local polynomial regression. Bias of KNN and kernel smoothing near boundaries and near maxima or minima. How to use these smoothing methods for classification. Smoothing methods for higher dimensional features by changing the distance or kernel. The importance of standardizing features and choosing features that are relevant in KNN or kernel smoothing. The curse of dimensionality. Generalized additive models and the backfitting algorithm.  

References: ISLR: 7.6-7.7, ESL: 6.1.1-6.1.2, 6.3, 9.1.