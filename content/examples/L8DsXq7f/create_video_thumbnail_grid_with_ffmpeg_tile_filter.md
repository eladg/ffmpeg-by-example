---
id: L8DsXq7f
version: '1.0'
enabled: true
date: '2025-06-27T00:53:28.894Z'
author: Elad Gariany <elad@gariany.com>
title: Create a Video Thumbnail Grid with FFmpeg Tile Filter
description: >-
  This example demonstrates how to generate a video thumbnail grid using
  FFmpeg’s powerful 'tile' filter. By applying the 'tile' filter to a video
  file, you can combine multiple frames into a single image laid out in a grid
  format. This is particularly useful for creating visual summaries or previews
  of video content. The command provided uses the sharks.mp4 file, capturing 12
  frames and arranging them in a 4x3 grid (4 columns and 3
  rows).\\\\n\\\\nCommand Breakdown:\\\\n- `ffmpeg -i sharks.mp4` — Loads the
  input video file, sharks.mp4.\\\\n- `-vf "select='not(mod(n,30))',tile=4x3"` —
  Applies two video filters in sequence:\\\\n    - `select='not(mod(n,30))'`
  picks one frame every 30 frames (roughly one frame per second if the video is
  30fps), preventing the grid from being filled with very similar consecutive
  frames.\\\\n    - `tile=4x3` composites the selected frames into a 4x3 grid,
  for a total of 12 thumbnails.\\\\n- `-frames:v 1 thumbnail_grid.png` — Tells
  FFmpeg to output a single image file, named thumbnail_grid.png, containing the
  generated grid.\\\\n\\\\nThis approach is excellent for quick video previews
  or film strip effects. You can adjust the grid size and frame selection rate
  for more or fewer thumbnails or different arrangements, making this a flexible
  solution for various workflow needs.
categories: '["filters"]'
tags:
  - '['
  - '"'
  - t
  - i
  - l
  - e
  - '"'
  - ','
  - '"'
  - t
  - h
  - u
  - m
  - b
  - 'n'
  - a
  - i
  - l
  - '"'
  - ','
  - '"'
  - g
  - r
  - i
  - d
  - '"'
  - ','
  - '"'
  - f
  - r
  - a
  - m
  - e
  - s
  - '"'
  - ','
  - '"'
  - i
  - m
  - a
  - g
  - e
  - '"'
  - ']'
thumbnail_url: null
terminal_command: >-
  ffmpeg -i sharks.mp4 -vf "select='not(mod(n\,30))',tile=4x3" -frames:v 1
  thumbnail_grid.png
example_type: no-preview
example_player_data:
  - null
filename: L8DsXq7f/create_video_thumbnail_grid_with_ffmpeg_tile_filter.md
views: 0
likes: 0

---
