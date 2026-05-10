---
id: 6GZHZPJP
version: '1.0'
enabled: true
date: '2022-03-30T16:05:31.077Z'
author: Elad Gariany <elad@gariany.com>
title: 'Generate Solid Color Video with Custom Hex Color Code'
description: >-
  The following uses a video source generator and the
  [color](https://ffmpeg.org/ffmpeg-filters.html#allrgb_002c-allyuv_002c-color_002c-colorspectrum_002c-haldclutsrc_002c-nullsrc_002c-pal75bars_002c-pal100bars_002c-rgbtestsrc_002c-smptebars_002c-smptehdbars_002c-testsrc_002c-testsrc2_002c-yuvtestsrc)
  filter to generate a solid color video.


  **Command Breakdown:**
  

  - `-f lavfi -i "color=c=0x4d1a7f"`: Uses lavfi virtual input format with color filter, generating solid purple color (hex #4d1a7f).
  
  - `-s 1280x720`: Sets video resolution to 720p HD format.
  
  - `-r 30`: Sets framerate to 30 FPS for smooth video output.
  
  - `-c:v libx264 -crf 31`: Encodes with H.264 codec at quality level 31 (good compression).
  
  - `-t 5`: Limits output duration to 5 seconds.
  
  Perfect for creating video backgrounds, color bars, test patterns, or placeholder content for video editing workflows.
categories:
  - video-filters
tags:
  - Video-source
  - colors
  - h264
  - video-generation
  - lavfi
thumbnail_url: null
terminal_command: >-
  ffmpeg -f lavfi -i "color=c=0x4d1a7f" -s 1280x720 -r 30 -c:v libx264 -crf 31
  -t 5 solid.mp4
example_type: video-url
example_player_data:
  - https://ffmpeg-by-example.s3.amazonaws.com/solid.mp4
filename: >-
  6GZHZPJP/generate_solid_color_264_video_with_the_color_video_source_filter_color_hex_code.md
views: 94
likes: 3
---
