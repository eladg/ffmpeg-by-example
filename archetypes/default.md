+++
{{ $seed := "89E97CAC6268A46CCC3F7EB9D75E4041AB64B9A8779218D473" }}
{{ $post_id := delimit (shuffle (split (md5 $seed) "" )) "" }}
version = 1
description = ""
categories = [""]
tags = [""]
author = ""
date = {{ .Date }}
enabled = true
id = "{{ $post_id }}"
example_type = "no-preview"
example_player_data = [""]
thumbnail_url = ""
terminal_command = ""
title = "{{ replace .Name "-" " " | title }}"
views = 1
likes = 1
+++
