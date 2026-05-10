---
id: 7KDJ5J4M
version: '1.0'
enabled: true
date: '2022-04-15T18:13:38.203Z'
author: Elad Gariany <elad@gariany.com>
title: 'Create SMPTE Color Bars with Centered Text Overlay'
description: >-
  Generate professional SMPTE color bars test pattern with custom text overlay for video calibration and testing purposes.


  **Command Breakdown:**


  - `-f lavfi -i "smptebars=s=640x360"`: Uses lavfi virtual input to generate SMPTE color bars at 640x360 resolution.

  - `-vf drawtext="fontsize=220:text='16x9':x=(w-text_w)/2:y=(h-text_h)/2:fontcolor=White"`: Applies drawtext filter with 220px font size, centers text using dynamic positioning, and sets white color.

  - `-frames:v 1`: Limits output to a single frame for static image generation.

  - `-qscale:v 1`: Sets highest quality for JPEG output.

  For more info, see
  [smptebars](http://ffmpeg.org/ffmpeg-filters.html#allrgb_002c-allyuv_002c-color_002c-colorspectrum_002c-haldclutsrc_002c-nullsrc_002c-pal75bars_002c-pal100bars_002c-rgbtestsrc_002c-smptebars_002c-smptehdbars_002c-testsrc_002c-testsrc2_002c-yuvtestsrc)
  and [drawtext](http://ffmpeg.org/ffmpeg-filters.html#drawtext-1) on the official ffmpeg documentation.
categories:
  - video-filters
tags:
  - video-source
  - smpte-bars
  - test-pattern
  - drawtext
  - video-calibration
thumbnail_url: null
terminal_command: >-
  ffmpeg -f lavfi -i "smptebars=s=640x360" -vf
  drawtext="fontsize=220:text='16x9':x=(w-text_w)/2:y=(h-text_h)/2:fontcolor=White"
  -frames:v 1 -qscale:v 1 16x9.jpg
example_type: picture
example_player_data:
  - https://www.ffmpegbyexample.com/video/16x9.jpg
filename: 7KDJ5J4M/generate_smptebars_with_test_text_on_top.md
views: 7
likes: 0
---
