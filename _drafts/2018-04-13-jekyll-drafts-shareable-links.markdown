---
title: "Jekyll Drafts with Shareable Links"
author: Aravind Iyer
date: 2018-04-13 12:54:00 +0530
categories: tech
header:
   teaser:
excerpt: "Jekyll drafts are good for local previews, but don't work for public sharing. Here is a drafts implementation using the Jekyll collections feature. Define a drafts collection and use front matter defaults to tailor the layout of a draft, and to exclude drafts from sitemaps and indexing. Maintain the same link before and after publishing by using the same permalink format for collections and for posts. Read how I did it."
description: "Jekyll drafts are good for local previews, but don't work for public sharing. Here is a drafts implementation using the Jekyll collections feature. Define a drafts collection and use front matter defaults to tailor the layout of a draft, and to exclude drafts from sitemaps and indexing. Maintain the same link before and after publishing by using the same permalink format for collections and for posts. Read how I did it."
og_image:
---
Jekyll lets you create [drafts](https://jekyllrb.com/docs/drafts/) of your posts. Create a draft post (say, `a-new-draft-post.markdown`), save it to the `_drafts` folder at your site's root, and run `jekyll serve` with the `--drafts` switch. Your draft turns up (on top of your recent posts, or wherever you have set up new posts to appear on your site).

While this method is fine for locally previewing your drafts, what if you wanted to share a link to a friend or a co-worker, to ask for a review of a draft? Well, there are two problems with Jekyll drafts:

1. If you host your Jekyll site on [Github Pages](https://pages.github.com/), then you cannot use the `--drafts` switch. If you host elsewhere, you may be able to use `--drafts` in your build command, or you could pre-build your site with `--drafts` and push it.
2. Also, Jekyll does not provide a page variable to determine if a page is a draft or not. You could add (say) `drafts: true` in the [YAML front matter](http://jekyllrb.com/docs/frontmatter/) of the draft and use that to tailor your layout.

But here's what I did. From a quick Internet search, I found two solutions for public drafts: one, which builds on [Jekyll's tag or category feature](http://hamishwillee.github.io/2014/06/11/public-drafts-in-jekyll/) and two, which build on [Jekyll's collection feature](https://bsn.io/2017/01/public-drafts-with-a-github-pages-blog). I have adapted the latter to meet the following requirements I had:

1. Publish drafts without using the `--drafts` switch.
2. Exclude drafts from `sitemap.xml`, the site search index on my website (the [theme](https://mmistakes.github.io/minimal-mistakes/) I use includes [Lunr](https://lunrjs.com/)), and indexing by robots.
4. Exclude social sharing buttons, comments, related posts and links to next and previous posts from drafts.
5. A link to a draft post must not change after it is published.

Here is how it works. First of all, to enable the `drafts` collection, I added the following to my `_config.yml`:

{% highlight yaml %}
collections:
  drafts: 
    output: true
{% endhighlight %}

Now, if I create posts in the `_drafts` folder at my site's root, they will be published without requiring the `--drafts` switch. Next, I set the following front matter defaults to all posts under the `drafts` collection, as follows:

{% highlight yaml %}
defaults:
  - scope:
      path: ""
      type: drafts
    values:
      comments: false
      share: false
      related: false
      sitemap: false  #To hide from sitemap.xml
      search: false   #To hide from Lunr site search
      noindex: true   #To hide from robots and crawlers
{% endhighlight %}

These defaults turn off commenting, social sharing buttons, related posts, inclusion in `sitemap.xml` and inclusion in the site search index. Next, I used the `page.noindex` variable to add the following custom snippet in the header of each draft post, using the following Jekyll [include](https://jekyllrb.com/docs/includes/):

{% highlight liquid %}
{% raw %}{% if page.noindex == true %}
  <meta name="robots" content="noindex">
{% endif %}{% endraw %}
{% endhighlight %}

Finally, to ensure the link to a post does not change after publication, here is what I did. My posts use the following permalink format:

{% highlight yaml %}
permalink: /:categories/:title/
{% endhighlight %}

I added the same permalink specification to the `drafts` collection as follows:

{% highlight yaml %}
collections:
  drafts: 
    output: true
    permalink: /:categories/:title/
{% endhighlight %}

Now, if I use the same categories in the drafts that I intend to use on publication, the permalink would not change. When I am ready to publish, I simple move the (say) `now-its-ready.markdown` file from `_drafts` to `_posts`. That's it!

Not so fast! What if you have a category based archive page or landing page? Wouldn't the draft post appear on that page? Well, no!

The reason is that files in `_posts` are accessible in `site.posts` and `site.categories`, but files in collections are not. But categories defined in a file, remain accessible as `page.categories` whether the file is in `_posts` or `_drafts`. That's why the link doesn't change on publication, but the file content appears in recent posts or a category index page only when it is `_posts`.

That concludes how I set up Jekyll drafts with shareable links.

**Feedback**: Did you enjoy reading or think it can be improved? Don't forget to leave your thoughts in the comments section below! If you liked this article, please share it with your friends, and read a few more! 
{: .notice--success}
