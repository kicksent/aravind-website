---
layout: archive
permalink: /blog/
title: Blog 
author_profile: false
---

{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% if tag == 'personal' %}
    {% assign posts = group_items[forloop.index0] %}
    {% for post in posts %}
      {% include archive-single.html %}
    {% endfor %}
  {% endif %}
{% endfor %}
