---
id: DLRZLROS
version: '1.0'
enabled: true
date: '2025-06-02T22:07:38.681Z'
author: Kozika
title: Concatenating audio files
description: concatenates the audio files in list.txt. Re-encode them.
categories:
  - audio
tags:
  - concatenating
thumbnail_url: null
terminal_command: ffmpeg -i list.txt -filter_complex [0:a][1:a]concat=n=2:v=0:a=1 out.mp3
example_type: no-preview
example_player_data:
  - null
filename: DLRZLROS/concatenating_audio_files.md
views: 0
likes: 0

---
