+++
version = 1
id = "8fba7916183a4a7d085201a3523934db"
example_type = "audio"
date = 2022-03-11T00:56:35-08:00
enabled = true
title = "Mix Audio Inputs"
views = 22
likes = 1
thumbnail_url = "" 
description = """
The following command will take 3 (or more!) audio inputs and merge them into a single output. This is useful to mix a podcast audio dialog with background music, mixing L/R/C audio files into a single stream or for any artistic purposes.

Note that this filter only supports float samples (the amerge and pan audio filters support many formats). If the amix input has integer samples then aresample will be automatically inserted to perform the conversion to float samples.

For more info, visit the amix filter documentation section on https://ffmpeg.org
"""
categories = ["test"]
tags = ["tag1", "tag2"]
author = "Elad Gariany <elad@gariany.com>"
example_player_data = [""]
terminal_command = "ffmpeg -i INPUT1 -i INPUT2 -i INPUT3 -filter_complex amix=inputs=3:duration=first:dropout_transition=3 OUTPUT"
+++
