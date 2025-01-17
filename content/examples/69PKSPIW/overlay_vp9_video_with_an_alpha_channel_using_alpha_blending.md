---
id: 69PKSPIW
version: '1.0'
enabled: true
date: '2025-01-16T09:30:47.448Z'
author: rna
title: Overlay a VP9 video with an alpha channel using alpha blending
description: >-
  The VP9 codec supports videos with an alpha channel, but simply overlaying
  them does not perform alpha blending. To achieve the desired result, specify
  *libvpx-vp9* as the video codec just before the argument for the VP9 video to
  be overlaid.


  `-i background-video.mp4` specifies the video file to be used as the
  background.


  `-c:v libvpx-vp9` specifies libvpx-vp9 as the codec for the overlay video file
  that follows. Without this specification, the overlay will be applied, but the
  alpha channel will not be handled correctly.


  `-i overlay-vp9-video-with-alpha-channel.webm` specifies the VP9-encoded video
  file with an alpha channel to be used as the overlay.


  `-filter_complex` "[0:v][1:v]overlay" overlays the video specified by the
  second -i argument onto the video specified by the first -i argument.
categories:
  - video-filters
tags:
  - overlay
thumbnail_url: null
terminal_command: >-
  ffmpeg -i background-video.mp4 -c:v libvpx-vp9 -i
  overlay-vp9-video-with-alpha-channel.webm -filter_complex "[0:v][1:v]overlay"
  out.mp4
example_type: no-preview
example_player_data:
  - null
filename: 69PKSPIW/overlay_vp9_video_with_an_alpha_channel_using_alpha_blending.md
views: 0
likes: 0

---
