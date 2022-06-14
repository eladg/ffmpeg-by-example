---
id: YK0WT5PL
version: '1.0'
enabled: true
date: '2022-05-01T04:00:53.056Z'
author: Elad Gariany <elad@gariany.com>
title: Stream local file to RTMP Server and Client
description: >-
  The following command will take an `input.mp4` file and 'copy' it over the
  RTMP protocol. The `-listen 1` parameter instructs FFmpeg to wait for a
  connection. Once a client is connected (ffplay, VLC, or any video player that
  supports RTMP), FFmpeg will start transmitting the frames data over the RTMP
  protocol.


  Note: `-c copy` means that FFmpeg will not re-encode the video and transmit
  the video frames in their original size, bitrate, and encoding.


  For a full list of supported flags and settings for the RTMP protocol, refer
  to the [official RTMP documentation](http://ffmpeg.org/ffmpeg-all.html#rtmp)
categories:
  - streaming
tags:
  - server
  - rtmp
thumbnail_url: null
terminal_command: |-
  # RTMP 'server', will wait for a client to connect
  ffmpeg -re -i input.mp4 -listen 1 -c copy -f flv rtmp://localhost/live

  # RTMP 'client', will read the data the server is sending
  ffplay rtmp://127.0.0.1/live
example_type: picture
example_player_data:
  - https://ffmpeg-by-example.s3.amazonaws.com/rtmp-server-client.jpg
filename: YK0WT5PL/stream_local_file_to_rtmp_server_and_client.md
views: 4
likes: 0

---
