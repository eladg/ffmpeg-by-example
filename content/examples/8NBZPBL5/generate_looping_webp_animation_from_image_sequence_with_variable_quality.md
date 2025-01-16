---
id: 8NBZPBL5
version: '1.0'
enabled: true
date: '2025-01-15T03:13:02.824Z'
author: stevan
title: Generate looping WebP animation from image sequence with variable quality
description: >-
  For WebP specific options and more information, see [the relevant WebP
  documentation in the ffmpeg-codecs
  page](https://ffmpeg.org/ffmpeg-codecs.html#libwebp).


  ---


  * `-i /path/to/sequence/%d.png` - path to image sequence where each image is
  name `1.png` to `n.png`. Note there are no leading zeros in file names. For
  `0`-padded file names, the pattern is `%0nd` where `n` is the number of
  digits.


  * `-vcodec libwebp` - set the video codec to generate WebP images


  * `-pix_fmt yuv420p` - set the pixel format (color space). YUV420 is the only
  supported one for lossy and RGB is the only supported one for lossless.


  * `-loop 0` - loop the animated WebP


  * `-s 720:720` - resize the output


  * `-quality 50` - set the quality value. `75` is the default and lower values
  will yield lower quality but smaller files. It may make more sense to use the
  `preset` flag instead for some use cases. See the `ffmpeg-codec` page for more
  information, listed at the top of this document.
categories:
  - images
tags:
  - webp
  - loop
thumbnail_url: null
terminal_command: >-
  ffmpeg -i /path/to/sequence/%d.png -vcodec libwebp -pix_fmt yuv420p -loop 0 -s
  720:720 -quality 50 output.webp
example_type: picture
example_player_data:
  - https://ffmpeg-by-example.s3.us-east-1.amazonaws.com/8NBZPBL5.webp
filename: >-
  8NBZPBL5/generate_looping_webp_animation_from_image_sequence_with_variable_quality.md
views: 0
likes: 0

---
