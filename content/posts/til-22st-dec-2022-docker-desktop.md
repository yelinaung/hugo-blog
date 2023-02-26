---
title: "TIL - Underneath the Docker Desktop"
date: 2022-12-22T11:10:10+08:00
draft: false
description: TIL about Docker Desktop internals, MirageOS, OCaml
tags:
- docker
- tils
- ocaml
---

22-12-22 Special!

So, you want to know about how [Docker Desktop](https://www.docker.com/products/docker-desktop/) works underneath.
Well, it's like a magic show, except the rabbits are containers and the hat is a Linux VM. Let me break it down for you.

Before I go further into the main topic, allow me to get sidetracked a bit here on how I fell into this rabbit hole.

On a rare sunny afternoon in forever-raining-everyday Singapore, I stumble upon [OCaml 5.0 Multicore is out](https://news.ycombinator.com/item?id=34013767) on the orange site.
Wait, [OCaml](https://ocaml.org/) is still alive and thriving ? Very nice!

One of the comments mentioned this "[What is an Operating System?](https://signalsandthreads.com/what-is-an-operating-system/)" podcast from JaneStreet.
As an impulsive monkey that I am, I listened to that on a very long bus ride from one end of Singapore to another.
(I highly recommend to check it out! Although I barely understood most of stuff, it is great! You trust me on this one.)

People in the podcast talked about something called [MirageOS](https://mirage.io/) - a modular library OS written in OCaml.
From there, I learned that [MirageOS libraries empower Docker Desktop](https://mirage.io/blog/2022-04-06.vpnkit). Wait, what?
Holy Cannoli! How is this not _very cool_ ??

Anyway.. when you open up Docker Desktop on your fancy Mac or Windows machine, you're actually interacting with a slick GUI that communicates with a Linux virtual machine running in the background.
This Linux VM is built using a tool called LinuxKit, which is like a Lego set for building custom operating systems. It's all very fancy.

You might be wondering why this Docker Desktop thing needs a VM.

The reason Docker Desktop needs this Linux VM is because, well, Docker containers run on Linux.
So, to provide a seamless experience for developers on other operating systems, Docker Desktop uses this virtual machine to manage all the containers you create and run.
Check out more at [The Magic Behind the Scenes of Docker Desktop](https://www.docker.com/blog/the-magic-behind-the-scenes-of-docker-desktop/).

Here is the thing, you don't need to know anything about this Linux VM to use Docker Desktop. It's all hidden away behind the scenes, like a stagehand making sure the rabbits don't escape the hat.
So there you have it. Docker Desktop is like a magician, using its Linux VM to pull containers out of a hat. It's all very impressive, but you don't need to understand the mechanics to enjoy the show.
But we are curious and we wanna know more so let's march on.

#### You mentioned something called LinuxKit. What the heck is that ?

LinuxKit is like having your own personal tailor who can make you a custom suit that fits you perfectly.
You can choose the fabric, the style, and the features you want, and end up with a suit that's tailor-made for you.
Similarly, with LinuxKit, you can choose the components and dependencies you need, and create a custom operating system that's just right for your container needs.

- [LinuxKit](https://github.com/linuxkit/linuxkit) Repo

For example, this is how an OS with only Redis running inside, plus only the required permissions.
```yaml
# Minimal YAML to run a redis server (used at DockerCon'17)
# connect: nc localhost 6379
kernel:
  image: linuxkit/kernel:5.10.104
  cmdline: "console=tty0 console=ttyS0 console=ttyAMA0 console=ttysclp0"
init:
  - linuxkit/init:8f1e6a0747acbbb4d7e24dc98f97faa8d1c6cec7
  - linuxkit/runc:f01b88c7033180d50ae43562d72707c6881904e4
  - linuxkit/containerd:de1b18eed76a266baa3092e5c154c84f595e56da
onboot:
  - name: dhcpcd
    image: linuxkit/dhcpcd:52d2c4df0311b182e99241cdc382ff726755c450
    command: ["/sbin/dhcpcd", "--nobackground", "-f", "/dhcpcd.conf", "-1"]
services:
  - name: getty
    image: linuxkit/getty:c9d5afa9a61ac907904090643e946874ff6bf07c
    env:
     - INSECURE=true
  # Currently redis:4.0.6-alpine has trust issue with multi-arch
  # https://github.com/docker-library/official-images/issues/3794
  - name: redis
    image: redis:4.0.5-alpine
    capabilities:
     - CAP_NET_BIND_SERVICE
     - CAP_CHOWN
     - CAP_SETUID
     - CAP_SETGID
     - CAP_DAC_OVERRIDE
    net: host
```

Source from [redis-os](https://github.com/linuxkit/linuxkit/blob/master/examples/redis-os.yml).
Download [linuxkit](https://github.com/linuxkit/linuxkit/releases/tag/v1.0.1). Save it to a file, run a few command and you can boot it up!

I found a neat guide at [Build custom OS by LinuxKit](https://satishdotpatel.github.io/build-custom-os-by-linuxkit/) as well. Yes, you're welcome.

### VPNKit

Next component is this [vpnkit](https://github.com/moby/vpnkit) thing.

VPNKit is a tool that creates a virtual network interface on the host machine and assigns IP addresses to each connected virtual machine or container.
This enables communication between virtual machines and containers as if they were on the same physical network, even if they're running on different machines or locations.
It's built using OCaml and the network protocol libraries of MirageOS.

![VPN-Kit-2](/vpnkit-2.png)

A bigger/detail picture.

![VPN-Kit](/vpnkit.png)

From [How Docker Desktop Networking Works Under the Hood](https://www.docker.com/blog/how-docker-desktop-networking-works-under-the-hood/). Also highly recommended to check it out.

Now that I've learned a little bit about MirageOS/Docker, I will traverse upward and learn more about OCaml next time!

Disclaimer: I received assistance from ChatGPT, an AI language model, to simplify and clarify some technical concepts discussed in this post.
