---
id: VI577NE4
version: '1.0'
enabled: true
date: '2022-04-20T17:51:34.144Z'
author: Borek Lupoměský
title: Transcode Canon EOS 5D Mark II footage
description: >-
  If you try to transcode footage from Canon EOS 5D Mark II, you will find that
  ffmpeg, left to its defaults, will produce image that is slightly color
  shifted and also darker, drowning the blacks. After some experimenting I found
  the ffmpeg invocation that will keep the color and tonality true to the
  source.
categories:
  - video
tags:
  - 'canon5d'
thumbnail_url: null
terminal_command: >
  ffmpeg -i MVI_9648.MOV -c:v libx265 -preset slow -crf 26 -pix_fmt yuv420p
  -x265-params range=full -color_primaries bt709 -color_trc bt709 -colorspace
  smpte170m -vf scale=in_range=full:out_range=full -c:a libopus -b:a 32k
  output.mp4
example_type: no-preview
example_player_data:
  - null
filename: VI577NE4/transcode_canon_eos_5d_mark_ii_footage.md
views: 0
likes: 0

---
