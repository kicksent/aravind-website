---
title: How I added Netlify CMS to my Website
author: Aravind Iyer
date: '2018-07-23T19:00:33+05:30'
categories: tech
header:
  teaser: /assets/images/netlify-cms-640.jpg
excerpt: >-
  Netlify CMS is an open-source React app that acts as a wrapper for the Git
  workflow. Read how I added it to my static website made with Jekyll.
description: >-
  Netlify CMS is an open-source React app that acts as a wrapper for the Git
  workflow. Read how I added it to my static website made with Jekyll.
og_image: /assets/images/netlify-cms-640.jpg
---
![Netlify CMS Interface](/assets/images/netlify-cms.jpg)

> Netlify CMS is an open-source React app that acts as a wrapper for the Git workflow

## Basic configuration

```
admin|- index.html - config.yml
```

## Github as an authentication provider

Create a new OAuth app on GitHub and then register it on Netlify

## Add Github backend config

```
backend:  name: github  repo: owner-name/repo-name # Path to your Github repository
```

## Configure your collections

```
- label: "Blog"  name: "blog"  folder: "_posts/blog"  create: true  fields:    - {label: "Title", name: "title", widget: "string"}    - {label: "Publish Date", name: "date", widget: "datetime"}    - {label: "Featured Image", name: "thumbnail", widget: "image"}    - {label: "Body", name: "body", widget: "markdown"}
```

## Add nested fields



And voila!

![Netlify CMS Interface](/assets/images/netlify-cms.jpg)



So that's how I added Netlify CMS to my website. Hopefully this should inspire me to post more often, rather than goad me to do more development!

Feedback-notice.
