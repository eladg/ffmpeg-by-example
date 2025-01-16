---
id: YLVTU13V
version: '1.0'
enabled: true
date: '2025-01-16T07:09:24.672Z'
author: tob-har
title: Audio Format Batch Conversion
description: >-
  Convert a batch of audio files inside one folder from wav to mp3 (and vice
  versa or other formats, just change the format in the ffmpeg command
  respectively).


  Example for iOS Terminal shell, must be executed after navigating inside the
  folder using terminal cd command:


  ```cd path_to_folder_with_audio_files```
categories:
  - audio
tags:
  - mp3
  - conversion
  - batch processing
thumbnail_url: null
terminal_command: >-
  for i in *.wav; do ffmpeg -i "$i" -dither_method rectangular -qscale:a 1 -ar
  48000 "${i%.*}.mp3"; done
example_type: no-preview
example_player_data:
  - null
filename: YLVTU13V/audio_format_batch_conversion.md
views: 0
likes: 0

---
