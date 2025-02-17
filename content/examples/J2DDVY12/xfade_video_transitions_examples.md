---
id: J2DDVY12
version: '1.0'
enabled: true
date: '2025-02-17T04:25:59.615Z'
author: Elad Gariany <elad@gariany.com>
title: XFade Video Transitions Examples
description: >-
  The following command will apply the builtin XFade video transition filter to
  two example input videos `yoga.mp4` and `sharks.mp4`


  ## Filter Options


  `transition`: Set one of available transition effects. See [xfade
  documentation](https://ffmpeg.org/ffmpeg-filters.html#xfade) for the full
  list.


  `duration`: The cross fade is applied for specified duration set by
  `duration=1` in this example (range is 0 to 60, default is 1 second). 


  `offset`: Set cross fade start relative to first input stream in seconds.
  Default offset is 0.


  Both inputs must be constant frame-rate and have the same resolution, pixel
  format, frame rate and timebase.


  The attached video showcases all the different transition effects available as
  of version 7.1
categories:
  - transitions
tags:
  - transitions
  - filter
  - xfade
thumbnail_url: null
terminal_command: >-
  ffmpeg -i yoga.mp4 -i sharks.mp4 -filter_complex
  "xfade=transition=fadegrays:duration=1:offset=1" -pix_fmt yuv420p -c:v libx264
  -crf 23 fadegrays.mp4
example_type: youtube-embed
example_player_data:
  - 7f9Xl-JbS68
filename: J2DDVY12/xfade_video_transitions_examples.md
views: 0
likes: 0

---
