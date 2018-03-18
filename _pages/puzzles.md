---
layout: archive
permalink: /puzzles/
title: From Math to Code
author_profile: false
description: "I am Aravind, a scientist and computer engineer, and like a good math or coding puzzle. From time to time, I get an idea to invent a puzzle which can be solved by using a combination of math and coding."
og_image: "/assets/images/self-sketch-splash.jpg"
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
