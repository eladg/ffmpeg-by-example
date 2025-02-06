---
id: TNM510Z2
version: '1.0'
enabled: true
date: '2022-04-15T20:34:05.013Z'
author: nimbuz
title: Widescreen Fix
description: changing the Display Aspect Ratio from a video from 4:3 to 16:9
categories:
  - video-filters
tags:
  - aspectratio
  - video
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -c:v copy -c:a copy -aspect 16:9 16x9_output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: TNM510Z2/widescreenfix.md
views: 0
likes: 0

---
