---
id: AI15CVT5
version: '1.0'
enabled: true
date: '2025-01-21T13:30:07.483Z'
author: niutech
title: Stabilize video using VidStab
description: >-
  ### 1. Install ffmpeg with the vidstab plugin:


  - OSX: Install via [Homebrew](https://brew.sh/) - `brew install ffmpeg
  --with-libvidstab`

  - Linux: [download binaries here](https://johnvansickle.com/ffmpeg/) (vidstab
  included)

  - Windows: [download binaries here](https://www.gyan.dev/ffmpeg/builds/)
  (vidstab included)


  ### 2. Analyze any video and generate a so called transform file, which
  describes camera movements


  The command below generates a `transforms.trf` file:


  ```

  ffmpeg -i input.mp4 -vf vidstabdetect=shakiness=7 -f null -

  ```


  Options:

  - **shakiness**: Set the shakiness of input video or quickness of camera. It
  accepts an integer in the range 1-10, a value of 1 means little shakiness, a
  value of 10 means strong shakiness. Default value is 5.


  ### 3. Stabilize video


  Using the following command:


  ```

  ffmpeg -i input.mp4 -vf
  vidstabtransform=smoothing=30:zoom=5:input="transforms.trf" output.mp4

  ```


  Options:

  - **smoothing**: Default value is 10. For example, a number of 10 means that
  21 frames are used (10 in the past and 10 in the future) to smoothen the
  motion in the video. A larger value leads to a smoother video, but limits the
  acceleration of the camera (pan/tilt movements).
    - recommended value: `videoFPS / 2`
  - **zoom**: Set percentage (%) to zoom into video. A positive value will
  result in a zoom-in effect, a negative value in a zoom-out effect. Default
  value is 0 (no zoom).


  Read more in the [vidstab
  documentation](https://github.com/georgmartius/vid.stab).


  ### Create side-by-side comparsion video:


  ```

  ffmpeg -i original.mp4 -i stabilized.mp4 -filter_complex
  "[0:v:0]pad=iw*2:ih[bg]; [bg][1:v:0]overlay=w" sidebyside.mp4

  ```
categories:
  - video-filters
tags:
  - stabilization
thumbnail_url: null
terminal_command: |-
  ffmpeg -i input.mp4 -vf vidstabdetect -f null -
  ffmpeg -i input.mp4 -vf vidstabtransform output.mp4
example_type: no-preview
example_player_data:
  - null
filename: AI15CVT5/stabilize_video_using_vidstab.md
views: 0
likes: 0

---
