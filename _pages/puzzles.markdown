---
layout: archive
permalink: /puzzles/
title: From Math to Code
author_profile: false
description: "I am Aravind, a tech guy, a scientist and computer engineer by training, and like a good math or coding puzzle. From time to time, I get an idea to invent a puzzle which can be solved by using a combination of math and coding."
og_image: "/assets/images/self-sketch-splash.jpg"
---

<div class="grid__wrapper">
  {% assign category = 'puzzles' %}
  {% assign posts = site.categories[category] %}
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
</div>
