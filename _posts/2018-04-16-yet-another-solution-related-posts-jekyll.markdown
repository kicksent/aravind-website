---
title: "Yet Another Solution to Related Posts in Jekyll"
author: Aravind Iyer
date: 2018-04-16 10:24:00 +0530
categories: tech
header:
   teaser: "/assets/images/related-posts.jpg"
excerpt: "Jekyll supports related posts, if you enable LSI (Latent Semantic Indexing). It may not be possible to enable it, and if you do, site build times increase significantly and it doesn't work on documents in collections. You could use common tags and/or categories to determine related-ness, or you could simply use recent posts or a random sample of posts from the same category or collection, as related posts. Read how I did it."
description: "Jekyll supports related posts, if you enable LSI (Latent Semantic Indexing). It may not be possible to enable it, and if you do, site build times increase significantly and it doesn't work on documents in collections. You could use common tags and/or categories to determine related-ness, or you could simply use recent posts or a random sample of posts from the same category or collection, as related posts. Read how I did it."
og_image: "/assets/images/related-posts.jpg"
---
{% include figure class="centered" url="related-posts.jpg" image_path="related-posts.jpg" alt="Pages linked by a chain" caption="When are two posts really related?" %}

Wouldn't it be nice for a reader landing up on a post on your website, to be able to graze and read more?

Related posts are posts that you would like to cue up for the reader to read next.

## Jekyll support
Jekyll does support related posts, but [it's complicated](https://jekyllrb.com/docs/variables/#site-variables).

For a page being processed by Jekyll, the variable `site.related_posts` holds up to 10 related posts. But the catch is that you need to turn on [Latent Semantic Indexing (LSI)](http://www.classifier-reborn.com/lsi) either on the command line
```sh
jekyll build --lsi
```
or via the `_config.yml`.
```yml
lsi: true
```
If LSI is not turned on, then `site.related_posts` just contains the ten most recent posts (which may or may not be related to the current post at all).

## Problems
Now, if you are hosting on [Github Pages](https://pages.github.com/), you have a problem. Github Pages does not support LSI, and in fact, overrides any settings in your `_config.yml` to `lsi: false`.

If you are hosting elsewhere, then you may have options, although site build times do [increase significantly](https://mademistakes.com/articles/using-jekyll-2017/) when LSI is enabled.

But there is another catch. If you have organised any content on your website, using the Jekyll [collections](https://jekyllrb.com/docs/collections/) feature, then you are out of luck. On documents in a collection, the variable `site.related_posts` is not defined.

## Solution
Fortunately, there are several solutions available. For example, [one solution](https://alligator.io/jekyll/related-posts-in-jekyll/) uses recent posts in the same category as the current post, while [another solution](https://blog.webjeda.com/jekyll-related-posts/) uses the number of common tags and/or categories between posts to suggest related posts. Both of these can be adapted to work with collections as well.

I adapted the former solution, but instead of recent posts, I use a random sample of posts from the same collection. Here's how it works:

```liquid
{% raw %}{% assign posts = site[page.collection] | sample:4 %}
{% for post in posts %}
  {% include archive-single.html type="grid" %}
{% endfor %}{% endraw %}
```  

The include parameters `archive-single.html` and `type="grid"` are just used to render the post teaser image and excerpt. You can replace that by an equivalent `include` of your own.

But this can result in suggesting the current page itself, as related. To prevent this from happening, you just need to check if a candidate post is the same as the current page or not, before adding it to the list of related posts.

```liquid
{% raw %}{% assign posts = site[page.collection] | sample:5 %}
{% assign relatedCount = 0 %}
{% for post in posts %}
  {% if post.url != page.url %}
    {% include archive-single.html type="grid" %}
    {% assign relatedCount = relatedCount | plus: 1 %}
    {% if relatedCount >= 4 %}
      {% break %}
    {% endif %}
  {% endif %}
{% endfor %}{% endraw %}
```  

By replacing `site[page.collection]` by `site.categories[page.categories[0]]`, this can be adapted to work with categories too.

That concludes how I rolled out yet another solution for related posts in Jekyll.

**Feedback**: Did you enjoy reading or think it can be improved? Don't forget to leave your thoughts in the comments section below! If you liked this article, please share it with your friends, and read a few more! 
{: .notice--success}
