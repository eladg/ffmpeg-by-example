---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
categories: [""]
tags: ["", ""]
author: ""
image_url: ""
discussionId: "{{ replace .Name " " "-" }}"
disable_comments: true
---