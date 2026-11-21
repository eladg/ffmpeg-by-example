---
id: 73JKOhmH
version: '1.0'
enabled: true
date: '2026-10-18T16:43:00.000Z'
author: Elad Gariany <elad@gariany.com>
title: Convert M4A to MP3
description: >-
  M4A files (Apple's AAC audio in an MP4 container) don't play on every device
  or app - converting to MP3 gives you near-universal compatibility.


  `-i input.m4a` - path and name of the input file


  `-c:a libmp3lame` - encode the audio with the LAME MP3 encoder. M4A and MP3
  use different codecs, so this is a re-encode, not a lossless remux.


  `-q:a 2` - high-quality variable bitrate (about 190 kbps). Use a value from
  0 (best quality) to 9 to trade size for quality.


  `output.mp3` - path and name of the output file
categories:
  - audio
tags:
  - m4a
  - mp3
tested_with: null
thumbnail_url: null
terminal_command: ffmpeg -i input.m4a -c:a libmp3lame -q:a 2 output.mp3
example_type: no-preview
example_player_data:
  - ''
filename: 73JKOhmH/convert_m4a_to_mp3.md
views: 0
likes: 0
---

