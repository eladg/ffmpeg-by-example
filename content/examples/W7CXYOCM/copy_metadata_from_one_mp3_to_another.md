---
id: W7CXYOCM
version: '1.0'
enabled: true
date: '2025-01-15T00:36:57.318Z'
author: Drew
title: Copy metadata from one mp3 to another
description: >-
  This command combines two MP3 files, keeping their original audio streams from `audio.mp3` (no re-encoding), and copies metadata from `metadata.mp3` to `output.mp3`. It also ensures ID3v2 version 3 metadata tagging.  
categories:
  - metadata
tags:
  - 'metadata'
  - 'mp3'
  - 'id3v2'
thumbnail_url: null
terminal_command: >-
  ffmpeg -i audio.mp3 -i metadata.mp3 -c copy -map 0 -map 1:1 -map_metadata 0 -id3v2_version 3 output.mp3
example_type: no-preview
example_player_data:
  - https://stackoverflow.com/a/62985832
filename: W7CXYOCM/copy_metadata_from_one_mp3_to_another.md
views: 0
likes: 0
---
