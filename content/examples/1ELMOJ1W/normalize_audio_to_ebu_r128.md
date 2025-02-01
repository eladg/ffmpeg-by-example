---
id: 1ELMOJ1W
version: '1.0'
enabled: true
date: '2025-01-29T10:46:32.257Z'
author: Coen Spoor <coen.spoor@ambassadors.com>
title: '"Normalize" audio to EBU R128'
description: >-
  [EBU R128 standard](https://en.wikipedia.org/wiki/EBU_R_128) is recommendation for loudness normalisation and maximum level of audio signals. The following command will take `audio.wav`, process it once to find the 'true peak' and process it a second time to adjust `audio.wav` using the [`volume`](https://ffmpeg.org/ffmpeg-filters.html#volume) filter.

  In addition, set `output.wav` to 48 kHz samplerate & 24 bit depth (Raw PCM audio) by setting `-ar 48000 -c:a pcm_s24le`.
categories:
  - audio
tags:
  - audio
  - normalize
  - r128
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