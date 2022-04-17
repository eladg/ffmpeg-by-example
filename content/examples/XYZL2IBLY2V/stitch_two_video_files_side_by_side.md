---
id: XYZL2IBLY2V
version: '1.0'
enabled: true
date: '2022-04-17T10:01:02.691Z'
author: Elad
title: Stitch two video files side by side
description: >-
  Stitch [yoga.mp4](https://www.ffmpegbyexample.com/video/yoga.mp4) and
  [sharks.mp4](https://www.ffmpegbyexample.com/video/sharks.mp4) side-by-side
  and output to output.mp4
categories:
  - tests
tags:
  - test1
thumbnail_url: null
terminal_command: '  ffmpeg -y -i yoga.mp4 -i sharks.mp4 -filter_complex  [0:v]pad=iw+iw:ih[v1];[v1][1:v]overlay=overlay_w:0[vid] -an -map [vid]  -c:v libx264 -crf 23 -preset veryfast output.mp4'
example_type: no-preview
example_player_data:
  - null
filename: XYZL2IBLY2V/stitch_two_video_files_side_by_side.md
views: 0
likes: 0

---
