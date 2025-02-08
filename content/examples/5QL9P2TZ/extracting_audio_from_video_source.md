---
id: 5QL9P2TZ
version: '1.0'
enabled: true
date: '2025-02-08T05:52:17.079Z'
author: David Munoz <ffmpeg-by-example@josemunoz.dev>
title: Extracting audio from a video source
description: >-
  This ffmpeg "recipe" works by taking a video input, and mapping the first
  audio track to an output, you can define the output format using the `-f`
  option and a format value i.e: `-f mp3`. If you omit the format option then
  you should use an uncompressed format for your output like `.wav`, using a
  compression format is generally slower than just mapping to a wav file.
categories:
  - ffmpeg
tags:
  - video-to-audio
  - extraction
  - audio-extraction
thumbnail_url: null
terminal_command: |-
  // uncompressed (faster)
  ffmpeg -i video-file.avi -map 0:a extracted_audio.wav
  // output to mp3 (or other formats)
  ffmpeg -i video-file.avi -map 0:a -f mp3 extracted_audio.mp3
example_type: no-preview
example_player_data:
  - null
filename: 5QL9P2TZ/extracting_audio_from_video_source.md
views: 0
likes: 0

---
