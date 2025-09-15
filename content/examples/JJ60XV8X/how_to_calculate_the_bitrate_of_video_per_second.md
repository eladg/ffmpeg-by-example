---
id: JJ60XV8X
version: '1.0'
enabled: true
date: '2025-09-15T22:56:08.878Z'
author: Elad Gariany <elad@gariany.com>
title: How to calculate the bitrate of a video per second?
description: "This ffprobe command extracts the presentation timestamp (PTS) and size of every video packet from input.mp4, saving it to a CSV file.\n\n* `-select_streams v` - Only select the video stream (v).\n* `-show_packets` - Show individual packet-level information.\n* `-show_entries packet=pts_time,size` - Only extract the pts_time (when a packet should be shown) and size (packet size in bytes).\n* `-of csv` - Output in CSV format.\n* `input.mp4` - Input video file.\n\nThe result of this command looks something like:\n```\npacket,0.000000,898\npacket,0.020854,6929\npacket,0.041708,931\npacket,0.062563,1204\npacket,0.083417,1612\n...\n```\n\nThe 2nd part of the command is a python script: `calc-bitrate.py`\n\n* `with open('packets.csv', newline='') as csvfile:` - open the `packets.csv` file for reading.\n* `time_buckets[second] += size_bytes` - Read the params and accumulate the size of packets for that second.\n* `for sec in sorted(time_buckets.keys()):` - for each second, calculate the bitrate with: `bitrate_kbps = (time_buckets[sec] * 8) / 1000` and print it out.\n\nExample output:\n```\nSecond\tBitrate (kbps)\n0\t6164.38\n1\t10688.25\n2\t10093.25\n3\t9780.40\n4\t6946.49\n5\t645.37\n...\n```"
categories:
  - encoding
tags:
  - bitrate
  - encoding
  - python
thumbnail_url: null
terminal_command: >-
  # extract the packet size into packets.csv

  ffprobe -select_streams v -show_packets -show_entries packet=pts_time,size -of
  csv input.mp4 > packets.csv


  # to calculate the bitrate of each second of video

  # write this to calc-bitrate.py

  import csv

  from collections import defaultdict


  # Load packet data from ffprobe output

  time_buckets = defaultdict(int)  # key: second (int), value: total size in
  bytes


  with open('packets.csv', newline='') as csvfile:
      reader = csv.reader(csvfile)
      for row in reader:
          if len(row) < 3:
              continue
          pts_time = float(row[1])
          size_bytes = int(row[2])
          second = int(pts_time)  # floor to the second
          time_buckets[second] += size_bytes

  # Print bitrate per second

  print("Second\tBitrate (kbps)")

  for sec in sorted(time_buckets.keys()):
      bitrate_kbps = (time_buckets[sec] * 8) / 1000  # bytes to kilobits
      print(f"{sec}\t{bitrate_kbps:.2f}")
example_type: no-preview
example_player_data:
  - null
filename: JJ60XV8X/how_to_calculate_the_bitrate_of_video_per_second.md
views: 0
likes: 0

---
