---
id: rmZIW7QC
version: '1.0'
enabled: true
date: '2026-10-13T16:45:28.000Z'
author: Elad Gariany <elad@gariany.com>
title: Extract Audio From a Video as MP3
description: >-
  Rip the audio track out of a video file and save it as an MP3 — useful for
  podcasts, music, lectures, or any audio you want to listen to without the
  video.


  `-vn` - skips the video stream entirely, so only audio is processed.


  `-c:a libmp3lame` - encodes the audio to MP3; without it ffmpeg would default
  to the input's audio codec in a different container.


  `-q:a 4` - sets variable-bitrate quality 4 (roughly 165 kbps): a good
  quality/size balance. Lower numbers mean higher quality; 0 is the best.
categories:
  - audio
tags:
  - mp3
  - extract-audio
tested_with: null
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -vn -c:a libmp3lame -q:a 4 output.mp3
example_type: no-preview
example_player_data:
  - ''
filename: rmZIW7QC/extract_audio_from_a_video_as_mp3.md
views: 0
likes: 0
---

