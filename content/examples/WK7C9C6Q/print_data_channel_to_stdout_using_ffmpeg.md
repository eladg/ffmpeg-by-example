---
id: WK7C9C6Q
version: '1.0'
enabled: true
date: '2023-04-12T23:11:54.962Z'
author: Elad Gariany <elad@gariany.com>
title: Print a data channel to STDOUT using ffmpeg
description: >-
  In this specific example, we read an RTSP stream from a server. The RTSP
  server has two streams - A video stream and a 'Data' stream. Since we aim to
  print the data channel byte data to STDOUT, we are 'mapping' the 2nd stream of
  the first input (i.e.: `-map 0:1`) to the output. We ensure the 'encoding' we
  use is `text` and that this encoding is set to 'data' format (i.e.: `-c text
  -f data`). 


  Finally, since FFmpeg typically expects a file output, we add the `-` to
  indicate we would like the output to go to STDOUT. That's it!
categories:
  - metadata
tags:
  - no-video
  - metadata
thumbnail_url: null
terminal_command: >-
  ffmpeg -i "rtsp://user:password@192.168.0.1:554/app/video" -map 0:1 -c text -f
  data -
example_type: no-preview
example_player_data:
  - null
filename: WK7C9C6Q/print_data_channel_to_stdout_using_ffmpeg.md
views: 0
likes: 0

---
