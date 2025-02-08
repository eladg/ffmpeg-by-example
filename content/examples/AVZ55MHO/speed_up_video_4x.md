---
id: AVZ55MHO
version: '1.0'
enabled: true
date: '2025-01-21T13:35:47.273Z'
author: niutech
title: Speed up video 4x
description: >-
  For 4x video speed up, set 1/4 * PTS. The audio tempo maximum is 2.0, so we
  need to run it twice.
categories:
  - video-filters
tags:
  - tempo
  - speed
thumbnail_url: null
terminal_command: >-
  ffmpeg -i input.mp4 -vf "setpts=0.25*PTS" -af "atempo=2.0,atempo=2.0"
  output.mp4
example_type: no-preview
example_player_data:
  - null
filename: AVZ55MHO/speed_up_video_4x.md
views: 0
likes: 0

---
