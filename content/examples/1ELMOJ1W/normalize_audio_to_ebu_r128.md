---
id: 1ELMOJ1W
version: '1.0'
enabled: true
date: '2025-01-29T10:46:32.257Z'
author: Coen Spoor <coen.spoor@ambassadors.com>
title: 'Normalize Audio to EBU R128 Loudness Standard (-23 LUFS)'
description: >-
  Apply [EBU R128 loudness normalization](https://en.wikipedia.org/wiki/EBU_R_128) to achieve broadcast-compliant audio levels.


  **Command Breakdown:**


  The nested FFmpeg command first analyzes `audio.wav` using the `ebur128` filter with `peak=true` to measure integrated loudness. The output is piped through `grep 'I:'` to extract the loudness value, then `awk` calculates the required volume adjustment to reach the -23 LUFS target.


  The main command applies this calculated volume adjustment using the `volume` filter, then converts the output to 48 kHz sample rate (`-ar 48000`) and 24-bit PCM format (`-c:a pcm_s24le`) for professional audio standards.


  This two-pass approach ensures accurate loudness measurement and precise normalization for broadcast, streaming, and professional audio workflows.

  
categories:
  - audio
tags:
  - audio
  - loudness
  - ebu-r128
  - normalization
  - broadcast
thumbnail_url: null
terminal_command: >-
  ffmpeg -i audio.wav -af "volume=$(ffmpeg -i audio.wav -af ebur128=peak=true -f
  null - 2>&1 | grep 'I:' | awk '{print $2}' | awk '{print -23-$1}')dB" -ar
  48000 -c:a pcm_s24le output.wav
example_type: no-preview
example_player_data:
  - null
filename: 1ELMOJ1W/normalize_audio_to_ebu_r128.md
views: 0
likes: 0
---