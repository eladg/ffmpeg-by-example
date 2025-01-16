---
id: LNIGITJG
version: '1.0'
enabled: true
date: '2025-01-15T03:24:31.790Z'
author: stevan
title: Slow animated WebP image sequence (carousel)
description: >-
  This example shows how to take a couple of images and turn them into a slowly
  changing animated WebP. This is useful for a "digital pictureframe" style
  image.


  What I find interesting FFmpeg for this example is the usage of two framrate
  (`-r`) flags. If the first flag is omitted, some images in the sequence will
  be skipped. And the second flag determines the speed the images are cycled.


  ---


  For WebP specific options and more information, see [the relevant WebP
  documentation in the ffmpeg-codecs
  page](https://ffmpeg.org/ffmpeg-codecs.html#libwebp).


  ---

  * `-r 1` - interpret input image sequence framerate as 1 FPS. This must be
  equal or lower than the second `-r` value.


  * `-i /path/to/sequence/%d.png` - path to image sequence where each image is
  name `1.png` to `n.png`. Note there are no leading zeros in file names.


  * `-vcodec libwebp` - set the video codec to generate WebP images


  * `-pix_fmt yuv420p` - set the pixel format (color space). YUV420 is the only
  supported one for lossy and RGB is the only supported one for lossless.


  * `-loop 0` - loop the animated WebP


  * `-r 1` - set output framerate to 1 FPS (i.e. change the image once per
  second)
categories:
  - images
tags:
  - webp
  - loop
  - animated
thumbnail_url: null
terminal_command: >-
  ffmpeg -r 1 -i /path/to/sequence/%d.png -vcodec libwebp -pix_fmt yuv420p -loop
  0 -r 1 output.webp
example_type: no-preview
example_player_data:
  - https://ffmpeg-by-example.s3.us-east-1.amazonaws.com/LNIGITJG.webp
filename: LNIGITJG/slow_animated_webp_image_sequence_carousel.md
views: 0
likes: 0

---
