---
title: "Why My Print Didn't Output Before a Segmentation Fault"
date: 2023-12-29T15:51:12+08:00
draft: false
tags:
- "linux"
- "til"
- "c"
description: "Why printf statements may not output as expected due to stdout being line buffered, and a segmentation fault crash"
---

So, as I was learning some [C](https://beej.us/guide/bgc/), at the pointers/segfault, I was trying this code myself.
```c
#include <stdio.h>

int main(void)
{
        printf("%s", "Hello!");
        int *p = NULL;
        *p = 5;
        // Will not be reached due to crash above
        printf("%s", "Another Hello!");
}
```

Then compile it and run it in the terminal.
```
$ gcc -Wall -Wextra -o hello hello.c && ./hello
Segmentation fault (core dumped)
```
To my surprise, it did not print out both "Hello!" and "Another Hello!" and the program just crashed with "Segmentation fault (core dumped)" (aka segfault).

For "Another Hello!", I get it. Program crashed before it reached to that line.

How about "Hello!" ? What's going on here ? Is it the segfault that prevented printing out ?
Before we go further, allow me to expand a bit on this segfault thing.
```c
int *p = NULL;
*p = 5;
```
The first line declares a pointer `p` that should hold an integer type and we are setting it to `NULL` (nowhere/no actual thing).

In the second line, we tries to writes "5" to the memory location pointed to by `p`. But `p` doesn't exist.
It's invalid memory access and causes a crash which is [segfault](https://en.wikipedia.org/wiki/Segmentation_fault)!

Wait, how does this crash prevent the program to print out "Hello!" in terminal? It seems like nothing to do with our `printf` since it comes before the crash happens.

What happens when you do `printf` ? In most system, it prints out the data to the output device, in this case, the terminal.
It turns out the output devices are "line buffered".
Line buffering means the outputs are stored in a place called "buffer" before they are printed out and will be printed out later on certain conditions.
The condidtions, according to the [GNU C guidelines](https://www.gnu.org/software/libc/manual/html_node/Flushing-Buffers.html) are

---
(Copied straight from the guide)
##### Flushing output on a buffered stream means transmitting all accumulated characters to the file. There are many circumstances when buffered output on a stream is flushed automatically:
- When you try to do output and the output buffer is full.
- When the stream is closed. See Closing Streams.
- When the program terminates by calling exit. See Normal Termination.
- When a newline is written, if the stream is line buffered.
- Whenever an input operation on any stream actually reads data from its file.
---
It is true for printing something to the terminal as well as writing something to a file.
In our little program, the program crashed due to segfault and did not manage to flush the buffer. The program abruptly ended.

Now, how can we force the program to print out "Hello!" in terminal before anything crashed ?
That will help with debugging things like until at whihc point my program executed before it crashed.

Well, the easy way is remove the error part of the program!

```c
#include <stdio.h>

int main(void)
{
        printf("%s", "Hello!");
        printf("%s", "Another Hello!");
}
```
Compile it and run it again!
```
ubuntu@playground:~$ gcc -Wall -Wextra -o hello hello.c && ./hello
Hello!AnotherHello!ubuntu@playground:~$
```
Now, all goes well, `main()` returns successfully and everything is flushed out to the output device. I see my prints!

But..how about I want to keep things the same way and have my prints. I wanna have the cake and eat it too.

In one of the conditions above, the buffer should be flushed to the output device `When a newline is written, if the stream is line buffered.`

For that, I can to use a newline character (`\n`) to force the program flush to the buffer. We can keep the rest in the same way.
```c
#include <stdio.h>

int main(void)
{
        // This should prints "Hello!" and flushes to an output device (stdout) due to newline
        printf("%s\n", "Hello!");
        int *p = NULL;
        *p = 5;
        printf("%s\n", "Another Hello!");
}
```

I see my "Hello!" here!
```
$ gcc -Wall -Wextra -o hello hello.c && ./hello
Hello!
Segmentation fault (core dumped)
```
The "Another Hello!" didn't make it but that's ok. The program crashed before it reaches to that line.

Update : [fflush()](https://man7.org/linux/man-pages/man3/fflush.3.html)

The `fflush` function also flushes the output buffer to the output device without the use of newline character (`\n`).

```c
#include <stdio.h>

int main(void)
{
        printf("%s", "Hello!");
        fflush(stdout);
        int *p = NULL;
        *p = 5;
        printf("%s\n", "Another Hello!");
}
```
will output
```
$ gcc -Wall -Wextra -o hello hello.c && ./hello
Hello!Segmentation fault (core dumped)
```

Well, that's been my little TIL and hope you learn something as well!

#### References

- The NULL Pointer - [https://beej.us/guide/bgc/html/split/pointers.html#the-null-pointer](https://beej.us/guide/bgc/html/split/pointers.html#the-null-pointer)
- Buffering Concepts - [https://www.gnu.org/software/libc/manual/html_node/Buffering-Concepts.html](https://www.gnu.org/software/libc/manual/html_node/Buffering-Concepts.html)
- fflush - [https://man7.org/linux/man-pages/man3/fflush.3.html](https://man7.org/linux/man-pages/man3/fflush.3.html)
