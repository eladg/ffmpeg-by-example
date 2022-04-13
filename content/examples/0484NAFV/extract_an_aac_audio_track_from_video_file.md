---
id: 0484NAFV
version: '1.0'
enabled: true
date: '2022-03-30T12:41:27.252Z'
author: Elad Gariany <elad@gariany.com>
title: Extract an AAC audio track from a video file
description: >-
  Assuming `video.mp4` has an audio stream encoded with AAC, the following
  command will stream-copy that stream to `audio.aac`. The `-c:a copy` parameter
  will instruct ffmpeg to copy the audio stream instead of re-encoding it. The
  `-vn` parameter will ignore the video stream of all inputs.
categories:
  - audio
tags:
  - audio-extract
  - no-video
  - ''
thumbnail_url: null
terminal_command: ffmpeg -i video.mp4 -c:a copy -vn audio.aac
example_type: no-preview
example_player_data:
  - ''
filename: 0484NAFV/extract_an_aac_audio_track_from_video_file.md
views: 6
likes: 0

---
