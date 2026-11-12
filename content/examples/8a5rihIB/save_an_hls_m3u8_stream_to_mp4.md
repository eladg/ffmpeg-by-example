---
id: 8a5rihIB
version: '1.0'
enabled: true
date: '2026-10-19T16:43:00.000Z'
author: Elad Gariany <elad@gariany.com>
title: Save an HLS (m3u8) Stream to MP4
description: >-
  Download a DRM-free HLS (HTTP Live Streaming) playlist and save it as a
  single MP4 file - handy for archiving a stream you have permission to keep.


  `-i https://example.com/stream.m3u8` - the m3u8 playlist URL of the stream
  (a master or media playlist both work).


  `-c copy` - copies the video and audio streams without re-encoding, so the
  save is fast and lossless.
categories:
  - streaming
tags:
  - hls
  - m3u8
  - stream-download
tested_with: null
thumbnail_url: null
terminal_command: ffmpeg -i https://example.com/stream.m3u8 -c copy output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: 8a5rihIB/save_an_hls_m3u8_stream_to_mp4.md
views: 0
likes: 0
---
