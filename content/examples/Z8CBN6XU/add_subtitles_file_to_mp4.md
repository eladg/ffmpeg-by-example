---
id: Z8CBN6XU
version: '1.0'
enabled: true
date: '2025-01-22T22:14:17.793Z'
author: Chris Hallberg
title: Add Subtitles File to MP4
description: >-
  This lightning fast command allows you to include a subtitles file inside an
  MP4, removing the need for a second file. This doesn't "bake" them onto the
  video, but will add a subtitles option in your player.


  ```

  ffmpeg.exe -i video.mp4" -i subtitles.srt
     -c:v copy -c:a copy -c:s mov_text  (copy video, audio, subtitles)
     -metadata:s:1 language=eng         (set language of first/default stream to English)
     -metadata:s:s:0 language=eng       (set lang of first subtitle track to English)
     output.mp4
  ```
categories:
  - audio
tags:
  - '#subtitles'
  - '#captions'
  - '#accessibility'
thumbnail_url: null
terminal_command: >-
  ffmpeg.exe -i video.mp4 -i subtitles.srt -c:v copy -c:a copy -c:s mov_text
  -metadata:s:1 language=eng -metadata:s:s:0 language=eng output.mp4
example_type: no-preview
example_player_data:
  - null
filename: Z8CBN6XU/add_subtitles_file_to_mp4.md
views: 0
likes: 0

---
