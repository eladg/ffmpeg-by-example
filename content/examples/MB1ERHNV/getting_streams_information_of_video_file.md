---
id: MB1ERHNV
version: '1.0'
enabled: true
date: '2022-03-30T12:00:13.462Z'
author: Elad Gariany <elad@gariany.com>
title: Getting streams information of a video file
description: >-
  By calling ffmpeg on a media file such as audio, video, or image without an
  output file - ffmpeg will list the different tracks on the media container,
  their encoding, and other relevant metadata.


  Example output:
  
  ```
    Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'video.mp4':
    Metadata:
      major_brand     : isom
      minor_version   : 512
      compatible_brands: isomiso2avc1mp41
      encoder         : Lavf58.20.100
    Duration: 01:27:54.84, start: 0.000000, bitrate: 2666 kb/s
    Stream #0:0[0x1](und): Video: h264 (High) (avc1 / 0x31637661), yuv420p(progressive), 1920x1080 [SAR 1:1 DAR 16:9], 2530 kb/s, 25 fps, 25 tbr, 12800 tbn (default)
      Metadata:
        handler_name    : VideoHandler
        vendor_id       : [0][0][0][0]
    Stream #0:1[0x2](und): Audio: aac (LC) (mp4a / 0x6134706D), 44100 Hz, stereo, fltp, 128 kb/s (default)
      Metadata:
        handler_name    : SoundHandler
        vendor_id       : [0][0][0][0]

    At least one output file must be specified
  
  ```


  In the example below Input #0 `video.mp4` has 2 tracks, officially named
  `Stream #0:0` and `Stream #0:1`. 


  The first stream (`#0:0`) is a video stream encoded in [`h264`](https://trac.ffmpeg.org/wiki/Encode/H.264) encoding, has a [pixel
  format](https://ffmpeg.org/doxygen/trunk/pixfmt_8h_source.html) of `yuv420p`
  and frame size of [`1920x1080 SAR 1:1 DAR
  16:9`](https://en.wikipedia.org/wiki/Display_aspect_ratio). The average video
  [bit rate](https://en.wikipedia.org/wiki/Bit_rate) is 2530 kb/s (2.4 megabytes
  per second) and 25 [frames per
  seconds](https://en.wikipedia.org/wiki/Frame_rate).


  The second stream (`#0:1`) is an audio stream encoded in
  [`aac`](https://trac.ffmpeg.org/wiki/Encode/AAC) stereo stream encoded at an
  average of 128 kb/s and [sample
  rate](https://en.wikipedia.org/wiki/Sampling_(signal_processing)) of 44100 Hz.
categories:
  - metadata
tags:
  - metadata
thumbnail_url: null
terminal_command: |-
  ffmpeg -hide_banner -i video.mp4
example_type: no-preview
example_player_data:
  - ''
filename: MB1ERHNV/getting_streams_information_of_video_file.md
views: 0
likes: 0
---
