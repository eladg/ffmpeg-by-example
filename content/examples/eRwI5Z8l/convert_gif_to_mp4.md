---
id: eRwI5Z8l
version: '1.0'
enabled: true
date: '2026-10-16T16:48:32.000Z'
author: Elad Gariany <elad@gariany.com>
title: Convert GIF to MP4
description: >-
  Many social platforms, messaging apps, and editors reject GIF uploads, so
  convert the animation to a widely compatible H.264 MP4 instead. The video
  keeps the original frame rate and plays everywhere MP4 does.

  `-pix_fmt yuv420p` - the pixel format every player and device supports.

  `-vf "scale=trunc(iw/2)*2:trunc(ih/2)*2"` - rounds odd widths/heights down to
  even dimensions, which H.264/yuv420p requires.

  `-movflags +faststart` - moves the moov atom to the start of the file so
  playback can begin before the download finishes.
categories:
  - video
tags:
  - gif
  - mp4
tested_with: null
thumbnail_url: null
terminal_command: ffmpeg -i input.gif -movflags +faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: eRwI5Z8l/convert_gif_to_mp4.md
views: 0
likes: 0
---
