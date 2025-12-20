# Lecture 1

<!-- ## Margin Notes -->



<embed src="https://shx-haah.github.io/notes/lecture_notes/cmput501/Scribe1.pdf" type="application/pdf" width="100%" height="750px"/>


> Notes below are meant to supplement the scribed notes.

## Stable Matching May Not Be Unique (Section 1.2)

In the stable matching problem, there are instances of stable matching with $n$ doctors and $n$ hospitals where the number of stable matchings (solutions) can be exponential in $n$.(1)
{.annotate}

1. Consider the following example with $n=2$. The preference lists are as follows: $d_1$: $h_1 \succ h_2$, $d_2$: $h_1 \succ h_2$; $h_1$: $d_1 \succ d_2$, $h_2$: $d_1 \succ d_2$. There are two stable matchings: $\{(d_1,h_1),(d_2,h_2)\}$ and $\{(d_1,h_2),(d_2,h_1)\}$. By combining multiple such instances, we can construct instances with $n$ doctors and $n$ hospitals that have $2^{n/2}$ stable matchings.

## Minimize the Number of Machines (Section 1.3.1)

**What if we consider scheduling jobs on two machines?** Consider the following greedy algorithm:

- Sort the jobs in increasing order of their finishing times.
- For each job in this order, assign it to an available machine. If both machines are available, assign it to the tighter loaded machine (i.e., the machine with the larger total assigned processing time so far).
- If no machine is available, discard the job.

**How to design a greedy algorithm that minimizes the number of machines used to schedule all jobs?** Consider the greedy algorithm with jobs sorted in increasing order of their starting times.