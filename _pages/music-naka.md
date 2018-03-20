---
layout: archive
permalink: /music-naka/
title: Music Naka
author_profile: false
description: "I am Aravind, a scientist and computer engineer, and a lover of music, especially jazz. Music Naka is a collection of posts about playlists, music albums, stories about how they were made or how I discovered them."
og_image: "/assets/images/self-sketch-splash.jpg"
---

<div class="grid__wrapper">
{% include group-by-array collection=site.posts field="categories" %}

{% for category in group_names %}
  {% if category == 'music-naka' %}
    {% assign posts = group_items[forloop.index0] %}
    {% for post in posts %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  {% endif %}
{% endfor %}
</div>
