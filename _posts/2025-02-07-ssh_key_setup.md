---
layout: post
title: setting up ssh key
date: 2025-02-04 21:01:00
description: How to setup ssh key for fast login
# tags: random
# categories: random
thumbnail: assets/img/terminal.png
---

Create a public-private keypair instead of typing your password each time:
On your local machine (linux/cygwin...):  

```bash
ssh-keygen -t rsa
# I stick with the defaults there. Then copy the public key with
ssh-copy-id -i ~/.ssh/id_rsa.pub user@server
```