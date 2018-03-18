---
layout: archive
permalink: /music-naka/
title: Music Naka
author_profile: false
description: "I am Aravind, a scientist and computer engineer, and a lover of music, especially jazz. Music Naka is my collection of posts about music albums, stories about how they were made or how I discovered them. If you like jazz, you may find something you like."
og_image: "/assets/images/self-sketch-splash.jpg"
---

<div class="grid__wrapper">
{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% if tag == 'music-naka' %}
    {% assign posts = group_items[forloop.index0] %}
    {% for post in posts %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  {% endif %}
{% endfor %}
</div>
