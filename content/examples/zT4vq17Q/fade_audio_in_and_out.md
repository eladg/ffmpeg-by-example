---
id: zT4vq17Q
enabled: true
date: '2026-11-19T14:46:10.000Z'
author: Elad Gariany <elad@gariany.com>
title: Fade Audio In and Out
description: >-
  Fade an audio file in at the start and out at the end - the standard polish
  for podcasts, voiceovers, and music clips, so nothing starts or stops
  abruptly.


  `afade=t=in:st=0:d=3` - fades in over the first 3 seconds.


  `afade=t=out:st=57:d=3` - fades out over the last 3 seconds. The start time
  assumes a 60-second file: set it to your file's duration minus the fade
  length (find the duration with `ffprobe -show_entries format=duration
  input.mp3`).


  Tested with FFmpeg 8.1.
categories:
  - audio
tags:
  - fade
  - afade
  - volume
tested_with: null
versions:
  - '8.1'
thumbnail_url: null
terminal_command: ffmpeg -i input.mp3 -af "afade=t=in:st=0:d=3,afade=t=out:st=57:d=3" output.mp3
example_type: no-preview
example_player_data:
  - ''
filename: zT4vq17Q/fade_audio_in_and_out.md
views: 0
likes: 0
---
