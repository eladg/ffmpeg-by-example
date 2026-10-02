---
id: aB2cDe8F
version: '1.0'
enabled: true
date: '2025-06-27T01:06:15.416Z'
author: Elad Gariany <elad@gariany.com>
title: Detect Scene Changes in Video Using FFmpeg scdet Filter
description: >-
  Detect scene changes in a video and print their timestamps to the console —
  useful for smart splitting, automated thumbnails, or finding edit points.
  `-vf scdet` scores every frame for scene changes; `-an -f null -` skips audio
  and discards output so ffmpeg only analyzes.


  For more sensitive detection, raise the threshold, e.g. `-vf scdet=t=15`.
categories:
  - filters
tags:
  - scdet
  - scene-detection
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -vf scdet -an -f null -
example_type: no-preview
example_player_data:
  - null
filename: aB2cDe8F/detect_scene_changes_in_video_using_ffmpeg_scdet_filter.md
views: 0
likes: 0

---
