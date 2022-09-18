+++
title = "Google Cloud Build"
date = "2022-09-18T10:04:17+08:00"
author = ""
authorTwitter = "ylameow" #do not include @
cover = ""
tags = ["", ""]
keywords = ["", ""]
description = ""
showFullContent = false
readingTime = true
hideComments = false
draft = true
+++

We've been facing lots of issues with [Travis CI](https://www.travis-ci.com/).
The biggest issue out of this is the inability to run concurrent builds more than 5 builds at a time. If some of the build takes longer time, the rest of the other builds have to queue and slow down our velocity to ship.
The other issues we faced are
- slow initial boot times (Travis uses GCP VMs to run the builds),
- unable to provision bigger machines for faster builds,
- bugs: some builds missing and randmonly failing builds, etc.

So, I looked around what would be the easiest for us to gradually migrate onto. After comparing a few CI solutions (Github Actions, Jenkins, Gitlab CI/CD, ArgoCD, etc), I've settled on [Google Cloud Build](https://cloud.google.com/build) due to ease of use, faster and we are already using GCP for our infrastructure so it seems like a good solution for us.
I didn't go down the self-hosted solutions route mainly because of the initial setup and maintenance.

My rationales for the Cloud Build were
- No concurrent build limits
    - Cloud Build does not have limitations on the number of concurrent builds we can run. This will speed up the build + deployment process.
- Serverless
    - All the builds happen with a series of containers running up and down. No need to wait for a VM to spin up.
