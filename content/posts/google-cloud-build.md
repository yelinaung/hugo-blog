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
We've been facing other issues such as
- slow initial boot times (Travis uses GCP VMs to run the builds),
- unable to provision bigger machines for faster builds,
- bugs: some builds missing and randmonly failing builds, etc.
