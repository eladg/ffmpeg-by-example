---
id: 8IOQJRYN
version: '1.0'
enabled: true
date: '2025-10-02T15:57:11.427Z'
author: Sudo Queen
title: Make quiet videos louder
description: >-
  # Explanation of the command: 


  + `-i` stands for" input "(input file). 
   Input.mp4 is the input file you want to edit. 
  + `Filter: A` stands for" audio filter "(audio filter). 

  + `Volume = 2.0` is the specific filter that is applied to the audio. 
   `Volume = 2.0` means that the volume of the audio is doubled (2.0 corresponds to 200% of the original volume). You can adjust this value to increase or reduce the volume (e.g. volume = 0.5 for half the volume). 
  + `output.mp4` This is the name of the issuing file that is created. In this
  case, the edited video is saved as output.mp4.
categories:
  - Volume
tags:
  - '#volume'
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -filter:a "volume=2.0" output.mp4
example_type: no-preview
example_player_data:
  - null
filename: 8IOQJRYN/make_quiet_videos_louder.md
views: 0
likes: 0

---
