---
id: Z8CBN6XU
version: '1.0'
enabled: true
date: '2025-01-22T22:14:17.793Z'
author: Chris Hallberg
title: Add Subtitles File to MP4
description: >-
  Embed an SRT subtitles file inside an MP4 so you don't need a second file.
  This doesn't burn the subtitles into the video — players get a toggleable
  subtitle track. `-c:s mov_text` encodes subtitles in MP4's native format;
  `-c:v copy -c:a copy` leave video and audio untouched.
categories:
  - subtitles
tags:
  - subtitles
  - srt
  - mov-text
thumbnail_url: null
terminal_command: >-
  ffmpeg -i video.mp4 -i subtitles.srt -c:v copy -c:a copy -c:s mov_text
  -metadata:s:s:0 language=eng output.mp4
example_type: no-preview
example_player_data:
  - null
filename: Z8CBN6XU/add_subtitles_file_to_mp4.md
views: 0
likes: 0

---
