---
id: aB2cDe8F
version: '1.0'
enabled: true
date: '2025-06-27T01:06:15.416Z'
author: Elad Gariany <elad@gariany.com>
title: Detect Scene Changes in Video Using FFmpeg scdet Filter
description: >-
  The FFmpeg 'scdet' filter is a powerful tool for detecting scene changes
  within a video stream. Scene change detection can be useful for video editing,
  smart splitting, automated thumbnail generation, and quality analysis. This
  example shows how to use the 'scdet' filter on a sample file, 'bunny.webm', to
  output timestamps of detected scene changes.\\n\\nCommand Breakdown:\\n\\n-
  `ffmpeg`: Invokes the FFmpeg program.\\n- `-i bunny.webm`: Specifies
  'bunny.webm' as the input file.\\n- `-vf scdet`: Applies the 'scdet' (scene
  detection) video filter to the input. By default, this filter will annotate
  each frame with a scene change score and flag frames where a significant
  change is detected.\\n- `-an`: Disables audio processing, focusing solely on
  video frames.\\n- `-f null -`: Outputs the result to 'null', meaning no actual
  video or audio is written; we're just running the filter analysis for
  reporting purposes. The scene change information will be displayed in the
  terminal output/log.\\n\\nWhen you execute this command, FFmpeg analyzes
  'bunny.webm' and prints messages in the console when scene changes are found.
  This is highly useful in workflows where you need to pinpoint locations for
  automated edits or generate keyframes for further processing.\\n\\nFor more
  detailed detection, you can adjust detection thresholds or output to text logs
  using additional options and filters, making 'scdet' a flexible tool for
  content creators and video engineers.
categories: '["filters"]'
tags:
  - '['
  - '"'
  - s
  - c
  - d
  - e
  - t
  - '"'
  - ','
  - '"'
  - s
  - c
  - e
  - 'n'
  - e
  - '-'
  - d
  - e
  - t
  - e
  - c
  - t
  - i
  - o
  - 'n'
  - '"'
  - ','
  - '"'
  - v
  - i
  - d
  - e
  - o
  - '"'
  - ','
  - '"'
  - a
  - 'n'
  - a
  - l
  - 'y'
  - s
  - i
  - s
  - '"'
  - ','
  - '"'
  - f
  - i
  - l
  - t
  - e
  - r
  - '"'
  - ']'
thumbnail_url: null
terminal_command: ffmpeg -i bunny.webm -vf scdet -an -f null -
example_type: no-preview
example_player_data:
  - null
filename: aB2cDe8F/detect_scene_changes_in_video_using_ffmpeg_scdet_filter.md
views: 0
likes: 0

---
