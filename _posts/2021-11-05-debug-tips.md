---
title: 'Debugging Tips'
date: 2021-11-05
permalink: /posts/2021/11/debug-tips/
tags:
  - Debug
---

Some debugging tips

# Debugging tips

- Fantastic programming -> headache debugging

<center>
<img src="https://md.cra.moe/uploads/upload_6caeba574eca07f26ee6e9d9d9d54816.jpg" width=500/>
</center>

<center>
<img src="https://md.cra.moe/uploads/upload_fdb72c522916e614bac0d109ef4e9865.jpg" width=300/>
</center>

<center>
<img src="https://md.cra.moe/uploads/upload_bdb6c612940676811346e241169ddfbe.jpg" width=300/>
</center>

## Error & Exception

![](https://md.cra.moe/uploads/upload_4c77acfce2295309ec81dfc1de9462bc.png)

## Runtime Exceptions

![](https://md.cra.moe/uploads/upload_1c8fe8e3197912e9b773796b1543970a.png)

- 数组越界
    1. 删东西了/多删了一个？
    2. 数组建的不够大
    3. index从0开始而不是1
- 解决办法
    1. 每次建数组的时候多开一段内存空间
    2. safety check

## NPE

- 现阶段的NPE本质上还是没有完全理解类与对象的概念
- 对象中套对象
- 是否已经创建对象

## Stack overflow Error

- 递归调用
- 一般来说是死循环了
- 方法/函数之间有环 A-> B -> C -> A
