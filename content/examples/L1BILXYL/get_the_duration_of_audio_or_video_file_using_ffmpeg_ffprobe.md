---
id: L1BILXYL
version: '1.0'
enabled: true
date: '2022-04-01T20:40:11.893Z'
author: Elad Gariany <elad@gariany.com>
title: Get the duration of a audio or video file using ffmpeg / ffprobe
description: >-
  Use [ffprobe](https://ffmpeg.org/ffprobe.html),
  [grep](https://ss64.com/osx/grep.html) and
  [cut](https://ss64.com/osx/cut.html) to list metadata of `video.mp4` and
  'grep' the duration value of the video.


  The `-select_streams` parameter to `ffprobe` will select the specific stream
  you want to evaluate. Acceptable values are: `a` for audio, `v` for video and
  `d` for data.


  Running the command without `| grep "duration=" | cut -d '=' -f 2` will log to
  the screen all the metadata stored on the file container format. The data
  includes: `width` and `height` of the video, `codec_name`, `codec_type`,
  `avg_frame_rate` (fps), `nb_frames` (total number of frames) and more.


  The following is a ffprobe dump of the file
  [yoga.mp4](https://www.ffmpegbyexample.com/video/yoga.mp4).


  ```

  [STREAM]

  index=0

  codec_name=h264

  codec_long_name=H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10

  profile=High

  codec_type=video

  codec_tag_string=avc1

  codec_tag=0x31637661

  width=1920

  height=1080

  coded_width=1920

  coded_height=1080

  closed_captions=0

  film_grain=0

  has_b_frames=2

  sample_aspect_ratio=1:1

  display_aspect_ratio=16:9

  pix_fmt=yuv420p

  level=40

  color_range=unknown

  color_space=unknown

  color_transfer=unknown

  color_primaries=unknown

  chroma_location=left

  field_order=progressive

  refs=1

  is_avc=true

  nal_length_size=4

  id=0x1

  r_frame_rate=25/1

  avg_frame_rate=25/1

  time_base=1/12800

  start_pts=0

  start_time=0.000000

  duration_ts=33792

  duration=2.640000

  bit_rate=1246051

  max_bit_rate=N/A

  bits_per_raw_sample=8

  nb_frames=66

  nb_read_frames=N/A

  nb_read_packets=N/A

  extradata_size=48

  DISPOSITION:default=1

  DISPOSITION:dub=0

  DISPOSITION:original=0

  DISPOSITION:comment=0

  DISPOSITION:lyrics=0

  DISPOSITION:karaoke=0

  DISPOSITION:forced=0

  DISPOSITION:hearing_impaired=0

  DISPOSITION:visual_impaired=0

  DISPOSITION:clean_effects=0

  DISPOSITION:attached_pic=0

  DISPOSITION:timed_thumbnails=0

  DISPOSITION:captions=0

  DISPOSITION:descriptions=0

  DISPOSITION:metadata=0

  DISPOSITION:dependent=0

  DISPOSITION:still_image=0

  TAG:language=eng

  TAG:handler_name=Mainconcept MP4 Video Media Handler

  TAG:vendor_id=[0][0][0][0]

  [/STREAM]

  ```
categories:
  - metadata
tags:
  - ffprobe
thumbnail_url: null
terminal_command: >-
  ffprobe -show_streams -select_streams v -v quiet video.mp4 | grep "duration="
  | cut -d '=' -f 2
example_type: no-preview
example_player_data:
  - ''
filename: L1BILXYL/get_the_duration_of_audio_or_video_file_using_ffmpeg_ffprobe.md
views: 0
likes: 0

---
