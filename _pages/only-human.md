---
layout: archive
permalink: /only-human/
title: Only Human
author_profile: false
description: "I am Aravind, a scientist and computer engineer, and a human being. I am interested in the things we do, the emotions we feel and the little everyday things that make us human. I write about these from time to time."
og_image: "/assets/images/self-sketch-splash.jpg"
---

<div class="grid__wrapper">
{% include group-by-array collection=site.posts field="categories" %}

{% for category in group_names %}
  {% if category == 'only-human' %}
    {% assign posts = group_items[forloop.index0] %}
    {% for post in posts %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  {% endif %}
{% endfor %}
</div>
