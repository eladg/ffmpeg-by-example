---
id: AI15CVT5
version: '1.0'
enabled: true
date: '2025-01-21T13:30:07.483Z'
author: niutech
title: Stabilize video using VidStab
description: >-
  Remove camera shake from a video with the VidStab plugin. This is the second
  of two passes: first generate `transforms.trf` with the `vidstabdetect`
  example, then apply it here. `smoothing=30` averages motion over 30 frames;
  `zoom=5` zooms in 5% to hide the empty borders stabilization creates.


  Your ffmpeg build needs `--enable-libvidstab` for these filters.
categories:
  - filters
tags:
  - vidstab
  - stabilization
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -vf vidstabtransform=smoothing=30:zoom=5:input="transforms.trf" output.mp4
example_type: no-preview
example_player_data:
  - null
filename: AI15CVT5/stabilize_video_using_vidstab.md
views: 0
likes: 0

---
