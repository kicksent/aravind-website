---
title: "How I made my Website with Jekyll"
author: Aravind Iyer
date: 2018-04-16 14:05:00 +0530
categories: tech
header:
   teaser: 
excerpt: 
description:
og_image: 
---
I love writing. I started writing when I found that I was constantly trying to work out all sorts of things in my head alone, and becoming all tangled up. I wrote at [Medium](https://medium.com/@.aravindiyer) and also on [LinkedIn](https://www.linkedin.com/in/aravindiyer/). But while I intend to continue doing so, I felt like I needed my own little corner.

It was driven by feeling, but the sense of space that the idea of having my own website evoked, had me convinced. I was going to make my own website!

## Platform
I just thought [WordPress](https://wordpress.org/) should be the tool of choice because *everybody* talks about it, and 30% of the web uses it! So I started looking around for WordPress themes and for hosting. Then my brother told me about [Jekyll](https://jekyllrb.com/) and how if you create your Jekyll repository on [Github](https://github.com/), you could host your website for free on [Github Pages](https://pages.github.com/). I looked at a few Jekyll themes and I came across [Minimal Mistakes]((https://mmistakes.github.io/minimal-mistakes/)) which appealed to me with its clean and understated look. I thought, 'ok, let's go!'

At this point, you may ask: can *anyone* use Jekyll, especially with zero or limited development experience? Well, it would be difficult, although Jekyll [isn't only for developers](http://romain.pechayre.me/blog/2014/07/31/jekyll-is-not-only-for-developers/). Plus there are tools like [Prose](http://prose.io/#about) (and [others](https://github.com/planetjekyll/awesome-jekyll-editors)) which provide an in-browser editing environment for Jekyll. So, go on, give it a go!

## Getting Started
Jekyll is pretty easy to [install](https://jekyllrb.com/docs/installation/), if you already have a development setup. Jekyll needs [Ruby](https://www.ruby-lang.org/en/downloads/) and [RubyGems](https://rubygems.org/pages/download). On my Mac, these were already available:

```shell
$ ruby -v
ruby 2.3.3p222 (2016-11-21 revision 56859) [universal.x86_64-darwin17]
$ gem -v
2.7.6
```

But I went ahead and installed [rbenv](https://github.com/rbenv/rbenv) and then Jekyll. Rbenv allows management of multiple Ruby versions, so you can ensure faster builds or that nothing breaks, when you build your site on [Github Pages](https://pages.github.com/versions/) or [Netlify](https://www.netlify.com/docs/#ruby). Since I already had [Homebrew](https://brew.sh/), this was easy enough:

```shell
# Install rbenv and setup shell integration
$ brew install rbenv
$ rbenv init
# Install a specific Ruby version, say 2.4.3
$ rbenv install 2.4.3
# Install Jekyll
$ gem install bundler jekyll
```

## Project Organisation
Now, you can create a new Jekyll website using `jekyll new my-website`. For adding the Minimal Mistakes theme, here is a [Quick-Start Guide](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/). But after playing around a bit, this is what I finally did:

```shell
$ mkdir aravind-website
$ cd aravind-website
$ # Initialise a Gemfile
$ bundle init
$ # Add Jekyll
$ bundle add jekyll
$ # Add Minimal Mistakes theme
$ bundle add minimal-mistakes-jekyll
$ # Install gems and dependencies
$ bundle install
```

This created a `Gemfile` for my project and I had an empty project with everything installed. Following the [directory structure](https://jekyllrb.com/docs/structure/) specified by Jekyll and the [navigation documentation](https://mmistakes.github.io/minimal-mistakes/docs/navigation/) specified by Minimal Mistakes, I created the following:

```shell
aravind-website
├── Gemfile                 # Gem requirements
├── README.markdown         # Basic description of my project for Github
├── _config.yml             # Jekyll site configuration
├── _data                   # Theme customisation
│   └── navigation.yml      # Links on Top Navigation Bar
├── _pages                  # Pages controlling site structure and navigation
│   ├── 404.markdown        # Custom 404 page
│   ├── about.markdown      # Basic about page
│   ├── home.markdown       # Site homepage
├── _posts                  # All the posts go here!
├── assets                  
│   ├── icons               # Site icons/logos/etc
│   └── images              # Pictures/illustrations used for posts and pages
```

## Site design and content
Three sections with land pages; home page links to them and nav bar also links to them; filled about page, terms of use page.

Pulled content from Medium and LinkedIn

Use copy-to-markdown and then edit further

Music Naka and Only Human as collections; rest as posts

## Customisation
For customising the theme, the best way is to create `_includes` and `_layouts` which contain files which override the default files of the theme. For instance, I edited `masthead.html` to insert the site logo.

Link to flexgallery, video, related posts.

For customising CSS and fonts, I did the following: `assets/css/main.scss` exports `fontconfig.scss`, then minimal mistakes, then `custom.scss`.

For drafts, I used Jekyll collection - link.

## Analytics and SEO
Bing and Google site verification.

Google Analytics setup

Favicon

Open graph images and descriptions for each post/page; alts for each image

## Miscellaneous
Site search using Algolia

Hosting using Netlify

Comments using Disqus

Playlists from Soundsgood
