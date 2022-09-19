+++
title = "Travis CI to Google Cloud Build"
date = "2022-09-18T10:04:17+08:00"
author = ""
authorTwitter = "ylameow" #do not include @
cover = ""
tags = ["gcp", "build", "travis-ci", "devops", "infrastructure"]
keywords = ["", ""]
description = ""
showFullContent = false
readingTime = true
hideComments = false
+++

At work, we've been facing lots of issues with [Travis CI](https://www.travis-ci.com).
The biggest issue is we cannot run more than 5 builds at a time. If some of the builds take a longer time, the rest have to queue.
It slows down our velocity to ship things quickly.
The other issues we faced are
- slow initial boot times (Travis uses GCP VMs to run the builds)
- unable to provision bigger machines for faster builds
- bugs: some builds missing and randomly failing builds, etc.

So, I looked around at what would be the easiest for us to gradually migrate onto. After comparing a few CI solutions (GitHub Actions, Jenkins, Gitlab CI/CD, ArgoCD, etc), I've settled on [Google Cloud Build](https://cloud.google.com/build) due to ease of use, faster and we are already using GCP for our infrastructure. Hence, it seems like a good solution for us.
I didn't go down the self-hosted solutions route mainly because of the initial setup and maintenance.


### The good parts

- No concurrent build limits

Cloud Build does not have limitations on the number of concurrent builds we can run. This solves the biggest issue we faced as it speeds up the build + deployment process.

- Good integration with GCP services

Seamless integration with other GCP services such as Google Kubernetes Engine (GKE), Artifact Registry (private Docker/NPM registry), Secret Manager, etc
Given that it's already in the (private) GCP network, pushing/pulling the Docker images will be faster.

- "Serverless"
All the builds happen with a series of containers running up and down. We don't have to wait for a VM to spin up (unlike Travis CI).

- Ability to customize the builds

It allows us to select [bigger worker pools](https://cloud.google.com/build/docs/private-pools/private-pool-config-file-schema#machinetype) (more CPU cores and/or more memory).

- It's [relatively cheap](https://cloud.google.com/build/pricing).

The pricing model is pay-as-you-use instead of a fixed price.
They are currently running a promotion with the first 120 builds-minutes per day being free.

Having laid out the good points, I've migrated a few repositories from Travis CI to Cloud Build as proof of concept.


#### Show me the ~~money~~ numbers!


| Repo | Previous (Travis CI) (average) |  Now (Cloud Build) (average) |
|----------|---------------|-------|
| Python app without any DB integrations |  ~4 min| ~2 min |
| Python app with some DB integrations      |    ~6 min |   ~4 min |
| Nginx app |  ~3 min |    ~40 sec |


We are now enjoying being able to run more than 5 builds at a time without having to wait.
The ability to choose bigger machines enabled us to speed up some repo build time by a lot as well.

Please note that some of the gains are not just due to the build environment.
Depends on the applications, I used a few tricks such as caching, parallelizing the tests and the build steps, etc.
I will write more about these in the future.

### The not-so-good parts

Now, let's talk about the other side...

- The [build notification system](https://cloud.google.com/build/docs/configuring-notifications/notifiers) is cranky, compared to [Travis-CI](https://docs.travis-ci.com/user/notifications/).

All I wanted was to see the build status posted on Slack but I had to set up Pub/Sub, Cloud Run, Secret Manager and Cloud Storage. This, to me, is unnecessarily complicated.
I mean, look at this!

![Clould Build Notifiers](/cloud_build_notifiers.png)

From https://cloud.google.com/build/images/cloud-build-notifiers.svg

- Running integration tests

In the Travis CI, it was quite straightforward because everything in a VM.
I can either choose to run the DB on the host or in the docker container itself.
It took me quite awhile to figure out how to run the application tests that require connecting to the DBs.
It turns out that in the Cloud Build 'serverless' environment, all the containers attaches to a [local docker network called `cloudbuild`](https://cloud.google.com/build/docs/build-config-file-schema#network).
So, we have to change our applications to use docker-compose with a specialized network. e.g
```yaml
# example db config
version: '3.8'
services:
  app_redis:
    image: redis:6.0-alpine
    ports:
      - "127.0.0.1:6379:6379"

  app_mongo:
    # Smaller image
    image: "bitnami/mongodb:5.0.5"
    ports:
      - "127.0.0.1:27017:27017"

networks:
  default:
    external:
      name: cloudbuild
```
Shout out to [Three Dots Labs's tutorial](https://threedots.tech/post/running-integration-tests-on-google-cloud-build/) and [sample code](https://gitbub.com/ThreeDotsLabs/wild-workouts-go-ddd-example) about this!

- Using `git` command in the build steps.

Some use cases I had were, getting the commit message or getting the changes of a specific commit, cloning submodules, etc.
It turns out that the `.git` folder is not copied with the source code when the Cloud Build copies the code from GitHub.
So, the workaround was to use the [`gcr.io/cloud-builders/git`](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/git) build step, clone the repo manually from GitHub with token/secret. Then I was able to get the repo information out of it.
On a related on, the Cloud Build provides [some information](https://cloud.google.com/build/docs/configuring-builds/substitute-variable-values#using_default_substitutions) about the build such as the commit hash, repo name, branch name but no information about the commit message.

- Passing data between build steps

Because of the way the Cloud Build is designed to ensure reproducibility, each step is isolated from the other.
[The recommended way](https://cloud.google.com/build/docs/configuring-builds/pass-data-between-steps) is to write the data to a file in the `/workplace` folder and read it back from the subsequent steps.


### Conclusion

Now, it might seem like there are more annoyances than the good parts but it's the opposite.
Since decreasing the build time and reducing the build queue time are our main goals, overall we are pretty happy with the Cloud Build.
If you are in a similar boat like us (fed up with Travis CI, existing infrastructure on GCP), you can consider the Cloud Build as one of the options.
I hope this post was useful for you.

PS. Dear GCP, please improvements from GCP regarding the cranky parts!

### Other Useful links

- [Cloud Build limitations](https://cloud.google.com/build/quotas)
- [Community Contributed Build steps](https://github.com/GoogleCloudPlatform/cloud-builders-community)
- [Cloud Builders](https://cloud.google.com/build/docs/cloud-builders)
