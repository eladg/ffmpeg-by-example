---
id: U9NKS1XN
version: '1.0'
enabled: true
date: '2025-01-15T11:17:12.083Z'
author: Eric Jacob <dev@rachasak.org>
title: Combine video-only and audio-only file parts into single video
description: >-
  Combine separate video-only and audio-only file parts (e.g. from a download
  manager) into a single MP4. `-map 0:v -map 1:a` takes video from the first
  input and audio from the second; `-c copy` joins them without re-encoding,
  `-shortest` trims to the shorter stream, and `-movflags +faststart` makes the
  file streamable.
categories:
  - video
tags:
  - mux
  - combine
thumbnail_url: null
terminal_command: ffmpeg -i video_v.ts -i video_a.ts -map 0:v -map 1:a -c copy -shortest -movflags +faststart output.mp4
example_type: no-preview
example_player_data:
  - null
filename: U9NKS1XN/combine_video-only_and_audio-only_file_parts_into_single_video.md
views: 0
likes: 0

---
