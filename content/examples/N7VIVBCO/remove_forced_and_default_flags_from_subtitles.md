---
id: N7VIVBCO
enabled: true
date: '2026-11-24T21:59:59.000Z'
author: Elad Gariany <elad@gariany.com>
title: Remove Forced and Default Flags From Subtitles
description: >-
  If Plex, Emby or Jellyfin keeps switching subtitles on by itself, the
  subtitle tracks inside your files carry `default` or `forced` flags, and
  players obey those flags. The flags are metadata. FFmpeg can clear them in
  seconds, with no re-encoding.


  **What the flags mean**


  Every stream in a media file carries a disposition: a set of flags that
  tells players how to treat that stream. The `default` flag marks the track
  a player should select automatically. The `forced` flag marks a track to
  show even when subtitles are off, usually translations of foreign dialogue
  in an otherwise English film. A disposition of `0` clears every flag on the
  stream at once, and `-disposition` is the option that sets it.


  **How the command works**


  `-map 0` keeps every stream in the file, so every subtitle track survives.
  `-c copy` copies the streams bit for bit: the input and output are remuxed
  and only the metadata is modified. `-disposition:s 0` clears the flags on
  every subtitle stream, because `:s` matches all subtitle streams. Video
  and audio streams keep their flags.


  **If you want one track to stay the default**


  Clear every subtitle flag first, then set the one you want:
  `-disposition:s 0 -disposition:s:1 default`. This drops the default flag
  from the first subtitle track and keeps the second track as the default.


  **If you want a track to keep its forced flag**


  Clear every subtitle flag, then restore the forced flag on the track that
  carries the foreign dialogue translations: `-disposition:s 0 -disposition:s:1 forced`.


  **Check your work**


  ffprobe prints the flags on any file: `ffprobe -v error -select_streams s -show_entries stream_disposition=default,forced -of default=noprint_wrappers=1 input.mkv`.
  Run it before and after. After the fix, every subtitle stream reports
  `default=0` and `forced=0`, apart from any track you chose to keep.


  **Good to know**


  The subtitle tracks stay inside the file, and you can switch them on
  manually whenever you want them. The same approach works on audio tracks:
  `-disposition:a 0` clears the flags on every audio stream, which is how
  you stop a player from auto-selecting the wrong dub or commentary track.
categories:
  - subtitles
tags:
  - disposition
  - mkv
  - forced-subtitles
changelog:
  - stream-specifiers-in-fftools-can-now-match-by-stream-disposition
  - stream-disposition-information-printing-in-ffprobe
thumbnail_url: null
terminal_command: ffmpeg -i input.mkv -map 0 -c copy -disposition:s 0 output.mkv
example_type: no-preview
example_player_data:
  - ''
filename: N7VIVBCO/remove_forced_and_default_flags_from_subtitles.md
views: 0
likes: 0
---
