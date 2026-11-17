---
id: BaoxeA9C
version: '1.0'
enabled: true
date: '2026-11-17T14:47:00.000Z'
author: Elad Gariany <elad@gariany.com>
title: Convert HEVC/H.265 Video to H.264
description: >-
  Re-encode HEVC (H.265) video to widely compatible H.264 — for footage from
  newer phones and cameras that older editors and players can't open.


  `-c:v libx264` - re-encodes the video stream with the H.264 encoder.


  `-crf 23` - constant quality level, the libx264 default; a good balance of
  file size and quality (lower numbers mean better quality).


  `-preset medium` - speed vs compression tradeoff; the default, slower
  presets produce smaller files.


  `-c:a copy` - copies the audio stream without re-encoding, so it stays
  untouched.
categories:
  - video
tags:
  - hevc
  - h265
  - h264
tested_with: null
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a copy output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: BaoxeA9C/convert_hevc_h265_video_to_h264.md
views: 0
likes: 0
---

