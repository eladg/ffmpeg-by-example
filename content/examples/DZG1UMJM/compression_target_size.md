---
id: DZG1UMJM
version: '1.0'
enabled: true
date: '2023-09-15T17:36:19.474Z'
author: James T Reynolds <james.t.reynolds@gmail.com>
title: Compression Target Size
description: "For AutoHotkey v2.0\n```Compress(Source, TargetSize := 8, Height := -1, HardwareEncode := true) {\n\tDestination := RegExReplace(Source, \"(.*)\\\\.*\", \"${1}\") \"\\Compressed\"\n\tSourceName := RegExReplace(Source, \".*\\\\(.*)\", \"${1}\")\n\tSourceDir := RegExReplace(Source, \"(.*)\\\\.*\", \"${1}\")\n\tSourceStem := ComObject(\"Scripting.FileSystemObject\").GetBaseName(Source) ; name without extension \"filename\"\n\tSourceSuffix := RegExReplace(Source, \"^.*(?<Extension>\\..*)$\", \"${1}\") ; extension \".txt\"\n\tShellObj := ComObject(\"Shell.Application\")\n\tFolderObj := ShellObj.NameSpace(SourceDir)\n\tFileObj\t:= FolderObj.ParseName(SourceName)\n\tDuration := FolderObj.GetDetailsOf(FileObj, 27) ; length --> hh:mm:ss\n\tif !RegExMatch(Duration, \"(?<Hours>\\d*):(?<Minutes>\\d*):(?<Seconds>\\d*)\", &Match) {\n\t\tthrow ValueError(\"The time format is invalid.\", -1, '\"' Duration '\"')\n\t}\n\tAudioBitrate := 192 * 1000 ; convert to bits\n\tSeconds := (Match.Hours * 3600) + (Match.Minutes * 60) + Match.Seconds\n\tTargetSize := TargetSize * 1000 ** 2 * 8 ; convert to bits\n\tTotalBitrate := TargetSize // Seconds\n\tVideoBitrate := Object()\n\tVideoBitrate.Avg := TotalBitrate - AudioBitrate\n\tVideoBitrate.Max := 0\n\tVideoBitrate.Min := Format(\"{:i}\", VideoBitrate.Avg * 0.75)\n\tif !DirExist(Destination) {\n\t\tDirCreate(Destination)\n\t}\n\tDestination := Destination \"\\\" SourceStem \"_\" Height \"p\" SourceSuffix\n\tCommand := Format(\n\t\t'ffmpeg '\n\t\t'-y '\n\t\t'-i \"{1}\" '\n\t\t'-map 0 '\n\t\t'-c:v {2} '\n\t\t'-profile:v high '\n\t\t'-rc cbr '\n\t\t'-vf \"scale=-1:' Height '\" '\n\t\t'{3} '\n\t\t'-b:v {4} '\n\t\t'-maxrate:v ' VideoBitrate.Max ' '\n\t\t'-minrate:v {5} '\n\t\t'-bf:v 4 '\n\t\t'-pix_fmt yuv420p '\n\t\t'-color_primaries bt709 '\n\t\t'-color_trc bt709 '\n\t\t'-colorspace bt709 '\n\t\t'-c:a copy '\n\t\t'-b:a 192k '\n\t\t'-c:s copy '\n\t\t'\"{6}\"',\n\t\tSource,\n\t\tHardwareEncode ? \"h264_nvenc\" : \"libx264\",\n\t\tHardwareEncode ? '-rc-lookahead 20' : '-x264-params rc-lookahead=20',\n\t\tVideoBitrate.Avg,\n\t\tHardwareEncode ? VideoBitrate.Min : VideoBitrate.Avg,\n\t\tDestination\n\t)\n\tRunWait(Command, A_WorkingDir, , &ProcessID)\n\treturn Destination\n}```"
categories:
  - video
tags:
  - video-extract
thumbnail_url: null
terminal_command: >-
  ffmpeg -y -i "INPUT" -map 0 -c:v h264_nvenc -profile:v high -rc cbr -vf
  "scale=-1:-1" -rc-lookahead 20 -b:v BITRATE -maxrate:v 0 -minrate:v (BITRATE *
  0.75) -bf:v 4 -pix_fmt yuv420p -color_primaries bt709 -color_trc bt709
  -colorspace bt709 -c:a copy -b:a 192k -c:s copy "OUTPUT"
example_type: no-preview
example_player_data:
  - null
filename: DZG1UMJM/compression_target_size.md
views: 0
likes: 0

---
