---
id: 6IH5CTBN
version: '1.0'
enabled: true
date: '2025-04-02T18:51:44.183Z'
author: Elad Gariany <elad@gariany.com>
title: 'Resize PNG Images While Preserving Transparency and Aspect Ratio'
description: >-
  Scale PNG images with transparent backgrounds while maintaining aspect ratio and alpha channel integrity for web graphics and design workflows.


  **Command Breakdown:**
  

  - `-i original.png`: Specifies the input PNG image file to be processed.

  - `-vf scale="160:-1"`: Applies scale filter to resize width to 160 pixels while automatically calculating height to preserve aspect ratio.

  - `-c:v png`: Sets PNG codec for output to maintain image format compatibility.

  - `-pix_fmt rgba`: Ensures RGBA pixel format with alpha channel for transparency preservation.


  **Key Point:** The `-pix_fmt rgba` parameter is crucial as FFmpeg defaults to formats without alpha channels, which would remove transparency from your PNG images.

   source: [reddit](https://www.reddit.com/r/ffmpeg/comments/1jppatz/i_want_to_resize_this_png_but_the_transparent/)
categories:
  - images
tags:
  - png
  - alpha-channel
  - transparency
  - image-scaling
  - web-graphics
thumbnail_url: null
terminal_command: ffmpeg -i original.png -vf scale="160:-1" -c:v png -pix_fmt rgba scaled.png
example_type: picture
example_player_data:
  - https://ffmpeg-by-example.s3.amazonaws.com/yellow-flowers.png
filename: 6IH5CTBN/scale_png_with_transparent_background.md
views: 0
likes: 0
---
