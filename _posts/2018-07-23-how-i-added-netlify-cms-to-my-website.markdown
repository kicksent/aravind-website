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
{% include figure class="centered" url="netlify-cms.jpg" image_path="netlify-cms-640.jpg" alt="Netlify CMS Interface" caption="Rocking the Netlify CMS interface on my Website!" %}

> Netlify CMS is an open-source React app that acts as a wrapper for the Git workflow

## Basic configuration

```shell
admin
├─ index.html    # Index file that hosts the Netlify CMS React application
└─ config.yml    # Configuration file which specifies Git and Jekyll parameters
```

## Github as an authentication provider

Create a new OAuth app on GitHub and then register it on Netlify

## Add Github backend config

```yaml
backend:
  name: github
  repo: owner-name/repo-name     # Path to your Github repository
```

## Configure your collections

```yaml
- label: "Blog"
  name: "blog"
  folder: "_posts/blog"
  create: true
  fields:
    - {label: "Title", name: "title", widget: "string"}
    - {label: "Publish Date", name: "date", widget: "datetime"}
    - {label: "Featured Image", name: "thumbnail", widget: "image"}
    - {label: "Body", name: "body", widget: "markdown"}
```

## Add nested fields

Specify the container field as `widget: "object"`, and then define the inner fields.

And voila!

{% include figure class="centered" url="netlify-cms.jpg" image_path="netlify-cms-640.jpg" alt="Netlify CMS Interface" caption="It works!" %}

So that's how I added Netlify CMS to my website. Hopefully this should inspire me to post more often, rather than goad me to do more development!

**Feedback**: Did you enjoy reading or think it can be improved? Don't forget to leave your thoughts in the comments section below! If you liked this article, please share it with your friends, and read a few more! 
{: .notice--success}
