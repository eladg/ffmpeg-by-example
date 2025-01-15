---
id: Q18ZYF2B
version: '1.0'
enabled: true
date: '2025-01-15T16:17:57.647Z'
author: Command line magic
title: Video Echo Effect with Delay and Hue using Lagfun
description: >-
  Kids bored on a rainy day, put this on and watch them play. Hook this up to a
  TV with a computer with a webcam and they can watch the effects live.
  /dev/video0 needs to be changed to whatever your cam is.


  Source: https://x.com/climagic/status/1401975022101610497
categories:
  - video-filters
tags:
  - filter
  - lagfun
thumbnail_url: null
terminal_command: >-
  # linux

  ffplay -i /dev/video0 -vf 'lagfun=decay=0.98[tmp]; [tmp] hue=180*sin(t)' 


  # macos

  ffplay -f avfoundation -i 0 -framerate 30 -vf 'lagfun=decay=0.98[tmp]; [tmp]
  hue=180*sin(t)'
example_type: youtube-embed
example_player_data:
  - CE-aYbLWyxw
filename: Q18ZYF2B/video_echo_effect_with_delay_and_hue_using_lagfun.md
views: 0
likes: 0

---
