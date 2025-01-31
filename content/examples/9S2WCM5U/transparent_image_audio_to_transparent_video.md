---
id: 9S2WCM5U
version: '1.0'
enabled: true
date: '2025-01-31T10:23:18.698Z'
author: Yoav Vainrich
title: Transparent image + audio to transparent video
description: >
  # Transparent Image + Audio to Transparent Video Command Breakdown


  This FFmpeg command converts an image and audio into a WebM video.  

  This command is optimized for creating a web-friendly video that combines a
  static image with audio, prioritizing fast encoding speed over maximum
  quality.


  ## Input Options

  - `-loop 1`: Loops the image continuously (makes a static image last for the
  duration of the audio)

  - `-i image.png`: First input - the static image

  - `-i audio.mp3`: Second input - the audio file


  ## Audio Encoding Options

  - `-c:a libvorbis`: Use Vorbis codec for audio

  - `-b:a 128k`: Set audio bitrate to 128 kbps


  ## Video Encoding Options

  - `-c:v libvpx-vp9`: Use VP9 codec for video

  - `-tune psnr`: Optimize for PSNR (Peak Signal-to-Noise Ratio) quality metrics

  - `-g 7500`: Set keyframe interval to 7500 frames

  - `-keyint_min 7500`: Set minimum keyframe interval also to 7500 frames

  - `-crf 40`: Set Constant Rate Factor to 40 (higher value means lower quality
  but smaller file size)

  - `-pix_fmt yuva420p`: Use YUV420P pixel format with alpha channel

  - `-threads 4`: Use 4 CPU threads for encoding

  - `-speed 5`: Set encoding speed (higher value is faster but lower quality)

  - `-deadline realtime`: Use realtime encoding mode (faster but lower quality)


  ## Output Options

  - `-shortest`: End the video when the shortest input ends (likely the audio in
  this case)

  - `-movflags +frag_keyframe+empty_moov`: Optimize for web playback

  - `-f webm`: Force WebM container format

  - `output.webm`: Output filename
categories:
  - video
tags:
  - encoding
  - image+audio=video
thumbnail_url: null
terminal_command: >-
  ffmpeg -loop 1 -i image.png -i audio.mp3 -c:a libvorbis -b:a 128k -c:v
  libvpx-vp9 -tune psnr -g 7500 -keyint_min 7500 -crf 40 -pix_fmt yuva420p
  -threads 4 -speed 5 -deadline realtime -shortest -movflags
  +frag_keyframe+empty_moov -f webm output.webm
example_type: no-preview
example_player_data:
  - null
filename: 9S2WCM5U/transparent_image_audio_to_transparent_video.md
views: 0
likes: 0

---
