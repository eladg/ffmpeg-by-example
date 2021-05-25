---
date: '2021-05-25T23:39:24.777Z'
author: Elad Gariany <elad@gariany.com>
title: Mix multiple audio inputs into a single output
filename: mix_multiple_audio_inputs_into_a_single_output-vd0.md
description: >-
  The following command will take 3 (or more!) audio inputs and merge them into
  a single output. This is useful to mix a podcast audio dialog with background
  music, mixing L/R/C audio files into a single stream or for any artistic
  purposes.


  Note that this filter only supports float samples (the amerge and pan audio
  filters support many formats). If the amix input has integer samples then
  aresample will be automatically inserted to perform the conversion to float
  samples. 


  For more info, visit the [amix](https://ffmpeg.org/ffmpeg-filters.html#amix)
  filter documentation section on https://ffmpeg.org
categories:
  - video-filters
tags:
  - filter_complex
  - no-tag2
thumbnail_url: null
example_code: >-
  ffmpeg -i INPUT1 -i INPUT2 -i INPUT3 -filter_complex
  amix=inputs=3:duration=first:dropout_transition=3 OUTPUT

---
