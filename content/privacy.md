---
title: "Privacy Policy"
description: "What data ffmpegbyexample.com collects, why, who it is shared with, how long it is kept, and your rights."
date: 2026-11-23
---

# Privacy Policy

_Last updated: November 23, 2026_

FFmpegByExample (ffmpegbyexample.com) is a not-for-profit documentation website run by Elad Gariany, based in the United States. It is an open source project: its content and code are published on [GitHub](https://github.com/eladg/ffmpeg-by-example) under the [Creative Commons Attribution 4.0 International](https://github.com/eladg/ffmpeg-by-example/blob/main/LICENSE) license.

This page explains what data the site collects, why, who receives it, and how long it is kept. For any question or request about your data, email **[ffmpegbyexample@gmail.com](mailto:ffmpegbyexample@gmail.com)**.

We don't sell or share your data for advertising, we don't show ads, and we don't build profiles of visitors or make automated decisions about you. The site has no user accounts and no database of visitors.

## What we collect and why

| Purpose | Data | Legal basis (GDPR) |
|---|---|---|
| Analytics: which examples are useful and how people find them | Pages visited, referrer, approximate location derived from your IP address, device, browser and screen size; `_ga` cookies | Your consent (see [Analytics](#analytics)) |
| Hosting and security | IP address and request details in server logs | Our legitimate interest in running and protecting the site |
| Publishing a contributed example | The example you submit, your name and, if you choose, your email | Your consent, given by submitting the form |
| Comments | Your GitHub account and what you post | Your consent, given by signing in and posting |
| Answering your emails | Your email address and message | Our legitimate interest in responding to you |

## Analytics

We use **Google Analytics 4**. It sets two first-party cookies, `_ga` and `_ga_<id>`, which expire after 2 years, and records the data listed above. Google processes this data on our behalf. Analytics data is kept for **14 months** and then deleted automatically.

A banner asks for your choice. In the European Economic Area, the United Kingdom and Switzerland, analytics cookies are only set after you click **Accept**. Elsewhere, analytics is on by default and you can turn it off by clicking **Decline**. Closing the banner without choosing keeps the default for your region. While cookies are declined, Google Analytics sets no cookies and receives only cookieless signals that can't identify you across visits. You can change your choice at any time with **Cookie settings** at the bottom of every page, or install the [Google Analytics opt-out add-on](https://tools.google.com/dlpage/gaoptout).

## Hosting

The site is hosted on **Netlify**, which processes your IP address and request details (such as the page requested and your browser's user agent) on our behalf to serve the site and protect it from abuse. Netlify keeps these logs for a limited period. The site is served only over HTTPS. See [Netlify's privacy policy](https://www.netlify.com/privacy/).

## Comments

Example pages show comments using **Gitalk**, which stores comments as issues in our public GitHub repository, [eladg/ffmpeg-by-example](https://github.com/eladg/ffmpeg-by-example/issues).

- **Reading comments:** your browser loads them directly from GitHub, so GitHub receives your IP address.
- **Signing in to comment:** you sign in with your GitHub account. GitHub asks you to grant the `public_repo` permission, which Gitalk needs to post your comment as an issue; it also gives the site write access to your public repositories. The one-time sign-in code passes through a third-party proxy, `cors-anywhere.azm.workers.dev` (Gitalk's default), which we don't operate. Your GitHub access token, and a comment you haven't posted yet, are stored in your browser's local storage.
- **What is public:** anything you post, with your GitHub username and avatar.

You can edit or delete your comments on GitHub, and revoke the permission any time in GitHub → Settings → Applications → Authorized OAuth Apps. GitHub handles this data under its own [privacy statement](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement).

## Contributing an example

When you [submit an example](/contribute/), it is sent to a Netlify function that publishes it as a pull request in our public GitHub repository. The pull request contains the command, title, description, category, tags and media link you entered, and your **name**. If you provide an **email address**, it is published too, next to your name on the example page. The function doesn't log or store your submission; it only forwards it to GitHub.

While you fill in the form, your draft is saved only in your own browser (local storage). It is not sent anywhere until you submit, and it is cleared after a successful submission.

Published examples stay online until you ask us to remove them. We can remove an example and your details from the site and the repository; copies in the pull request history on GitHub may require a request to GitHub Support to delete.

## Embedded content

Some pages load content from other services, which receive your IP address:

- **YouTube** videos use YouTube's privacy-enhanced mode (`youtube-nocookie.com`), which doesn't set cookies until you play a video, though it may store some data in your browser before then.
- **Images and videos** in most examples are stored on **Amazon Web Services (Amazon S3)** on our behalf; a few are loaded from the contributor's own website.
- The **Ko-fi** donation button is loaded from ko-fi.com. See [Ko-fi's privacy policy](https://more.ko-fi.com/privacy).
- Scripts and styles for the comments are loaded from the **jsDelivr** CDN.

## Cookies and browser storage

| Name | Set by | Type | Purpose | Expires |
|---|---|---|---|---|
| `_ga`, `_ga_<id>` | Google Analytics | Cookie | Analytics (only with consent where required) | 2 years |
| `ffmpegbyexample:consent` | This site | Local storage | Remembers your cookie choice | Until you clear it |
| `ffmpegbyexample:consent-dismissed` | This site | Session storage | Keeps the banner closed after you close it | When you close the tab |
| `GT_ACCESS_TOKEN` | Gitalk | Local storage | Keeps you signed in to comment | Until you clear it or sign out |
| `GT_COMMENT` | Gitalk | Local storage | Keeps a comment you haven't posted yet | Until it is posted or cleared |
| `ffmpegbyexample:contribute-draft` | This site | Local storage | Saves your contribute-form draft | Until you submit or clear it |

YouTube and Ko-fi may set their own cookies when you interact with their content, under their own policies.

## Who receives your data

- **On our behalf (processors):** Google (Analytics), Netlify (hosting and the contribute function), Amazon Web Services (media storage).
- **Under their own policies (independent controllers):** GitHub (comments and contributions), Google/YouTube (videos), Ko-fi (donations), jsDelivr (scripts), and the Gitalk sign-in proxy.

We don't share your data with anyone else, except where required by law.

## International transfers

We are based in the United States, and Google, Netlify, Amazon Web Services and GitHub process data there. If you visit from the European Union, the United Kingdom or Switzerland, your data is transferred to the United States. These providers protect such transfers through the EU–US Data Privacy Framework (and its UK and Swiss extensions) or the European Commission's Standard Contractual Clauses.

## How long we keep data

| Data | Kept for |
|---|---|
| Google Analytics data | 14 months |
| Analytics cookies in your browser | 2 years, unless you delete them |
| Hosting logs | A limited period set by Netlify |
| Published examples and comments | Until you ask us to remove them (or delete your comment) |
| Emails you send us | As long as needed to handle your request |

## Your rights

Depending on where you live, you have the right to:

- **access** the personal data we hold about you, and receive a copy in a portable format;
- **correct** it;
- **delete** it;
- **restrict** or **object to** how we use it;
- **withdraw your consent** at any time, where we rely on consent (this doesn't affect what we did before).

To use any of these rights, email **[ffmpegbyexample@gmail.com](mailto:ffmpegbyexample@gmail.com)**. We reply within one month. If you are in the EU or UK and are not satisfied with our answer, you can complain to your local data protection authority (in the UK, the [Information Commissioner's Office](https://ico.org.uk/make-a-complaint/)).

If you live in California, you can ask what personal information we have about you, ask us to correct or delete it, and you won't be treated differently for asking. We don't sell or share personal information.

## Children

The site is not directed at children under 16, and we don't knowingly collect their personal data. If you believe a child has sent us personal data, email us and we will delete it.

## Changes

If this policy changes, we'll update this page and the date at the top.
