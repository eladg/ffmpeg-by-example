---
id: 97155ILL
version: '1.0'
enabled: true
date: '2025-03-27T00:17:42.423Z'
author: Elad Gariany <elad@gariany.com>
title: Audio noise reduction using Arnndn
description: >-
  FFmpeg's ARNN (Audio Recurrent Neural Network) noise reduction filter is a
  powerful tool for improving audio quality in videos.


  ARNN is a machine learning-based noise reduction algorithm that uses a
  recurrent neural network to identify and remove background noise from audio.
  The model has been trained on various types of noise and can effectively at
  "Remove background noise", "Reduce wind noise", "Minimize room echo", "Clean
  up audio artifacts", "Preserve speech quality"


  The mix parameter (0.8 in this case) is crucial as it determines how
  aggressive the noise reduction is:

  * Higher values (closer to 1.0) provide stronger noise reduction but might
  affect speech quality

  * Lower values (closer to 0.0) provide gentler noise reduction while
  preserving more of the original audio

  * A value of 0.8 is a good balance between noise reduction and audio quality
  preservation


  ARNNDN Models needed for this command to work can be found here:
  http://github.com/richardpl/arnndn-models.git
categories:
  - audio
tags:
  - filter
  - noise
thumbnail_url: null
terminal_command: >-
  ffmpeg -i input.mp4 -af 'arnndn=model=./arnndn-models/std.rnnn:mix=0.8' -c:a
  aac -b:a 320k -c:v copy output.mp4
example_type: youtube-embed
example_player_data:
  - RCuM3mdayto
filename: 97155ILL/audio_noise_reduction_using_arnndn.md
views: 0
likes: 0

---
