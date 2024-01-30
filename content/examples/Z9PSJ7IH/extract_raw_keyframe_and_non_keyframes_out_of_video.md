---
id: Z9PSJ7IH
version: '1.0'
enabled: true
date: '2024-01-30T19:51:35.670Z'
author: Elad Gariany
title: Extract raw keyframe and non keyframes out of a video
description: >-
  When extracting individual frames, FFmpeg is typically designed to extract
  full frames. However, extracting the frames as they are stored in the Codec is
  sometimes helpful when debugging.


  Setting the `-break_non_keyframes 1` parameter instructs ffmpeg to extract
  frames as raw binary data. Note that, for an H.264 input video, these images
  are not jpeg but the raw H.264 I/B/P frames. As far as I can tell, this is the
  only way to extract non-keyframes from FFmpeg.
categories:
  - frames
tags:
  - video-extract
thumbnail_url: null
terminal_command: ffmpeg -y -i video.mp4 -c copy -break_non_keyframes 1 "frame-%04d.jpg"
example_type: no-preview
example_player_data:
  - null
filename: Z9PSJ7IH/extract_raw_keyframe_and_non_keyframes_out_of_video.md
views: 0
likes: 0

---
