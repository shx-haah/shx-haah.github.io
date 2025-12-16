# Lecture 4

<!-- ## Margin Notes -->



<embed src="https://shx-haah.github.io/notes/lecture_notes/cmput501/Scribed4.pdf" type="application/pdf" width="100%" height="750px"/>

> Notes below are meant to supplement the scribed notes.

## Improved MST Algorithm (Section 4.4)

Compared to the priority queue, the Fibonacci heap has a better amortized time for the insert and decrease-key operations, which is $O(1)$ instead of $O(\log V)$. Recall that in Prim's algorithm, we need to perform $O(E)$ decrease-key operations and $O(V)$ insert operations. Therefore, by using Fibonacci heaps, the overall time complexity of Prim's algorithm can be improved to $O(E + V \log V)$.


