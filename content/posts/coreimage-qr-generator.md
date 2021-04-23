---
title: "CoreImage API: QRCode Generator"
date: "2021-04-23T06:01:44Z"
categories: ["video filters"]
tags: ["video-source", "coreimage"]
author: "Elad Gariany <elad@gariany.com>"

Thumbnail_URL: "https://ffmpeg-by-example.s3.amazonaws.com/QRCode.png"
Output_Youtube_URL: ""
More_Info_URL: "https://ffmpeg.org/ffmpeg-filters.html#Examples-132"
Ffmpeg_Command: 'ffmpeg -f lavfi -i coreimagesrc=s=250x250:filter=CIQRCodeGenerator@inputMessage=https\\\\\://FFmpeg.org/@inputCorrectionLevel=H -frames:v 1 QRCode.png'
---

Use 'CIQRCodeGenerator' to create a QR code for the FFmpeg homepage, given as complete and escaped command-line for Apple’s standard bash shell.
 