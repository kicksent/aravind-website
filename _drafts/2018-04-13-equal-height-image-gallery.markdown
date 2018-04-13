---
title: "An Equal Height Image Gallery for Jekyll"
author: Aravind Iyer
date: 2018-04-13 17:23:00 +0530
categories: tech
header:
   teaser:
excerpt: 
description: 
og_image:
---
If you are building an image-rich webpage using Jekyll, you would know that images and Jekyll don't exactly have a happy relationship. There is the [Kramdown](https://kramdown.gettalong.org/index.html) based [method](https://kramdown.gettalong.org/syntax.html#images) where you include an image like this:

{% highlight md %}
![Alt Text](/assets/images/file.jpg){: .css-class}
{% endhighlight %}

This is quick to use to include a single image, but restrictive since it doesn't support captions, hyperlinking or multiple images. Or you could use [Liquid](https://shopify.github.io/liquid/) to create a [Jekyll include](https://jekyllrb.com/docs/includes/). For example, you include an image like this:

{% highlight liquid %}
{% raw %}{% include image class="css-class" path="/assets/images/file_thumb.jpg" url="/assets/images/file_detailed.jpg" alt="Alt Text" caption="Caption Text" %}{% endraw %}
{% endhighlight %}

Then you need to provide a file called `image` in the `_includes` folder of your site's root where you provide the logic to parse the include parameters and spit out html code. For example, it could look like this:

{% highlight liquid %}
{% raw %}<figure class="{{ include.class | default: "" }}">
   <a href="{{ include.url }}">
      <img src="{{ include.path }}" alt="{{ include.alt | default: "" }}">
   </a>
   {% if include.caption %}<figcaption>{{ include.caption }}</figcaption>{% endif %}
</figure>{% endraw %}
{% endhighlight %}

But this is still just one image. Thankfully, the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme I am using, came with a `gallery` include, which works as [explained here](https://mmistakes.github.io/minimal-mistakes/docs/helpers/#gallery). You can check out the source code [here](https://github.com/mmistakes/minimal-mistakes/blob/master/_includes/gallery). Using `gallery` you can create nice looking [image grids]({{ site.baseurl }}{% post_url 2016-12-01-lego-assembly-happy-5th %}) that look like this.

![A 3x3 image grid using gallery](/assets/images/gallery-image-grid.jpeg){: .align-center}

This works really well, provided you are only using images that are all of the same aspect ratio. The `gallery` include works by basically setting the image width to 33% (minus some padding), so you get three images in each row. But when the images are not of the same aspect ratio, then the images end up not being of *equal height*. This looks really weird!

![3x3 image grid fails for images with unequal aspect ratios](/assets/images/gallery-grid-fail.jpeg){: .align-center}

It proved a bit hard to find a solution. But with the right search keywords, I came across [this solution](https://kartikprabhu.com/articles/equal-height-images-flexbox) which uses the [Flexbox layout style](https://www.w3schools.com/css/css3_flexbox.asp). Using the same idea, I wrote a `flexgallery` include which I could use to height-align the above grid. You can check the source code [here](https://github.com/iyeraravind/aravind-website/blob/master/_includes/flexgallery). But here is a prototype version of `flexgallery`: 

{% highlight html %}
{% raw %}<figure>
  <div style="display:flex">
  {% for img in flexgallery %}
    <div style="flex:{{ img.aspect }}">
      <a href="{{ img.url }}">
        <img src="{{ img.path }}" alt="{{ img.alt }}">
      </a>
    </div>
  {% endfor %}
  </div>
  <figcaption>{{ include.caption }}</figcaption>
</figure>{% endraw %}
{% endhighlight %}

The `display:flex` in the container `div` gets the images to sit side-by-side. The `flex:img.aspect` in the inner `div`'s restricts their aspect ratios to tightly wrap the images while maintaining the same height. And this was [the result]({{ site.baseurl }}{% post_url 2017-12-15-reluctant-photographer %}) on using it!

![A 3x3 image grid using flexgallery. It works for images with unequal aspect ratios](/assets/images/gallery-grid-pass.jpeg){: .align-center}

That concludes how I got images to work in Jekyll, starting from inline images, hyperlinked images with captions, to symmetric image grids and finally equal height grids for images with unequal aspect ratios!

**Feedback**: Did you enjoy reading or think it can be improved? Don't forget to leave your thoughts in the comments section below! If you liked this article, please share it with your friends, and read a few more! 
{: .notice--success}
