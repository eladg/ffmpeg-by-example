---
id: 6pN7XpDT
version: '1.0'
enabled: true
date: '2026-11-10T17:43:00.000Z'
author: Elad Gariany <elad@gariany.com>
title: Trim an Audio File by Time
description: >-
  Cut a clip out of an audio file by start time and duration — grab the
  chorus, trim a long intro, or split a recording into pieces.


  `-ss 00:00:30` - seeks to 30 seconds in before reading the input, so the
  cut starts there.


  `-t 00:00:45` - sits after the input, so it limits the output to 45
  seconds from the start point.


  `-c copy` - copies the audio without re-encoding, so the trim is instant
  and lossless.
categories:
  - audio
tags:
  - trim
  - audio-cut
tested_with: null
thumbnail_url: null
terminal_command: ffmpeg -ss 00:00:30 -i input.mp3 -t 00:00:45 -c copy output.mp3
example_type: no-preview
example_player_data:
  - ''
filename: 6pN7XpDT/trim_an_audio_file_by_time.md
views: 0
likes: 0
---

