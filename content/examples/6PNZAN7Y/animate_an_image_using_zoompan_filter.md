---
id: 6PNZAN7Y
version: '1.0'
enabled: true
date: '2025-03-05T22:55:37.699Z'
author: Elad Gariany <elad@gariany.com>
title: 'Animate an image using zoompan filter '
description: >-
  The following command generates a 10-second video (600 frames at 60 FPS) using
  an image (`image.png`) as the foreground and a black background while applying
  zoom and panning effects.


  ### **Breakdown of the command:**


  **Creating a black background**

  ```

  -filter_complex "color=black:1920x1080:d=600,fps=60[background];

  ```

  - Generates a black background of **1920x1080** for **600 frames** (10 seconds
  at 60 FPS).

  - `[background]` is the label assigned to this generated background.


  **Overlaying the image and animating movement**

  ```

  [background][video]overlay='main_w-overlay_w+(overlay_w-main_w)/599*(((n-1)/599)*599)':'(main_h-overlay_h)/2':eval=frame[overlaid];

  ```

  - **Overlays the image** onto the **background**.

  - Moves the image **horizontally from right to left**.

  - Centers the image vertically.

  - `eval=frame`: Evaluates per frame for smooth animation.

  - The result is labeled `[overlaid]`.


  **Applying zoom effect**

  ```

  [overlaid]zoompan=z='1.1-(((in-1)/599)*599)*0.00016694490818030064':fps=60:d=1:s=1920x1080:x=iw/2-(iw/2):y=ih/2-(ih/2)[final];

  ```

  - **Zoom-out effect** starts at **1.1x** and decreases gradually.

  - Keeps the image **centered**.

  - Outputs as `[final]`.


  **Finalizing the output**

  ```

  [final]null[out];

  ```

  - Passes the processed frames to `[out]`.


  **Encoding settings**

  ```

  -frames:v 600 -map "[out]" -pix_fmt yuv420p -b:v 4M -c:v libx264 -y
  "output.mp4"

  ```

  - `-frames:v 600`: Limits output to **600 frames** (10 seconds).

  - `-map "[out]"`: Uses processed video as output.

  - `-pix_fmt yuv420p`: Ensures **YUV 4:2:0 format** for compatibility.

  - `-b:v 4M`: Sets **bitrate to 4 Mbps**.

  - `-c:v libx264`: Uses **H.264 codec**.

  - `-y "output.mp4"`: Saves as `output.mp4`, overwriting if necessary.


  ### **Summary**

  This command creates a **10-second, 60 FPS** video with:

  1. A **black background**.

  2. An **image overlay** moving from **right to left**.

  3. A **gradual zoom-out effect**.

  4. Encoding with **H.264 at 4 Mbps** in **YUV 4:2:0 format**.
categories:
  - video-filters
tags:
  - zoompan
thumbnail_url: null
terminal_command: >-
  ffmpeg -loop 1 -i "image.png" -filter_complex
  "color=black:1920x1080:d=600,fps=60[background];[background][video]overlay='main_w-overlay_w+(overlay_w-main_w)/599*(((n-1)/599)*599)':'(main_h-overlay_h)/2':eval=frame[overlaid];[overlaid]zoompan=z='1.1-(((in-1)/599)*599)*0.00016694490818030064':fps=60:d=1:s=1920x1080:x=iw/2-(iw/2):y=ih/2-(ih/2)[final];[final]null[out];"
  -frames:v 600 -map "[out]" -pix_fmt yuv420p -b:v 4M -c:v libx264 -y
  "output.mp4"
example_type: youtube-embed
example_player_data:
  - BogWgbK4hk0
filename: 6PNZAN7Y/animate_an_image_using_zoompan_filter.md
views: 0
likes: 0

---
