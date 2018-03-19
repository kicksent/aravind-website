---
layout: archive
permalink: /blog/
title: Blog 
author_profile: false
description: "I am Aravind, a scientist and computer engineer, writing about my life. My blog attempts to cover stuff happening in my life with a touch of humour."
og_image: "/assets/images/self-sketch-splash.jpg"
---

<div class="grid__wrapper">
{% include group-by-array collection=site.posts field="categories" %}

{% for category in group_names %}
  {% if category == 'personal' %}
    {% assign posts = group_items[forloop.index0] %}
    {% for post in posts %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  {% endif %}
{% endfor %}
</div>
