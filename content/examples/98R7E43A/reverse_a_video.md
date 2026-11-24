---
id: 98R7E43A
enabled: true
date: '2026-11-24T17:46:11.000Z'
author: Elad Gariany <elad@gariany.com>
title: Reverse a Video
description: >-
  Play a video backwards — handy for rewind effects, reveals, and b-roll.
  `-vf reverse` flips the video frames and `-af areverse` flips the audio to
  match, so sound stays in sync with the reversed picture. The video is
  re-encoded, so long clips take a while and use more memory.


  Tested with FFmpeg 8.1.2.
categories:
  - filters
tags:
  - reverse
  - areverse
  - playback
versions:
  - '8.1'
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -vf reverse -af areverse output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: 98R7E43A/reverse_a_video.md
views: 0
likes: 0
---
