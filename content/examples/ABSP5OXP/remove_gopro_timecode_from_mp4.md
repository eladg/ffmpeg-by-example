---
id: ABSP5OXP
version: '1.0'
enabled: true
date: '2025-01-15T14:08:43.902Z'
author: MrChrisWeinert <10633787+MrChrisWeinert@users.noreply.github.com>
title: ' Remove GoPro TimeCode from MP4'
description: |+
  `-i` input file

  `-c:a copy` copy the audio stream as-is

  `-c:v copy` copy the video stream as-is

  `-write_tmcd 0` do not write timecode to the output file

categories:
  - metadata
tags:
  - metadata
thumbnail_url: null
terminal_command: ffmpeg -i file.MP4  -c:a copy -c:v copy -write_tmcd 0 file_no_tmcd.MP4
example_type: no-preview
example_player_data:
  - null
filename: ABSP5OXP/remove_gopro_timecode_from_mp4.md
views: 0
likes: 0

---
