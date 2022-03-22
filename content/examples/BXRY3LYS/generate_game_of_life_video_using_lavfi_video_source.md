---
id: BXRY3LYS
version: '1.0'
enabled: true
date: '2022-03-22T09:52:06.526Z'
author: Elad Gariany <elad@gariany.com>
title: Generate "Game of Life" Video using lavfi video source
description: >-
  [Conway's Game of
  Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), also known
  simply as Life, is a cellular automaton devised by the British mathematician
  John Horton Conway in 1970. 


  The following command will generate a random pattern and generate video frames
  for each 'Life' generation.


  Notice that the command will generate a video file without a given input file.
  Read more about '[Video Sources on FFmpeg official
  documentation](https://ffmpeg.org/ffmpeg-filters.html#Video-Sources)'
categories:
  - video-filters
tags:
  - lavfi
  - ''
  - ''
thumbnail_url: null
terminal_command: >-
  ffmpeg -f lavfi -i
  life=s=960x540:mold=10:r=60:ratio=0.1:death_color=#C83232:life_color=#00ff00,scale=960:540:flags=16
  -c:v libx264 -crf 41 -frames:v 1800 -r 60 -t 30 life.mp4
views: 0
likes: 0

---
