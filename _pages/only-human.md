---
layout: archive
permalink: /only-human/
title: Only Human
author_profile: false
---

<div class="grid__wrapper">
{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% if tag == 'only-human' %}
    {% assign posts = group_items[forloop.index0] %}
    {% for post in posts %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  {% endif %}
{% endfor %}
</div>
