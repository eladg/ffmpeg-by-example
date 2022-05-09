---
id: L97ODZ1T
version: '1.0'
enabled: true
date: '2022-05-09T20:54:29.628Z'
author: Elad Gariany <elad@gariany.com>
title: Erratic Camera Movement Effect Using Crop Filter
description: >-
  The following example is based on the
  [crop](https://ffmpeg.org/ffmpeg-filters.html#crop) filter
  [Examples](https://ffmpeg.org/ffmpeg-filters.html#Examples-55) section.


  For input, we use the [testsrc](https://www.ffmpegbyexample.com/tags/testsrc/)
  video generator to generate a 30s 720p video at 30 fps, and apply a `crop`
  filter to it.




  The crop filter takes 4 parameters (w,h,x,y):

  * `w`: The `width` of the crop

  * `h`: The `height` of the crop

  * `x`: The x point on the width axis where the crop should start

  * `y`: The y point on the height axis where the crop should start




  In this example, for the X and Y point, we use a dynamic point based on the
  `t` (timestamp) param and the `sin` function. Since the
  [Sine](https://en.wikipedia.org/wiki/Sine_and_cosine) ƒx returns a value
  between -1 and 1, this generates movement in the coordinates of where the `x`
  and `y` crop point.
categories:
  - video-filters
tags:
  - testsrc
  - camera
  - crop
thumbnail_url: null
terminal_command: >-
  ffmpeg -f lavfi -i testsrc=duration=30:size=1280x720:rate=30 -vf
  'crop=in_w/2:in_h/2:(in_w-out_w)/2+((in_w-out_w)/2)*sin(t*1.25):(in_h-out_h)/2
  +((in_h-out_h)/2)*sin(t*1.625)' -c:v libx264 -q:v 1 output.mp4
example_type: youtube-embed
example_player_data:
  - EEb3hlL6L4c
filename: L97ODZ1T/erratic_camera_movement_effect_using_crop_filter.md
views: 0
likes: 0

---
