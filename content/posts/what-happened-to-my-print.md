---
title: "What Happened to My print"
date: 2023-12-29T15:51:12+08:00
draft: true
---

So, as I was learning some [C](https://beej.us/guide/bgc/), at the pointers/segfault, I was trying this code myself.
```c
#include <stdio.h>

int main(void)
{
        printf("%s", "Hello!");
        int *p = NULL;
        *p = 5;
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
The first line declares a pointer `p` that should hold an integer type and we are setting it to `NULL` (nowhere/no acutal thing).

In the second line, we tries to writes "5" to the memory location pointed to by `p`. But `p` doesn't exist.
It's invalid memory access and causes a crash which is [segfault](https://en.wikipedia.org/wiki/Segmentation_fault)!

Wait, how does this crash prevent the program to print out "Hello!" in terminal? It seems like nothing to do with our `printf` since it comes before the crash happens.

What happens when you do `printf` ? In most system, it prints out the data to the stdout, in this case, the terminal.
The output to the stdout is "line buffered".
Line buffering means the outputs are stored in a place called "buffer" before they are printed out.
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
For that, I can to use a newline character (`\n`) to force the program flush to the buffer. We can keep the rest in the same way.
```c
#include <stdio.h>

int main(void)
{
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

Well, that's been my little TIL and hope you learn something as well!
