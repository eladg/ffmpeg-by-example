---
id: ZZ0uvvLa
enabled: true
date: '2026-11-15T14:47:13.000Z'
author: Elad Gariany <elad@gariany.com>
title: Convert a Horizontal Video to Vertical 9:16
description: >-
  Reformat a landscape video for TikTok, Shorts, or Reels by cropping the
  center to a 9:16 frame and scaling it to 1080x1920. `crop=ih*9/16:ih` cuts
  the sides off using the video height, and `scale=1080:1920` sizes the result
  for vertical feeds. Add `-c:a copy` to keep the original audio untouched.


  Tested with FFmpeg 8.1.
categories:
  - video
tags:
  - vertical-video
  - 9-16
  - crop
versions:
  - '8.1'
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -vf "crop=ih*9/16:ih,scale=1080:1920,setsar=1" output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: ZZ0uvvLa/convert_a_horizontal_video_to_vertical_9_16.md
views: 0
likes: 0
---

