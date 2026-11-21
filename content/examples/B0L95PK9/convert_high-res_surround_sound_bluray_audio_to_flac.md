---
id: B0L95PK9
version: '1.0'
enabled: true
date: '2025-02-01T03:41:58.870Z'
author: Devin Goodman
title: Convert High-Res Surround Sound Bluray Audio to FLAC
description: >+
  Isolate your audio stream in a *.mka file. Then use ffmpeg to convert each
  channel of TrueHD or DTS-HD Master Audio into FLAC for ultra high resolution,
  surround sound.

categories:
  - audio
tags:
  - bluray
  - flac
  - surround
thumbnail_url: null
terminal_command: ffmpeg -i input.mka -af aformat=channel_layouts="7.1|5.1|stereo" -map 0:a -c:a flac output.flac
example_type: no-preview
example_player_data:
  - null
filename: B0L95PK9/convert_high-res_surround_sound_bluray_audio_to_flac.md
views: 0
likes: 0

---
