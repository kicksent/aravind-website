---
layout: archive
permalink: /blog/
title: Blog 
author_profile: false
sidebar:
  - image: "/assets/images/blog-cover.jpg"
description: "I am Aravind, a tech guy, a scientist and computer engineer by training, writing about my life. My blog narrates stories about my ordinary life and the stuff that happens."
og_image: "/assets/images/blog-cover.jpg"
---
Here are some stories about an ordinary life and the stuff that happens. If you like a story or if you have one of your own to share, please [write](mailto:letters@aravindiyer.com) to me.

## Latest Stories

<div class="grid__wrapper">
  {% assign category = 'personal' %}
  {% assign posts = site.categories[category] %}
  {% for post in posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
