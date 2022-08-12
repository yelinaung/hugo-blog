---
title: "Things I Read 10th Aug 2022"
date: 2022-08-10T09:39:24+08:00
draft: false
description: Using topologySpreadConstraints for K8s Pods to spread the Pods evenly
---

#### [Kubernetes] Pod Topology Spread Constraints

Today I was looking for a way to evenly spreadout the N numbers of pods on M numbers of Kubernetes Nodes.
I found that Pod's [spec.topologySpreadConstraints](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/) is the way to do it.

This is the fields necessary.
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: example-pod
spec:
  # Configure a topology spread constraint
  topologySpreadConstraints:
    - maxSkew: <integer>
      minDomains: <integer> # optional; alpha since v1.24
      topologyKey: <string>
      whenUnsatisfiable: <string>
      labelSelector: <object>
  ### other Pod fields go here
```

- `maxSkew` describes the degree to which Pods may be unevenly distributed.
- `topologyKey` is the key of node labels.
- `whenUnsatisfiable` indicates how to deal with a Pod if it doesn't satisfy the spread constraint:
    - `DoNotSchedule` (default) tells the scheduler not to schedule it.
    - `ScheduleAnyway` tells the scheduler to still schedule it while prioritizing nodes that minimize the skew.
- `labelSelector` is used to find matching Pods. Pods that match this label selector are counted to determine the number of Pods in their corresponding topology domain.


Before adding the `topologySpreadConstraints`,

```bash
$ k get po --selector=name=my-service-prod -o wide --sort-by='{.spec.nodeName}'
NAME                              READY   STATUS    RESTARTS   AGE     IP              NODE                              NOMINATED NODE   READINESS GATES
my-service-prod-6588ffbc7-sxtn8   2/2     Running   2          3d22h   10.28.144.248   gke-my-kube-nodes-ae7c9e16-kgt6   <none>           <none>
my-service-prod-6588ffbc7-xwmhz   2/2     Running   0          99m     10.28.144.26    gke-my-kube-nodes-ae7c9e16-kgt6   <none>           <none>
my-service-prod-6588ffbc7-jq5m8   2/2     Running   4          5d3h    10.28.144.218   gke-my-kube-nodes-ae7c9e16-kgt6   <none>           <none>
my-service-prod-6588ffbc7-njp9p   2/2     Running   0          31h     10.28.230.16    gke-my-kube-nodes-ae7c9e16-msct   <none>           <none>
my-service-prod-6588ffbc7-qxxhb   2/2     Running   3          4d5h    10.28.230.115   gke-my-kube-nodes-ae7c9e16-msct   <none>           <none>
my-service-prod-6588ffbc7-gzbl5   2/2     Running   3          5d1h    10.28.239.27    gke-my-kube-nodes-ae7c9e16-nlwh   <none>           <none>
my-service-prod-6588ffbc7-8hn89   2/2     Running   0          3h27m   10.28.239.65    gke-my-kube-nodes-ae7c9e16-nlwh   <none>           <none>
my-service-prod-6588ffbc7-wl4nd   2/2     Running   4          5d21h   10.28.148.147   gke-my-kube-nodes-ae7c9e16-pxd9   <none>           <none>
my-service-prod-6588ffbc7-fq9l7   2/2     Running   1          2d4h    10.28.148.46    gke-my-kube-nodes-ae7c9e16-pxd9   <none>           <none>
my-service-prod-6588ffbc7-pmxsc   2/2     Running   0          20m     10.28.148.148   gke-my-kube-nodes-ae7c9e16-pxd9   <none>           <none>
my-service-prod-6588ffbc7-m2rq4   2/2     Running   1          3d3h    10.29.131.225   gke-my-kube-nodes-ae7c9e16-qmtx   <none>           <none>
my-service-prod-6588ffbc7-xvmh8   2/2     Running   0          3h41m   10.29.131.78    gke-my-kube-nodes-ae7c9e16-qmtx   <none>           <none>
my-service-prod-6588ffbc7-r2w2l   2/2     Running   0          83m     10.29.14.6      gke-my-kube-nodes-ae7c9e16-s2qk   <none>           <none>
my-service-prod-6588ffbc7-kwk2b   2/2     Running   0          83m     10.29.14.7      gke-my-kube-nodes-ae7c9e16-s2qk   <none>           <none>
my-service-prod-6588ffbc7-qhkkl   2/2     Running   0          4h2m    10.28.149.141   gke-my-kube-nodes-ae7c9e16-urkt   <none>           <none>
my-service-prod-6588ffbc7-47c22   2/2     Running   1          3d11h   10.28.149.180   gke-my-kube-nodes-ae7c9e16-urkt   <none>           <none>
```

After adding the `topologySpreadConstraints`.
```bash
$ k get po --selector=name=my-service-prod -o wide --sort-by='{.spec.nodeName}'
NAME                               READY   STATUS    RESTARTS   AGE   IP              NODE                              NOMINATED NODE   READINESS GATES
my-service-prod-6cf99454d8-hpqf4   2/2     Running   0          69m   10.28.144.42    gke-my-kube-nodes-ae7c9e16-kgt6   <none>           <none>
my-service-prod-6cf99454d8-tk824   2/2     Running   0          68m   10.28.144.45    gke-my-kube-nodes-ae7c9e16-kgt6   <none>           <none>
my-service-prod-6cf99454d8-tdprc   2/2     Running   0          69m   10.28.230.175   gke-my-kube-nodes-ae7c9e16-msct   <none>           <none>
my-service-prod-6cf99454d8-96vvb   2/2     Running   0          68m   10.28.230.177   gke-my-kube-nodes-ae7c9e16-msct   <none>           <none>
my-service-prod-6cf99454d8-gbcjp   2/2     Running   0          69m   10.28.239.121   gke-my-kube-nodes-ae7c9e16-nlwh   <none>           <none>
my-service-prod-6cf99454d8-98nrt   2/2     Running   0          69m   10.28.239.120   gke-my-kube-nodes-ae7c9e16-nlwh   <none>           <none>
my-service-prod-6cf99454d8-rcpmv   2/2     Running   0          69m   10.28.148.154   gke-my-kube-nodes-ae7c9e16-pxd9   <none>           <none>
my-service-prod-6cf99454d8-glh5z   2/2     Running   0          68m   10.28.148.156   gke-my-kube-nodes-ae7c9e16-pxd9   <none>           <none>
my-service-prod-6cf99454d8-n5xmt   2/2     Running   0          55m   10.29.131.99    gke-my-kube-nodes-ae7c9e16-qmtx   <none>           <none>
my-service-prod-6cf99454d8-dgf2l   2/2     Running   0          69m   10.29.14.31     gke-my-kube-nodes-ae7c9e16-s2qk   <none>           <none>
my-service-prod-6cf99454d8-q9d5l   2/2     Running   0          69m   10.29.14.32     gke-my-kube-nodes-ae7c9e16-s2qk   <none>           <none>
my-service-prod-6cf99454d8-nll8j   2/2     Running   0          69m   10.28.149.164   gke-my-kube-nodes-ae7c9e16-urkt   <none>           <none>
my-service-prod-6cf99454d8-gjj4w   2/2     Running   0          68m   10.28.149.166   gke-my-kube-nodes-ae7c9e16-urkt   <none>           <none>
```

We can now see that the pods are allocated on the nodes (almost) evenly.
