---
permalink: /projects/
title: "Course Projects"
author_profile: true
redirect_from:
  - /projects.html
---

This page is designed for the collection of my course projects from 2018 to 2022, [link to materials](https://github.com/lethal233/course-collections)

Course list (in class identifier's order):

- Digital Design (CS207): [VGA controller](https://github.com/assign-D-D/simple_VGA)
- Computer Application and System Design (CS209A): [sudoku & magic square](https://github.com/quantum-square)
- Embedded System (CS301): [Wi-Fi communication based on STM32](https://github.com/CS301-sustech-zmfl/wifi-communication)
- Operating System (CS302): [xv6-rust](https://github.com/CS301-sustech-zmfl/xv6-rust)
- Artificial Intelligence (CS303A): [Reversi, IMP, Text classification](https://github.com/lethal233/CS303A-projects)
- Computer Network (CS305): [rdt](https://github.com/zero-day-rdt/RDT)
- Data Mining (CS306): [kdd-taxi-visualization](https://github.com/kdd-taxi-visualization)
- Database Principle (CS307): [mock-12306](https://github.com/Select-60321/select-60321)
- OOAD (CS309): [Database Online Judge System](https://github.com/Phantom-OJ)
- Computer Security (CS315): [Explore SUSTech LAN Vulnerabilities](https://github.com/Phantom-OJ/CS315_THCipv6)

Additionally, I have already done some projects out of interest:

- Analysis of the HTTPS traffic using man-in-the-midddle tool (mitmproxy): [HTTPS analysis](https://github.com/mitmproxy-https-analysis/session_capture)
- Semi-automated tool for browsering (using keyboard shortcut): [Automated Web Crawler](https://github.com/lethal233/subtle-utils)
- COVID-19 data visualization in Wuhan: [C-19 in Wuhan](https://github.com/lethal233/Visualization-of-NCP-Data-in-Wuhan)

The overview of those project: 

## [VGA-controller](https://github.com/assign-D-D/simple_VGA)

- Technical Stack: Verilog, Minisys development board, Python
- Used serial port to transfer images/gif from laptop to the development board.
- Display the image or gif through VGA port on the monitor.
- Resize the images just as the background image in Windows desktop, such as tiling, filling, etc.
- Display the resolution on the development board.


## [Magic-Square-and-Sudoku-Solvers](https://github.com/quantum-square)

- _This repository may not be open-source if you CANNOT see the codes._
- Technical Stack: Java, Python, Javalin, Vue.js
- Solver for sudoku and magic square.
- Accelerated algorithm by evolutionary algorithm.
- Designed a web application to display the live current chess board.

## [WIFI-Module-Communication-STM32](https://github.com/CS301-sustech-zmfl/wifi-communication)

- Technical Stack: C, STM32
- Installed two 2.4G WI-FI modules on separate STM32 development board and made them communicate to each other.
- Used USB serial port to transfer data from laptops to the STM32.
- Display the communication messages on the LCD screen on the STM32.
- Report is available on the GitHub repo.

## [Rust-Implementation-xv6](https://github.com/CS301-sustech-zmfl/xv6-rust)

- Technical Stack: Rust, qemu, xv6
- Based on xv6 written in C, we try to implement it with Rust.
- This is the first time that I used Rust to program.
- Helped developer to debug in his project.
- Implemented a very simple file system.

## [AI-project](https://github.com/lethal233/CS303A-projects)

- Technical Stack: Python (scikit-learn), parallel computing
- First, designed and implemented the mini-max algorithm to compete on the zero-sum game Reversi, ranking 28 over ~180 students. (No ML)
- Second, design and implemented different models based on influence maximization problems, with full marks.
- Third, design and implemented text classification algorithm based on scikit-learn, with full marks.

## [RDT](https://github.com/zero-day-rdt/RDT)

- **HIGHLIGHT: The best group among all the projects**
- Technical Stack: Python
- Implemented a reliable-data-transfer protocol based on UDP.
- Simulated packet loss and low bandwidth during the transfer.
- Adopted event-driven tragedy to handle different states, such as re-delivery, ack and syn-ack.

## [Visualization-of-Taxi-Trip](https://github.com/kdd-taxi-visualization)

- [Video Link](https://www.bilibili.com/video/BV1Hv411V76c/)
- Technical Stack: Python, React, mapbox, deck.gl
- Given 3,000 taxi trips over the course of one day in Shenzhen (coordinates, timestamp, whether it has passengers on it).
- Data cleaning and data mining of these trips.
- Visualized the trips using deck.gl, mapbox, and React.

## [mock-12306](https://github.com/Select-60321/select-60321)

- Technical Stack: Java, Python (for crawling meta-data), Spring Boot, MyBatis, thymeleaf
- Aimed at mocking a small-sized 12306 train trip system in China.
- Crawled large amount of train trip data across the China.
- Designed efficient data storage in the database.
- Preprocessed the crawled data into what we want, and insert them into our designed database.
- Support queries, purchase, refund, etc. of the train trips. 

## [Database-SQL-Online-Judge-System (Phantom OJ)](https://github.com/Phantom-OJ)

- **HIGHLIGHT: The largest project that I have ever done** (~7000 lines of code in backend development)
- Technical Stack: Java, Redis, Spring Boot, Spring Security, MyBatis, PostgreSQL, Python, Docker, Vue.js
- Designed an online judge system for our "Principles of Database Systems" class for homework automated corrction
- Multi-secured and multi-authority system for Teaching Assistants, Student Assistants, and students.
- Used Redis to cache the frequently used messages and data.
- Design Patterns: composite, MVC, REST ......

## [HTTPS-traffic-capture-and-analysis](https://github.com/mitmproxy-https-analysis/session_capture)

- Technical Stack: Python, mitmproxy
- Man-in-the-middle capture
- Classify the traffic according to the IPs and content-type
- Give timely feedback to the pictures related to porn, violence, etc. (bad to children)

## [Automated Web Crawler](https://github.com/lethal233/subtle-utils)

- Technical Stack: Python (requests, keyboard)
- Given a series of URLs (Json/csv/xlsx format), and use keyboard shortcuts to open these URLs in order.
- Get rid of Ctrl+C/V.
- Inspired when doing the quantum-computing research.