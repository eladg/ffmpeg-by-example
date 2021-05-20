{
  "title": "Mask Video Using Chromakey Filter",
  "description": "This complex filter will overlay input video source `'input.mp4'` on top of a null source and mask its pixels using a pre-made shape (e.g. `'square.png'`, attached bellow). For the full toturial please visit [FFmpeg: Step-by-Step Retro Video Filter](https://www.gariany.com/2020/08/ffmpeg-step-by-step-retro-video-filter/index.html).\n\nNotice that since we are using a null source (which is infinite) it is required to limit the output frames, in order to make FFmpeg complete at some point.",
  "date": "2021-04-28T18:51:41-07:00",
  "categories": [
    "video filters"
  ],
  "tags": [
    "chromakey", 
    "overlay", 
    "filter_complex"
  ],
  "author": "Elad Gariany <elad@gariany.com>",
  "example_code": "ffmpeg -y -f rawvideo -pix_fmt rgb32 -s 1920x1080 \\ \n\t-i /dev/zero -r 30 -filter_complex \\ \n\t\"\n\t\tmovie='square.png'[sqr];\n\t\t[0:][sqr]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2[canvas];\n\t\t[canvas]chromakey=0x008000:blend=0:similarity=0.15[canvas2];\n\t\t[0:][canvas2]overlay[canvas3];\n\t\tmovie='input.mp4',scale=1920:1080[i1];\n\t\t[0:][i1]overlay[i2];\n\t\t[i2][canvas3]overlay[mix1];[0:][mix1]overlay[o]\n\t\"\n\t-map \"[o]\" -c:v libx264 -crf 31 \\\n\t-frames:v 300 masked_video.mp4",
  "output_videos": [
    {
      "type": "youtube_embed",
      "src": "https://www.youtube.com/embed/6QKLTOKIR_4"
    }
  ],
  "input_videos": [
    {
      "type": "youtube_embed",
      "src": "https://www.youtube.com/embed/VO_1AdYRGW8"
    },
    {
      "type": "image",
      "src": "https://www.gariany.com/2020/08/ffmpeg-step-by-step-retro-video-filter/square250x250.png"
    }
  ]
}