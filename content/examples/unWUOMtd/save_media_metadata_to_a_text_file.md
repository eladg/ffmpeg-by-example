---
id: unWUOMtd
enabled: true
date: '2026-11-23T14:47:24.000Z'
author: Elad Gariany <elad@gariany.com>
title: Save Media Metadata to a Text File
description: >-
  Dump a file's tags (title, artist, encoder, and more) into a plain-text file
  for archiving or inspection. `-f ffmetadata` writes the metadata in
  FFmpeg's own text format, which you can later feed back into another file
  with `-map_metadata`.


  Tested with FFmpeg 8.1.2.
categories:
  - metadata
tags:
  - metadata
  - ffmetadata
  - text
versions:
  - '8.1'
thumbnail_url: null
terminal_command: ffmpeg -i input.mp4 -f ffmetadata metadata.txt
example_type: no-preview
example_player_data:
  - ''
filename: unWUOMtd/save_media_metadata_to_a_text_file.md
views: 0
likes: 0
---
