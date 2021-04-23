---
title: "Chromakey Green Screen Masking"
date: 2021-04-22T17:15:57-07:00
categories: ["filters"]
tags: ["mask"]
author: "Elad Gariany"
discussionId: "chromakey-green-screen-masking"
disable_comments: true
---

## Chromakey Green Screen Masking

```bash
ffmpeg -y -f rawvideo -pix_fmt rgb32 -s 1920x1080 -i /dev/zero -r 30 -filter_complex "movie='square.png'[sqr];[0:][sqr]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2[canvas];[canvas]chromakey=0x008000:blend=0:similarity=0.15[canvas2];[0:][canvas2]overlay[canvas3];movie='input.mp4',scale=1920:1080[i1];[0:][i1]overlay[i2];[i2][canvas3]overlay[mix1];[0:][mix1]overlay[o]" -map "[o]" -c:v libx264 -crf 31 -frames:v 300 masked_video.mp4
```

{{< youtube aqz-KE-bpKQ >}}