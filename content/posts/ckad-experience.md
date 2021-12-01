---
title: "CKAD Experience"
date: 2021-12-01T12:08:12+08:00
draft: false
---

I recently took the [Certified Kubernetes Application Developer (CKAD)](https://www.cncf.io/certification/ckad/) exam and [passed](https://www.credly.com/badges/e3cf473d-e91a-4f8d-a732-59261dbdefe9/public_url) with 97 out of 100.
Some background about myself. I have been a backend + infra engineer working with Kubernetes via Google Cloud's managed service: [GKE](https://cloud.google.com/kubernetes-engine) for the past few years.
I am also a (Ubuntu) Linux user for both the desktop and servers. I am familiar with basic linux commands, bash, tmux and vim.

The primary motivations for me were
- to learn more about different parts of K8s in a structured way
- to challenge, validate and test my existing knowledge

There are other advantages like opening up to more opportunities and adding credibility. They are secondary to me.
I also don't think certifications are not _necessary_ in our industry and I see them as _nice to have_.

Having said all that, the exam experience was fun. A few tips below could help whoever wants to take are

#### Go through the important links
- CNCF Curriculum - https://github.com/cncf/curriculum
- FAQs - https://docs.linuxfoundation.org/tc-docs/certification/faq-cka-ckad-cks
- Tips - https://docs.linuxfoundation.org/tc-docs/certification/tips-cka-and-ckad

#### Setup
During the exam, you will get a Linux VM. I recommend you to get familiarized with command line, vim, tmux. 
So that you can be fast to solve the given tasks. There are plenty of tutorials out there to getting started with vim and tmux.
- Vim settings for `.vimrc`. I memorized these commands as `s e t`
```
set shiftwidth=2
set expandtab
set tabstop=2
```
- Tmux settings in `.tmux.conf` to set the prefix key to Ctrl-a, set the window and pane starting index to 1.
```
set -g prefix C-a
set -g base-index 1
setw -g pane-base-index 1
```

- Some useful bash shortcuts - https://gist.github.com/yelinaung/849c78c40784c56e05f5a04dded9082d

#### Using Official Docs

You can search through Official docs to reference throughout the exam. This is one aspect of the exam I like. I don't have to remember all the commands and YAML to pass the exam. Like how I would do my work day to day, I can browse through the documentation.
- [official docs](https://kubernetes.io/docs/home/) - most of the references are here
- [kubectl](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands) - this is particularly useful for things like `kubectl run ..` or `kubectl expose ...`

#### Practice

- I took the [CKAD with Tests course](https://www.udemy.com/course/certified-kubernetes-application-developer). I recommend the course as it covers extensively for the exam with hands-on labs.
- Other useful Github repos that I used for practicing are
    - https://github.com/dguyhasnoname/CKAD-TheHardWay/tree/master/exercises/basic
    - https://github.com/dgkanatsios/CKAD-exercises
- You also get two exam simulators from [killer.sh](https://killer.sh/) as part the exam bundle.
    - I did't go through them but would recommend to go through if you have time. Learn more about them in [their FAQ](https://killer.sh/faq).


Well, that's all folks.
