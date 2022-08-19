---
title: "Things I Read 19th Aug 2022"
date: 2022-08-19T13:34:34+08:00
draft: false
description: Alacritty, Kitty, Infra Engineering interview with Shawn Wang / swyx
---

### Alacritty Error on remote machine terminal

[Alacritty](https://github.com/alacritty/alacritty) is my go-to terminal. It's fast!
Sometimes, I'd get errors like this when I ssh into some old servers from work.
```bash
Error opening terminal: alacritty.
```

This also happens with [`kitty`](https://github.com/kovidgoyal/kitty)
```bash
'xterm-kitty': unknown terminal type.
```

I found the solution about alacritty in [this Github issue](https://github.com/alacritty/alacritty/issues/3962).
This is one way I can do, if the machine has access to the external network.
```bash
curl -sSL https://raw.githubusercontent.com/alacritty/alacritty/master/extra/alacritty.info | tic -x -
```
`tic` is the terminfo entry-description compiler.

Or, another way is, on the host machine, alias `ssh` command to this way
```bash
alias ssh='TERM=xterm-256color ssh'
```

For kitty, the solution is [in the FAQ](https://sw.kovidgoyal.net/kitty/faq/#i-get-errors-about-the-terminal-being-unknown-or-opening-the-terminal-failing-when-sshing-into-a-different-computer).

```bash
kitty +kitten ssh myserver

# this can be an alias as well
alias s="kitty +kitten ssh"
```

I found a bit more information about what's going on from the Kitty's author in this [Github comment](https://github.com/kovidgoyal/kitty/issues/713#issuecomment-422452341).

> The TERM value controls how many programs interpret key strokes, output colors, and various other doodads.
So depending on what programs you use and the incompatibilities between your chosed terminfo and kitty's terminfo you can experience breakage ranging from keystrokes being ignored/doing weird things/broken colors/ other random misbehavior. Or you could get lucky and be fine.

----

### Infra Engineering interview with Shawn Wang / swyx

[Infra Engineering](https://infraeng.dev/) is the site where [Will Larson](https://lethain.com/about/) will do interviews and guides about Infrastructure Engineering.
Today, I end up reading the interview with [Shawn Wang](https://infraeng.dev/swyx/).

The questions are around Shawn's experience with Developer Experience (DX), Infrastructure, SDK vs API, etc.
I found some of the answers (and questions) to be quite interesting.

------

##### What is Developer Experience (DX) ?

At the highest level, the basic dichotomy to be aware of is “internal” vs “external” DX.
...
Internal DX teams focus on developer productivity within a company (sometimes called “dev infra”).
The math is simple - if you have 50 engineers, and you think it’s possible to improve their productivity by >1% a quarter, then you would be silly not to invest in 1-2 engineers who don’t work on product, but just focus on making everyone else more productive.

##### Three things to focus on (from Netflix Productivity Engineering team)

- From new hire to productive local dev (their Bootcamp and bootstrapping tool, [NEWT](https://thenewstack.io/netflix-builds-pipeline-polyglot-programming/)),
- From local dev to production (their “build-bake-deploy paved road”),
- And then from production back to dev (their observability tools like [Atlas](https://netflixtechblog.com/lessons-from-building-observability-tools-at-netflix-7cfafed6ab17))


##### Whether Internal or External DX...

Both roles require a great deal of **empathy** with developer problems, and an expansive mental catalog of ways to solve them.
Yet the ultimate relevance of either to the outside world matters only to the extent of a typical build-vs-buy decision.
Don’t get too hung up on precise definitions in an inherently fuzzy and still-moving field.

##### What Infra Engineers usually lacks

(Related to the point above)

I think most Infra Engineers could do with more **developer empathy**, which in most situations simply means putting themselves in the shoes of people with less context and knowledge than them and proactively helping them out by any means necessary.
If you do it right, then yes, the developer experience of your users will be better because you took the effort, but it should be done not for altruistic “let’s make them happy” reasons, but rather, selfish ones: your efforts will be more successful if they feel more successful.

Why don’t more infra teams invest in Developer Experience?
Honestly, probably because there’s no cultural expectation for them to.
It’s common for infrastructure teams to get consumed by the loudest issues surrounding them like incidents and infrastructure costs such that they end up much more focused on their obligations to computers than their obligations to other engineers.

------

I think the whole interview is great and recommand folks to check it out.
