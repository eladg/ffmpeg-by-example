---
id: N6MP8ZPT
version: '1.0'
enabled: true
date: '2026-11-11T17:46:16.000Z'
author: Elad Gariany <elad@gariany.com>
title: Split a Video Into Equal Parts
description: >-
  Split a long video into equal-length chunks — handy for uploads with size
  limits or breaking a recording into chapters. The segment muxer does it in
  one pass, and `-c copy` avoids re-encoding, so it is fast and lossless.


  `-segment_time 60` makes each part about 60 seconds long. With stream copy,
  splits land on the nearest keyframe, so parts are approximately the requested
  length. `-reset_timestamps 1` restarts timestamps in each part so players
  start them at 0:00.


  Tested with FFmpeg 8.1.
categories:
  - video
tags:
  - split
  - segment
  - chapters
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -c copy -f segment -segment_time 60 -reset_timestamps 1 part_%03d.mp4
example_type: no-preview
example_player_data:
  - ''
filename: N6MP8ZPT/split_a_video_into_equal_parts.md
views: 0
likes: 0
---
