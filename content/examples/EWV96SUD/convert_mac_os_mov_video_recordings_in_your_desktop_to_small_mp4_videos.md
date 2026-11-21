---
id: EWV96SUD
version: '1.0'
enabled: true
date: '2025-01-15T12:07:30.427Z'
author: Eduardo <eduardoarandah@gmail.com>
title: Convert macOS screen recordings to small MP4s
description: >-
  Record your screen with macOS (Shift+Cmd+5), then shrink the resulting .mov
  into a small .mp4 that's easy to send via email or chat. `-crf 28` compresses
  aggressively and `-filter:v fps=10` drops the frame rate — plenty for screen
  content.
categories:
  - video
tags:
  - macos
  - mov
thumbnail_url: null
terminal_command: ffmpeg -i input.mov -crf 28 -filter:v fps=10 output.mp4
example_type: no-preview
example_player_data:
  - null
filename: >-
  EWV96SUD/convert_mac_os_mov_video_recordings_in_your_desktop_to_small_mp4_videos.md
views: 0
likes: 0

---
