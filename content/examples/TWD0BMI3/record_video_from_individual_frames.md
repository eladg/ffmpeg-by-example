---
id: TWD0BMI3
version: '1.0'
enabled: true
date: '2022-03-30T22:45:17.324Z'
author: ConfusedReptile
title: Record a video from individual frames
description: >
  When writing a simulation or similar application, you may sometimes want to
  record a video of something, with your program generating individual frames
  and ffmpeg assembling them into a whole. It's possible to do so in two steps -
  write the frames as `PNG` files and then pass them as input to ffmpeg - but
  this is very slow (as it requires to PNG encode, write, read, and PNG decode
  each frame) and requires a lot of space to store all the frames. It's much
  more efficient to use `-i pipe:` to provide the raw frames as they are
  generated.

  To use, run an ffmpeg instance using the command, and write the raw frames
  (RGBA, 4 bytes per pixel, 1280 width by 720 height) into its stdin. Once
  you're done, close the pipe to the stdin and the ffmpeg process will exit
  shortly.

  The result is written into `output_path.mp4`, and no output is shown unless
  there's an error.
categories:
  - frames
tags:
  - 'video-extract'
  - 'stdin'
  - 'pipe'
thumbnail_url: null
terminal_command: >-
  ffmpeg -framerate 30 -f rawvideo -pix_fmt rgba -s:v 1280x720 -i pipe: -c:v
  libx264 output_path.mp4
example_type: no-preview
example_player_data:
  - ''
filename: TWD0BMI3/record_video_from_individual_frames.md
views: 0
likes: 0

---
