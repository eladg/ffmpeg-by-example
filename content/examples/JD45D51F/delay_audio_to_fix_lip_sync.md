---
id: JD45D51F
enabled: true
date: '2026-11-20T14:48:44.000Z'
author: Elad Gariany <elad@gariany.com>
title: Delay Audio to Fix Lip-Sync
description: >-
  Shift the audio track later so it lines up with the video when the sound
  plays ahead of the picture. `adelay` inserts silence at the start of the
  audio — `500:all=1` delays every channel by 500 milliseconds, so change the
  number to match your gap. The video stream is copied untouched, so only the
  audio is re-encoded. If the audio lags behind the video instead, delay the
  video with `setpts` rather than the audio.


  Tested with FFmpeg 8.1.2.
categories:
  - audio
tags:
  - adelay
  - lip-sync
  - audio-delay
changelog:
  - adelay-filter
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -af "adelay=500:all=1" -c:v copy -c:a aac output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: JD45D51F/delay_audio_to_fix_lip_sync.md
views: 0
likes: 0
---
