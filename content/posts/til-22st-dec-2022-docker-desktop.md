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

This is how I came about learning this.

- On a rare sunny afternoon in forever-raining-everyday Singapore, I happen to read [OCaml 5.0 Multicore is out](https://news.ycombinator.com/item?id=34013767) on HN.
- One of the comments mentioned that this [What is an Operating System?](https://signalsandthreads.com/what-is-an-operating-system/) podcast.
- As an impulsive monkey that I am, I proceed to listen to that on a very long bus ride from one end of Singapore to another.
    - I highly recommend to check it out! Although I barely understood most of stuff, it is great. You trust me on this one.
- One of the projects mentioned in this podcast is called [MirageOS](https://mirage.io/).
    -  A modular library OS written in OCaml.
- From there, I learned that [MirageOS libraries empower Docker Desktop](https://mirage.io/blog/2022-04-06.vpnkit).

Super cool, isn't it?

The TLDR is that

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) for Windows and Mac OSX uses a Linux VM underneath to manage the container.
- Docker uses LinuxKit to build the VM.

From [The Magic Behind the Scenes of Docker Desktop | Docker](https://www.docker.com/blog/the-magic-behind-the-scenes-of-docker-desktop/)

### What the heck is LinuxKit ?

It is a toolkit for building secure, portable and lean operating systems for containers.

- [LinuxKit](https://github.com/linuxkit/linuxkit) Repo
- Neat guide - [Build custom OS by LinuxKit](https://satishdotpatel.github.io/build-custom-os-by-linuxkit/)

Basically, you can use it to build a custom kernel/OS yourself with minimum dependencies.
Then you can boot it up on the cloud VMs or your local VMs.

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

Source from [redis-os](https://github.com/linuxkit/linuxkit/blob/master/examples/redis-os.yml)

Save it to a file, run a few command and you can boot it up!

### VPNKit

Next component is this [vpnkit](https://github.com/moby/vpnkit) thing.

VPNKit creates a virtual network interface on the host machine and assigns IP addresses to each of the connected virtual machines or containers.
This allows the virtual machines and containers to communicate with each other as if they were on the same physical network, even though they may be running on different physical machines or in different locations.
Also written in OCaml and you bet it's built on top of the network protocol libraries of the MirageOS.

![VPN-Kit-2](/vpnkit-2.png)

A bigger/detail picture.
![VPN-Kit](/vpnkit.png)

From [How Docker Desktop Networking Works Under the Hood](https://www.docker.com/blog/how-docker-desktop-networking-works-under-the-hood/). Also highly recommended to check it out.
