---
title: "Things I Read - 6th Nov 2021"
date: 2021-11-07T16:10:41+08:00
draft: false
tags:
- data structure
- raft
- trie
- algorithm
---

Things that I stumbled on a rainy day.

- Understanding how Trie (Data Structure) works
- Understanding how Raft (Distributed Consensus algorithm) works

## Trie

I have heard/seen it but not in detail until now.
Saw someone posted about it [on HN](https://news.ycombinator.com/item?id=29078919) and makes me curious.

I also found post about [Trie written in Python](https://albertauyeung.github.io/2020/06/15/python-trie.html/) by Googling.
I like the clear explaination with diagrams and put [the code on github](https://github.com/yelinaung/dsa/blob/master/trie.py).

### Some takeaways

- Cool data structure to build autocomplete / prefix tree.
- Two main functions
    - Insert
    - Query

## Raft

Another item on my endless "things to read" list is this particular [Understanding Distributed Consensus](http://thesecretlivesofdata.com/raft/) link.

### Some takeaways

There are two main processes
1. Leader Election
    - How all the nodes in the system came to an agreement on who should be the leader among them
    - States of the Nodes
        - Follower
        - Candidate
        - Leader
2. Log Replication
    - Once the leader is elected, all the changes go through the leader.
    - The leader then replicates the change to all the followers.
    - The leader waits until a majority of them have written the entry.
    - Then the leader commits the state and confirms that to the followers.

There are a lot of more details than this so probably will go back to the link above from time to time.
And maybe I will have to try implementing it.
