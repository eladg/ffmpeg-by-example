---
id: ZS9W7H3W
version: '1.0'
enabled: true
date: '2026-10-20T16:44:38.000Z'
author: Elad Gariany <elad@gariany.com>
title: Resize a Video to 720p Keeping Aspect Ratio
description: >-
  Downscale a video to 720p width without stretching or squashing it — handy
  before uploading to size- or resolution-limited platforms. `-vf
  "scale=1280:-2"` sets the width to 1280 pixels and computes the height
  automatically; the `-2` preserves the aspect ratio while rounding to an even
  pixel count, which encoders like libx264 require. Swap in `1920:-2` for 1080p.


  Tested with FFmpeg 8.1.
categories:
  - video
tags:
  - resize
  - 720p
  - scale
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -vf "scale=1280:-2" output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: ZS9W7H3W/resize_a_video_to_720p_keeping_aspect_ratio.md
views: 0
likes: 0
---
