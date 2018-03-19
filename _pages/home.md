---
layout: splash
permalink: /
title: Aravind Iyer
author_profile: false
header:
   overlay_color: "#000"
   overlay_filter: "0.5"
   overlay_image: "/assets/images/self-sketch-splash.jpg"
   cta_label: "About me"
   cta_url: "/about/"
excerpt: "A tech guy writing about music, life and personal stuff."
description: "I am Aravind, a scientist and computer engineer by training, writing about music and life. My writings cover reviews and stories about jazz albums as well as human emotions and ordinary things that make us human."
og_image: "/assets/images/self-sketch-splash.jpg"

feature_music_naka:
  - image_path: /assets/images/music-naka-cover.jpg
    alt: "Collage of cover images of Music Naka posts"
    title: "Music Naka"
    excerpt: 'Music Naka is my collection of posts about music albums, stories about how they were made or how I discovered them. If you like jazz, you may find something you like.'
    url: "/music-naka/"
    btn_label: "Read More"
    btn_class: "btn--primary"

feature_only_human:
  - image_path: /assets/images/only-human-cover.jpg
    alt: "Collage of cover images of Only Human posts"
    title: "Only Human"
    excerpt: 'I am interested in human emotions and the little things that make us human, and I write about these from time to time.'
    url: "/only-human/"
    btn_label: "Read More"
    btn_class: "btn--primary"

feature_blog:
  - image_path: /assets/images/blog-cover.jpg
    alt: "Collage of cover images of blog posts"
    title: "Personal Blog"
    excerpt: 'My blog attempts to cover stuff happening in my life with a touch of humour.'
    url: "/blog/"
    btn_label: "Read More"
    btn_class: "btn--primary"

---

{% include feature_row id="feature_music_naka" type="right" %}

{% include feature_row id="feature_only_human" type="left" %}

{% include feature_row id="feature_blog" type="right" %}
