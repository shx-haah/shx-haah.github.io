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

- [[lecture1#Lecture 1|Lecture 1]]: **Stable Matching, Interval Scheduling, Minimizing lateness, Weighted Interval Scheduling**

    Also see sections 1.1, 4.1, 4.2, 6.1 (KT)

- [[lecture2#Lecture 2|Lecture 2]]: **Segmented Least Square, Sequence Alignments, BST**

    Also see sections 6.3, 6.6, 6.6 in (KT), extra notes for Advanced algorithms by (JE), and this [survey paper](https://link.springer.com/content/pdf/10.1007/978-1-4419-7997-1_28.pdf).

- [[lecture3#Lecture 3|Lecture 3]]: **Advanced DP: Saving time using monotonicity, SMWAK**

    Extra notes for Advanced algorithms by (JE), and this [survey paper](https://link.springer.com/content/pdf/10.1007/978-1-4419-7997-1_28.pdf).

### Minimum Spanning Tree, Minimum Arborescence:

- [[lecture4#Lecture 4|Lecture 4]]: **Minimum Spanning Tree (MST), Fredman-Tarjan Algorithm**

- [[lecture5#Lecture 5|Lecture 5]]: **MST in linear time, Minimum Arborescence**

    Also 4.9 from (KT).

### Randomized Algrithms:

- [[lecture6#Lecture 6|Lecture 6]]: **Introduction, simple deviation bounds, randomized min-cut**


- [[lecture7#Lecture 7|Lecture 7]]: **Chernoff bound, Hypercube routing**

    Also 4.1-4.2 from (MR)

- [[lecture8#Lecture 8|Lecture 8]]: **Balls and Bins, power of two choices**


- [[lecture9#Lecture 9|Lecture 9]]: **Randomized load balancing, Hashing**

    Also notes 5 from (JE), and these notes.

- [[lecture10#Lecture 10|Lecture 10]]: **Random Walks, resistence graph**

    Also Chapter 6 from (MR)

- [[lecture11#Lecture 11|Lecture 11]]: **Finger printing, Polynomial identity testing**

    Also Chapter 7 from (MR)

### Integer/Linear Programming and Combinatorial Optimization:

- [[lecture12#Lecture 12|Lecture 12]]: **Integer/Linear Programming, Duality**


- [[lecture13#Lecture 13|Lecture 13]]: **Bipartite Matching, Matching Polytope**

- [[lecture14#Lecture 14|Lecture 14]]: **Weighted Biparite Matching**

- [[lecture15#Lecture 15|Lecture 15]]: **Bipartite matching (vardinality and weighted) via priam dual methods**

### Approximation Algorithms

- [[lecture16#Lecture 16|Lecture 16]]: **Introduction, Set cover/Max coverage, Set cover rounding**

    Also see 1.2, 1.6, 1.7 from (WS)

- [[lecture17#Lecture 17|Lecture 17]]: **Approximation Schemes: knapsack, Bin Packing**

    Also see 3.1-3.3 from (WS)

- [[lecture18#Lecture 18|Lecture 18]]: **Max-SAT**

    Also see 5.1-5.6 from (WS)

- [[lecture19#Lecture 19|Lecture 19]]: **Semidefinite Programming, Max-Cut**

    Also see 6.1-6.2 from (WS)

- [[lecture20#Lecture 20|Lecture 20]]: **Approximating metrics by tree metrics**

    Also see 8.5 from (WS)

### Online Algorithms, Learning From Experts

- [[lecture23#Lecture 23|Lecture 23]]: **Online algorithms, Paging, Secretary problem**

    Also see (MR) Chapter 13.

- [[lecture24#Lecture 24|Lecture 24]]: **Prophet inequality**

    Also see [these](https://www.cs.cmu.edu/afs/cs.cmu.edu/academic/class/15850-f20/www/notes/lec27.pdf) notes by Gupta, [these](https://faculty.cc.gatech.edu/%7Essingla7/courses/Spring22/lec13.pdf) by Singla

- [[lecture25#Lecture 25|Lecture 25]]: **Learning from experts, Multiplicative weight update**


## Reference

The following is a list of most commonly referred to references:

- (KT) J. Kleinberg and E. Tardos, [Algorithm Design](https://www.pearson.com/en-us/subject-catalog/p/algorithm-design/P200000003259?view=educator), 2006 and (KW) Lecture [slides](https://www.cs.princeton.edu/%7Ewayne/kleinberg-tardos/) by Kevin Wayne for this book.

- (JE) J. Erickson, [Algorithms Textbook](http://jeffe.cs.illinois.edu/teaching/algorithms), available (free).

- (MR) R. Motwani and P. Raghavan, [Randomized Algorithms](https://www.cambridge.org/core/books/randomized-algorithms/6A3E5CD760B0DDBA3794A100EE2843E8) (free access), Cambridge University Press, 2013

- (V) V. Vazirani, [Approximation Algorithms](https://link.springer.com/book/10.1007/978-3-662-04565-7), available free (also from authors [here](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.ics.uci.edu/%7Evazirani/book.pdf&ved=2ahUKEwj--9P-tNONAxVODjQIHRjFC4sQFnoECEEQAQ&usg=AOvVaw2QDmPRht5aCEGZZgMFSwNt)), Springer-Verlag, Berlin, 2001.

- (WS) D. Willamson and D. Shmoys, [The Design of Approximation Algorithms](http://www.designofapproxalgs.com/), (free download), Cambridge University Press, 2011

- A. Blum, J. Hopcroft, and R. Kannan, [Foundations of Data Science](https://www.cs.cornell.edu/jeh/book.pdf).

- See similar courses ``Resources`` section on the [course website](https://webdocs.cs.ualberta.ca/~mreza/courses/AdvancedF25/index.html).