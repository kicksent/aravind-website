---
title: How I added Netlify CMS to my Website
author: Aravind Iyer
date: '2018-07-23T19:00:33+05:30'
categories: tech
header:
  teaser: /assets/images/netlify-cms-640.jpg
excerpt: >-
  I have been using Atom to edit markdown files to write new posts. But often, I
  have felt like using a simpler and less hard core editor. Netlify CMS is an
  open-source React app that wraps your Git workflow and provides a nice
  in-browser editing environment. Read about how I added it to my static website
  made with Jekyll.
description: >-
  I have been using Atom to edit markdown files to write new posts. But often, I
  have felt like using a simpler and less hard core editor. Netlify CMS is an
  open-source React app that wraps your Git workflow and provides a nice
  in-browser editing environment. Read about how I added it to my static website
  made with Jekyll.
og_image: /assets/images/netlify-cms-640.jpg
---
{% include figure class="centered" url="netlify-cms.jpg" image_path="netlify-cms-640.jpg" alt="Netlify CMS Interface" caption="Rocking the Netlify CMS interface on my Website!" %}

I [built this website]({{ site.baseurl }}{% post_url 2018-04-16-how-i-made-my-website-with-jekyll %}) using [Jekyll](https://jekyllrb.com/). Whenever I needed to write a new post, I would fire up my editor (these days, I am using [Atom](https://atom.io/)), and start editing a new [Markdown](https://daringfireball.net/projects/markdown/) document. I would save it as a [public draft]({{ site.baseurl }}{% post_url 2018-04-13-jekyll-drafts-shareable-links %}) which I can review from anywhere via a browser, and then publish it when I felt it was good to go. This has worked reasonably well, except that from time to time I have felt the need for an editing environment which was less hard core!

Of course, I could just blog at [Medium](https://medium.com/@.aravindiyer) or use [WordPress](https://wordpress.org/), or use a [headless CMS](https://en.wikipedia.org/wiki/Headless_CMS) like [Contentful](https://www.contentful.com). Or I could add an in-browser CMS wrapper on top of my code and content repository, like [Netlify CMS](https://www.netlifycms.org/). According to Netlify:

> Netlify CMS is an open-source [React](https://reactjs.org/) app that acts as a wrapper for the [Git](https://git-scm.com/) workflow

So basically, Netlify CMS wraps your Git workflow and provides a nice in-browser editing environment. This sounded like just the thing that would work for me. So I decided to give it a go, following the excellent documentation on how to add Netlify CMS to an [existing site](https://www.netlifycms.org/docs/add-to-your-site/).

## Basic configuration

For a Jekyll site, Netlify CMS requires a folder named `admin` at the root of the site with the following files.

```shell
aravind-website
└─ admin
    ├─ index.html    # To host the Netlify CMS React application
    └─ config.yml    # To specify Git and Jekyll parameters
```

The `index.html` in the `admin` folder runs the Netlify CMS application, when a user loads the site URL appended with `/admin/` (e.g., my CMS application is located at `https://www.aravindiyer.com/admin/`). I just used the sample `index.html` provided by Netlify which loads the necessary CSS and JavaScript to run Netlify CMS from a CDN.

## Add GitHub as a backend

For the configuration file `config.yml`, there are a number of settings to be entered. Since my code and content repository is hosted on [Github](https://github.com/), I wanted to set up GitHub as the backend. I just added the following lines to `config.yml`.

```yaml
backend:
  name: github
  repo: <owner-name>/<repo-name>    # Path to your Github repository
```

This instructs the Netlify CMS application to look for your repository at Github to use as the backend for the CMS, and allows CMS users to use their GitHub credentials to log in to Netlify CMS. To enable GitHub login and access to your repository, you need to setup GitHub as an [authentication provider](https://www.netlify.com/docs/authentication-providers/#using-an-authentication-provider) for Netlify. This involves registering a [new OAuth application](https://github.com/settings/developers) via GitHub settings and then provisioning the Client ID and Client secret that GitHub generates into your [Netlify Dashboard](https://app.netlify.com/) at `Settings > Access Control > OAuth > Authentication Providers`.

## Configure your Workflow, Media and Collections

With the backend set up, you need to configure your editing workflow, media assets and blog post collections. By default, a new entry created via Netlify CMS gets directly committed into the main branch of your repository. This may not be ideal if you want posts to live in a draft stage and go through some review before publication. But if you use GitHub, then you have the option of turning on an [editorial workflow](https://www.netlifycms.org/docs/configuration-options/#publish-mode) which allows you

* to save/edit drafts (by a new branch and pull request, behind the scenes), and
* to approve/publish them (by merging the pull request and deleting the branch).

To enable the editorial workflow, I added the first line to `config.yml` as shown. The second line configures the path where media files are stored so that Netlify CMS can provide a dialog to pick and insert media into markdown files.

```yaml
publish_mode: editorial_workflow    # Add these lines without any indentation
media_folder: "assets/images"       # Path where media files will be stored
```

To configure my [Blog]({{ site.baseurl }}{% link _pages/blog.markdown %}) collection, I first added the following to `config.yml`

```yaml
collections:
  - name: "blog"      # Used in routes, e.g., /admin/collections/blog
    label: "Blog"     # Used in the UI
    folder: "_posts"  # The path to the folder where the documents are stored
    create: true      # Allow users to create new documents in this collection
    slug: "{% raw %}{{year}}-{{month}}-{{day}}-{{slug}}{% endraw %}" # Filename template, e.g., YYYY-MM-DD-title.md
    extension: "markdown" # Add this is you use a file extension other than .md
```

This instructs Netlify CMS to create/serve files ending in `.markdown` named as specified by the `slug` in the folder `_posts`. I added a similar configuration for my other two collections, _viz.,_ [Music Naka]({{ site.baseurl }}{% link _pages/music-naka.markdown %}) and [Only Human]({{ site.baseurl }}{% link _pages/only-human.markdown %}).

To enable entering front matter information correctly in new blog posts, I added the following lines to `config.yml`. Again, I also added similar lines to configure the front matter fields of my other collections.

```yaml
collections:
  - name: "blog"
...
    fields: # The front matter fields for each document
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Author", name: "author", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Categories", name: "categories", widget: "string"}
      - label: "Header Image" # Use this format to specify fields with nested fields
        name: "header"
        widget: "object" # An "object" widget is a container for widgets for nested fields
        fields:
          - {label: "Teaser Image", name: "teaser", widget: "image"}
          - {label: "Detailed Image", name: "image", widget: "image", required: false}
          - {label: "Alternative Text", name: "alt", widget: "text", required: false}
      - {label: "Excerpt", name: "excerpt", widget: "text"} # Custom excerpt
      - {label: "Description", name: "description", widget: "text"} # Open Graph description
      - {label: "Featured Image", name: "og_image", widget: "image"} # Open Graph image
      - {label: "Body", name: "body", widget: "markdown"} # Mandatory body field for markdown files
```

And voila! I am actually editing this post in Netlify CMS!

{% include figure class="centered" url="netlify-cms-editing.jpg" image_path="netlify-cms-editing-640.jpg" alt="Netlify CMS Interface" caption="Editing this post in Netlify CMS!" %}

So that's how I added Netlify CMS to my website. I hope you found it useful. I also hope this shiny new UI inspires me to post more often, rather than goad me to do more development!

**Feedback**: Did you enjoy reading or think it can be improved? Don't forget to leave your thoughts in the comments section below! If you liked this article, please share it with your friends, and read a few more!
{: .notice--success}
