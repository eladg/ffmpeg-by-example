---
id: EWV96SUD
version: '1.0'
enabled: true
date: '2025-01-15T12:07:30.427Z'
author: Eduardo <eduardoarandah@gmail.com>
title: Convert Mac OS .mov video recordings in your desktop to small .mp4 videos
description: >-
  Ever wanted to show something real quick to a friend as a video? 


  Record your screen with macOS (Shift+Cmd+5) then execute this command to
  convert the resulting .mov video to a small .mp4 file


  Resulting video is as small as possible so you can send it via email,
  telegram, WhatsApp, etc 
categories:
  - video
tags:
  - macos
  - mov
thumbnail_url: null
terminal_command: >-
  find ~/Desktop -maxdepth 1 -type f -iname "*.mov" -exec ffmpeg -i "{}" -q:v 0
  -filter:v fps=10 "{}".mp4 -y \;
example_type: no-preview
example_player_data:
  - null
filename: >-
  EWV96SUD/convert_mac_os_mov_video_recordings_in_your_desktop_to_small_mp4_videos.md
views: 0
likes: 0

---
