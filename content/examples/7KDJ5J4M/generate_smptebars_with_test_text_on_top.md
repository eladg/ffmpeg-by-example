---
id: 7KDJ5J4M
version: '1.0'
enabled: true
date: '2022-04-15T18:13:38.203Z'
author: Elad Gariany <elad@gariany.com>
title: Generate smptebars with test text on top
description: >-
  Use the `smptebars` video filter generator to generate an SMPTE test source.
  With the simple video input in place, use the `drawtext` filter to render the
  text '16x9' and place it in the middle of the frame.


  For more info, see
  [smptebars](http://ffmpeg.org/ffmpeg-filters.html#allrgb_002c-allyuv_002c-color_002c-colorspectrum_002c-haldclutsrc_002c-nullsrc_002c-pal75bars_002c-pal100bars_002c-rgbtestsrc_002c-smptebars_002c-smptehdbars_002c-testsrc_002c-testsrc2_002c-yuvtestsrc)
  and [drawtext](http://ffmpeg.org/ffmpeg-filters.html#drawtext-1) on the
  official ffmpeg documentation.
categories:
  - video-filters
tags:
  - generator
  - drawtext
  - testsrc
thumbnail_url: null
terminal_command: >-
  ffmpeg -f lavfi -i "smptebars=s=640x360" -vf
  drawtext="fontsize=220:text='16x9':x=(w-text_w)/2:y=(h-text_h)/2:fontcolor=White"
  -frames:v 1 -qscale:v 1 16x9.jpg
example_type: picture
example_player_data:
  - https://www.ffmpegbyexample.com/video/16x9.jpg
filename: 7KDJ5J4M/generate_smptebars_with_test_text_on_top.md
views: 5
likes: 0

---
