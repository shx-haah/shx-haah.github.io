# Lecture 10

<!-- ## Margin Notes -->



<embed src="https://shx-haah.github.io/notes/lecture_notes/cmput501/Scribe10.pdf" type="application/pdf" width="100%" height="750px"/>

> Notes below are meant to supplement the scribed notes.

## Commute Time by Effective Resistance (Section 10.2.1)

When we consider the effective resistance between two nodes $u$ and $v$ in a graph $G$, we can think of setting each edge in $G$ as a resistor with **resistance 1** ohm and then connecting a battery with **voltage 1 volt** between nodes $u$ and $v$. Let the resulting current (sum of currents on edges incident to $u$) that flows from $u$ to $v$ be $I_{uv}$.
Then the effective resistance $R_{uv}$ is simply given by Ohm's law: $R_{uv} = 1/I_{uv}$.

**Interpretation:** The effective resistance $R_{uv}$ can be interpreted as a measure of connectivity between nodes $u$ and $v$. A smaller $R_{uv}$ indicates more parallel paths (more connectivity) between $u$ and $v$, while a larger $R_{uv}$ indicates fewer paths (less connectivity).

**The effective resistance of an edge $(u,v)$** is defined as the effective resistance between nodes $u$ and $v$. The effective resistance of each edge is the probability that the edge is chosen in a uniform spanning tree distribution. (1)
{.annotate}

1. The probability is given by $Pr(e\in T) = \tau(G\cdot e)/ \tau(G)$, where $\tau(G)$ is the number of spanning trees in graph $G$, and $G\cdot e$ is the graph obtained by contracting edge $e$ in $G$. The ratio can be derived using [Kirchoff's matrix-tree theorem](https://en.wikipedia.org/wiki/Kirchhoff%27s_theorem).

### Cover Time for Complete Graphs

We can improve the bound in the lecture notes for the cover time of complete graphs. 
This is equivalent to the coupon collector's problem ([Section 6.5](lecture7.md/#lecture-7)), where the expected time to collect all $n$ coupons is $\Theta(n\log n)$.