---
id: ENlhWvzG
version: '1.0'
enabled: true
date: '2026-10-17T16:45:43.000Z'
author: Elad Gariany <elad@gariany.com>
title: Convert WebM to MP4
description: >-
  Convert screen recordings and web downloads saved as WebM into MP4 files
  with H.264 video and AAC audio, so they play everywhere - browsers, phones,
  and video editors.


  `-c:v libx264` - re-encodes WebM's VP8/VP9 video to H.264, since MP4
  containers can't carry them.


  `-crf 23` - the quality/size sweet spot (libx264's default; lower = higher
  quality).


  `-c:a aac` - converts WebM's Opus/Vorbis audio to AAC, MP4's standard audio
  codec.
categories:
  - video
tags:
  - webm
  - mp4
  - h264
tested_with: null
thumbnail_url: null
terminal_command: ffmpeg -i input.webm -c:v libx264 -crf 23 -c:a aac output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: ENlhWvzG/convert_webm_to_mp4.md
views: 0
likes: 0
---
