---
id: EDKHL1R6
version: '1.0'
enabled: true
date: '2024-11-22T08:31:05.354Z'
author: Elad Gariany <elad@gariany.com>
title: List all supported Audio/Video encoders with FFmpeg
description: >-
  The `-encoders` flag will print a list of supported audio/video and generally
  data generating encoders. You can use grep to filter out rows of text that
  does not fit the grep regular expression.


  ```

  Encoders:
   V..... = Video
   A..... = Audio
   S..... = Subtitle
   .F.... = Frame-level multithreading
   ..S... = Slice-level multithreading
   ...X.. = Codec is experimental
   ....B. = Supports draw_horiz_band
   .....D = Supports direct rendering method 1
  ```


  An example of video encoders (items on the list that starts with `V`)

  ```
   V..... libsvtav1            SVT-AV1 encoder
   V..... wmv1                 Windows Media Video 7
   V..... wmv2                 Windows Media Video 8
  ```


  An example of audio encoders (items on the list that starts with `A`)

  ```
   A....D aac                  AAC (Advanced Audio Coding)
   A....D alac                 ALAC (Apple Lossless Audio Codec)
   A..... alac_at              alac (AudioToolbox) (codec alac)
  ```



  An example of subtitle encoders (items on the list that starts with `S`)

  ```
   S..... ssa                  ASS (Advanced SubStation Alpha) subtitle (codec ass)
   S..... ass                  ASS (Advanced SubStation Alpha) subtitle
   S..... dvbsub               DVB subtitles (codec dvb_subtitle)
   S..... srt                  SubRip subtitle (codec subrip)
  ```
categories:
  - configurations
tags:
  - metadata
  - no-video
thumbnail_url: null
terminal_command: |
  # get a list of audio/video/subtitle 'encoders'
  ffmpeg -hide_banner -encoders

  # grep only audio encoders
  ffmpeg -hide_banner -encoders | grep "^ A"

  # grep only video encoders
  ffmpeg -hide_banner -encoders | grep "^ V"
example_type: no-preview
example_player_data:
  - null
filename: EDKHL1R6/list_all_supported_audio_video_encoders_with_ffmpeg.md
views: 0
likes: 0

---
