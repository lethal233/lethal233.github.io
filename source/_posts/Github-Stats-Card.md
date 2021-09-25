---
title: Github Stats Card
date: 2021-03-02 17:46:17
comments: true
toc: true
tags:
---

# GitHub Stats Card

The overall appearance is like this:

<img src="\img\image-20210302175039829.png" alt="image-20210302175039829" style="zoom:67%;" />

## Steps to generate it automatically

- Create a new repository `[your GitHub name]`.

  - NOTICE: the repository name is exactly the same as your GitHub account name.

- Then edit the README.md file of the repository you just created, and put the following code into it, which is the simplest version.

  ```markdown
  [![lethal233's GitHub stats](https://github-readme-stats.vercel.app/api?username=[your GitHub name]&theme=tokyonight&show_icons=true)](https://github.com/anuraghazra/github-readme-stats)

  [![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=[Your GitHub name])](https://github.com/anuraghazra/github-readme-stats)
  ```

  Then you will see the picture just like above, and more precisely you will get one more picture of the top languages you use.

- If you want to customize it further, you can refer to https://github.com/anuraghazra/github-readme-stats for help.
