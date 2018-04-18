---
title: "How I made my Website with Jekyll"
author: Aravind Iyer
date: 2018-04-16 14:05:00 +0530
categories: tech
header:
   teaser: "/assets/images/site-on-screens-640.jpg"
excerpt: 
description:
og_image: "/assets/images/site-on-screens-640.jpg" 
---
{% include figure class="centered" url="site-on-screens.jpg" image_path="site-on-screens-640.jpg" alt="Website screenshots on mobile, laptop and tablet" caption="Website screenshots on mobile, laptop and tablet." %}

I love writing. I started writing when I found that I was constantly trying to work out all sorts of things in my head alone, and becoming all tangled up. I wrote at [Medium](https://medium.com/@.aravindiyer) and also on [LinkedIn](https://www.linkedin.com/in/aravindiyer/). While I intend to continue doing so, I felt like I needed my own little corner.

Maybe it was driven by feeling, but the sense of space that the idea of having my own website evoked, had me convinced. I was going to make my own website!

## Platform
I thought [WordPress](https://wordpress.org/) should be my tool of choice because *everybody* talks about it, and 30% of the web uses it! So I started looking around for WordPress themes and for hosting. Then my brother told me about [Jekyll](https://jekyllrb.com/) and how if you create your Jekyll repository on [Github](https://github.com/), you could host your website for free on [Github Pages](https://pages.github.com/). I looked at a few Jekyll themes and I came across [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) which appealed to me with its clean and understated look. I thought, 'ok, let's go!'

At this point, I need to say that Jekyll isn't for everyone. If you have zero or limited development experience, then using Jekyll would present quite a steep learning curve. There are ways in which you can reduce your need to use programming tools - for example, here's how you can [add/edit posts](http://romain.pechayre.me/blog/2014/07/31/jekyll-is-not-only-for-developers/) just using Github's web interface and buttons. Plus, there are tools like [Prose](http://prose.io/#about) (and [others](https://github.com/planetjekyll/awesome-jekyll-editors)) which provide an in-browser editing environment for Jekyll. But, you may find [WordPress](https://wordpress.com/) or [Medium](https://medium.com/) easier.

## Getting Started
Jekyll is pretty easy to [install](https://jekyllrb.com/docs/installation/), if you already have a development setup. Jekyll needs [Ruby](https://www.ruby-lang.org/en/downloads/) and [RubyGems](https://rubygems.org/pages/download). On my Mac, these were already available. You can check on your terminal like this:

```shell
$ ruby -v
ruby 2.3.3p222 (2016-11-21 revision 56859) [universal.x86_64-darwin17]
$ gem -v
2.7.6
```

But I went ahead and installed [rbenv](https://github.com/rbenv/rbenv) and then Jekyll. Rbenv allows management of multiple Ruby versions. This can help with faster builds or ensuring nothing breaks, when you build your site on [Github Pages](https://pages.github.com/versions/) or [Netlify](https://www.netlify.com/docs/#ruby), which may use other versions of Ruby. Since I already had [Homebrew](https://brew.sh/) installed, this was easy enough:

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
With that done, you can create a new Jekyll website using `jekyll new my-website`. For adding the Minimal Mistakes theme, here is a [Quick-Start Guide](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/). But after playing around a bit, this is what I finally did:

```shell
$ mkdir aravind-website
$ cd aravind-website
# Initialise a Gemfile
$ bundle init
# Add Jekyll
$ bundle add jekyll
# Add Minimal Mistakes theme
$ bundle add minimal-mistakes-jekyll
# Install gems and dependencies
$ bundle install
```

This created a `Gemfile` for my project and I had an empty project with everything installed. As per the [directory structure](https://jekyllrb.com/docs/structure/) specified by Jekyll, and the [navigation documentation](https://mmistakes.github.io/minimal-mistakes/docs/navigation/) specified by Minimal Mistakes, I created the following:

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
│   └── home.markdown       # Site homepage
├── _posts                  # All the posts go here!
└── assets                  
    ├── icons               # Site icons/logos/etc
    └── images              # Pictures/illustrations used for posts and pages
```

## Connecting to Github
I am not such a disciplined user of [git](https://git-scm.com/). So I played around a bit on my Mac, before it dawned on me that I need to use git. And so I did. If you are hosting on Github Pages, then you need to create a repository on Github with the name `username.github.io`. Otherwise, it can be anything. In my case, it was `aravind-website`. Then, you can do the following:

```shell
$ cd aravind-website
# Initialise git and add all (or relevant) files
$ git init
$ git add --all
# Commit and add a description 
$ git commit -m "First commit" # Or any other message you like!
# Connect your Github repository at USERNAME/REPONAME and push your files
$ git remote add origin https://github.com/iyeraravind/aravind-website
$ git push -u origin master
```

If you created your repository on Github before actually doing any work on your computer, congratulations! Just do the following instead:

```shell
$ git clone https://github.com/USERNAME/REPONAME
$ cd REPONAME
# Start working now!
# Use git add and git commit to save your work.
# Use git push to synchronise with Github.
```

It's a good idea to create a `.gitignore` file to exclude unnecessary files from version control. Here is a [good example](https://gist.github.com/bradonomics/cf5984b6799da7fdfafd).

## Site design and content
Phew! With all the admin stuff out of the way, I was ready to think about my website organisation. I divided my writings into three categories: [Music Naka]({{ site.baseurl }}{% link _pages/music-naka.markdown %}), [Only Human]({{ site.baseurl }}{% link _pages/only-human.markdown %}) and [Blog]({{ site.baseurl }}{% link _pages/blog.markdown %}), with a landing page for each. I featured the three categories on my home page, and added links to them, an [about]({{ site.baseurl }}{% link _pages/about.markdown %}) page and a [terms of use]({{ site.baseurl }}{% link _pages/terms.markdown %}) page to the top. Since I wanted the next and previous links at the bottom of each post to stay within the category, I used the Jekyll [collections](https://jekyllrb.com/docs/collections/) feature for Music Naka and Only Human. This meant creating folders `_music-naka` and `_only-human` and adding the following to `_config.yml`:

```yaml
collections:
  music-naka:
    output: true
    permalink: /:categories/:title/
  only-human:
    output: true
    permalink: /:categories/:title/
```
The rest of the posts categorised under Blog, went into `_posts`. This is what I ended up with:

```shell
aravind-website
├── _music-naka               # All music-naka articles go here
├── _only-human               # All only-human articles go here
├── _pages                    # Pages controlling site structure/navigation
│   ├── 404.markdown          # Custom 404 page
│   ├── about.markdown        # About page
│   ├── blog.markdown         # Landing page for blog posts
│   ├── home.markdown         # Site homepage
│   ├── music-naka.markdown   # Landing page for music-naka collection
│   ├── only-human.markdown   # Landing page for only-human collection
│   └── terms.markdown        # Terms of use page
└── _posts                    # All blog posts go here
```

Then I started pulling my content from Medium and LinkedIn. An easy way is to use [Paste to Markdown](https://euangoddard.github.io/clipboard2markdown/) and then edit further.

## Customisation
It is possible that a Jekyll theme is not able to provide *everything* you need, in *exactly* the way you want. After all, the interest of the theme maker is generality, while your use-cases might be quite specialised.

Jekyll themes provide a bunch of useful [layouts and includes](https://jekyllrb.com/docs/themes/#layouts-and-includes). For customising page layouts or for defining your own includes, the best way is to use folders named `_includes` and `_layouts` in your site repository. If you have include or layout files with the same filename as that used in the theme, then Jekyll will use the versions in your own `_includes` and `_layouts` folders instead of the theme assets. For example:

```shell
aravind-website
├── _includes
│   ├── flexgallery      # Equal height grid of images with different aspect ratios 
│   ├── head
│   │   └── custom.html  # Customised to add favicons and no-index tags
│   ├── masthead.html    # Customised to add site logo
│   ├── related.html     # Customised to suggest a sample of posts from same collection
│   └── video            # Added support for Soundsgood playlist embedding
└── _layouts
    └── draft.html       # Layout for draft posts
```

If it interests you, you can read about how I set up [equal height image grids]({{ site.baseurl }}{% post_url 2018-04-13-equal-height-image-gallery %}), [playlist embedding]({{ site.baseurl }}{% post_url 2018-04-13-responsive-cross-platform-playlist %}), [public drafts]({{ site.baseurl }}{% post_url 2018-04-13-jekyll-drafts-shareable-links %}) and [related posts]({{ site.baseurl }}{% post_url 2018-04-16-yet-another-solution-related-posts-jekyll %}).

For customising CSS and fonts, I created a main CSS file `main.scss`, added my font settings in `fontconfig.scss` and my CSS customisations in `custom.scss`, at the following paths:

```shell
aravind-website
├── _sass
│   ├── custom.scss
│   └── fontconfig.scss
└── assets
    └── css
        └── main.scss
```

Then I added the following lines to `main.scss`:

```scss
@import "fontconfig";
@import "minimal-mistakes/skins/{% raw %}{{ site.minimal_mistakes_skin | default: 'default' }}{% endraw %}"; 
@import "minimal-mistakes"; 
@import "custom";
```

This ensures that your intended font definitions are inherited by Minimal Mistakes, and then your custom CSS overrides the definitions in the theme.

## Miscellaneous
Additionally, I completed the following:
1. Site verification with [Bing](https://www.bing.com/webmaster/help/how-to-verify-ownership-of-your-site-afcfefc6) and [Google](https://support.google.com/analytics/answer/1142414?hl=en).
2. Setting up [Google Analytics](https://analytics.google.com/)
3. Creating site logo and [favicons](https://realfavicongenerator.net/)
4. Adding Open graph image and excerpt for every page and post. Check if your site and its pages preview correctly on [Twitter](https://cards-dev.twitter.com/validator) and [Facebook](https://developers.facebook.com/tools/debug/sharing/).
5. Adding site search using [Algolia](https://www.algolia.com/). Get a free [community plan](https://www.algolia.com/users/sign_up/hacker) with Algolia.
6. Configuring hosting on [Netlify](https://www.netlify.com/). Read how to deploy from a [Github repository](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) and how to deploy [Algolia on Netlify](https://community.algolia.com/jekyll-algolia/netlify.html).
7. Configuring comment hosting using [Disqus](https://disqus.com/) and playlist embedding using [Soundsgood](https://soundsgood.co/).

So there you have it. A number of different steps to complete, but now I have my little corner. It's nice seeing you here. Let me know what you think!

**Feedback**: Did you enjoy reading or think it can be improved? Don't forget to leave your thoughts in the comments section below! If you liked this article, please share it with your friends, and read a few more! 
{: .notice--success}
