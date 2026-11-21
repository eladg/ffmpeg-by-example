---
id: dMDj311H
version: '1.0'
enabled: true
date: '2026-10-08T16:46:34.000Z'
author: Elad Gariany <elad@gariany.com>
title: Join Multiple Videos Into One File (Concat Demuxer)
description: >-
  Joins part1.mp4, part2.mp4, ... end to end into a single file without
  re-encoding. First write the clip paths to filelist.txt, one per line in the
  form `file 'part1.mp4'`, then run the command above.
  - `-f concat` selects the concat demuxer, which reads the list file and joins the clips.
  - `-safe 0` permits absolute and relative file paths in the list file (required by default).
  - `-c copy` copies all streams as-is, so the join is instant and lossless.
  - All clips must share the same codec, resolution, and container settings, otherwise the output may be broken.
categories:
  - video
tags:
  - concat
  - merge-videos
  - no-reencode
thumbnail_url: null
terminal_command: ffmpeg -f concat -safe 0 -i filelist.txt -c copy output.mp4
example_type: no-preview
example_player_data:
  - ''
filename: dMDj311H/join_multiple_videos_into_one_file_concat_demuxer.md
tested_with: null
views: 0
likes: 0
---
