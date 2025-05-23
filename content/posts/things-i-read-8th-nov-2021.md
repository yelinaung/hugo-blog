---
title: "Things I Read : CPython Performance"
date: 2021-11-09T00:25:02+08:00
draft: false
tags:
- python
- cpython
- performance
- compiler
- optimizations
---

I've been looking at how I can improve the performance of an internal service written in Python. I was wondering if there is a way to speed things up without rewriting large part of the code or using another programming language to rewrite part of the code.
Then I remember reading about [Pyston](https://github.com/pyston/pyston) (a faster and highly-compatible with Cpython from Dropbox) on [HackerNews](https://news.ycombinator.com/item?id=27059119) and this seems like an opportunity to try it out.
I've integrated into the service, planning to run some benchmarks and hopefully I will have something to share another time!

As I read more about Pyston, I stumble upon one of the co-authors of Pyston, Kevin's blog post: [Python performance: it's not just the interpreter](https://blog.kevmod.com/2020/05/python-performance-its-not-just-the-interpreter/). It is a good read and please go check it out.
I didn't understand that much of the "C" optimizations because my lack of knowledge with the langauge and the CPython internals.
Still, I find it great because I learned a thing or two from the post.

I also tried running the Python examples on my laptop. See the [github repo](https://github.com/kmod/python_perf/tree/master/str_bench) for the code content.


```bash
➜  str_bench git:(master) python --version
Python 3.9.6
➜  str_bench git:(master) time python str00.py
python str00.py  5.17s user 0.02s system 99% cpu 5.185 total
➜  str_bench git:(master) time python str01.py
python str01.py  4.50s user 0.03s system 99% cpu 4.526 total
➜  str_bench git:(master) time python str02.py
python str02.py  4.74s user 0.41s system 99% cpu 5.155 total
➜  str_bench git:(master) time python str03.py
python str03.py  4.90s user 0.47s system 99% cpu 5.380 total
➜  str_bench git:(master) time python str04.py
python str04.py  4.43s user 0.47s system 99% cpu 4.907 total
```
Starting from this, `str00.py`.

```python
def main():
    for j in range(20):
        for i in range(1000000):
            str(i)
main()
```

to this,

```python
def main():
    for j in range(20):
        list(map(str, range(1000000)))
main()
```

You can see the difference in the time.

### Some takeaways
1. `str()` is slow because it's not a function: it's a type
2. referencing `str` in the very big loop can be expensive. optimizing by caching `str` into a variable `s` helps

```python
s = str
for i in range(1000000):
    s(i)
```

3. moving the `for` loop out of Python and into C with `map()` can also speed up

```python
for j in range(20):
    list(map(str, range(1000000)))
```

4. [One of the comment](https://blog.kevmod.com/2020/05/python-performance-its-not-just-the-interpreter/#comment-55879) suggested that f-strings are faster than normal `str()`. And they are!

```bash
➜  ~ python -m timeit "str(1)"
1000000 loops, best of 5: 210 nsec per loop
➜  ~ python -m timeit "f'{1}'"
5000000 loops, best of 5: 91.7 nsec per loop
```
Need to find out more why f-strings are faster with `dis` module. # TODO

5. PyPy might be pretty fast as well. I gotta try it sometime. # TODO
