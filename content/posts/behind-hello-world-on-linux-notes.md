---
title: "Behind 'Hello World' on Linux notes"
date: 2023-08-13T10:21:14+08:00
draft: false
description: My notes while going through behind Julia Evans's (excellent) Behind "Hello World" on Linux.
---

I wrote these notes while reading Julia Evans' (excellent) [Behind "Hello World" on Linux post](https://jvns.ca/blog/2023/08/03/behind--hello-world/) post.
I learned a lot from it.
If you haven't read it yet, I highly recommend you do!

I am on Ubuntu Linux 22.04 LTS and there is filed called `hello.py` with content

```python
print("Hello world!")
```
It's basically "What happens when you do `python hello.py` in the terminal, on Linux ?" from the point you run the command to the point you see the output "Hello World!".

The first thing is to understand the relationship between a "shell", a "terminal" and the rest.
Whenever I open up a "terminal" app such as GNOME Terminal (the default Terminal that comes with OS) or [Alacritty](https://github.com/alacritty/alacritty) or [Kitty](https://sw.kovidgoyal.net/kitty/) or [WezTerm](https://github.com/wez/wezterm) (my current Terminal), it starts a "shell" program.

You might have heard of [bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)), [zsh](https://www.zsh.org/) or even [fish](https://fishshell.com/). They are all _shell_ programs.

![User x Terminal x Shell x OS](/terminal_shell_os.png)

This is roughly the same relationship between a "terminal" and a "shell" and the rest.

On a system where multiple shells are installed (e.g I have bash and zsh), how does the terminal know which shell to open?
The answer is the `$SHELL` environment variable.
```bash
~ echo $SHELL
/bin/zsh
```
For the WezTerm terminal that I am using, there is a documentation about this at [Launching Programs](https://wezfurlong.org/wezterm/config/launch.html).
> By default, when opening new tabs or windows, your shell will be spawned.
Your shell is determined by the following rules:
(On Posix Systems)
The value of the `$SHELL` environment variable is used if it is set.
Otherwise, it will resolve your current uid and try to look up your shell from the password database.

Next is for the shell to parse the command `python hello.py`. As Julia wrote, the shell figures out the full "path" of the command "python" by using the `$PATH` environment variable.

For `zsh` (my current shell), with my limited C knowledge and system programming, this is what I found about how it figures out the path of the program.

- [`findcmd`](https://github.com/zsh-users/zsh/blob/5.9/Src/exec.c#L813-L880) function from `Src/exec.c` file.

It takes "python" or "ls" or "grep" and searches through different places to try to find where that command is located.
It will look through a Hashmap of the key as the command and the full path as the value if the entry exists.

Otherwise, it will look through the `$PATH` variable that contains directories to search for the specific command.
It does so by appending the command name to the directory path and check if that full path exists and is executable with

- [`iscom()`](https://github.com/zsh-users/zsh/blob/5.9/Src/exec.c#L887-L896) function from the same file.

It is using the [`access`](https://man7.org/linux/man-pages/man2/access.2.html) system call to whether the calling process can access the file _pathname_.
It also handles some special cases like relative paths starting with `"."` or `"../"`.

On my system, I installed Python with [pyenv](https://github.com/pyenv/pyenv) and I can see it in the `$PATH` variable. I also have a LOT of other stuff installed so it's quite messy. 😬

(It's one line but I added a few line break for readability)
```bash
~ echo $PATH
/home/yelinaung/go/bin:/usr/local/go-1-21-0/bin:/home/yelinaung/.opam/default/bin:/home/yelinaung/.pyenv/shims:/home/yelinaung/.fly/bin:/home/yelinaung/.bun/bin:
/home/yelinaung/.rbenv/shims:/home/yelinaung/.pyenv/bin:/home/yelinaung/.krew/bin:/home/yelinaung/.local/bin:/usr/local/go-1-21-0/bin:
/home/yelinaung/.opam/default/bin:/home/yelinaung/.fly/bin:/home/yelinaung/.bun/bin:/home/yelinaung/.rbenv/shims:
/home/yelinaung/.pyenv/bin:/home/yelinaung/.krew/bin:/home/yelinaung/.nvm/versions/node/v18.12.1/bin:/home/yelinaung/.local/bin:/home/yelinaung/.asdf/shims:/home/yelinaung/.asdf/bin:/home/yelinaung/.cargo/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin:/usr/local/go/bin:/home/yelinaung/.fzf/bin:/home/yelinaung/.rvm/bin:/usr/bin/Postman:
/home/yelinaung/racket/bin/:/home/yelinaung/anaconda3/bin/:/usr/local/go-1-21-0/bin:/home/yelinaung/Android/Sdk/tools:/home/yelinaung/Android/Sdk/platform-tools:/usr/local/go/bin:
/home/yelinaung/.rvm/bin:/usr/bin/Postman:/home/yelinaung/racet/bin/:/home/yelinaung/anaconda3/bin/:
/usr/local/go-1-21-0/bin:/home/yelinaung/Android/Sdk/tools:/home/yelinaung/Android/Sdk/platform-tools
```

A few other things I learned about are

- `stat` command
```bash
~ stat .pyenv/shims/python3
  File: .pyenv/shims/python3
  Size: 188             Blocks: 8          IO Block: 4096   regular file
Device: 10302h/66306d   Inode: 1707413     Links: 1
Access: (0775/-rwxrwxr-x)  Uid: ( 1000/yelinaung)   Gid: ( 1000/yelinaung)
Access: 2023-08-12 18:30:31.507106724 +0800
Modify: 2021-12-15 17:51:46.268072627 +0800
Change: 2021-12-15 17:51:46.268072627 +0800
 Birth: 2021-12-15 17:51:46.268072627 +0800
```

I also found zsh's sequence for executing a command

- [`execcmd_exec`](https://github.com/zsh-users/zsh/blob/5.9/Src/exec.c#L2790)
- [`execute()`](https://github.com/zsh-users/zsh/blob/5.9/Src/exec.c#L648-L809)
- [`zexecve`](https://github.com/zsh-users/zsh/blob/5.9/Src/exec.c#L463-L573)
- which actually calls the [execve](https://man7.org/linux/man-pages/man2/execve.2.html) system call.

Next question I was wondering was how does the shell read the output of the command `python hello.py`?
I couldn't really figure how it does after some time so I asked some help from [Cody AI](https://docs.sourcegraph.com/cody).
This is what it says -

Zsh reads the output of external programs through `pipes`. When a command is executed, `zsh` will fork a child process and set up pipe file descriptors for `stdin`, `stdout`, and `stderr`.
Some key points on how it handles reading program output:

- After forking, it calls dup2() to connect the pipes to the command's stdin/out/err.
- The parent process (the shell) keeps the other sides of the pipes open.
- The [`readoutput()`](https://github.com/zsh-users/zsh/blob/5.9/Src/exec.c#L4666) function is used to read data from the stdout and stderr pipes.
- It loops calling `read()` to transfer data from the pipes into buffers.
- The buffers are processed into lines/words and returned as linked lists.
- This allows the shell to capture the full output of the child process.
- The data is available for processing by the shell, e.g. piping to other commands.
- When the child exits, the pipes are closed and pending data is read out.

I am still trying to wrap my head around some of the points but I kind of get what it is doing.

This was fun and that's all I have for now!
