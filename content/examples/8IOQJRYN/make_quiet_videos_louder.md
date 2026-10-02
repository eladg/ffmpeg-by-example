---
id: 8IOQJRYN
version: '1.0'
enabled: true
date: '2025-10-02T15:57:11.427Z'
author: Sudo Queen
title: Make quiet videos louder
description: >-
  Double the volume of a quiet video's audio track. The `volume` filter scales
  the audio amplitude — `volume=2.0` means 200% of the original level (use
  `volume=0.5` to halve it instead).
categories:
  - audio
tags:
  - volume
  - loudness
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -filter:a "volume=2.0" output.mp4
example_type: no-preview
example_player_data:
  - null
filename: 8IOQJRYN/make_quiet_videos_louder.md
views: 0
likes: 0

---
