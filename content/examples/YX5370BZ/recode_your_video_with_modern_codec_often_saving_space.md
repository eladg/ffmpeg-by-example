---
id: YX5370BZ
version: '1.0'
enabled: true
date: '2025-01-15T08:48:45.318Z'
author: Moritz
title: Recode your video with a modern codec, often saving space
description: >-
  Recode your video using the modern `libx265` video codec and copy the audio stream as is.


  You can change the `-crf` number to adjust the quality (lower = higher quality. More info [here](https://trac.ffmpeg.org/wiki/Encode/H.265))


  If your video was captured by a smartphone, it likely uses a codec that is
  quick and easy on the battery, recoding with with `libx265` can often save
  around 40% of storage space, without a discernible reduction in quality.
categories:
  - video
tags:
  - 'h265'
  - 'encoding'
thumbnail_url: null
terminal_command: |
  ffmpeg -i input.mp4 -c:a copy -c:v libx265 -crf 28 output.mp4
example_type: no-preview
example_player_data:
  - null
filename: YX5370BZ/recode_your_video_with_modern_codec_often_saving_space.md
views: 0
likes: 0

---
