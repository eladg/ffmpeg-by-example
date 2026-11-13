---
id: 8M38Y9PD
version: '1.0'
enabled: true
date: '2026-11-13T14:48:48.000Z'
author: Elad Gariany <elad@gariany.com>
title: Loop a Video a Set Number of Times
description: >-
  Repeat a video end to end a set number of times — handy for looping a short
  clip as a background, on a kiosk display, or in a social post.


  `-stream_loop 3` - repeats the input 3 more times, so the video plays 4
  times in total. Use `-stream_loop N-1` for N total plays.


  `-c copy` - copies the streams without re-encoding, so looping is fast and
  lossless.


  Tested with FFmpeg 8.1.2.
categories:
  - video
tags:
  - loop
  - stream-loop
tested_with: null
thumbnail_url: null
terminal_command: ffmpeg -stream_loop 3 -i input.mp4 -c copy output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: 8M38Y9PD/loop_a_video_a_set_number_of_times.md
views: 0
likes: 0
---
