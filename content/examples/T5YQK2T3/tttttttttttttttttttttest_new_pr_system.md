---
id: T5YQK2T3
version: '1.0'
enabled: true
date: '2022-04-18T22:56:00.005Z'
author: Elad <Elad@gariany.com>
title: tttttttttttttttttttttest new PR System
description: |-
  Stitch [yoga.mp4](https://www.ffmpegbyexample.com/video/yoga.mp4) and
  [sharks.mp4](https://www.ffmpegbyexample.com/video/sharks.mp4) side-by-side
  and output to `output.mp4`


  The following example assumes the two videos are of the same width. The 2nd
  video will be overlay'ed to the right of the first video.


  `[0:v]pad=iw+iw:ih[v1];` using the
  [pad](https://ffmpeg.org/ffmpeg-filters.html#pad-1) filter, add space to the
  right of the first input, to make space for the second video. The pad size is
  the size of the input video width (which is set in the `iw` parameter to the
  filter).


  `[v1][1:v]overlay=overlay_w:0[vid]` overlay the second input on top of the
  padded input (set as `[v1]`), starting at coordinates overlay_w:0 i.e.: X:size
  of the overlay, Y:0, this aligns the second input on the black space we just
  padded.


  `-an` ignores any audio that was set to either inputs.


  `-map [vid]` maps the complex stream named 'vid' to the output file.
categories:
  - audio
tags:
  - audio-extract
thumbnail_url: null
terminal_command: ffmpeg -i elad-test.mp4
example_type: audio
example_player_data:
  - https://ffmpeg-by-example.s3.amazonaws.com/audio.mp3
filename: T5YQK2T3/tttttttttttttttttttttest_new_pr_system.md
views: 0
likes: 0

---
