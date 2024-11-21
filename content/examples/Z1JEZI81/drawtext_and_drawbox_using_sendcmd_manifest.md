---
id: Z1JEZI81
version: '1.0'
enabled: true
date: '2024-11-21T08:30:06.697Z'
author: Elad Gariany <elad@gariany.com>
title: drawtext and drawbox using sendcmd manifest
description: >-
  The sendcmd filter in FFmpeg allows dynamic updates to video filters (e.g.,
  drawtext and drawbox) at specific time intervals during playback or
  processing. Each sendcmd instruction follows the syntax:


  ```

  startTime-endTime [enter|leave] COMMANDS;

  ```

  * startTime-endTime: The time period in seconds during which the command
  applies.

  * [enter|leave]: Indicates whether the command is executed when entering or
  leaving the specified time period.

  * COMMANDS: A comma-separated list of commands, specific to the filter being
  controlled.


  In this example, the `reinit` command for the drawtext filter is used to
  dynamically reinitialize its arguments (e.g., position and text). Each
  instruction ends with a `;` symbol.


  For detailed syntax and available commands, refer to the [FFmpeg Commands
  Syntax Documentation](https://ffmpeg.org/ffmpeg-filters.html#Commands-syntax).


  Example `sendcmd` script:


  ```

  0.0 [enter] drawtext reinit 'text=Person:x=0.165*W:y=0.139*H-30';

  0.5 [enter] drawtext reinit 'text=Person:x=0.165*W:y=0.138*H-30';

  1.0 [enter] drawtext reinit 'text=Person:x=0.166*W:y=0.136*H-30';

  1.5 [enter] drawtext reinit 'text=Person:x=0.200*W:y=0.126*H-30';

  2.0 [enter] drawtext reinit 'text=Person:x=0.230*W:y=0.125*H-30';

  2.5 [enter] drawtext reinit 'text=Person:x=0.169*W:y=0.119*H-30';

  # ...

  ```


  In this script:


  * The `drawtext` filter is updated at different timestamps with new `x` and
  `y` values, calculated dynamically from the detection data.

  * The `reinit` command ensures the filter parameters are updated without
  restarting the entire filter.


  A full implementation to generate such a script dynamically [can be found on
  this GitHub repository](https://github.com/eladg/ffmpeg-sendcmd-drawtext).
categories:
  - video-filters
tags:
  - sendcmd
  - drawtext
  - overlay
thumbnail_url: null
terminal_command: ffmpeg -y -i input.mp4 -vf 'sendcmd=f=sendcmd.txt,drawbox,drawtext' output.mp4
example_type: youtube-embed
example_player_data:
  - https://www.youtube.com/watch?v=F-zHct-Hfbo
filename: Z1JEZI81/drawtext_and_drawbox_using_sendcmd_manifest.md
views: 0
likes: 0

---
