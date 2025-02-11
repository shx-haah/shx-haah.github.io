# Week 5

## Classification

Let $\mathcal{Y}$ is a finite set of classes, and for now assume $y^{(i)}\in \{0,1\}$. We want to use $x$ to predict $y$. We assume 

$$
y\mid x \sim {\rm Bernoulli}\left(g(x)\right), 
$$

which is completely general. See an example of this setting in the plane ($p=2$). ![Classification](stat541_week501.svg) 

We could try to just do linear regression: under squared error loss, $E(y\mid x)$ is optimal and $E(y\mid x) = g(x)$. However, $g(x)\in [0,1]$ as it's a probability where $x^T\boldsymbol{\beta}$ takes values in $\mathbb{R}$. 

### Logistic Regression

Instead of modeling $y(x)=x^T\boldsymbol{\beta}$, we will assume that 

$$
g(x)=  \sigma(x^T\boldsymbol{\beta}),
$$

where $\sigma$ is the logistic function given by

$$
\sigma(z) = \frac{e^z}{1+e^z} = \frac{1}{1+e^{-z}}. 
$$

![Logistic Function](stat541_week502.svg) This is called logistic regression model. 

For $p=2$, the logistic function is given by $\sigma(\beta_0 + \beta_1 x_1 + \beta_2 x_2)$. The following figure shows an example of $\sigma(x+y)$. ![Logistic Function with $p=2$](stat541_week503.svg) 

### Motivation and Interpretation

On one hand, $\sigma$ is easy to differentiate and compute with. On the other hand, logistic regression assumes log-odds ratio(1) is a linear function. 
{.annotate}

1. The log-odds ratio is the natural logarithm of the odds ratio. An odds ratio (OR) is a statistic that quantifies the strength of the association between two events, A and B. The odds ratio is defined as the ratio of the odds of event A taking place in the presence of B, and the odds of A in the absence of B. Two events are independent if and only if the OR equals 1, i.e., the odds of one event are the same in either the presence or absence of the other event. If the OR is greater than 1, then A and B are associated (correlated) in the sense that, compared to the absence of B, the presence of B raises the odds of A, and symmetrically the presence of A raises the odds of B. Conversely, if the OR is less than 1, then A and B are negatively correlated, and the presence of one event reduces the odds of the other event occurring.

A more insightful motivation is shown below: 

<embed src="https://shx-haah.github.io/notes/lecture_notes/stat541_logistic_fnc_motivation.pdf" type="application/pdf" width="100%" height="750px"/>