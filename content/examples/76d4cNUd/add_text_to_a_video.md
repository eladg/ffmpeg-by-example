---
id: 76d4cNUd
version: '1.0'
enabled: true
date: '2026-11-09T17:46:32.000Z'
author: Elad Gariany <elad@gariany.com>
title: Add Text to a Video
description: >-
  Burn a line of text onto a video with the drawtext filter - useful for
  titles, labels, or captions that need to show on any player.


  `fontfile` - points drawtext at a font file on your system; swap in any
  .ttf or .otf you have installed.


  `x` and `y` - position the text; `(w-text_w)/2` and `(h-text_h)/2` center
  it on screen.


  `-c:a copy` - copies the audio stream untouched; only the video is
  re-encoded.
categories:
  - filters
tags:
  - drawtext
  - text-overlay
tested_with: null
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -vf "drawtext=text='Hello World':fontfile=/path/to/font.ttf:fontsize=48:fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2" -c:a copy output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: 76d4cNUd/add_text_to_a_video.md
views: 0
likes: 0
---
