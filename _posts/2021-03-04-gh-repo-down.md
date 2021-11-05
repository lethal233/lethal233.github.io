---
title: 'GitHub repo downloads'
date: 2021-03-04
permalink: /posts/2021/03/gh-repo-down/
tags:
  - RSA key
  - Git
---

SSH & HTTPS of GitHub repo

# GitHub repo downloads

## HTTPS

Just copy the repo's link and type it in the command line

```bash
git clone https://github.com/xxx/xxx.git
```

## SSH

- Before the following, you can back-up your ssh key before.
  - For windows users, go to `C:\users\xxx\.ssh\`, then input `cp id_rsa id_rsa.bak` and `cp id_rsa.pub id_rsa.pub.bak`.

- Open the command line and input

  ```bash
  ssh-keygen -t rsa -C xxx@xxx.com
  ```

  Here xxx@xxx.com is your GitHub email account. Then press the `Enter`, and you will successfully create the public key.

- Open the GitHub, go to settings -> SSH -> new SSH key. Input the title (whatever, it doesn't matter), and put all the contents in the `id_rsa.pub` into the box.

- Then clone the repo by `git clone git@github.com:xxxx/xxx/.git`.
