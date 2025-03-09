# Week 8

## Spline

Recall the linear regression model

$$
f(x)=\sum_{i=0}^p \beta_i f_i(x), 
$$

where the $f_i$'s are simply feature transformations of $x$. We will now want to consider different feature transformations and even optimize over the $f_i$'s. (As an example, recall that in polynomial regression we essentially had $\left.f_1(x)=1, f_2(x)=x, \dots, f_i(x)=x^{p}\right)$. 

The idea for splines is to fit two polynomial regressions on different pieces of the data. Then we will connect them in a nice way.

### Basis Function

The idea is to have at hand a family of functions or feature transformations that can be applied to a variable $X$ : $b_1(X), b_2(X), \dots, b_K(X)$. Instead of fitting a linear model in $X$, we fit the model

$$
y_i=\beta_0+\beta_1 b_1\left(x_i\right)+\beta_2 b_2\left(x_i\right)+\beta_3 b_3\left(x_i\right)+\cdots+\beta_K b_K\left(x_i\right)+\epsilon_i
$$

Note that the basis functions $b_1(\cdot), b_2(\cdot), \ldots, b_K(\cdot)$ are fixed and known. (In other words, we choose the functions ahead of time.) For polynomial regression, the basis functions are $b_j\left(x_i\right)=x_i^j$, and for piecewise constant functions they are $b_j\left(x_i\right)=I\left(c_j \leq x_i<c_{j+1}\right)$. 

To fit two polynomial regressions on different pieces of the data, we consider basis functions:

$$
\beta_0 I(x<\theta)+\beta_1 I(x<\theta) x+\beta_2 I(x<\theta) x^2+\tilde{\beta}_0 I(x\geq\theta)+\tilde{\beta}_1 I(x\geq\theta) x+\tilde{\beta}_2 I(x\geq\theta) x^2
$$

This is not necessarily continous at $\theta$ though, and we would ideally want a continous function. For example, we consider the linear case, 

$$
\beta_0 I(x<\theta)+\beta_1 I(x<\theta) x+\tilde{\beta}_0 I(x\geq\theta)+\tilde{\beta}_1 I(x\geq\theta) x
$$

### Linear, Quadratic, and Cubic Spline

We can introduce the function $z_{+}=\max \{0, z\}$, and then consider the function $f(x)=$ $\beta_0+\beta_1 x+\beta_2(x-\theta)_{+}$

**Linear Spline**: A linear spline with knots at $\theta_1, \ldots, \theta_l$ is a function of the form

$$
f(x)=\beta_0+\beta_1 x+\beta_2(x-\theta)_{+}+\cdots+\beta_{l+1}\left(x-\theta_l\right)_{+}.
$$

This would essentially connect the two linear regressions with a line. 

We would like to make piecewise polynomials that are both continous and differentiable. So we can move to quadtratic functions.

**Quadratic Spline**: A quadratic spline with knots at $\theta_1, \ldots, \theta_l$ is a function of the form

$$
f(x)=\beta_0+\beta_1 x+\beta_2 x^2 + \beta_3(x-\theta)_{+}^2+\cdots+\beta_{l+2}\left(x-\theta_l\right)_{+}^2
$$

**Cubic Spline**: A cubic spline with knots at $\theta_1, \ldots, \theta_l$ is a function of the form

$$
f(x)=\beta_0+\beta_1 x+\beta_2 x^2+\beta_3 x^3 + \beta_4(x-\theta)_{+}^3+\cdots+\beta_{l+3}\left(x-\theta_l\right)_{+}^3
$$


Quadratic splines are continous and differentiable, but people generally use cubic splines. Cubic splines ensure that $f$ is continous and has second order derivatives. This makes the cubic spline flexible and often less variable than fitting high degree polynomials.

The next question is how do we choose the knots, $\theta_i$ ?

### Knot Selection

We may look at the plot and pick the points where the "behavior" of the points changes. More formally, we may take the following steps: 

1. Pick nots at the quantiles or percentiles of $x^{(1)},\dots,x^{(n)}$. 
2. Decide how many knots to choose -- look at AIC or BIC and do model selection: 
    - Compute the AIC of a model with and without a knot and compare the models to determine if we need it. 
3. Use cross-validation to select between candidate knot choices. 

For AIC/BIC, we need the number of parameters(1): if no constraints, there are $4(l+1)$; there are 3 constraints(2) at each knot; therefore, there are $l+4$ parameters. 
{.annotate}

1. Here we consider cubic spline with $l$ knots.
2. Three constraints: continuous, continuous first and second order derivatives. 

We can use something called smoothing splines to improve this process.

