---
id: Vt0WEnhJ
version: '1.0'
enabled: true
date: '2026-10-09T16:43:00.000Z'
author: Elad Gariany <elad@gariany.com>
title: Combine an Audio File and a Video File Into One Video
description: |
  Mux a separate audio file — a voiceover, music track, or narration — into a video without re-encoding the video stream.
  `-c:v copy` — copies the video stream as-is, so the merge is fast and lossless.
  `-c:a aac` — re-encodes the audio to AAC for universal playback.
  `-shortest` — stops the output when the shorter of the two inputs ends (drop it if the audio is longer than the video and you want the full audio).
categories:
  - audio
tags:
  - mux-audio
  - voiceover
thumbnail_url: null
terminal_command: ffmpeg -i video.mp4 -i audio.mp3 -c:v copy -c:a aac -shortest output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: Vt0WEnhJ/combine_an_audio_file_and_a_video_file_into_one_video.md
views: 0
likes: 0

---
