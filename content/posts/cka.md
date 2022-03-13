---
title: "Certified Kubernetes Administrator (CKA)"
date: 2022-03-12T18:14:02+08:00
draft: false
description: My experience preparing and taking Linux Foundation Certified Kubernetes Administrator (CKA) exam
---

After the [CKAD exam](/posts/ckad-experience), my next goal was to take the CKA exam.
According to the people who took it, the exam is harder than the CKA. The [curriculum](https://github.com/cncf/curriculum/blob/master/CKA_Curriculum_v1.22.pdf) for the CKA shows that it goes deeper into the different parts of Kubernetes.
I have some experience with Kubernetes via Google Kubernetes Engine (GKE). But, I was new to
- provisioning underlying infrastructure to deploy a Kubernetes cluster
- performing a manual upgrade with [kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/)
- interacting with [etcd](https://learnk8s.io/etcd-kubernetes), doing backups and restoring the data

I prepared for the exam by taking the [Mumshad CKA Udemy course](https://www.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/). The course is excellent because it goes through not just the relevant parts for the exams. It also goes in length to explain some basic but necessary concepts like TLS, Networking, container networking, etc.

After a few weeks of preparation, I took the exam and [passed the exam](https://www.credly.com/badges/304e306b-2b32-43d0-92b1-ee53c5262a92/public_url) with 91 points out of 100.

![CKA Cert](/cka.png)

Like CKAD, my primary motivations were to learn deeper about Kubernetes in a structured way and to challenge myself

### Some tips
If you are learning and/or preparing to take the exam, check out my tips from [CKAD tips](/posts/ckad-experience/#a-few-tips), plus some tips I have here.

#### Always check the context
You will have a couple of clusters and their contexts. Always check under which context you are in before you try to resolve the question.

#### Time Limitation

During the exam, don’t spend so much time getting stuck at a problem. Move on to the next one and come back to resolve it later. Otherwise, you might get panicked and won’t be able to finish all the questions given the divide time. Speed is key.

#### Some other tips from /r/Kubernetes

These suggestions were useful to me
- [Cleared my CKA exam with a score of 92%. Here are a few tips](https://www.reddit.com/r/kubernetes/comments/ssxhsd/cleared_my_cka_exam_with_a_score_of_92_here_are_a/)
- [Just passed the CKA! Here are some tips and tricks to pass (2022)](https://www.reddit.com/r/kubernetes/comments/s6l7xs/just_passed_the_cka_here_are_some_tips_and_tricks/)

### Some of my struggles

Despite passing the exams, I am still not satisfied with some areas. So I plan to go back and study those again. Some of the topics are
- Network Policies
    - Planning to go through these [Recipes](https://github.com/ahmetb/kubernetes-network-policy-recipes)
- Container networking
    - The Udemy course went deep into this but I am still not very clear about how things work underneath.

After I learn more about these topics, I will come back and write a blog post for each of them!
