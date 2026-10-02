---
id: DLRZLROS
version: '1.0'
enabled: true
date: '2025-06-02T22:07:38.681Z'
author: Kozika
title: Concatenate multiple audio files into one
description: >-
  Join several audio files end to end without re-encoding. List the files in
  `list.txt` (one `file 'song.mp3'` per line); `-f concat` reads the list and
  `-c copy` joins the streams as-is.
categories:
  - audio
tags:
  - concat
  - audio-join
thumbnail_url: null
terminal_command: ffmpeg -f concat -safe 0 -i list.txt -c copy out.mp3
example_type: no-preview
example_player_data:
  - null
filename: DLRZLROS/concatenating_audio_files.md
views: 0
likes: 0

---
