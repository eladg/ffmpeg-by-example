---
id: U6J2DG6Y
version: '1.0'
enabled: true
date: '2026-10-11T16:45:05.000Z'
author: Elad Gariany <elad@gariany.com>
title: Cut a Video by Start and End Time (Without Re-encoding)
description: >-
  Cut a single clip from a video between a start and end time, without
  re-encoding — useful for quickly extracting a segment to share.


  `-ss 00:00:30` - the start time of the clip.


  `-to 00:01:00` - the end time of the clip.


  `-c copy` - copies both streams bit-for-bit, so it is lossless and takes
  seconds; the start may snap to the nearest keyframe.


  Tested with FFmpeg 7.1.
categories:
  - video
tags:
  - trim
  - cut
  - stream-copy
tested_with: null
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -ss 00:00:30 -to 00:01:00 -c copy output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: U6J2DG6Y/cut_a_video_by_start_and_end_time_without_re_encoding.md
views: 0
likes: 0
---
