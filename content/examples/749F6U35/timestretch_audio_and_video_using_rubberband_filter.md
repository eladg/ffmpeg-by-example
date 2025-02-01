---
id: 749F6U35
version: '1.0'
enabled: true
date: '2025-02-01T03:10:41.002Z'
author: Elad Gariany <elad@gariany.com>
title: Timestretch Audio and Video Using 'Rubberband' Filter
description: >-
  The following command will be a video that plays at half speed with audio
  that's both slowed down and pitched down by an octave.


  Note: To enable compilation of this filter, you need to configure FFmpeg with
  `--enable-librubberband`.


  `librubberband` also support amazing time stretching capability (i.e.:
  slowdown the audio without changing the pitch). To achieve that, remove the
  `pitch=0.5` or set it to `1`.


  ### Filter chain breakdown


  * Video Processing (aka `[v]`): `setpts=2.0*PTS`: multiplies the presentation
  timestamps by 2.0, effectively slowing the video to half speed.


  * Audio Processing (aka `[a]`): `rubberband=tempo=0.5:pitch=0.5`: `tempo=0.5`
  slow down the audio to half speed and `pitch=0.5` lower the pitch by one
  octave.

  ### Video Explanation

  * 00-15: The original video clip
  * 15-30: Video slowdown using `setpts=2.0*PTS` and `atempo=0.5`
  * 30-45: Video slowdown and `rubberband=tempo=0.5`
  * 45-60: Video slowdown and `rubberband=tempo=0.5:pitch=0.5`


  Refer to the ffmpeg documentation for more info about [Rubberband
  filter](https://ffmpeg.org/ffmpeg-filters.html#rubberband).
categories:
  - audio
tags:
  - timestrech
  - rubberband
  - speed
thumbnail_url: null
terminal_command: >-
  ffmpeg input.mp4 -filter_complex
  "[0:v]setpts=2.0*PTS[v];[0:a]rubberband=tempo=0.5:pitch=0.5[a]" -map "[v]"
  -map "[a]" output-tempo-pitch-0.5.mp4
example_type: youtube-embed
example_player_data:
  - Kv31DH08r9s
filename: 749F6U35/timestretch_audio_and_video_using_rubberband_filter.md
views: 0
likes: 0

---
