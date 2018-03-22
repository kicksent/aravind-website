---
layout: archive 
permalink: /music-naka/
title: Music Naka
author_profile: false
description: "Music makes its best impression when it is shared by a friend over a story. Music is a medium for communicating and stimulating emotions, for conveying the mood, feelings, state of mind and even the sense of identity of the artist, and of the audience too. The stories on this page aim to help you know more about this context behind the music, so that you can connect more deeply with it. It's good seeing you at Music Naka! If you like a story or if you have one to share, please write to me."
toc: true
og_image: "/assets/images/music-naka-cover.jpg"
---
Music makes its best impression when it is shared by a friend over a story. Music is a medium for communicating and stimulating emotions, for conveying the mood, feelings, state of mind and even the sense of identity of the artist, and of the audience too. The stories on this page aim to help you know more about this context behind the music, so that you can connect more deeply with it. It's good seeing you at Music Naka! If you like a story or if you have one to share, please [write](mailto:letters@aravindiyer.com) to me. If it interests you, [read more]({{ site.baseurl }}{% link _pages/music-naka-background.md %}) about the story behind Music Naka.

## Latest stories

<div class="grid__wrapper">
{% include group-by-array collection=site.posts field="categories" %}

{% for category in group_names %}
  {% if category == 'music-naka' %}
    {% assign posts = group_items[forloop.index0] %}
    {% for post in posts %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  {% endif %}
{% endfor %}
</div>
