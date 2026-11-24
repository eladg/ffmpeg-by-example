---
id: 81RASPMX
enabled: true
date: '2026-11-16T14:46:22.000Z'
author: Elad Gariany <elad@gariany.com>
title: Extract Subtitles From MKV to SRT
description: >-
  Pull the subtitle track out of an MKV file and save it as a standalone SRT
  file — handy when you want to edit, translate, or reuse the subtitles
  elsewhere. `-map 0:s:0` selects the first subtitle stream of the input; use
  `0:s:1` for the second one if the file has several.


  Tested with FFmpeg 8.1.2.
categories:
  - subtitles
tags:
  - subtitles
  - srt
  - mkv
versions:
  - '8.1'
thumbnail_url: null
terminal_command: ffmpeg -i input.mkv -map 0:s:0 subtitles.srt
example_type: no-preview
example_player_data:
  - ''
filename: 81RASPMX/extract_subtitles_from_mkv_to_srt.md
views: 0
likes: 0
---
