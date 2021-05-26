---
date: '2021-05-26T02:03:02.314Z'
author: Elad Gariany <elad@gariany.com>
title: Create a 10 second video of any solid color
filename: create_a_10_second_video_of_any_solid_color-3xt.md
description: >-
  Using the `color` source filter as an input source (notice the `-f lavfi`
  before the input) to generate a plain color frame.


  This technic is useful for overlaying or any other reason you will need a
  solid color source.
categories:
  - video-filters
tags:
  - video-source
thumbnail_url: https://ffmpeg-by-example.s3.amazonaws.com/solid.jpg
example_code: >-
  ffmpeg -f lavfi -i "color=c=0x336699" -s 1440x1080 -r 30 -c:v libx264 -crf 31
  -t 10 solid.mp4
output_media:
  - { type: "youtube_embed", src: "https://www.youtube.com/embed/fM1NxBax9Jo" }
---
