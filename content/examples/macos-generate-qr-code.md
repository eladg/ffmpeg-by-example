{
  "title": "MacOS: Generate QR Code using 'CIQRCodeGenerator'",
  "description": "Use 'CIQRCodeGenerator' to create a QR code for the FFmpeg homepage, given as complete and escaped command-line for Apple’s standard bash shell.\n\nMore info on the FFmpeg documentation: https://ffmpeg.org/ffmpeg-filters.html#coreimagesrc-1",
  "date": "2021-04-23T06:01:44Z",
  "categories": [
    "Video Filters"
  ],
  "tags": [
    "lavfi", 
    "video-source", 
    "coreimage"
  ],
  "author": "Elad Gariany <elad@gariany.com>",
  "thumbnail_url": "https://ffmpeg-by-example.s3.amazonaws.com/QRCode.png",
  "example_code": "ffmpeg -f lavfi -i coreimagesrc=s=250x250:filter=CIQRCodeGenerator@inputMessage=https\\\\\\\\\\\\://ffmpegbyexample.com -frames:v 1 qr_code.png"
}