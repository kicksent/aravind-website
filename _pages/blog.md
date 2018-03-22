---
layout: archive
permalink: /blog/
title: Blog 
author_profile: false
description: "I am Aravind, a tech guy, a scientist and computer engineer by training, writing about my life. My blog narrates stories about my ordinary life and events that happen, with a touch of humour."
og_image: "/assets/images/blog-cover.jpg"
---
Here are some stories about an ordinary life and events, narrated with a touch of humour. If you like a story or if you have one of your own to share, please [write](mailto:letters@aravindiyer.com) to me.

## Latest Stories
<div class="grid__wrapper">
{% include group-by-array collection=site.posts field="categories" %}

{% for category in group_names %}
  {% if category == 'personal' %}
    {% assign posts = group_items[forloop.index0] %}
    {% for post in posts %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  {% endif %}
{% endfor %}
</div>
