---
id: BCEV5LK4
version: '1.0'
enabled: true
date: '2025-01-17T19:00:16.521Z'
author: navchandar
title: Rotate videos using ffmpeg
description: >+
  Turn video 90 degrees to the LEFT (counterclockwise) using the command


  ``ffmpeg -i "INPUT FILE NAME" -vf "transpose=2" -c:v h264_videotoolbox -b:v
  5000k "OUTPUT FILE NAME"``


  Turn video 90 degrees to the RIGHT (clockwise) using the command


  ``ffmpeg -i "INPUT FILE NAME" -vf "transpose=1" -c:v h264_videotoolbox -b:v
  5000k "OUTPUT FILE NAME"``



  Turn video 180 degrees using the command


  ``ffmpeg -i "INPUT FILE NAME" -vf "transpose=1,transpose=1" -c:v
  h264_videotoolbox -b:v 5000k "OUTPUT FILE NAME"``

categories:
  - video
tags:
  - '#mp4'
thumbnail_url: null
terminal_command: >-
  ffmpeg -i input.mp4 -vf "transpose=2" -c:v h264_videotoolbox -b:v 5000k
  output.mp4
example_type: no-preview
example_player_data:
  - null
filename: BCEV5LK4/rotate_videos_using_ffmpeg.md
views: 0
likes: 0

---
