---
title: "Blend Filter: Blend Two Video Frames Into Each Other."
description: ""
date: 2021-04-28T20:52:52-07:00
categories: [""]
tags: ["filter_complex", "overlay", blend]
Author: "Elad Gariany <elad@gariany.com>"
image_url: ""
disable_comments: true
---

## Inputs:
1. {{<static_video "video/yoga.mp4" >}}
2. {{<static_video "video/sharks.mp4" >}}

## Process

{{< highlight bash "" >}}

ffmpeg -i "sharks.mp4" -i "yoga.mp4" -filter_complex \
  "[0:0][1:0]blend=all_expr='if(eq(mod(X,2),mod(Y,2)),A,B)'[out]" \
  -c:v libx264 -crf 31 -map '[out]' output.mp4

{{</ highlight >}}

## Output

{{<youtube v2mw30PFD8U>}}