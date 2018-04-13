---
title: "Responsive, Cross-platform Playlists in Jekyll"
author: Aravind Iyer
date: 2018-04-13 09:52:00 +0530
categories: tech
header:
   teaser:
excerpt: "I use Soundsgood to create a playlist in Apple Music and then export it to other services like Spotify, YouTune, Deezer and so on. I embed the Soundsgood player on my posts which allows users to select their music service and listen to my playlist. I use a Jekyll include for ease of use. I use a responsive container with a 16:9 size when possible, but with a minimum height of 300px which keeps the Soundsgood player legible on small screens in portrait. Read how I did it."
description: "I use Soundsgood to create a playlist in Apple Music and then export it to other services like Spotify, YouTune, Deezer and so on. I embed the Soundsgood player on my posts which allows users to select their music service and listen to my playlist. I use a Jekyll include for ease of use. I use a responsive container with a 16:9 size when possible, but with a minimum height of 300px which keeps the Soundsgood player legible on small screens in portrait. Read how I did it."
og_image:
---
I wanted to embed playlists in my posts in [Music Naka]({{ site.baseurl }}{% link _pages/music-naka.markdown %}). Now that doesn't sound too difficult, given that services like [YouTube](https://developers.google.com/youtube/player_parameters), [Spotify](https://beta.developer.spotify.com/documentation/widgets/generate/play-button/) or [Apple Music](https://tools.applemusic.com/en-us/details/pl.d82950e8bcf4452fb6b5dbe3a2567744?country=us) provide drop-in code for [iframe embeds](https://www.w3schools.com/tags/tag_iframe.asp). But it was not so straightforward because different people use different music services. So I wanted a solution which worked as follows:

1. Create a playlist in one platform and have it automatically exported to as many other music platforms as possible.
2. Embed a music player which allows the user to select the music platform of their choice to listen to the same playlist.

I found the answer - [Soundsgood](https://soundsgood.co/)! Here is an official post from Soundsgood that explains [how it works](http://blog.soundsgood.co/embed-playlists/).

After you follow their process of making the playlist, you can get their embed code, which looks like this:

{% highlight html %}
<iframe src="https://play.soundsgood.co/embed/5abe3768b78a710611a642ea" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
{% endhighlight %}

It has a generic Soundsgood URL, followed by an alpha-numeric string identifying your playlist. Rather than drop this code in everytime, I wanted a Jekyll-friendly solution which I could use like this:

{% highlight liquid %}
{% raw %}{% include video id="5abe3768b78a710611a642ea" provider="soundsgood" %}{% endraw %}
{% endhighlight %}

The [theme](https://mmistakes.github.io/minimal-mistakes/) I am using has a Jekyll [include](https://jekyllrb.com/docs/includes/) for [responsively embedding](https://www.smashingmagazine.com/2014/02/making-embedded-content-work-in-responsive-design/) videos courtesy of [Embed Responsively](http://embedresponsively.com/). You can check out the full include [here](https://github.com/mmistakes/minimal-mistakes/blob/master/_includes/video). But briefly, it inserts the `video_id` into the appropriate embed code, depending on the `video_provider`. For invoking the Soundsgood embed, I added the following lines:

{% highlight liquid %}
{% raw %}{% elsif video_provider == "soundsgood" %}
  <iframe src="https://play.soundsgood.co/embed/{{ video_id }}?color=52adc8&&hideCurator=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>{% endraw %}
{% endhighlight %}

I set a couple of Soundsgood-specific attributes: the `color` to match the colour scheme used on my website, and the `hideCurator` attribute to prevent my profile picture from appearing. This almost worked - "almost", because on devices with very small width, the buttons on the Soundsgood player got all scrunched up and started overlapping one another.

{% include figure class="centered" url="soundsgood-screenshot.jpeg" image_path="soundsgood-screenshot.jpeg" alt="Soundsgood player with buttons overlapping one another" %}

This was because Embed Responsively's `responsive-video-container` was set to maintain a 16:9 aspect ratio across all screen sizes. I added a `min-height` specification to the CSS like this:

{% highlight css %}
{% raw %}.responsive-video-container {

  min-height: 300px;

}{% endraw %}
{% endhighlight %}

That did the trick!

{% include figure class="centered" url="soundsgood-screenshot-2.jpeg" image_path="soundsgood-screenshot-2.jpeg" alt="Soundsgood player with buttons not overlapping one another" %}

Now I have an embedded playlist which stretches to 16:9 when possible, but always maintains a minimum height on narrow screens, so the buttons don't overlap.

That concludes how I embedded responsive, cross-platform playlists in Music Naka.

**Feedback**: Did you enjoy reading or think it can be improved? Don't forget to leave your thoughts in the comments section below! If you liked this article, please share it with your friends, and read a few more! 
{: .notice--success}
