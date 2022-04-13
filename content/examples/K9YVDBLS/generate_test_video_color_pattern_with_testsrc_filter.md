---
id: K9YVDBLS
version: '1.0'
enabled: true
date: '2022-03-22T16:34:07.714Z'
author: Elad Gariany <elad@gariany.com>
title: Generate test video color pattern with 'testsrc' filter
description: >-
  The testsrc filter generates a test video pattern showing a color pattern, a
  scrolling gradient, and a timestamp. This is useful for testing purposes.


  This example will create a 10 second output, 30 fps (300 frames total), with a
  frame size of 640x360 (testsrc.mpg):
categories:
  - video-filters
tags:
  - lavfi
  - testings
thumbnail_url: https://www.bogotobogo.com/FFMpeg/images/test_patterns/testsrc010.png
terminal_command: ffmpeg -f lavfi -i testsrc=duration=10:size=1280x720:rate=30 testsrc.mpg
example_type: video-url
example_player_data:
  - https://www.bogotobogo.com/FFMpeg/images/test_patterns/testsrc.mp4
filename: K9YVDBLS/generate_test_video_color_pattern_with_testsrc_filter.md
views: 138
likes: 1

---
