# Lecture 1

<!-- ## Margin Notes -->



<embed src="https://shx-haah.github.io/notes/lecture_notes/cmput501/Scribed1.pdf" type="application/pdf" width="100%" height="750px"/>


> Notes below are meant to supplement the scribed notes.

## Minimize the Number of Machines (Section 1.3.1)

**What if we consider scheduling jobs on two machines?** Consider the following greedy algorithm:

- Sort the jobs in increasing order of their finishing times.
- For each job in this order, assign it to an available machine. If both machines are available, assign it to the tighter loaded machine (i.e., the machine with the larger total assigned processing time so far).
- If no machine is available, discard the job.

**How to design a greedy algorithm that minimizes the number of machines used to schedule all jobs?** Consider the greedy algorithm with jobs sorted in increasing order of their starting times.