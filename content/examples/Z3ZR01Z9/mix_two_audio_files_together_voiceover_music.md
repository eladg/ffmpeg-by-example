---
id: Z3ZR01Z9
enabled: true
date: '2026-11-18T14:47:37.000Z'
author: Elad Gariany <elad@gariany.com>
title: Mix Two Audio Files Together (Voiceover + Music)
description: >-
  Layer two audio files on top of each other — for example a voiceover over
  background music — into a single mixed track. The `amix` filter combines
  both inputs sample by sample; `duration=longest` keeps the output running
  until the longer input ends instead of cutting off at the shorter one.


  Tested with FFmpeg 8.1.2.
categories:
  - audio
tags:
  - amix
  - voiceover
  - mix
versions:
  - '8.1'
thumbnail_url: null
terminal_command: ffmpeg -i voiceover.mp3 -i music.mp3 -filter_complex "[0:a][1:a]amix=inputs=2:duration=longest" output.mp3
example_type: no-preview
example_player_data:
  - ''
filename: Z3ZR01Z9/mix_two_audio_files_together_voiceover_music.md
views: 0
likes: 0
---
