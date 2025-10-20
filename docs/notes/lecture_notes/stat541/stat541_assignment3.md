# Assignment 3

Key Takeaways

- Problem 3(c): Let $x^{(i')}$ be the unique closest point to $x_*$. As $\lambda \rightarrow 0^{+}$, we get $\hat{\beta}_0\left(x_*\right) \rightarrow x^{\left(i^{\prime}\right)}$. In other words, the kernel smoother converges to the 1-NN predictor. The 1-NN predictor is a very "jumpy" function and has high variance but will have low bias as it is able to approximate a wide variety of functions. As $\lambda\rightarrow \infty$, the predictor $\hat{f}\left(x_*\right)=\frac{1}{n} \sum_{i=1}^n y^{(i)}$ is a constant function (it is actually the $n$-NN predictor) with respect to $x_*$ and so has low variance but has high bias. 

- Problem 4(d): LDA variant is like a nearest neighbour search except that it only requires searching over the 10 mean images rather than the 60,000 images in the training data set. Overall, this algorithm can make predictions much more quickly than the 1-NN algorithm since it does not have to search over the entire dataset. (Note that we are timing how long it takes to make predictions, not fit the given models.) Likewise, while logistic regression takes little while to actually fit the model, it makes predictions on new data points very fast.

<embed src="https://shx-haah.github.io/notes/lecture_notes/stat541/stat541_assignment3.pdf" type="application/pdf" width="100%" height="750px"/>