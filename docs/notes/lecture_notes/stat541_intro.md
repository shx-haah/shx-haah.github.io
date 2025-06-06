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

Concepts: Means and covariances of random vectors, orthogonal matrices, the singular value decomposition, the spectral decomposition, the linear regression model, ordinary least squares estimates of regression coefficients, bias and variance of the OLS estimators, prediction interval based on the t-distribution, feature transformations, regression with categorical predictors, interaction effects, overfitting and issues with including too many features, variable selection (AIC and BIC), forward or backward selection.  

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

Concepts: Basis functions. Regression splines and counting the number of basis functions. Smoothing spline optimization problem. The smoothing matrix and effective degrees of freedom. Kernel smoothers. Boxcar, Gaussian, and Epanechnikov kernels. The effect of the bandwidth parameter.

References: ISLR: 7.3-7.5, ESL: 5.2, 5.4, Have a look at equation (5.30) to see how smoothing splines can be applied to logistic regression. 6.1-6.2 (Note ISLR does not have any material on kernel smoothing). 

### [Week 9](stat541_week9.md#week-9)

Concepts: Local polynomial regression. Bias of KNN and kernel smoothing near boundaries and near maxima or minima. Smoothing methods for classification. Smoothing methods for higher dimensional features. The importance of standardizing features. The curse of dimensionality. Generalized additive models and the backfitting algorithm.  

References: ISLR: 7.6-7.7, ESL: 6.1.1-6.1.2, 6.3, 9.1.

### [Week 10](stat541_week10.md#week-10)

Concepts: Classification and decision trees (CART). Impurity measures. How to choose how big of a tree to grow. Ensemble methods including model averaging, bagging, and random forests. 

References: ISLR: 8.1, 8.2.1, 8.2.2. ESL: 8.7-8.8, 9.2

### [Week 11 - Guest Lecture](stat541_week11.md#week-11)

Concepts: Projection Pursuit Regression model: ridge functions, showing PPR model as a a universal approximator, and how to fit the PPR model. The study of neural networks – deep learning – is a enormous field. If you are interested in learning more, one canonical reference is this [book](https://www.deeplearningbook.org/). See also the other sections in chapter 10 of ISLR and chapter 11 of ESL. 

### [Week 12](stat541_week12.md#week-12)

Concepts: The idea behind clustering. The k-means algorithm: derivation of the iterations, scaling features, convergence of the algorithm, how to choose k. Hierarchical clustering:  dissimilarity measures between clusters, including complete, average, and single linkage, the dendrogram and how to interpret it, brief discussion on divisive clustering and how clustering can be extended to more exotic objects like DNA sequences. Gaussian mixture models (GMMs). The EM algorithm updates for GMMs and their interpretation. The (tautological) observation that generative models are able to generate, new, never before seen data. Brief mention on the flexibility of GMMs. 

References: ISLR 12.4, 14.4.1-14.3.6, 14.3.12. Neither ISLR or ESL has an extensive discussion on GMM. For this, see Section 9.2, *Pattern Recognition and Machine Learning*(1). 
{.annotate}

1. By Christopher M. Bishop (2006).   

### [Week 13](stat541_week13.md#week-13)

Concepts: Two perspective on PCA as variance maximization or distance minimization of projections. The PCA solution for the optimal projection of points onto an affine subspace. The principal component directions of the affine subspace and the principal component scores of the projected points.  How to use the PC scores in compression, visualization, and as input for supervised learning algorithms.  A discussion of principal components regression that uses the PC scores as input features in a linear regression. The link between the eigenvectors of the sample covariance matrix and the PC directions as well as the eigenvalues and the reconstruction error of PCA. The choice of the dimension k of the affine subspace via scree/elbow plots of the eigenvalues of the sample covariance. 

References: ISLR: 6.3.1, 12.2, ESL: 8.5.1, 14.3.7., 14.5.1. 

### Week 14 (Last partial week of class)

Concepts: (Classical) Multidimensional scaling as a method for obtaining low dimensional embeddings of data into R^d using only a distance matrix. How to derive the embedding when the distance is assumed to be the standard Euclidean distance in R^p. Relationship between the MDS Gram matrix and the principal component scores. Scree plot of the eigenvalues of the Gram matrix for finding a reasonable dimension d of the embedding space. Curves, surfaces and higher-dimensional surfaces and the difference between intrinsic (shortest-path) and extrinsic distances on such manifolds. The k-NN graph as a way to approximate the manifold that a point cloud of data lies close to. Distances on the k-NN graph approximate the intrinsic distance of the underlying manifold. Effects of the choice of k in the k-NN graph, too large we lose the manifold structure, and too small we might end up with a disconnected graph. The isomap algorithm which first constructs a k-NN graph to obtain shortest-path distances within the graph and then subsequently runs MDS on these distances to get an embedding into R^d.       

References: ESL has a little bit of material in Chapter 14 but it is not extensive. Instead, I recommend looking at Izenmann Section 13.6 for MDS. There are some nice illustrative examples in this section. For Isomap see Izenmann Section 16.6.3. 