---
id: XIFDKX4D
version: '1.0'
enabled: true
date: '2025-01-20T23:17:36.515Z'
author: Marco <colemarc@gmail.com>
title: Read a Blu-ray folder as ffmpeg input
description: >-
  Read a Blu-ray disc — or a ripped Blu-ray folder — directly as an ffmpeg
  input, with no mounting or pre-ripping. `-map 0` takes every stream and
  `-c copy` remuxes them into an MKV untouched.
categories:
  - video
tags:
  - bluray
  - remux
thumbnail_url: null
terminal_command: ffmpeg -i bluray:/path/to/disc -map 0 -c copy output.mkv
example_type: no-preview
example_player_data:
  - null
filename: XIFDKX4D/read_blu_ray_local_folder.md
views: 0
likes: 0

---
