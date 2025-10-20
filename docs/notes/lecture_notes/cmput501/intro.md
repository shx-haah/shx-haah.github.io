# Introduction 

- Advanced Algorithms (CMPUT 501, Fall 2025) [course website](https://webdocs.cs.ualberta.ca/~mreza/courses/AdvancedF25/index.html). 
- Instructor: Mohammad R. Salavatipour

## Course Description

This is a new course that will cover topics in Advanced Algorithms in Theoretical Computer Science (TCS),  targeted for senior undergraduate and graduate students interested in TCS.  The tentative list of topics to be covered in this course are listed below. We cover some classic topics and more recent advances with applications in other areas: streaming and sketching algorithms for big data, online and randomized algorithms, and approximation algorithms.

Tentative topics (could change later):

- Module 1: Classics (Greedy and Dynamic Programming)
    Stable matching, Interval scheduling,
    Weighted Interval Scheduling, Segmented least Squares,
    Advanced DP
    Minimum Spanning Trees and Arborescences

- Module 2: Randomized Algorithms
    Simple deviation bounds, Randomized Min-Cut
    Chernoff bound, Hypercube routing,
    Randomized load balancing, Hashing
    Balls and bins, power of two choices,
    Random Walks in Graphs

- Module 3: Linear Programming and Combinatorial Optimization
    Integer/Linear Programming, Duality, Integrality gap
    Matchings, matching polytope

- Module 4: Approximation Algorithms
    Vertex/Set cover, LP rounding
    Knapsack, Bin Packing
    Max-Sat
    Max-Cut

- Module 5: Streaming and Sketching
    Probabilistic Counting
    Frequency moments, Distinct elements estimation
    Sketching

- Module 6: Online Algorithms, Learning from experts
    Online algorithms, Ski rental, paging
    Secretary problem,
    Learning from experts, Multiplicative Weight Update

By the end of this course you should have a basic knowledge of some of the basic techniques used in TCS in design and analysis of algorithms.
You should also learn some tools and tricks to tackle problems that might arise in different settings (such as online setting, streaming setting, or interactable/hard to solve optimization problems).

## Concepts

### Greedy, Dynamic Programming

- [Lecture 1](lecture1.md/#lecture-1): **Stable Matching, Interval Scheduling, Minimizing lateness, Weighted Interval Scheduling**

    Also see sections 1.1, 4.1, 4.2, 6.1 (KT), and slides for Chapter 1, 4 and 6 by (KW)

- Lecture 2: **Segmented Least Square, Sequence Alignments, BST**

    Also see sections 6.3, 6.6, 6.6 in (KT), and slides for Chapter 6 by (KW), extra notes for Advanced algorithms by (JE), and this [survey paper](https://link.springer.com/content/pdf/10.1007/978-1-4419-7997-1_28.pdf).

- Lecture 3: **Advanced DP: Saving time using monotonicity, SMWAK**

    Extra notes for Advanced algorithms by (JE), and this [survey paper](https://link.springer.com/content/pdf/10.1007/978-1-4419-7997-1_28.pdf).

### Minimum Spanning Tree, Minimum Arborescence:

- Lecture 4: **Minimum Spanning Tree (MST), Fredman-Tarjan Algorithm**

    Also see 1.1-1.3 from (AG) combined notes and Lec 6 by (SA).

- Lecture 5: **MST in linear time, Minimum Arborescence**

    Also 1.4-1.5 from (AG) and Lec 7 by (SA); and 4.9 from (KT).

### Randomized Algrithms:

- Lecture 6: **Introduction, simple deviation bounds, randomized min-cut**

    Also, lecture 1-3 from (RA).

- Lecture 7: **Chernoff bound, Hypercube routing**

    Also Lecture 5 from (RA), and Chapter 10.3 and 10.5 by (AG), and 4.1-4.2 from (MR)

- Lecture 8: **Balls and Bins, power of two choices**

    Also Lecture 7 from (RA), Lec 5 from (SA), GuptaS21 Lec6

- Lecture 9: **Randomized load balancing, Hashing**

    Also lecture 16 from (RA), Lec 3 from (SA) and, notes 5 from (JE), and these notes.

- Lecture 10: **Random Walks, resistence graph**

    Also, Lecturse 12 and 13 from (RA), Chapter 6 from (MR), Lec 23 from (SA)

- Lecture 11: **Finger printing, Polynomial identity testing**

    Also Lecture 13 from (RA), Lecture 16 from (SA) and Chapter 7 from (MR), and Chapter 8 from (AG)

## Reference

The following is a list of most commonly referred to references:

- (KT) J. Kleinberg and E. Tardos, [Algorithm Design](https://www.pearson.com/en-us/subject-catalog/p/algorithm-design/P200000003259?view=educator), 2006 and (KW) Lecture [slides](https://www.cs.princeton.edu/%7Ewayne/kleinberg-tardos/) by Kevin Wayne for this book.

- (JE) J. Erickson, [Algorithms Textbook](http://jeffe.cs.illinois.edu/teaching/algorithms), available (free).

- (MR) R. Motwani and P. Raghavan, [Randomized Algorithms](https://www.cambridge.org/core/books/randomized-algorithms/6A3E5CD760B0DDBA3794A100EE2843E8) (free access), Cambridge University Press, 2013

- (V) V. Vazirani, [Approximation Algorithms](https://link.springer.com/book/10.1007/978-3-662-04565-7), available free (also from authors [here](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.ics.uci.edu/%7Evazirani/book.pdf&ved=2ahUKEwj--9P-tNONAxVODjQIHRjFC4sQFnoECEEQAQ&usg=AOvVaw2QDmPRht5aCEGZZgMFSwNt)), Springer-Verlag, Berlin, 2001.

- (WS) D. Willamson and D. Shmoys, [The Design of Approximation Algorithms](http://www.designofapproxalgs.com/), (free download), Cambridge University Press, 2011

- A. Blum, J. Hopcroft, and R. Kannan, [Foundations of Data Science](https://www.cs.cornell.edu/jeh/book.pdf).