---
title: "TIL - zstd"
date: 2022-12-21T13:36:07+08:00
draft: false
description: Zstandard(zstd) compression algorithm
tags:
- til
- zstd
- zstandard
- compression
---

I was going through Tobi's list of some really cool programming tech and got curious about zstd.

![tobi tweet about zstd](/tobi-zstd.png)

[Zstandard (also known as zstd)](https://github.com/facebook/zstd) is a Fast real-time compression algorithm from Facebook.

### What is zstd ?

- zstd is a “lossless” data compression algorithm
    - Lossless means
        - it can compress data without losing any of the original information.
        - it restores and rebuilds the data in its original form, after decompression.
    - Lossy compression does not do that.

### How zstd works

1. Zstd starts by analyzing the data to be compressed and identifying patterns and redundancies within the data.
    1. Zstd divides the data into small blocks.
2. **It then encodes the data using a combination of techniques, including Huffman coding and run-length encoding**.
    1. Huffman coding represents symbols using fewer bits based on their frequency of occurrence in the data.
    2. Run-length encoding is a method of representing runs of repeated characters using a single character and a count.
    3. Finding patterns that can be represented more efficiently. It then replaces these patterns with shorter representations, resulting in a smaller overall size of the data.
3. Zstd also includes a dictionary-based compression method, allowing it to reference a pre-defined set of commonly used strings and patterns to compress the data more effectively.
    1. For example, if the word "the" appears many times in the data, it could be replaced with a single symbol instead of spelling out the whole word each time.
4. The compressed data is then output in the form of a zstd compressed file, which a zstd decompressor can decompress to retrieve the original data.

### Benefits

- It is very fast both when compressing and decompressing
- It is very efficient, achieving good compression ratios with relatively low computational overhead.

(And I asked ChatGPT to explain me 3 times. I am super impressed wow)
