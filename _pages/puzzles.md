---
layout: archive
author: Aravind Iyer
permalink: /puzzles/
title: From Math to Code
author_profile: true
---

{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% if tag == 'puzzles' %}
    {% assign posts = group_items[forloop.index0] %}
    {% for post in posts %}
      {% include archive-single.html %}
    {% endfor %}
  {% endif %}
{% endfor %}
