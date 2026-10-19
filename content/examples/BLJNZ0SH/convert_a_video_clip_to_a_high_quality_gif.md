---
id: BLJNZ0SH
version: '1.0'
enabled: true
date: '2026-10-12T16:48:49.000Z'
author: Elad Gariany <elad@gariany.com>
title: Convert a Video Clip to a High-Quality GIF
description: >-
  Convert a short video clip into a GIF without the washed-out colors of a
  naive conversion — useful for sharing a moment in chat, docs, or issues
  where video will not embed.


  `fps=15` - caps the frame rate, which keeps the GIF file size reasonable.


  `scale=640:-1:flags=lanczos` - resizes to 640 pixels wide, keeping the
  aspect ratio, with high-quality scaling.


  `palettegen` + `paletteuse` - builds a color palette from this clip itself
  instead of using generic colors, which is what makes the GIF look good.


  Tested with FFmpeg 8.1.
categories:
  - images
tags:
  - gif
  - palettegen
  - paletteuse
tested_with: null
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -vf "fps=15,scale=640:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" output.gif
example_type: no-preview
example_player_data:
  - ''
filename: BLJNZ0SH/convert_a_video_clip_to_a_high_quality_gif.md
views: 0
likes: 0
---
