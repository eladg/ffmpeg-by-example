---
id: IZIFJFHS
version: '1.0'
enabled: true
date: '2022-08-17T02:15:37.840Z'
author: elsy
title: Cut audio files by sample by atrim
description: >-
  The following command will cut an audio clip in the middle based on the start and end samples of the input wav file. In comparison to trimming audio by using `start` and `end` parameters (which is a completely valid methods) this method will produce an output which is accurate to the sample, which is the smallest unit of measurement in the audio space. For more information see the [atrim filter documentation page](https://ffmpeg.org/ffmpeg-filters.html#atrim)

categories:
  - audio
tags:
  - mp3
thumbnail_url: null
terminal_command: ffmpeg -i input.wav -af atrim=start_sample=44200:end_sample=120000 output.wav
example_type: picture
example_player_data:
  - https://xs011755.xsrv.jp/public/untitled.png
filename: IZIFJFHS/cut_audio_files_by_sample_by_atrim.md
views: 0
likes: 0

---
