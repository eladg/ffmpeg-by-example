---
id: I7N6EOBA
version: '1.0'
enabled: true
date: '2022-04-15T20:49:10.883Z'
author: nimbuz
title: Rotate Video left/right
description: |-
  rotate a video by 270° without re-encoding it
  replace 270 with 90 and the video rotates to the right
categories:
  - video-filters
tags:
  - video-source
thumbnail_url: null
terminal_command: ffmpeg -i %1 -c copy -metadata:s:v:0 rotate=270 -y %1_2output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: I7N6EOBA/rotate_video_left_right.md
views: 0
likes: 0

---
