---
id: BCEV5LK4
version: '1.0'
enabled: true
date: '2025-01-17T19:00:16.521Z'
author: navchandar
title: Rotate a video 90 or 180 degrees
description: >+
  Rotate 90 degrees counterclockwise:


  `ffmpeg -i input.mp4 -vf "transpose=2" -c:a copy output.mp4`


  Rotate 90 degrees clockwise:


  `ffmpeg -i input.mp4 -vf "transpose=1" -c:a copy output.mp4`


  Rotate 180 degrees:


  `ffmpeg -i input.mp4 -vf "transpose=2,transpose=2" -c:a copy output.mp4`


  `-c:a copy` keeps the original audio untouched.

categories:
  - video
tags:
  - rotate
  - transpose
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -vf "transpose=2" -c:a copy output.mp4
example_type: no-preview
example_player_data:
  - null
filename: BCEV5LK4/rotate_videos_using_ffmpeg.md
views: 0
likes: 0

---
