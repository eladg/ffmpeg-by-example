---
date: '2021-05-26T00:01:11.361Z'
author: Elad Gariany <elad@gariany.com>
title: 'Use ''colorchannelmixer'' filter to produce a simple Sepia Tones filter '
filename: use__colorchannelmixer__filter_to_produce_a_simple_sepia_tones_filter_-82j.md
description: >-
  The following command will adjust video input frames by re-mixing color
  channels.


  This filter modifies a color channel by adding the values associated to the
  other channels of the same pixels. For example if the value to modify is red,
  the output value will be: 

  ```

  red=red*rr + blue*rb + green*rg + alpha*ra

  ```


  For more info about the `colorchannelmixer` filter please visit the
  [colorchannelmixer](https://ffmpeg.org/ffmpeg-filters.html#colorchannelmixer)
  on https://ffmpeg.org documentation.
categories:
  - video-filters
tags:
  - no-tag
  - no-tag2
thumbnail_url: https://ffmpeg-by-example.s3.amazonaws.com/sepia-tones.jpg
example_code: >-
  ffmpeg -i sharks.mp4 -vf
  "colorchannelmixer=.393:.769:.189:0:.349:.686:.168:0:.272:.534:.131" -c:v
  libx264 -crf 21 -pix_fmt yuv420p sepia-tones.mp4

---
