---
id: FNJRNX47
version: '1.0'
enabled: true
date: '2022-06-14T23:14:46.382Z'
author: Elad Gariany <elad@gariany.com>
title: Loop images at specific frame rate to generate a video
description: >-
  Given a set of 9 images (e.g. [for
  example](https://ffmpeg-by-example.s3.amazonaws.com/gif-12fps.zip)), generate
  a video that loops at 12 fps for 3 seconds.


  Command breakdown:


  `-i gif/%d.png` will instruct ffmpeg to load 1.png, 2.png, ... files from the
  `gif/` folder.


  `-vf '[in]fps=12[v];` adjust the frame rate of the `[in]` stream (i.e. the
  images) to 12 frames per second. Name this stream 'v', to be used as part of
  the video filter chain. More info on the [fps filter
  here](https://ffmpeg.org/ffmpeg-filters.html#fps-1).


  `[v]loop=loop=-1:size=9:start=0[out]'` Take input stream 'v', and loop it. The
  loop should start on the 0 frames, with a size of 9 frames and it should
  repeat indefinitely (i.e. -1). You may specify how many times you want the
  loop to repeat. See more info on the [loop filter
  here](https://ffmpeg.org/ffmpeg-filters.html#loop).


  `-c:v libx264 -crf 21` Use the libx264 encoding library with a "Constant Rate
  Factor" of 21.


  `-r 30` Although the 'v' stream loops at 12 fps, the generated video stream is
  at 30 fps. It is very likely that we are repeating frames (say the 1st frame) a couple of
  times on the output video, since the output fps is higher than the inputs. 
  For optimization purposes, it could be wise to set the frame rate to 12, 
  however, it was important for me to show with this example that these two 
  variables are independent of each other.


  `-t 3` Since our `loop` filter will repeat the same input indefinitely, we
  want to limit the output stream to 3 seconds. This will break the loop
  operation once the generated video is 3 seconds.
categories:
  - images
tags:
  - gif
  - meme
thumbnail_url: null
terminal_command: >-
  ffmpeg -i gif/%d.png -vf '[in]fps=12[v];[v]loop=loop=-1:size=9:start=0[out]'
  -c:v libx264 -crf 21 -r 30 -t 3 video-gif.mp4
example_type: video-url
example_player_data:
  - https://ffmpeg-by-example.s3.amazonaws.com/gif-12fps.mp4
filename: FNJRNX47/loop_images_at_specific_frame_rate_to_generate_video.md
views: 0
likes: 0

---
