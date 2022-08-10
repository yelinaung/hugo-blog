---
title: "Things I Read 10th Aug 2022"
date: 2022-08-10T09:39:24+08:00
draft: false
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
