---
id: RPOCU01R
version: '1.0'
enabled: true
date: '2022-04-29T05:40:10.040Z'
author: Elad Gariany <elad@gariany.com>
title: >-
  "Retro Video Filter" using video masking, sepia tones and advanced overlaying
  technics
description: >-
  This is a very complex command with multiple steps. For a full breakdown,
  please refer to the full blog post: ["Step by Step Retro Video
  Filter"](https://www.gariany.com/2020/08/ffmpeg-step-by-step-retro-video-filter/index.html).
categories:
  - video-filters
tags:
  - filter
  - sepia
  - art
thumbnail_url: null
terminal_command: >-
  # take input.mp4, square.png mask file and '9v9VVN1RE84.mp4' grit/film
  distortion video and overlay it on the frame

  ffmpeg -y -f rawvideo -pix_fmt rgb32 -s 1920x1080 -i /dev/zero -r 30
  -filter_complex
  "movie='square.png'[sqr];[0:][sqr]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2[canvas];[canvas]chromakey=0x008000:blend=0:similarity=0.15[canvas2];[0:][canvas2]overlay[canvas3];movie='input.mp4',scale=1920:1080[i1];[0:][i1]overlay='if(gt(random(0),
  0.2), 1, 4)':'if(gt(random(0), 0.1), 1,
  2)',colorchannelmixer=.393:.769:.189:0:.349:.686:.168:0:.272:.534:.131[i2];[i2][canvas3]overlay[mix1];movie='9v9VVN1RE84.mp4',scale=1920:1080[grit_i1];[grit_i1]chromakey=0x16FF0A:blend=0.2:similarity=0.3,colorchannelmixer=.3:.4:.3:0:.3:.4:.3:0:.3:.4:.3[grit1];[0:][mix1]overlay[o1];[o1][grit1]overlay[o]"
  -map "[o]" -c:v libx264 -crf 31 -frames:v 300 output.mp4
example_type: video-url
example_player_data:
  - >-
    https://www.gariany.com/2020/08/ffmpeg-step-by-step-retro-video-filter/result.mp4
filename: >-
  RPOCU01R/retro_video_filter_using_video_masking_sepia_tones_and_advanced_overlaying_technics.md
views: 18
likes: 0

---
