---
id: 6GZHZPJP
version: '1.0'
enabled: true
date: '2022-03-30T16:05:31.077Z'
author: Elad Gariany <elad@gariany.com>
title: >-
  Generate a solid color H.264 video with the color video source filter (color
  Hex code)
description: >-
  The following uses a video source generator and the
  [color](https://ffmpeg.org/ffmpeg-filters.html#allrgb_002c-allyuv_002c-color_002c-colorspectrum_002c-haldclutsrc_002c-nullsrc_002c-pal75bars_002c-pal100bars_002c-rgbtestsrc_002c-smptebars_002c-smptehdbars_002c-testsrc_002c-testsrc2_002c-yuvtestsrc)
  filter to generate a solid color video.


  The generated video frames are then scaled using `-s 1280x720` and a 30 fps
  `h.264` video is generated using `-r 30 -c:v libx264 -crf 31`.


  Since this generated creates unlimited frames, the `-t 5` parameter limits the
  output to 5 seconds.
categories:
  - video-filters
tags:
  - lavfi
  - video-source
  - ''
thumbnail_url: null
terminal_command: >-
  ffmpeg -f lavfi -i "color=c=0x4d1a7f" -s 1280x720 -r 30 -c:v libx264 -crf 31
  -t 5 solid.mp4
example_type: video-url
example_player_data:
  - https://ffmpeg-by-example.s3.amazonaws.com/solid.mp4
filename: >-
  6GZHZPJP/generate_solid_color_264_video_with_the_color_video_source_filter_color_hex_code.md
views: 8
likes: 0

---
