---
id: 50GOWMKQ
version: '1.0'
enabled: true
date: '2022-04-28T23:43:40.070Z'
author: Elad Gariany <elad@gariany.com>
title: Fade In and Out text using the 'drawtext' filter
description: >
  This FFmpeg command uses the
  [color](http://ffmpeg.org/ffmpeg-filters.html#allrgb_002c-allyuv_002c-color_002c-colorchart_002c-colorspectrum_002c-haldclutsrc_002c-nullsrc_002c-pal75bars_002c-pal100bars_002c-rgbtestsrc_002c-smptebars_002c-smptehdbars_002c-testsrc_002c-testsrc2_002c-yuvtestsrc)
  filter source to generate an empty black frame. For more info about this
  filter, see the [Generate a solid
  color](https://www.ffmpegbyexample.com/examples/6gzhzpjp/generate_solid_color_264_video_with_the_color_video_source_filter_color_hex_code/)
  example. 




  On top of this blank input, we use the `drawtext` filter to generate the
  overlayed text layer. To review the complete list of parameters, [please refer
  to the official
  documentation](https://ffmpeg.org/ffmpeg-filters.html#drawtext-1). On this
  example we use the `alpha`,`fontcolor`, `fontsize`,`text`, `x`, and `y` filter
  parameters.




  By far, the most complex value is for the `alpha` parameter, which we will
  break down last.




  * `fontcolor`: with the value `ffffff` for white color, [see ffmpeg Color for
  list of supported values](https://ffmpeg.org/ffmpeg-utils.html#Color))

  * `fontsize`: `64px` the size of the font to be generated

  * `text`: with the value `\"drawtext\" text with fade in & out`. The text
  string to be printed on the screen.

  * `x`/`y`: the point on the screen that the text layer should be overlayed.
  Notice that in this context, `w` and `h` is the size of the input frame and
  `text_w` and `text_h` is the size of the text overlay.


  Lastly, the `alpha` param to the `drawtext` filter is where the magic happens.
  The string is a set inlin 'larger than' (lt) and if conditions. For more info
  about these Expression Evaluation functions, [please refer to the official
  documentation](https://ffmpeg.org/ffmpeg-utils.html#Expression-Evaluation)


  ```

  if ( 
    lt(t\,0.3)\,          <---- X1  returns 0 if t < 0.3
    0\,                   <---- Y1
    if (                  <---- Z1
      lt(t\,1.3)\,          <---- X2  returns a value between 0-1 (ascending)
      (t-0.3)/1\,           <---- Y2  for 0.3 > t > 1.3
      if (                  <---- Z2
        lt(t\,3)\,            <---- X3  returns 1 if t<3
        1\,                   <---- Y3
        if (                  <---- Z3
          lt(t\,4)\,             <---- X4  returns a value between 0-1 (descending)
          (1-(t-3))/1\,          <---- Y4  for 3 > t > 4
          0                      <---- Z4 
        )
      )
    )
  )

  ```
categories:
  - text
tags:
  - generator
  - filter
  - subtitles
thumbnail_url: null
terminal_command: >-
  ffmpeg -f lavfi -i "color=c=black:s=1920x1080" -vf
  "drawtext=alpha=if(lt(t\,0.3)\,0\,if(lt(t\,1.3)\,(t-0.3)/1\,if(lt(t\,3)\,1\,if(lt(t\,4)\,(1-(t-3))/1\,0)))):fontcolor=ffffff:fontsize=64:text=\"drawtext\"
  text with fade in & out:x=(w-text_w)/2:y=(h-text_h)/2" -c:v libx264 -r 30
  -frames:v 150 -y output.mp4
example_type: youtube-embed
example_player_data:
  - yntb4ZoysNc
filename: 50GOWMKQ/fade_in_and_out_text_using_the_drawtext_filter.md
views: 0
likes: 0

---
