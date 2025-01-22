---
id: U9NKS1XN
version: '1.0'
enabled: true
date: '2025-01-15T11:17:12.083Z'
author: Eric Jacob <dev@rachasak.org>
title: Combine video-only and audio-only file parts into single video
description: >-
  This is a script I used to combine video-only and audio-only file parts from
  the download manager that cannot combine due to source error.


  This command has no re-transcoding; just join them together using the minimum
  media length, [set fragmentation to the beginning of the
  file](https://ffmpeg.org/ffmpeg-formats.html#Fragmentation) for [faster
  operation](https://superuser.com/a/856091).


  Also, remove source file parts for tidy things up when the transcoding is
  done.
categories:
  - video
tags:
  - encoding
thumbnail_url: null
terminal_command: >-
  FN="<filename_prefix>" bash -c 'ffmpeg -i "${FN}_v.ts" -i "${FN}_a.ts" -map
  0:v -map 1:a -c copy -shortest -movflags +faststart "${FN}.mp4" && rm
  ${FN}_v.ts && rm ${FN}_a.ts'
example_type: no-preview
example_player_data:
  - null
filename: U9NKS1XN/combine_video-only_and_audio-only_file_parts_into_single_video.md
views: 0
likes: 0

---
