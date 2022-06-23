---
id: OER37KDE
version: '1.0'
enabled: true
date: '2022-06-23T18:10:35.937Z'
author: Elad Gariany <elad@gariany.com>
title: Extract X Frames From Specific Times to JPG Files
description: >-
  The following will take a given input video (e.g. `bunny.mp4`) and by using
  the [`select`](https://ffmpeg.org/ffmpeg-filters.html#select_002c-aselect)
  filter, will only let frames at a specific time (or any valid
  [Expression](https://ffmpeg.org/ffmpeg-utils.html#toc-Expression-Evaluation))
  pass through.



  Since ffmpeg is designed to process an input media file(s) in a frame-by-frame
  basis. By default, the output of a filter chain will be the same frame rate as
  the input. This is defined as 'presentation timestamp' or PTS in short.



  To override this, we need to modify the PTS of the output using the
  [`setpts`](https://ffmpeg.org/ffmpeg-filters.html#setpts_002c-asetpts) filter.



  Without it, when the `select` condition is met, the frame will pass through.
  However, when the condition is false and in the lack of any frame data to fill
  into the needed output frame rate, ffmpeg will repeat the last known frame.



  To fix that, we want to limit the PTS to the number of unique frames generated
  by the `select` filter. The expression `N / FRAME_RATE / TB` will do exactly
  that.



  To generate jpg output files, I follow the same principles of the '[Conver
  Video File to jpeg
  Images](https://www.ffmpegbyexample.com/examples/svba8srd/convert_video_file_to_jpeg_images/)'
  example.
categories:
  - images
tags:
  - extract-thumbnails
  - video-extract
thumbnail_url: null
terminal_command: >-
  ffmpeg -i video.mp4 -vf
  "select=(eq(22.0\,t))+(eq(32.0\,t))+(eq(84.0\,t))+(eq(98.0\,t))+(eq(120.0\,t)),setpts=N/FRAME_RATE/TB"
  -f image2 output/%03d.jpeg
example_type: picture
example_player_data:
  - https://ffmpeg-by-example.s3.amazonaws.com/extract-frames-at-time.jpg
filename: OER37KDE/extract_frames_from_specific_times_to_jpg_files.md
views: 0
likes: 0

---
