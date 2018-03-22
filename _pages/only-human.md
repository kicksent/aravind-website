---
layout: archive
permalink: /only-human/
title: Only Human
author_profile: false
description: "We walk, and not just to get around. We feel lonely, and we still want to be left alone. We know we are all different, but we can't help envying others. We say we don't care, but uncaring remarks sting us for long. We love to work, and yet we need our rest. We are moved by music and visual arts and photographs and words, and not just for their literal or sensory content, but for the symbols within and the emotions they provoke. We are rational, silly, ambitious, lazy, logical, absurd, reasonable, stubborn, grown-up and childish, all at once. We are only human!"
og_image: "/assets/images/self-sketch-splash.jpg"
---
We walk, and not just to get around. We feel lonely, and we still want to be left alone. We know we are all different, but we can't help envying others. We say we don't care, but uncaring remarks sting us for long. We love to work, and yet we need our rest. We are moved by music and visual arts and photographs and words, and not just for their literal or sensory content, but for the symbols within and the emotions they provoke. We are rational, silly, ambitious, lazy, logical, absurd, reasonable, stubborn, grown-up and childish, all at once. We are only human! If you like a story or if you have one of your own to share, please [write](mailto:letters@aravindiyer.com) to me.

## Latest Stories

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
