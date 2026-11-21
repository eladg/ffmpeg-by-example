---
id: 6H3EWLCD
version: '1.0'
enabled: true
date: '2026-10-02T23:42:17.000Z'
author: niutech
title: Detect camera motion with vidstabdetect
description: >-
  First pass of VidStab stabilization: analyze a shaky video and write the
  camera movements to `transforms.trf`. Feed that file to the `vidstabtransform`
  example to get the stabilized video. `shakiness=7` suits moderately shaky
  footage (1 = calm, 10 = very shaky).


  Your ffmpeg build needs `--enable-libvidstab` for these filters.
categories:
  - filters
tags:
  - vidstab
  - stabilization
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -vf vidstabdetect=shakiness=7 -f null -
example_type: no-preview
example_player_data:
  - null
filename: 6H3EWLCD/detect_camera_motion_with_vidstabdetect.md
views: 0
likes: 0

---
