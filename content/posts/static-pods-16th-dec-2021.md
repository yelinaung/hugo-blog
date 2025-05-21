---
title: "Static Pods in Kubernetes"
date: 2021-12-16T12:23:13+08:00
draft: false
description: What are even "Statics" Pods in Kubernetes ?
tags:
- kubernetes
- k8s
- ckad prep
---

After taking the [CKAD](/posts/ckad-experience/) exam, I am planning to take the (harder) [CKA](https://www.cncf.io/certification/cka/) exam.
As I was studying for it, I stumbled upon [Static Pods](https://kubernetes.io/docs/concepts/workloads/pods/#static-pods) in Kubernetes.
It is slightly different from the regular Pods.

This is the normal Kubernetes cluster components

![Kubernetes Constructs Concepts and Architecture](https://platform9.com/wp-content/uploads/2019/05/kubernetes-constructs-concepts-architecture.jpg)
From [Cloud9 Kubernetes Concepts and Architecture](https://platform9.com/blog/kubernetes-enterprise-chapter-2-kubernetes-architecture-concepts/)

Learn more about the Control plane components [here](https://kubernetes.io/docs/concepts/overview/components/#control-plane-components).

Now, let's imagine there is a Kubernetes cluster with no Schedular or Controller or even no Master Node.
There are worker nodes. On each worker node, there is [kubelet](https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/) running.
Now, how can we tell `kubelet` to run a Pod itself?

We can do that by putting a Pod specification YAML file under `/etc/kubernetes/manifests` folder.
Let's say this is the spec. We save it a YAML file put it under the manifests folder.
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: nginx:1.18.0
    ports:
    - containerPort: 80
```
`kubelet` will periodically check the folder and create the Pod.
We should be seeing the `nginx` Pod up and running shortly.
We can customize the folder path with `--pod-manifest-path` when we run `kubelet` process.
The Control plane from the Master Node is not involved in creating a static Pod.
Yet, once the `api-server` is reachable, kubelet will notify a record on the `api-server` as a mirror Pod record. So that we can see the pods when we do `kubectl` get pods.

##### When is this actually useful?
Most of the time, we won't have to create one like this.
Static pods are usually used by software bootstrapping Kubernetes itself.
One use is [kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/). During the setup, kubeadm uses static pods to bring up Kubernetes control plane components like api-server, controller-manager.

This only works for the Pods and not for `ReplicaSet` or `Deployment`.
