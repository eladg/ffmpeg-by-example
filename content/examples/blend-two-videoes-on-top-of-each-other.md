+++
version = 1
id = "88888816183a4a7d085201a3523934db"
example_type = "audio"
date = 2021-04-28T20:52:52-07:00
enabled = true
title = "Blend Filter: Blend Two Video Frames Into Each Other."
views = 88
likes = 10
thumbnail_url = "" 
description = """
This filter modifies a color channel by adding the values associated to the other channels of the same pixels. For example if the value to modify is red, the output value will be: `red=red*rr + blue*rb + green*rg + alpha*ra`

For more info about the `colorchannelmixer` filter please visit the colorchannelmixer on https://ffmpeg.org documentation.
"""
categories = ["video-filters"]
tags = ["filter_complex", "overlay", "blend"]
author = "Elad Gariany <elad@gariany.com>"
terminal_command = """
ffmpeg -i "sharks.mp4" -i "yoga.mp4" -filter_complex \
  "[0:0][1:0]blend=all_expr='if(eq(mod(X,2),mod(Y,2)),A,B)'[out]" \
  -c:v libx264 -crf 31 -map '[out]' output.mp4
"""
example_player_data = [
"https://archive.org/download/calexico2006-12-02..flac16/calexico2006-12-02d1t02.mp3",
"https://archive.org/download/ra2007-07-21/ra2007-07-21d1t05_64kb.mp3",
"https://archive.org/download/slac2002-02-15/slac2002-02-15d1t07_64kb.mp3",
"https://archive.org/download/blitzentrapper2009-02-24.flac16/blitzentrapper2009-02-24t02_64kb.mp3",
"https://archive.org/download/samples2003-11-21.flac16/samples2003-11-21d2t04.mp3",
"https://archive.org/download/mikedoughty2004-06-16.flac16/d1t13.mp3",
"https://archive.org/download/glove2004-03-18.shnf/glove2004-03-18d1t05.mp3",
"https://archive.org/download/guster2005-11-12.flac16/guster2005-11-12d2t04.mp3",
"https://archive.org/download/oar2004-11-12.flac/oar2004-11-12d1t01.mp3",
"https://archive.org/download/mmj2003-09-26.shnf/mmj2003-09-26d2t08.mp3"
]
+++