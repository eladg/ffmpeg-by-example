---
id: 44AI1VRH
version: '1.0'
enabled: true
date: '2022-03-22T08:19:51.875Z'
author: Elad Gariany <elad@gariany.com>
title: Scale input video to fix size (640x360)
description: >-
  Takes an input video file and 'scale' every video frame to a fixed size of
  640x360 pixels. This is useful for generating a smaller version of a video
  file to share on a "[content distribution
  network](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)".
categories:
  - video-filters
tags:
  - filter
thumbnail_url: null
terminal_command: ffmpeg -i "video.mp4" -vf "scale=640:360" "video640x360.mp4"
views: 162
likes: 0
example_type: no-preview
filename: 44AI1VRH/scale_input_video_to_fix_size_640x360.md

---
