---
title: "for vs list comprehension"
date: 2021-11-13T12:07:13+08:00
draft: false
tags:
- python
- cpython
- performance
- optimizations
---

This is me writing down my discussion with someone from work regarding `for` loop vs list comprehension in Python.

During a code review, I was commeting on a chunk of code to change from `for` loop to a list comprehension.
We continue to talk about _why_ I wanted it that way.
One reason is list comprehension could be (arguably) more readable than a `for` loop. For a simple loop, that might be the case.
Another reason is list comprehension is _faster_ than the for loop. How fast? I have never tried comparing them before.
So I made a few examples to show case that.

This is running on CPython 3.9.5

### For loop
```python
# for_loop_append_list.py          
output = []
MILLION_NUMBERS = list(range(1_000_000))


def for_loop():
    for element in MILLION_NUMBERS:
        output.append(element)

    return output
```

Then try with `timeit` module.

```bash
$ python -m timeit 'from for_loop_append_list import for_loop' 'for_loop()' 
5 loops, best of 5: 40.7 msec per loop  
```

### List comprehension

```python
# list_comprehension_append_list.py 
MILLION_NUMBERS = list(range(1_000_000))


def list_comprehension():
    return [number for number in MILLION_NUMBERS]
```

Running it

```bash
$ python -m timeit 'from list_comprehension_append_list import list_comprehension' 'list_comprehension()'                                  
20 loops, best of 5: 14.1 msec per loop
```

The numbers don't lie.
Of course this is a very simplified example with large number of items. 
It might not matter much when we are going through small numbers of `n`.

Me and my friend contine to talk about why he prefers the `for` loop especially when the line is really long with `if` condition or when there are two list comprehensions.
I agree with that. I would prefer (from the readability standpoint) 
```python
list_of_words = []
for sentence in text:
    for word in sentence:
       list_of_words.append(word)
return list_of_words
```
over

```python
[word for sentence in text for word in sentence] 
```
With enough practice and usage, I think we can get used to the double list comprehension though so let's see.

The same goes for the comprehension with long line with `if` and `else` ). Maybe [black](https://black.readthedocs.io/en/stable/) will help if it's really long.


### Why is the list comprehension faster actually?

Copying from the good ol' StackOverflow

https://stackoverflow.com/questions/30245397/why-is-a-list-comprehension-so-much-faster-than-appending-to-a-list/30245465#30245465

- List comprehension is basically just a "syntactic sugar" for the regular for loop. 
- In this case the reason that it performs better is because it doesn't need to load the append attribute of the list and call it as a function at each iteration. 
- In other words and in general, list comprehensions perform faster because suspending and resuming a function's frame, or multiple functions in other cases, is slower than creating a list on demand.

Adding "learn more about python bytecodes" and dive deep into the (in)famous [ceval](https://github.com/python/cpython/blob/main/Python/ceval.c) code to my endless list of things to read :D