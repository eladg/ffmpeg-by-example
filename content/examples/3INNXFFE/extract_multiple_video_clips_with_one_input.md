---
id: 3INNXFFE
version: '1.0'
enabled: true
date: '2024-11-23T16:20:39.209Z'
author: Elad Gariany <elad@gariany.com>
title: Extract multiple video clips with one input
description: >-
  This command takes a single input video (`input.mp4`), re-encodes the video
  streams (to H.264 with near-lossless quality) while copying the audio stream,
  and generates three 10-second clips starting at specified timestamps (5s, 30s,
  and 1m as `outputX.mp4`). Each segment is saved as a separate output file.


  Note that while it is not required to re-encode the video stream (e.g.: using
  `-c:v copy`), it will guarantee that the clips will include all the requested
  frames data from the original video.
categories:
  - editing
tags:
  - cut
  - multiple-outputs
thumbnail_url: null
terminal_command: >-
  ffmpeg -i input.mp4 -c:a copy -c:v libx264 -crf 18 -ss 00:00:05 -t 10
  output1.mp4 -ss 00:00:30 -t 10 output2.mp4  -ss 00:01:00 -t 10 output3.mp4
example_type: picture
example_player_data:
  - null
filename: 3INNXFFE/extract_multiple_video_clips_with_one_input.md
views: 0
likes: 0

---
