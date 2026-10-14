---
id: k9fQiUp4
version: '1.0'
enabled: true
date: '2026-10-14T16:45:00.000Z'
author: Elad Gariany <elad@gariany.com>
title: Remove the Audio Track From a Video
description: >-
  Strip the audio track out of a video file in seconds - useful for silent
  b-roll, removing an unwanted soundtrack, or prepping footage for a new
  voiceover.


  `-an` - drops the audio stream entirely.


  `-c copy` - copies the video stream without re-encoding, so it is instant
  and lossless.
categories:
  - video
tags:
  - remove-audio
  - stream-copy
tested_with: null
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -an -c copy output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: k9fQiUp4/remove_the_audio_track_from_a_video.md
views: 0
likes: 0
---
