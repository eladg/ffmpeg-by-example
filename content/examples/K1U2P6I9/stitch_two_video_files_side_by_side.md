---
id: K1U2P6I9
version: '1.0'
enabled: true
date: '2022-03-30T17:07:22.021Z'
author: Simply <simplybladom@gmail.com>
title: Stitch two video files side by side
description: >-
  Stitch Video2.mp4 to Video1.mp4's side and output to output.mp4


  The following example assumes Video2.mp4 has a width of 400px and overlays it
  to the right of Video1.mp4


  Filter breakdown:

  ffmpeg -i Video1.mp4 -i Video2.mp4 input videos

  -filter_complex

  "[0:v]pad=iw+400:ih[int]; add 400px's of space to the right of Video1 (to make
  space for video 2)

  [int][1:v]overlay=W-400:0[vid]" overlay Video 2 on top, starting at
  coordinates X:W-400 (Width of the video - 400) Y:0, this aligns Video2 on the
  black space we just padded
categories:
  - video-filters
tags:
  - pad
  - filter
  - overlay
thumbnail_url: null
terminal_command: >-
  ffmpeg -i Video1.mp4 -i Video2.mp4 -filter_complex
  "[0:v]pad=iw+400:ih[int];[int][1:v]overlay=W-400:0[vid]" -map "0:a" -map
  "[vid]" -c:v libx264 -crf 23 -preset veryfast output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: K1U2P6I9/stitch_two_video_files_side_by_side.md
views: 0
likes: 0

---
