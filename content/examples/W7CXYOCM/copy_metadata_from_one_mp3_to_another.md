---
id: W7CXYOCM
version: '1.0'
enabled: true
date: '2025-01-15T00:36:57.318Z'
author: Drew
title: Copy metadata from one mp3 to another
description: >-
  Creates a new mp3 with the metadata from one source and the audio/video from
  another. 
categories:
  - metadata
tags:
  - '#metadata'
thumbnail_url: null
terminal_command: >-
  ffmpeg -y -i input1.mp3 -i input2.mp3 -map 1 -codec copy  -map 0:1
  -map_metadata 0  -id3v2_version 3 out.mp3
example_type: no-preview
example_player_data:
  - https://stackoverflow.com/a/62985832
filename: W7CXYOCM/copy_metadata_from_one_mp3_to_another.md
views: 0
likes: 0

---
