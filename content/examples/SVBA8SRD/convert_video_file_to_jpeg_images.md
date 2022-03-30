---
id: SVBA8SRD
version: '1.0'
enabled: true
date: '2022-03-30T12:31:39.825Z'
author: Elad Gariany <elad@gariany.com>
title: Convert a video file to jpeg images
description: >-
  
  The following will generate `folder/image000.jpg`, ..., `folder/image999.jpg` jpg files 
  for every frame of the the input video `video.mp4`
  
  This is a useful method to extract a frame for a thumbnail or for frame-by-frame editing and video manipulation.
  
categories:
  - images
tags:
  - frames
  - video-extract
  - extract-thumbnails
thumbnail_url: null
terminal_command: ffmpeg -i video.mp4 folder/image%03d.jpg
example_type: no-preview
example_player_data:
  - ''
filename: SVBA8SRD/convert_video_file_to_jpeg_images.md
views: 0
likes: 0

---
