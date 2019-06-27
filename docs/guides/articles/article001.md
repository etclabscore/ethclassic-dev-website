---
title: Up and Running With Jade Service Runner
lang: en-US
sidebar: auto
sidebarDepth: 0
---

# Up and Running With Jade Service Runner

## Enviorment Requirements

- at least node 10.5.2
- at least npm 6.9
- typescript

## Install 

Install the latest version of _jade-service-runner_

```bash
​npm install -g @etclabscore/jade-service-runner@latest
```

Check _jade-service-runner_ is installed

```bash
jade-service-runner -v
```

## Usage

See commands and options

```bash
jade-service-runner --help

Usage: jade-service-runner [options]

Options:
  -v, --version              output the version number
  -c, --config <configFile>  JSON file path pointing to a service runner config file
  -d, --dir <directory>      Directory for storing services (default: "./services")
  -p, --port <port>          Set port for service runner (default: "8002")
  -t, --test                 Test configuration
  -h, --help                 output usage information
```
