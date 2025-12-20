# Lecture 6

<!-- ## Margin Notes -->



<embed src="https://shx-haah.github.io/notes/lecture_notes/cmput501/Scribe6.pdf" type="application/pdf" width="100%" height="750px"/>

> Notes below are meant to supplement the scribed notes.

## Max-flow Min-cut Problem (Section 6.4)

The max-flow min-cut theorem states that in a flow network, the maximum amount of flow passing from the source to the sink is equal to the total weight of the edges in a minimum cut, i.e. the smallest total weight of the edges which if removed would disconnect the source from the sink.

To find the minimum cut in a graph, it suffices to run max-flow algorithms with a fixed source and all possible sinks (i.e. run max-flow for $|V|-1$ times), and then take the minimum over all computed cuts.

**Correctness:** Let the true global minimum cut be $(S^*,T^*)$ such that $S^*\cup T^* = V$ and $S^*\cap T^* = \emptyset$.
Suppose the fixed source is $s_0$, and assume w.l.o.g. that $s_0\in S^*$. 
Since $T^*$ is non-empty, there exists at least one vertex $t_0\in T^*$. 
When we run the max-flow algorithm with source $s_0$ and sink $t_0$, the min-cut found by the algorithm must be equal to the true global minimum cut $(S^*,T^*)$.

**Count edges of subgraphs (Corollary 6.3):** For an $n$-vertex graph with minimum cut of size $k$, the number of edges is at least $\frac{kn}{2}$. This is because each vertex has degree at least $k$ (to avoid a cut of size less than $k$).