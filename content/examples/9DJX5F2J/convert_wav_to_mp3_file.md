---
id: 9DJX5F2J
version: '1.0'
enabled: true
date: '2022-04-15T18:16:08.611Z'
author: Elad Gariany <elad@gariany.com>
title: Convert wav to mp3 file
description: >
  [Source: The wonderful
  ffmprovisr](https://amiaopensource.github.io/ffmprovisr/#wav_to_mp3)


  This will convert your WAV files to MP3s.


  `-i input_file` - path and name of the input file


  `-write_id3v1 1` - This will write metadata to an ID3v1 tag at the head of the
  file, assuming you’ve embedded metadata into the WAV file.


  `-id3v2_version 3` - This will write metadata to an ID3v2.3 tag at the tail of
  the file, assuming you’ve embedded metadata into the WAV file.


  `-dither_method triangular` - Dither makes sure you don’t unnecessarily
  truncate the dynamic range of your audio.


  `-out_sample_rate 48k` - Sets the audio sampling frequency to 48 kHz. This can
  be omitted to use the same sampling frequency as the input.


  `-qscale:a 1` - This sets the encoder to use a constant quality with a
  variable bitrate of between 190-250kbit/s. If you would prefer to use a
  constant bitrate, this could be replaced with -b:a 320k to set to the maximum
  bitrate allowed by the MP3 format. For more detailed discussion on variable vs
  constant bitrates see here.


  `output.mp3` - path and name of the output file


  A couple notes: About ID3v2.3 tag: ID3v2.3 is better supported than ID3v2.4,
  FFmpeg's default ID3v2 setting.

  About dither methods: FFmpeg comes with a variety of dither algorithms,
  outlined in the official docs, though some may lead to unintended, drastic
  digital clipping on some systems.
categories:
  - audio
tags:
  - mp3
thumbnail_url: null
terminal_command: >-
  ffmpeg -i input.wav -write_id3v1 1 -id3v2_version 3 -dither_method triangular
  -out_sample_rate 48k -qscale:a 1 output.mp3
example_type: no-preview
example_player_data:
  - ''
filename: 9DJX5F2J/convert_wav_to_mp3_file.md
views: 17
likes: 0

---
