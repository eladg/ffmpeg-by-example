---
id: 90PERMBG
version: '1.0'
enabled: true
date: '2022-04-12T04:36:02.368Z'
author: Elad Gariany <elad@gariany.com>
title: Generate a 'tile' thumbnail picture every 30 frames of a video
description: >-
  The following command will take any input video, in our case
  [`yoga.mp4`](https://www.ffmpegbyexample.com/video/yoga.mp4), snap a frame
  every 30 frames (using the filter `select='not(mod(n\,30))'`), scale it to
  160x120 (using the filter `scale=160:120`) and organize each frame in a tile
  using the `tile` filter.


  The tile filter can be used to generate a 'storyboard' image for video player
  (e.g. on
  [youtube](https://venturebeat.com/2012/01/13/youtube-player-storyboard-thumbnail-feature/)).


  The [tile](http://ffmpeg.org/ffmpeg-filters.html#tile-1) filter supports
  different layouts (i.e. `COLUMNSxROWS`), padding, margin, background color and
  more. For full info, see the [FFmpeg tile filter
  documentation](http://ffmpeg.org/ffmpeg-filters.html#tile-1).
categories:
  - video-filters
tags:
  - filter
  - extract-thumbnails
thumbnail_url: null
terminal_command: >-
  ffmpeg -i yoga.mp4 -vf select='not(mod(n\,30))',scale=160:120,tile -frames:v 1 preview.jpg
example_type: picture
example_player_data:
  - https://ffmpeg-by-example.s3.amazonaws.com/yoga-tile-preview.jpg
filename: 90PERMBG/generate_tile_thumbnail_picture_every_30_frames_of_video.md
views: 0
likes: 0

---
