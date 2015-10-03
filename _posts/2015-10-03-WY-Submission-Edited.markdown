---
layout: post
title:  "A Fast Single-Extractor Wait-Free Priority Queue"
author: "Kenneth D. Hoover and Yuanhao Wei"
date:   2015-10-02 20:44:52
category: "Artificial Intelligence"
---

##Introduction

A priority queue is a fundamental abstract data type that supports two
operations: ${\textsc{Insert}}(k)$ and ${\textsc{Extract-Max}}$.
Priority queues have many practical applications, especially in areas
such as scheduling and event driven simulations. Some examples of
applications of priority queues in distributed environments appear in
@LJ. One example where there are multiple inserters, but only a single
extractor, is the priority queue for a shared printer.

Efforts to build faster computers have shifted towards increasing the
number of cores on a single computer. As a result, scalable and highly
concurrent data structures in the asynchronous shared memory model are
becoming increasingly important. In this model, each process can take an
arbitrary amount of time between steps and may crash. Processes
communicate by reading from and writing to shared registers, and by
accessing LL/SC objects. If $x$ is an ${\textsc{LL}}/{\textsc{SC}}$
object, then ${\textsc{LL}}(x)$ reads $x$. ${\textsc{SC}}(x, v)$ by
process $p$ writes $v$ to $x$ if $x$ has not been written to by an
${\textsc{SC}}$ operation since the last time $p$ performed
${\textsc{LL}}(x)$. If ${\textsc{SC}}(x, v)$ writes $v$ to $x$ then it
returns <span><span style="font-variant:small-caps;">True</span></span>.
Otherwise it returns <span><span
style="font-variant:small-caps;">False</span></span>.

Lock-freedom is a property that guarantees that, while operations are in
progress and processes take steps, some operation will finish within a
finite number of steps. Wait-freedom is a stronger property that
guarantees that every operation performed by a non-faulty process
finishes within a finite number of steps by that process.

Israeli and Rappoport @IR present a lock-free priority queue based on a
heap, using LL/SC variables, with $O(n\log{m})$ amortized step
complexity for both <span><span
style="font-variant:small-caps;">Insert</span></span> and <span><span
style="font-variant:small-caps;">Extract-Max</span></span>, where $n$ is
the number of processes and $m$ is the maximum number of elements in the
priority queue during the operation. They outline how to extend it to a
wait-free implementation using 2-word LL/SC, but with step complexity.
This is the best wait-free implementation known.

In 2005, Jayanti and Petrovic @JP showed how to implement
single-dequeuer queues with step complexity $\Theta(\log{}n)$ for both
${\textsc{Enqueue}}$ and ${\textsc{Dequeue}}$.

Inspired by this queue implementation, we consider a priority queue
where only one process is allowed to perform ${\textsc{Extract-Max}}$.
Our single-extractor priority queue implementation uses single word
${\textsc{LL}}$/${\textsc{SC}}$ objects. It is wait-free and has step
complexity for both ${\textsc{Insert}}$ and ${\textsc{Extract-Max}}$,
where $n$ is the number of inserters and $m$ is the maximum number of
elements in the priority queue during the operation.

Our implementation uses a single-inserter single-deleter (SISD) ordered
multiset, which supports insertion (${\textsc{SISD-Insert}}$) and
deletion (${\textsc{SISD-Delete}}$) with $O(\log{r})$ step complexity,
where $r$ is the maximum number of elements in the multiset during the
operation. Finding the maximum element (${\textsc{SISD-FindMax}}$) can
be done with constant step complexity. Both the inserter and the deleter
can perform ${\textsc{SISD-FindMax}}$.

##The Construction

Suppose, for simplicity, that the number of inserters, $n$, is a power
of 2. Our single-extractor priority queue implementation uses a complete
binary tree with $n$ leaves. Each leaf corresponds to one inserting
process. At each leaf, there is a single-inserter single-deleter (SISD)
ordered multiset. Each internal node stores the largest key in its
subtree as well as the index of the leaf that the key came from. An
${\textsc{Insert}}$ operation first inserts into its own SISD multiset
and then helps propagate the largest key up the complete binary tree. An
${\textsc{Extract-Max}}$ operation reads the largest key from the root
of the binary tree, deletes it from the SISD multiset of the appropriate
leaf, and propagates the new maximum up the binary tree. We use an SISD
multiset rather than an SISD priority queue because, by the time an
${\textsc{Extract-Max}}$ tries to delete a key from the SISD multiset of
a leaf, it might no longer be the largest key in the leaf. Our
single-extractor priority queue implementation is wait-free, and has
step complexity for both ${\textsc{Insert}}$ and
${\textsc{Extract-Max}}$, in addition to the time it takes to perform
the SISD multiset insert and delete operations. Note that any process
can perform ${\textsc{Extract-Max}}$ as long as there is some way of
guaranteeing that two or more ${\textsc{Extract-Max}}$ operations are
not performed concurrently. The SISD multiset is implemented using a
persistent AVL tree. Each process announces the operation it wishes to
perform, and the processes alternate between helping each other when
there is contention. We use a novel adaptation of handshaking to ensure
all operations are performed without duplication. The step complexity of
insertion and deletion is $O(\log{r})$, where $r$ is the maximum size of
the multiset during the operation, while finding the maximum element can
be implemented in constant time.

##Future Work

It would be interesting to obtain either a $\Omega(\log{n} + \log{m})$
lower bound or a faster implmentation of ${\textsc{Insert}}$ or
${\textsc{Extract-Max}}$. Improvements to the step complexities of
${\textsc{SISD-Insert}}$ or ${\textsc{SISD-Delete}}$ will reduce the
$\log{}m$ term in the step complexities of ${\textsc{Insert}}$ or
${\textsc{Extract-Max}}$, respectively.

##### Acknowledgements {#acknowledgements .unnumbered}

We would like to thank our supervisor, Professor Faith Ellen, for the
advice she gave us while writing this paper, and for the numerous hours
she put into editing our work. This work was supported by NSERC
Undergraduate Student Research Awards.
