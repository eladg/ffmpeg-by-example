---
id: 1qAXBusA
version: '1.0'
enabled: true
date: '2026-11-08T17:46:00.000Z'
author: Elad Gariany <elad@gariany.com>
title: Add a Watermark or Logo to a Video
description: >-
  Stamp a logo or watermark image onto a video - for branding, credit, or
  marking footage as yours. The logo is burned into the video pixels, so it
  shows on any player.


  `overlay=10:10` - places the logo 10 pixels from the top-left corner; use
  `overlay=W-w-10:H-h-10` to pin it to the bottom-right instead.


  `-c:a copy` - copies the audio stream untouched; only the video is
  re-encoded.
categories:
  - filters
tags:
  - watermark
  - logo
  - overlay
tested_with: null
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -i logo.png -filter_complex "overlay=10:10" -c:a copy output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: 1qAXBusA/add_a_watermark_or_logo_to_a_video.md
views: 0
likes: 0
---

