---
id: 2S6N7I6R
version: '1.0'
enabled: true
date: '2025-01-15T07:45:48.252Z'
author: Raghu <ffmpegwaifu@saxrag.com>
title: Convert OGG files with metadata to m4a for iPod
description: >-
  `-c:a aac song.m4a`

  For iTunes / iPods, we need the AAC coded, in the M4A container.


  `-map_metadata 0:s:a:0`

  Metadata for OGG tracks is stored at the _stream_ level, so if you just try to
  copy metadata it won't work, since the AAC encoder can only store global
  metadata. That's what this bit does.


  `-aac_pns 0`

  AAC added a feature called "perceptual noise substitution" which iPods don't
  support, so this needs to be disabled.


  [Source](https://ckcr4lyf.github.io/tech-notes/ogg_aac_ipod.html)
categories:
  - audio
tags:
  - ipod
  - m4a
  - ogg
thumbnail_url: null
terminal_command: >-
  ffmpeg -i song.ogg -map_metadata 0:s:a:0 -c:a aac -b:a 320k -aac_pns 0
  -vn song.m4a
example_type: no-preview
example_player_data:
  - null
filename: 2S6N7I6R/convert_ogg_files_metadata_to_m4a_for_ipod.md
views: 0
likes: 0

---
