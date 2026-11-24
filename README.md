![FFmpegByExample logo](https://ffmpegbyexample.com/img/ffmpeg-by-example-500px.png)

# FFmpegByExample
[![CC BY 4.0][cc-by-shield]][cc-by] [![Netlify Status](https://api.netlify.com/api/v1/badges/3b118d24-ed43-4f2f-a979-1b523b092867/deploy-status)](https://app.netlify.com/sites/ffmpeg-by-example/deploys)

[ffmpegbyexample.com](https://ffmpegbyexample.com) is an open source documentation website of copy-paste-ready [FFmpeg](https://ffmpeg.org) examples. Every example shows one complete command for one task, with a short explanation.

## Contributing an example

The easiest way is the form at **[ffmpegbyexample.com/contribute](https://ffmpegbyexample.com/contribute/)**: fill in the command, title, description, category and tags, check the preview, and the site opens a pull request on this repository for review.

You can also open a pull request directly: add `content/examples/<ID>/<slug>.md`, using an existing example as a template for the front matter (`id`, `title`, `description` in Markdown, `categories`, `tags`, `terminal_command`, `example_type`, `example_player_data`, `filename`, `author`, `date`). Use generic file names such as `input.mp4` and `output.mp4` in commands.

Optionally, add `versions`: the FFmpeg releases you verified this exact command on, as quoted strings in FFmpeg's own numbering (`major.minor`), for example `versions: ["7.1", "8.0"]`. It is not a minimum version. The valid values are the `slug`s in `data/ffmpeg/changelog.json`; all releases before 1.0 share one value, `"0.x"`. Quotes matter, because YAML reads an unquoted `7.0` as the number 7. The build fails on an unknown or unquoted version. Each example is listed on its versions' pages at [/versions/](https://ffmpegbyexample.com/versions/).

If the example uses something that arrived in a specific FFmpeg release (a new filter, codec or option), add `changelog`: the `slug`s of those [Changelog](https://github.com/FFmpeg/FFmpeg/blob/master/Changelog) entries from `data/ffmpeg/changelog.json`, for example `changelog: ["xfade-video-filter"]`. A slug is the entry's text, lowercased, with everything else turned into `-`; it has no version in it, because FFmpeg sometimes moves an entry to another version but rarely rewords it. The example is shown under that entry on the version page, and the build fails on a slug that doesn't exist (if FFmpeg rewords an entry, update the slug).

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

### FFmpeg versions

`data/ffmpeg/changelog.json` is generated from [FFmpeg's Changelog](https://github.com/FFmpeg/FFmpeg/blob/master/Changelog) and committed, so `hugo server` works offline. `npm run build` (`scripts/build.mjs`, which Netlify runs) refreshes it before running Hugo:

```shell
npm run build                    # data steps, then hugo (arguments after -- go to hugo)
npm run build -- --data-only     # data steps only, e.g. before hugo server
```

If the Changelog can't be fetched, the build keeps the committed file. If it can be fetched but doesn't parse as expected, the build fails rather than publish a broken `/versions/`. `content/versions/_content.gotmpl` creates a page for every version, `/versions/latest/` redirects to the newest one, and releases before 1.0 share the page `/versions/0.x/`.

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
