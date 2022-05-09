![Logo of the project](https://www.ffmpegbyexample.com/img/ffmpeg-by-example-500px.png)

# FFmpeg By Example dot com
[![CC BY 4.0][cc-by-shield]][cc-by] [![Netlify Status](https://api.netlify.com/api/v1/badges/3b118d24-ed43-4f2f-a979-1b523b092867/deploy-status)](https://app.netlify.com/sites/ffmpeg-by-example/deploys)

ffmpegbyexample.com is a documentation website to showcase all unique and different ways to use [FFmpeg](https://ffmpeg.org).

## Contributing

#### Add Your Examples
One of the best and easy ways to contribute to the project is to showcase your ffmpeg script on the site. Send your contribution over at https://ffmpegbyexample.com/contribute

#### Building The Site Locally

The site is staticly generated using [hugo](https://gohugo.io/) and deployed on [netlify](https://www.netlify.com/). The serverless API is based on [Netlify Functions](https://www.netlify.com/products/functions/). 

### Initial Configuration

Start by setting `baseURL` and `apiURL` on `config.toml`

```toml
title = "FFmpeg By Example"
baseURL = "https://www.ffmpegbyexample.com" or "http://localhost:1313"
enableRobotsTXT = true

[params]
  apiURL = "https://www.ffmpegbyexample.com" or "http://localhost:8888"
```
## Developing

This project has two main components:

### Static Website

The run the static site generator [install hugo](https://gohugo.io/getting-started/installing), and run the following commands:

```shell
$ git clone https://github.com/eladg/ffmpeg-by-example.git
$ cd ffmpeg-by-example
$ hugo server --disableFastRender --port 1313
```

You can now test the site locally by opening your browser at: http://localhost:1313

### Serverless API

To develop & test the Serverless API, install [netlify cli](https://docs.netlify.com/cli/get-started) and run the following commands:

```shell
$ git clone https://github.com/eladg/ffmpeg-by-example.git
$ cd ffmpeg-by-example
$ netlify functions:serve -p 8888
```

You can now test the serverless API locally using something like:
```bash
curl 'http://localhost:8888/.netlify/functions/post_new_example' \
  -X POST 
  --data-raw '{
    "id":"JYU1IMXO",
    "version": "1.0",
    "enabled": true,
    "title": "Convert mp4 to aac file",
    "description": "A command to convert an mp4 video to aac audio",
    "author_name": "Elad Gariany",
    "author_email": "elad@gariany.com",
    "terminal_command": "ffmpeg -i input.mp4 -vn -c:a aac -q:a 1 output.aac",
    "categories": ["audio"], 
    "tags": ["aac"],
    "example_type": "no-preview",
    "example_player_data": "",
  }'
``` 

### Deploying / Publishing

the `main` branch is set to auto deploy to https://ffmpeg-by-example.netlify.app for every successful build. Submit your PR to the `main` branch, once approved, it will be release automatically. 


## Licensing
This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg
