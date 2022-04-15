---
id: TNM510Z2
version: '1.0'
enabled: true
date: '2022-04-15T20:34:05.013Z'
author: nimbuz
title: WidescreenFix
description: changing the Display Aspect Ratio from a video from 4:3 to 16:9
categories:
  - video-filters
tags: []
thumbnail_url: null
terminal_command: ffmpeg.exe -i %1 -vcodec copy -acodec copy -aspect 16:9 %1_output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: TNM510Z2/widescreenfix.md
views: 0
likes: 0

---
