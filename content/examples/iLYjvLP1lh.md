+++
version = 1
id = "iLYjvLP1lh"
example_type = "youtube-embed"
date = 2022-03-11T00:40:04-07:00
enabled = true
title = "TOML md file"
views = 333
likes = 22
thumbnail_url = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Big_Buck_Bunny_thumbnail_vlc.png"
description = """
FFplay is a very simple and portable media player using the FFmpeg libraries and the SDL library. 
It is mostly used as a testbed for the various FFmpeg APIs.


In this example, we use the `'-vf'` flag to feed in the [`'showinfo'`](https://ffmpeg.org/ffmpeg-filters.html#showinfo) 
filter to print a line containing various information for each input video frame.

We use the [`2>&1`](https://stackoverflow.com/questions/818255/in-the-shell-what-does-21-mean) is used 
to pipe stderr to stdout and finally the `grep \"iskey:1\"` command will only print lines where the string `iskey:1` is present.

The grep part of the command is completely optional, without it `showinfo` will print all 
frames checksum, timestamp, size, sar and other useful infomation.
"""
categories = ["metadata"]
tags = ["ffplay", "showinfo", "filter", "bash"]
author = "Elad Gariany <elad@gariany.com>"
example_player_data = [
  "jJWDPs3oduw"
]
terminal_command = "ffplay -vf 'showinfo' video.mp4 2>&1 | grep \"iskey:1\""
+++