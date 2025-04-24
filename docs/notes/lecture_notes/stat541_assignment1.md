# Assignment 1

Key Takeaways

- Problem 1(c): For classification problems, the oracle risk of the equal weight classifier is given by $R(f^*, P) = Pr( y \neq c^*)$, where $c^*$ is the class that occurs with the largest probability. Hence, more unbalanced distributions result in easier classification problems (in the sense of the oracle risk).

- Problem 2(a): The risk of the oracle predictor for a regression problem (under
squared error loss) is $E_x\left(Var(y\mid x)\right)$.

- Problem 3(a): To minimize the loss function, we let the gradient (with respect to $\beta$) be 0 and get a least squares solution. It should also be checked that this solution is a minimum, not a maximum or saddle point. To do this, we look at the second order condition on the Hessian matrix of the objective function and find it a strictly positive definite matrix.

- Problem 4(a): The matrix $X X^{\top}=V D^2 V^{\top} \in \mathbb{R}^{n \times n}$ has $p$ eigenvectors given by the $p$ columns of $V$ with corresponding eigenvalues $d_{11}^2, \ldots, d_{p p}^2$. However, we have to be careful as $X X^{\top}$ is a $n \times n$ symmetric matrix so it will have a total of $n \geq k$ eigenvectors and values, resulting in $n-k$ additional eigenvectors from $V^{\perp}$ each with eigenvalue zero. 

- Problem 5(e): Overall, for small data samples, the lower degree fits do better than the higher degree fits. As the sample size increases the prediction errors across all three models get smaller.


<embed src="https://shx-haah.github.io/notes/lecture_notes/stat541_assignment1.pdf" type="application/pdf" width="100%" height="750px"/>