---
id: 8YGJLNJS
enabled: true
date: '2026-11-21T14:45:21.000Z'
author: Elad Gariany <elad@gariany.com>
title: Convert a DTS or AC3 Audio Track to AAC
description: >-
  MKV rips often carry DTS or AC3 audio that TVs and players like Plex can't
  play. Re-encode just the audio to AAC and copy the video untouched, so the
  file plays everywhere without a slow full re-encode. `-map 0` keeps every
  stream from the input, including subtitles. `-c:v copy` copies the video
  bit-for-bit, so only the audio is re-encoded. `-b:a 192k` sets the AAC
  bitrate — a solid default for stereo; raise it (for example to 384k) for
  5.1 surround sound.


  Tested with FFmpeg 8.1.2.
categories:
  - audio
tags:
  - dts
  - ac3
  - aac
versions:
  - '8.1'
thumbnail_url: null
terminal_command: ffmpeg -i input.mkv -map 0 -c:v copy -c:a aac -b:a 192k output.mkv
example_type: no-preview
example_player_data:
  - ''
filename: 8YGJLNJS/convert_a_dts_or_ac3_audio_track_to_aac.md
views: 0
likes: 0
---
