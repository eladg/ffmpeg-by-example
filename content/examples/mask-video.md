---
title: "Mask Video"
description: ""
date: 2021-04-28T18:51:41-07:00
categories: ["video filters"]
tags: ["chromakey", "overlay", "filter_complex"]
author: "Elad Gariany <elad@gariany.com>"
image_url: ""
---

## Inputs:

1. {{<youtube VO_1AdYRGW8>}}
2. {{< figure src="https://www.gariany.com/2020/08/ffmpeg-step-by-step-retro-video-filter/square250x250.png">}}


## Process:

{{< highlight bash "" >}}
ffmpeg -y -f rawvideo -pix_fmt rgb32 -s 1920x1080 \
  -i /dev/zero -r 30 -filter_complex \
    "
      movie='square.png'[sqr];
      [0:][sqr]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2[canvas];
      [canvas]chromakey=0x008000:blend=0:similarity=0.15[canvas2];
      [0:][canvas2]overlay[canvas3];
      movie='input.mp4',scale=1920:1080[i1];
      [0:][i1]overlay[i2];
      [i2][canvas3]overlay[mix1];
      [0:][mix1]overlay[o]
    " \
  -map "[o]" -c:v libx264 -crf 31 \
  -frames:v 300 masked_video.mp4
{{</ highlight >}}

## Output:

{{<youtube 6QKLTOKIR_4>}}