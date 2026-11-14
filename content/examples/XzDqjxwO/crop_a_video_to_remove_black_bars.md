---
id: XzDqjxwO
version: '1.0'
enabled: true
date: '2026-11-14T14:43:00.000Z'
author: Elad Gariany <elad@gariany.com>
title: Crop a Video to Remove Black Bars
description: >-
  Letterboxed videos waste pixels on black bars above and below the picture.
  This crops them away, keeping just the image — run `cropdetect` first to find
  the exact numbers for your file. The `crop` filter takes
  `width:height:x:y`; the values here remove 140-pixel bars from a 1920x1080
  video. Keep the cropped width and height even, or encoders like libx264 will
  complain.


  Tested with FFmpeg 8.1.
categories:
  - video
tags:
  - crop
  - black-bars
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -vf "crop=1920:800:0:140" output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: XzDqjxwO/crop_a_video_to_remove_black_bars.md
views: 0
likes: 0
---

