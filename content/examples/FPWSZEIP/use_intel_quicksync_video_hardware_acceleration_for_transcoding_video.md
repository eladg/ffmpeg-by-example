---
id: FPWSZEIP
version: '1.0'
enabled: true
date: '2025-01-21T13:49:09.283Z'
author: niutech
title: Use Intel QuickSync Video hardware acceleration for transcoding video
description: '`global_quality` parameter ranges from 1 (almost lossless) to 50 (very lossy).'
categories:
  - video
tags:
  - acceleration
thumbnail_url: null
terminal_command: >-
  # For H264:

  ffmpeg -hwaccel qsv -c:v h264_qsv -i input.mp4 -c:v h264_qsv -global_quality
  40 -look_ahead 1 output.mp4

  # For HEVC:

  ffmpeg -hwaccel qsv -c:v hevc_qsv -i input.mp4 -c:v hevc_qsv -global_quality
  40 -look_ahead 1 output.mp4

  # For rescaling and changing framerate add:

  -vf 'vpp_qsv=framerate=30,scale_qsv=w=1920:h=1080'
example_type: no-preview
example_player_data:
  - null
filename: >-
  FPWSZEIP/use_intel_quicksync_video_hardware_acceleration_for_transcoding_video.md
views: 0
likes: 0

---
