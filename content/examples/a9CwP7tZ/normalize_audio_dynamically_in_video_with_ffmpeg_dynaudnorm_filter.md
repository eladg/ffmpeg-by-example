---
id: a9CwP7tZ
version: '1.0'
enabled: true
date: '2025-06-27T00:37:20.169Z'
author: Elad Gariany <elad@gariany.com>
title: Normalize Audio Dynamically in a Video with FFmpeg dynaudnorm Filter
description: >-
  Learn how to use the powerful FFmpeg 'dynaudnorm' filter to dynamically
  normalize the audio of your video files. Dynamic audio normalization is
  crucial for videos where the audio volume varies significantly, making quiet
  parts louder and loud parts softer for a consistent listening experience. In
  this example, we use a source file named 'yoga.mp4', a common scenario where
  background music or guided instructions might have uneven sound levels. The
  command below applies the 'dynaudnorm' audio filter to the entire video while
  copying the video stream untouched, ensuring video quality is
  preserved.\n\nCommand Breakdown:\n- `ffmpeg` - Launches the FFmpeg command
  line interface.\n- `-i yoga.mp4` - Specifies 'yoga.mp4' as the input video
  file.\n- `-af dynaudnorm` - Applies the 'dynaudnorm' audio filter, which
  analyzes and normalizes audio levels dynamically throughout the file.\n- `-c:v
  copy` - Copies the video stream directly from the input to the output without
  re-encoding, thus saving time and avoiding quality loss.\n-
  `yoga_normalized.mp4` - The name of the output file with normalized
  audio.\n\nUsing 'dynaudnorm' can greatly improve the viewer's experience,
  especially for fitness or instructional videos where clear, even audio is
  essential. This method retains the original video quality and increases audio
  clarity across all playback devices. If you need more control, the
  'dynaudnorm' filter is customizable with options for frame size, intensity,
  and more. For most cases, the default settings work great!\n\nSEO Keywords:
  FFmpeg dynaudnorm, audio normalization, normalize audio, video editing,
  yoga.mp4 example, dynamic volume control.
categories: '["audio"]'
tags:
  - '['
  - '"'
  - d
  - 'y'
  - 'n'
  - a
  - u
  - d
  - 'n'
  - o
  - r
  - m
  - '"'
  - ','
  - '"'
  - a
  - u
  - d
  - i
  - o
  - ' '
  - 'n'
  - o
  - r
  - m
  - a
  - l
  - i
  - z
  - a
  - t
  - i
  - o
  - 'n'
  - '"'
  - ','
  - '"'
  - f
  - f
  - m
  - p
  - e
  - g
  - ' '
  - f
  - i
  - l
  - t
  - e
  - r
  - s
  - '"'
  - ','
  - '"'
  - v
  - i
  - d
  - e
  - o
  - ' '
  - e
  - d
  - i
  - t
  - i
  - 'n'
  - g
  - '"'
  - ','
  - '"'
  - 'n'
  - o
  - r
  - m
  - a
  - l
  - i
  - z
  - e
  - ' '
  - a
  - u
  - d
  - i
  - o
  - '"'
  - ']'
thumbnail_url: null
terminal_command: ffmpeg -i yoga.mp4 -af dynaudnorm -c:v copy yoga_normalized.mp4
example_type: no-preview
example_player_data:
  - null
filename: a9CwP7tZ/normalize_audio_dynamically_in_video_with_ffmpeg_dynaudnorm_filter.md
views: 0
likes: 0

---
