---
layout: archive
author: Aravind Iyer
permalink: /music-naka/
title: Music Naka
author_profile: true
---

{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% if tag == 'music-naka' %}
    {% assign posts = group_items[forloop.index0] %}
    {% for post in posts %}
      {% include archive-single.html %}
    {% endfor %}
  {% endif %}
{% endfor %}
