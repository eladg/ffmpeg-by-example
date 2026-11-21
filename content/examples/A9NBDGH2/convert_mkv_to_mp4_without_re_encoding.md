---
id: A9NBDGH2
version: '1.0'
enabled: true
date: '2026-10-07T17:26:31.000Z'
author: Elad Gariany <elad@gariany.com>
title: Convert MKV to MP4 Without Re-encoding
description: >-
  Move the video and audio streams from an MKV file into an MP4 container without re-encoding — fast and completely lossless. Useful when a player, editor, or TV app plays MP4 but not MKV.
  `-c copy` copies every stream as-is instead of re-encoding it.
  MP4 supports fewer subtitle formats than MKV, so subtitle tracks may be dropped; add `-c:s mov_text` to keep them.
  Tested with FFmpeg 8.1.2.
categories:
  - video
tags:
  - mkv
  - mp4
  - remux
thumbnail_url: null
terminal_command: ffmpeg -i input.mkv -c copy %1_output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: A9NBDGH2/convert_mkv_to_mp4_without_re_encoding.md
views: 0
likes: 0
---
