---
id: 1FPQTHQS
version: '1.0'
enabled: true
date: '2025-01-17T04:40:08.615Z'
author: AndrewWang
title: 'Convert Video to Telegram Video Sticker Format (512px Max, 256KB Limit)'
description: >-
  Transform any video into a Telegram-compatible video sticker with automatic resizing and optimization.


  **Command Breakdown:**


  The `scale` filter uses conditional logic: `if(eq(a,1),512,if(gt(a,1),512,-2))` for width and `if(eq(a,1),512,if(gt(a,1),-2,512))` for height. 
  
  
  This ensures one dimension is exactly 512 pixels while maintaining aspect ratio.
  

  **Encoding Settings:**
  

  - `-c:v libvpx-vp9`: Uses VP9 codec for optimal web compression
  
  - `-an`: Removes audio (sticker requirement)
  
  - `-crf 24 -b:v 0`: Sets quality to 24 with variable bitrate
  
  - `-r 30`: Sets 30 FPS framerate
  

  The output WebM format meets Telegram's 256KB file size limit while maintaining visual quality for animated stickers.
categories:
  - video
tags:
  - telegram
  - webm
  - vp9
  - compression
thumbnail_url: null
terminal_command: >-
  ffmpeg -i video.mp4 -vf
  "scale='if(eq(a,1),512,if(gt(a,1),512,-2))':'if(eq(a,1),512,if(gt(a,1),-2,512))'"
  -c:v libvpx-vp9 -an -crf 24 -b:v 0 -r 30 video.webm
example_type: no-preview
example_player_data:
  - null
filename: 1FPQTHQS/recode_your_video_to_match_telegram_video_sticker_spec.md
views: 0
likes: 0
---
