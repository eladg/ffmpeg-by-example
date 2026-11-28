---
id: R3TJROE8
enabled: true
date: '2026-11-22T14:47:01.000Z'
author: Elad Gariany <elad@gariany.com>
title: Count the Frames in a Video
description: >-
  Count the total number of frames in a video — useful for verifying a
  transcode, scripting QA checks, or confirming a clip's length in frames.
  `-count_frames` makes ffprobe decode the stream and count every frame
  instead of trusting the container's frame-count metadata, which can be
  missing or wrong. `-select_streams v:0` targets the first video stream, and
  `-show_entries stream=nb_read_frames` prints only the count.


  Tested with FFmpeg 8.1.2.
categories:
  - utilities
tags:
  - ffprobe
  - frame-count
changelog:
  - ffprobe-count-packets-and-count-frames-options
  - ffprobe-select-streams-option
  - ffprobe-show-entries-option
thumbnail_url: null
terminal_command: ffprobe -v error -select_streams v:0 -count_frames -show_entries stream=nb_read_frames -of default=noprint_wrappers=1:nokey=1 input.mp4
example_type: no-preview
example_player_data:
  - ''
filename: R3TJROE8/count_the_frames_in_a_video.md
views: 0
likes: 0
---
