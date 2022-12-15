---
title: "Things I Read 14th Dec 2022"
date: 2022-12-14T17:59:02+08:00
draft: false
description: Finding out the CPU info with hwloc/lstopo
tags:
- linux
- ubuntu
- hardware
---

## lstopo

There are many ways to find out what's the CPU you are using and more info about it.
For Windows and Android, there is [CPU-Z](https://www.cpuid.com/softwares/cpu-z.html).
For Mac, there is System Report or command line `sysctl -a | grep machdep.cpu`.
On Linux, there are plenty. You can check with `htop`, `sudo lshw -C cpu`, `lscpu` or the good old `less /proc/cpuinfo`.

Today, I've found out [Portable Hardware Locality (hwloc)](https://www.open-mpi.org/projects/hwloc/) tool. What is `hwloc` ? According to the official site,

> The Portable Hardware Locality (hwloc) software package provides a portable abstraction (across OS, versions, architectures, ...) of the hierarchical topology of modern architectures, including NUMA memory nodes, sockets, shared caches, cores and simultaneous multithreading.
> It also gathers various system attributes such as cache and memory information as well as the locality of I/O devices such as network interfaces, InfiniBand HCAs or GPUs.v

My CPU is AMD Ryzen 5 3600 6-Core Processor.
As we can see, there are 6 physical cores and within each, there are two logical cores - the Operating System see it as 12 Cores.
```
$ lshw -C cpu
  *-cpu
       description: CPU
       product: AMD Ryzen 5 3600 6-Core Processor
       vendor: Advanced Micro Devices [AMD]
```

Part of the hwloc is a tool called `lstopo`. I've tried running this on my desktop and this is the output of the command `lstopo -v --no-io --output-format png > cpu.png`.

![lstopo](/cpu.png)

We can also see it in the terminal with the command `lstopo-no-graphics --no-io`.

```
Machine (31GB total) + Package L#0
  NUMANode L#0 (P#0 31GB)
  L3 L#0 (16MB)
    L2 L#0 (512KB) + L1d L#0 (32KB) + L1i L#0 (32KB) + Core L#0
      PU L#0 (P#0)
      PU L#1 (P#6)
    L2 L#1 (512KB) + L1d L#1 (32KB) + L1i L#1 (32KB) + Core L#1
      PU L#2 (P#1)
      PU L#3 (P#7)
    L2 L#2 (512KB) + L1d L#2 (32KB) + L1i L#2 (32KB) + Core L#2
      PU L#4 (P#2)
      PU L#5 (P#8)
  L3 L#1 (16MB)
    L2 L#3 (512KB) + L1d L#3 (32KB) + L1i L#3 (32KB) + Core L#3
      PU L#6 (P#3)
      PU L#7 (P#9)
    L2 L#4 (512KB) + L1d L#4 (32KB) + L1i L#4 (32KB) + Core L#4
      PU L#8 (P#4)
      PU L#9 (P#10)
    L2 L#5 (512KB) + L1d L#5 (32KB) + L1i L#5 (32KB) + Core L#5
      PU L#10 (P#5)
      PU L#11 (P#11)
```

Now, unpacking the acronyms...

- Package

A processor Package is the physical package that usually gets inserted into a socket on the motherboard.
It is also often called a physical processor or a CPU even if these names bring confusion with respect to cores and processing units.
A processor package usually contains multiple cores (and may also be composed of multiple dies).

- PU - Processing Unit withing the cores of the CPU.

The smallest processing element that can be represented by a hwloc object. It may be a single-core processor, a core of a multicore processor, or a single thread in a [SMT](https://en.wikipedia.org/wiki/Simultaneous_multithreadingv) processor (also sometimes called "Logical processor", not to be confused with "Logical index of a processor").
hwloc's PU acronym stands for Processing Unit

- L#i is for the Instruction Cache. It includes cache lines fetched from memory for execution.
- L#d is for the Data Cache. It includes cache lines fetched from memory for loading into a register as data.
- L1/2/3 are the [Level 1/2/3 cache](https://www.makeuseof.com/tag/what-is-cpu-cache/).


Compared to the Desktop CPU, this is my DigitcalOcean server CPU.

![do_lstopo](/do_cpu.png)

Other command line examples - https://www.open-mpi.org/projects/hwloc/doc/v2.9.0/a00358.php#cli_examples

There are still a lot more stuff that I am not clear about so more TILs are coming!
