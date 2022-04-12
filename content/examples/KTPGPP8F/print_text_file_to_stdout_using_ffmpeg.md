---
id: KTPGPP8F
version: '1.0'
enabled: true
date: '2022-04-12T11:01:45.110Z'
author: Elad Gariany <elad@gariany.com>
title: Print a text file to STDOUT using ffmpeg
description: >-
  This is a wonderful example of demonstrating the versatility of using input
  and output formats. By setting `-f data` ahead of `-i input.txt` we instruct
  FFmpeg to treat the input file as 'raw data'. For a full list of supported
  formats, run `ffmpeg -formats`.


  The params following the input will instruct ffmpeg about the output. First,
  we would like to 'map' the input stream `0:0` to the output stream. Next, we
  set the encoding to 'Raw text subtitle'. For a full list of supported
  encoders, run `ffmpeg -encoders`. Then, we set the format of the output stream
  to 'raw data'. Lastly, we dump our raw data stream into STDOUT using by adding
  the `-` at the end of the command.


  Source:
  [Reddit](https://www.reddit.com/r/ffmpeg/comments/qe8nob/how_to_cat_a_file_like_an_transcoding_expert/)
categories:
  - text
tags:
  - subtitles
  - meme
  - ''
thumbnail_url: null
terminal_command: ffmpeg -v quiet -f data -i input.txt -map 0:0 -c text -f data -
example_type: no-preview
example_player_data:
  - ''
filename: KTPGPP8F/print_text_file_to_stdout_using_ffmpeg.md
views: 0
likes: 0

---
