---
layout: archive
permalink: /line-art/
title: Line Art
author_profile: false
description: "I am Aravind, a scientist and computer engineer, dabbling with line art. My posts on line art present my drawings, techniques and motivations behind the work."
og_image: "/assets/images/self-sketch-splash.jpg"
---

<div class="grid__wrapper">
{% include group-by-array collection=site.posts field="categories" %}

{% for category in group_names %}
  {% if category == 'line-art' %}
    {% assign posts = group_items[forloop.index0] %}
    {% for post in posts %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  {% endif %}
{% endfor %}
</div>
