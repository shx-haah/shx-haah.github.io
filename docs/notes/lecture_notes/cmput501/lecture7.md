# Lecture 7

<!-- ## Margin Notes -->



<embed src="https://shx-haah.github.io/notes/lecture_notes/cmput501/Scribe7.pdf" type="application/pdf" width="100%" height="750px"/>

> Notes below are meant to supplement the scribed notes.

## Routing on Hypercube (Section 7.2)

In the problem, we may assume either an edge can carry only one packet at a time step, or two packets (in opposite directions) at a time step. This only differs by a factor of 2 in the running time analysis.

Since we want a **decentralized** and efficient algorithm, in Algorithm 2, we sample a random intermediate destination for each packet, rather than a permutation routing which requires global knowledge of all packets' destinations.