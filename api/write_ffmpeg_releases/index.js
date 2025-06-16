const responses = require('../post_new_example/responses');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;

const FFMPEG_DOWNLOAD_URL = 'http://ffmpeg.com/download.html';

const extractVersionInfo = ($, versionSection) => {
  const version = versionSection.attr('id').replace('release_', '');
  const name = versionSection.find('h3').text().trim();
  const description = versionSection.find('p').first().text().trim();
  
  // Extract download links
  const downloadLinks = {};
  versionSection.find('.btn-success').each((i, link) => {
    const href = $(link).attr('href');
    if (href) {
      if (href.includes('.tar.xz')) {
        downloadLinks.download_xz_tarball = href;
        downloadLinks.download_xz_tarball_sig = href + '.asc';
      } else if (href.includes('.tar.bz2')) {
        downloadLinks.download_bzip2_tarball = href;
        downloadLinks.download_bzip2_tarball_sig = href + '.asc';
      } else if (href.includes('.tar.gz')) {
        downloadLinks.download_gzip_tarball = href;
        downloadLinks.download_gzip_tarball_sig = href + '.asc';
      }
    }
  });

  // Extract changelog and release notes
  const changelog = versionSection.find('a[href*="shortlog"]').attr('href');
  const releaseNotes = versionSection.find('a[href*="RELEASE_NOTES"]').attr('href');

  return {
    version,
    name,
    description,
    ...downloadLinks,
    changelog: changelog ? `https://git.ffmpeg.org${changelog}` : null,
    release_notes: releaseNotes ? `https://git.ffmpeg.org${releaseNotes}` : null
  };
}

const parseFFmpegPage = (html) => {
  const $ = cheerio.load(html);
  const releases = {};

  // Find all version sections
  $('h3[id^="release_"]').each((i, section) => {
    const versionInfo = extractVersionInfo($, $(section).parent());
    releases[versionInfo.version] = {
      name: versionInfo.name,
      description: versionInfo.description,
      download_xz_tarball: versionInfo.download_xz_tarball,
      download_xz_tarball_sig: versionInfo.download_xz_tarball_sig,
      download_bzip2_tarball: versionInfo.download_bzip2_tarball,
      download_bzip2_tarball_sig: versionInfo.download_bzip2_tarball_sig,
      download_gzip_tarball: versionInfo.download_gzip_tarball,
      download_gzip_tarball_sig: versionInfo.download_gzip_tarball_sig,
      changelog: versionInfo.changelog,
      release_notes: versionInfo.release_notes
    };
  });

  return releases;
}

const handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return responses.succsess("OK")
  }

  if (event.httpMethod !== "POST") {
    return responses.failedValidateDataResponse("not allowed");
  }

  try {
    // Fetch the FFmpeg download page
    const response = await axios.get(FFMPEG_DOWNLOAD_URL);
    console.log("Fetched FFmpeg download page");

    // Parse the HTML content
    const releases = parseFFmpegPage(response.data);
    console.log("Parsed releases:", Object.keys(releases).length);

    // Write to file
    const outputPath = 'ffmpeg-releases.json';
    await fs.writeFile(outputPath, JSON.stringify(releases, null, 4));
    console.log("Wrote releases to file");

    return responses.succsess({
      message: "Successfully parsed FFmpeg releases",
      releases: releases
    });

  } catch (error) {
    console.error(error);
    return responses.failedValidateDataResponse(error.message);
  }
}

module.exports = { handler } 