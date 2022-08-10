---
title: "Functional Python"
date: 2022-06-04T17:32:38+08:00
draft: true
---

## Iteration

Taking each item out of something, i.e one after another.

## Iterable

- An object that has an `__iter__` method that retruns an **iterator**.
- An object that has a `__getitem__` method that can take sequential indexes from 0, raises an `IndexError` when the indexes are no longer valid.
- Anything that we can loop over
- Anything that appears on the right-side of the for-loop.
```python
for x in iterable:
```
- Anything that we can call with `iter()` that returns an iterator: `iter(obj)`


## Iterator

- Has a "state" that remembers where it is during iteration.
- An object with `next` or `__next__` method.
    - returns the next value in the iteration
    - updates the state to point at the next value
    - signals when it is done by raising `StopIteration`
- Is self-iterable
    - Has an `__iter__` method that returns `self`.
