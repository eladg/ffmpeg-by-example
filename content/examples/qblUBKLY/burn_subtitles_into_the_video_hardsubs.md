---
id: qblUBKLY
version: '1.0'
enabled: true
date: '2026-10-15T16:45:45.000Z'
author: Elad Gariany <elad@gariany.com>
title: Burn Subtitles Into the Video (Hardsubs)
description: >-
  Render subtitles permanently into the video pixels, so the text shows on any
  player - phones, TVs, social apps - with no subtitle-track support required.
  Unlike soft subtitles, burned-in text can't be turned off or restyled by the
  viewer.


  `subtitles=subtitles.srt` - loads the SRT file and draws each line over the
  video using libass.


  `-c:a copy` - copies the audio stream untouched; only the video is
  re-encoded.
categories:
  - subtitles
tags:
  - hardsubs
  - burn-in
  - srt
tested_with: null
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -vf "subtitles=subtitles.srt" -c:a copy output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: qblUBKLY/burn_subtitles_into_the_video_hardsubs.md
views: 0
likes: 0
---

