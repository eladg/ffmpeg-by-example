---
id: B2jbgS4n
version: '1.0'
enabled: true
date: '2026-11-08T16:57:07.000Z'
author: Elad Gariany <elad@gariany.com>
title: Change a Video's Frame Rate from 60fps to 30fps
description: >-
  Convert a 60fps video to 30fps (or any frame rate) - handy for smaller
  files, matching an editor's timeline, or taming high-frame-rate phone
  footage.


  `fps=30` - sets the output frame rate; swap in any target rate. Frames are
  dropped or duplicated as needed.


  `-c:a copy` - copies the audio stream untouched, so only the video is
  re-encoded.


  Tested with FFmpeg 8.1.
categories:
  - video
tags:
  - frame-rate
  - fps
tested_with: null
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -vf fps=30 -c:a copy output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: B2jbgS4n/change_a_video_s_frame_rate_from_60fps_to_30fps.md
views: 0
likes: 0
---
