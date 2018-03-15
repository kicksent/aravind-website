---
layout: archive
permalink: /line-art/
title: Line Art
author_profile: false
---

{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% if tag == 'line-art' %}
    {% assign posts = group_items[forloop.index0] %}
    {% for post in posts %}
      {% include archive-single.html %}
    {% endfor %}
  {% endif %}
{% endfor %}

