---
id: 1FPQTHQS
version: '1.0'
enabled: true
date: '2025-01-17T04:40:08.615Z'
author: AndrewWang
title: Recode Your Video To Match Telegram Video Sticker Spec
description: >
  The following command will help you resize your video to match Telegram's specification, one side must be exactly 512 pixels in size – the other side can be 512 pixels or less.
  
  - `-vf
  "scale='if(eq(a,1),512,if(gt(a,1),512,-2))':'if(eq(a,1),512,if(gt(a,1),-2,512))'"`:
  Helps to resize your video to match Telegram's specification, one side must be
  exactly 512 pixels in size – the other side can be 512 pixels or less.

  - `-c:v libvpx-vp9`: VP9 encoding

  - `-an`: Remove Audio, since you're making stickers, audios were useless

  - `-crf 24 -b:v 0 -r 30`: `crf` and `b:v` controls the quality and
  **-r** controls your video framerate, Telegram has a filesize limit at 256KB,
  so you might have to raise **crf** value depending on your original video
  quelity
categories:
  - video
tags:
  - compression
  - telegram
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
