+++
title = "Bypassing Some Firewalls"
date = "2022-09-21T10:44:41+08:00"
author = ""
authorTwitter = "" #do not include @
cover = ""
tags = ["bypassing", "scraping"]
keywords = ["", ""]
description = ""
showFullContent = false
readingTime = false
hideComments = false
draft = true
+++

##### Caveat

Scraping is such a controversial topic and a grey area.
If you host a site and people are scraping you, you would not like it.
On the other hand, you would like to scrape other websites for whatever purpose (for analyzing existing data, for science, etc) and that'd be ok for you.

And with the rise of technologies, it's getting harder for both sides.
Both sides use sophisticated technologies to scrape and prevent getting scraped. It's a cat and mouse race!

---

Today, I am going to jot down a few methods, from the scraper side.
The websites these days will do show the information in mainly two ways.
1. The servers sending the whole HTML (and CSS and JS) to the client side (the browser) or
2. The servers will expose REST APIs and the client "app" will interact with the server over the APIs.

Sometimes, there can be a mixed of both methods too. And this is very generalized take but gives us some ideas on where to start for both.
How would you know which site is doing which ? The easiest way probably would be by inspecting the Chrome/Firefox Dev tools.


![Scraping](/scraping_dev_tools_1.png)

An example of a HTML rendered page.

For scraping these type of sites, you can use something like [BeautifulSoup](https://realpython.com/beautiful-soup-web-scraper-python/) to extract the information out of the HTML pages.
There are also [other libraries/approaches](https://oxylabs.io/blog/python-web-scraping) as well.

The tricky part comes when you


![Scraping](/scraping_dev_tools_2.png)

An example of the site making API calls to render the page.
