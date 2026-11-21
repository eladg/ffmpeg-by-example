---
id: MN8eqBHJ
version: '1.0'
enabled: true
date: '2026-10-10T16:54:04.000Z'
author: Elad Gariany <elad@gariany.com>
title: Compress a Video to a Smaller File Size
description: >
  Shrink a video's file size so it fits upload limits (WhatsApp, Discord, email)
  with minimal visible quality loss. Uses CRF encoding, which keeps quality
  consistent across the whole video instead of forcing a fixed bitrate.


  `-crf 28` - the compression level; higher numbers mean smaller files (range
  0-51, 23 is the default, 28 is a good starting point for a noticeable shrink).


  `-preset medium` - trades encoding speed for compression efficiency; slower
  presets make even smaller files but take longer.


  `-c:a copy` - copies the audio stream untouched, since audio barely affects
  file size.
categories:
  - video
tags:
  - compress
  - crf
  - file-size
tested_with: null
thumbnail_url: null
terminal_command: >-
  ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset medium -c:a copy output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: MN8eqBHJ/compress_a_video_to_a_smaller_file_size.md
views: 0
likes: 0

---
