---
id: BV21EGIL
version: '1.0'
enabled: true
date: '2024-11-21T17:20:49.022Z'
author: Elad Gariany <elad@gariany.com>
title: Analyze video frames, timecode and metadata with showinfo filter
description: >
  The following FFmpeg command extracts and displays detailed information about
  each frame in a video file. 


  * `-i input.mp4`: Specifies the input file that you want to
  process.

  * `-vf showinfo`: The showinfo filter prints detailed information about each
  frame to the standard output. This can include things like frame number,
  timestamp, frame type (I, P, B), resolution, and other frame-related metadata.

  * `-f null -`: This specifies the output format. `-f null` means that no actual
  output file is generated. The `-` directs the output to the standard output
  (typically the terminal or console). In this case, you're not saving the video
  or audio, only showing information about the video frames.
categories:
  - video-filters
tags:
  - showinfo
  - metadata
  - frames
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -vf showinfo -f null -
example_type: youtube-embed
example_player_data:
  - wEakvAKVqbg
filename: BV21EGIL/analyze_video_frames_timecode_and_metadata_with_showinfo_filter.md
views: 0
likes: 0

---
