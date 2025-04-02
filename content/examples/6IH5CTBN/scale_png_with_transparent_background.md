---
id: 6IH5CTBN
version: '1.0'
enabled: true
date: '2025-04-02T18:51:44.183Z'
author: Elad Gariany <elad@gariany.com>
title: Scale PNG with Transparent background
description: >-
  The following command resizes an image (original.png) while preserving its
  aspect ratio and saves it as scaled.png.


  `-i original.png` → Specifies the input image file.


  `-vf scale="160:-1"` → Applies a video filter (-vf), scaling the width to 160
  pixels while setting the height to -1, which means FFmpeg will automatically
  calculate the height to maintain the aspect ratio.


  `-c:v png` → Specifies the video codec to use for output, which in this case
  is PNG (since it's an image).


  `-pix_fmt rgba` → Ensures the output image has an RGBA pixel format (i.e.,
  Red, Green, Blue, and Alpha transparency channels).



  Setting the pixel format is key here because on default, FFmpeg will choose a
  pixel format which does not have an alpha channel - which required for
  image/video with transparent background.


  source:
  [reddit](https://www.reddit.com/r/ffmpeg/comments/1jppatz/i_want_to_resize_this_png_but_the_transparent/)
categories:
  - images
tags:
  - transparent
  - alpha-channel
  - png
thumbnail_url: null
terminal_command: ffmpeg -i original.png -vf scale="160:-1" -c:v png -pix_fmt rgba scaled.png
example_type: picture
example_player_data:
  - https://ffmpeg-by-example.s3.amazonaws.com/yellow-flowers.png
filename: 6IH5CTBN/scale_png_with_transparent_background.md
views: 0
likes: 0

---
