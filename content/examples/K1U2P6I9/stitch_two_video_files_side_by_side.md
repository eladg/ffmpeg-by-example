---
id: K1U2P6I9
version: '1.0'
enabled: true
date: '2022-03-30T17:07:22.021Z'
author: Simply <simplybladom@gmail.com>
title: Stitch two video files side by side
description: >-
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
  - video-filters
tags:
  - pad
  - filter
  - overlay
thumbnail_url: null
terminal_command: >-
  ffmpeg -y -i yoga.mp4 -i sharks.mp4 -filter_complex
  "[0:v]pad=iw+iw:ih[v1];[v1][1:v]overlay=overlay_w:0[vid]" -an -map "[vid]"
  -c:v libx264 -crf 23 -preset veryfast output.mp4
example_type: youtube-embed
example_player_data:
  - HEARpyUdNFs
filename: K1U2P6I9/stitch_two_video_files_side_by_side.md
views: 35
likes: 0

---
