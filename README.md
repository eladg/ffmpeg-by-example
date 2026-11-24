![FFmpegByExample logo](https://ffmpegbyexample.com/img/ffmpeg-by-example-500px.png)

# FFmpegByExample
[![CC BY 4.0][cc-by-shield]][cc-by] [![Netlify Status](https://api.netlify.com/api/v1/badges/3b118d24-ed43-4f2f-a979-1b523b092867/deploy-status)](https://app.netlify.com/sites/ffmpeg-by-example/deploys)

[ffmpegbyexample.com](https://ffmpegbyexample.com) is an open source documentation website of copy-paste-ready [FFmpeg](https://ffmpeg.org) examples. Every example shows one complete command for one task, with a short explanation.

## Contributing an example

The easiest way is the form at **[ffmpegbyexample.com/contribute](https://ffmpegbyexample.com/contribute/)**: fill in the command, title, description, category and tags, check the preview, and the site opens a pull request on this repository for review.

You can also open a pull request directly: add `content/examples/<ID>/<slug>.md`, using an existing example as a template for the front matter (`id`, `title`, `description` in Markdown, `categories`, `tags`, `terminal_command`, `example_type`, `example_player_data`, `filename`, `author`, `date`). Use generic file names such as `input.mp4` and `output.mp4` in commands.

Your name, and your email if you add one, are published with the example. See the [privacy policy](https://ffmpegbyexample.com/privacy/).

## How the site works

| Part | Technology |
|---|---|
| Static site | [Hugo](https://gohugo.io/), version pinned as `HUGO_VERSION` in `netlify.toml` |
| Hosting and deploys | [Netlify](https://www.netlify.com/); every push to `main` deploys to production, and pull requests get a deploy preview |
| Contribute API | A [Netlify Function](https://docs.netlify.com/functions/overview/) (`api/post_new_example`, Node 22) that turns a form submission into a GitHub pull request |
| Comments | [Gitalk](https://github.com/gitalk/gitalk), stored as issues in this repository |

Generated at build time from the content, so they never need editing by hand:

- `sitemap.xml` and `robots.txt` (`layouts/robots.txt`; AI crawlers are explicitly allowed)
- `llms.txt` and `llms-full.txt` for AI agents (`layouts/index.llms.txt`, `layouts/index.llmsfull.txt`)
- Netlify `_redirects` (`layouts/index.redirects`)

## Developing

### Website

[Install Hugo](https://gohugo.io/installation/) (the version in `netlify.toml`), then:

```shell
git clone https://github.com/eladg/ffmpeg-by-example.git
cd ffmpeg-by-example
hugo server --disableFastRender --port 1313
```

Open http://localhost:1313. No configuration is needed: `hugo server` replaces the production `baseURL` with localhost automatically. Note that `hugo server` doesn't apply `_redirects` or run the contribute function, so submitting the form locally returns an HTTP 404.

### Contribute API

```shell
npm install
npm test                          # unit tests; GitHub is mocked
netlify functions:serve -p 8888   # needs the Netlify CLI and the variables below
```

The function reads three environment variables (see `api/post_new_example/.env-example`):

| Variable | Value |
|---|---|
| `FFMPEG_BY_EXAMPLE_GITHUB_TOKEN` | A classic GitHub token with the `public_repo` scope, for the account that opens the pull requests |
| `FFMPEG_BY_EXAMPLE_GITHUB_REPO` | `eladg/ffmpeg-by-example` |
| `FFMPEG_BY_EXAMPLE_EXAMPLES_PATH` | `content/examples` |

To call it locally:

```bash
curl 'http://localhost:8888/.netlify/functions/post_new_example' \
  -X POST \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "id": "TEST1234",
    "version": "1.0",
    "enabled": true,
    "title": "Convert an MP4 video to AAC audio",
    "description": "Extract the audio track of an MP4 file and encode it as AAC.",
    "author_name": "Your Name",
    "author_email": null,
    "terminal_command": "ffmpeg -i input.mp4 -vn -c:a aac -q:a 1 output.aac",
    "categories": ["audio"],
    "tags": ["aac"],
    "example_type": "no-preview",
    "example_player_data": null
  }'
```

This opens a real pull request on the repository set in `FFMPEG_BY_EXAMPLE_GITHUB_REPO`, so point it at a fork while testing.

## Deploying

Pull requests to `main` get a Netlify deploy preview. Once a pull request is merged, `main` deploys to https://ffmpegbyexample.com automatically.

## Licensing

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg
