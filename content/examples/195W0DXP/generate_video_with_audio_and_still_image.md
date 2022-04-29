---
id: 195W0DXP
version: '1.0'
enabled: true
date: '2022-04-20T18:04:20.710Z'
author: ffmpeg
title: Generate video with audio and still image
description: Uses faster method than classic "-loop 1 -i" method
categories:
  - video-filters
tags:
  - stillimage
  - youtube
thumbnail_url: null
terminal_command: >-
  ffmpeg -i "${2}" -i "${1}" -filter_complex
  "[0:v]format=pix_fmts=yuv420p,tpad=stop=-1:stop_mode=clone" -shortest -c:a
  flac -y -tune:v stillimage -preset:v ultrafast "${3}.mkv"
example_type: no-preview
example_player_data:
  - null
filename: 195W0DXP/generate_video_with_audio_and_still_image.md
views: 0
likes: 0

---
