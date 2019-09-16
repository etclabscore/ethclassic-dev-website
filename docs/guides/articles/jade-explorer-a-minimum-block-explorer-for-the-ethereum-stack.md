---
title: jade-explorer-a-minimum-block-explorer-for-the-ethereum-stack
---

# Jade Explorer, A Minimal Block Explorer for the Ethereum Stack

![](https://github.com/etclabscore/jade-media-assets/blob/master/screenshots/jade-explorer-v1.1.0.png?raw=true)

[Jade Explorer](https://explorer.jade.builders/) is a minimal block explorer for the Ethereum Stack. The explorer utilizes [Jade Service Runner](https://github.com/etclabscore/jade-service-runner) for managing background services (Multi-Geth), OpenRPC for underlying functionality, and Pristine. It does not use a database, and can be configured to point at any remote RPC node for any EVM-based network. The goal of Jade Explorer is to provide a resource for network information and block exploration.

Explorer Features:

- Display chain id
- Syncing status
- Runtime configuration for endpoints
- Search by Block, Transaction, Address
- Charts for hash, transaction count, gas used, uncles
- Preview latest blocks

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The <a href="https://twitter.com/hashtag/Jade?src=hash&amp;ref_src=twsrc%5Etfw">#Jade</a> Explorer by <a href="https://twitter.com/shanejonas?ref_src=twsrc%5Etfw">@shanejonas</a> and <a href="https://twitter.com/etclabscore?ref_src=twsrc%5Etfw">@etclabscore</a> can use <a href="https://twitter.com/hashtag/Ethercluster?src=hash&amp;ref_src=twsrc%5Etfw">#Ethercluster</a> directly to provide an explorer using just the URL. <br><br>Check it out here using Ethercluster: <a href="https://t.co/z34HGSUyih">https://t.co/z34HGSUyih</a><br><br>No database needed. This is the type of dev collaboration I&#39;ve dreamt about across teams.</p>&mdash; Yaz Khoury (@Yazanator) <a href="https://twitter.com/Yazanator/status/1169672697632215040?ref_src=twsrc%5Etfw">September 5, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Need a block explorer for your EVM-based client? Just add it in the url `https://explorer.jade.builders/?rpcUrl=https://`. Here are some examples:

- ETC mainnet [https://explorer.jade.builders/?rpcUrl=https://www.ethercluster.com/etc](https://explorer.jade.builders/?rpcUrl=https://www.ethercluster.com/etc)
- Kotti (ETC testnet) [https://explorer.jade.builders/?rpcUrl=https://www.ethercluster.com/kotti](https://explorer.jade.builders/?rpcUrl=https://www.ethercluster.com/kotti)
- ETH mainnet [https://explorer.jade.builders/?rpcUrl=https://main-rpc.linkpool.io/](https://explorer.jade.builders/?rpcUrl=https://main-rpc.linkpool.io/)
- Goerli (ETH testnet) [https://explorer.jade.builders/?rpcUrl=https://rpc.slock.it/goerli](https://explorer.jade.builders/?rpcUrl=https://rpc.slock.it/goerli )

Maybe you want to see how much the DAO hacker HODLs lol

![](https://github.com/etclabscore/jade-media-assets/blob/master/screenshots/jade-explorer-v1.1.0-searching.gif?raw=true)

Current menu items in the header include ethereum-json-rpc documentation, source-code, rpcURL configurations, and light-dark mode.

![](https://github.com/etclabscore/jade-media-assets/blob/master/screenshots/jade-explorer-v1.1.0-menu-items.gif?raw=true)

---

## Install

### Dependencies

- at least node `v10.15.3`
- at least npm `v6.4.1`

Clone the repository and install project dependencies.

```bash
git clone https://github.com/etclabscore/jade-explorer.git && cd jade-explorer && npm install
```

## Usage

### Service Runner
If you dont have a [service-runner](https://github.com/etclabscore/jade-service-runner) running you can use the one in the package.json via: (or see the configuration section below to provide your own ethereum rpc URL):

```bash
npm run service-runner
```

Jade Service Runner will run at http://localhost:8002/.

## Start the explorer.

```bash
npm start
```

The explorer will run at `http://localhost:3000/` which should display multi-geth's status, and make sure multi-geth is running.

### Notes on Multi-Geth & Service Runner

By default, multi-geth service will run ETC mainnet. Jade Service runner conveniently contains the service in the `/.services/` directory of project.

```bash
# ./services/
.
└── multi-geth
    └── 1.9.0
        └── multi-geth
            └── 1.9.0
                └── classic
                    ├── geth
                    │   ├── chaindata
                    │   ├── ethash
                    │   └── nodes
                    └── keystore
```

## Configuration

### Configure rpc via url

https://explorer.jade.builders/?rpcUrl=https://services.jade.builders/multi-geth/kotti/1.9.2


### Configure default urls via environment variables

Override eth url

```
REACT_APP_ETH_RPC_URL=https://services.jade.builders/multi-geth/mainnet/1.9.2 npm start
```

**OR**

Override service runner url

```
REACT_APP_SERVICE_RUNNER_URL=https://services.jade.builders/ npm start
```

## Resources

- [Jade Suite HQ](https://jade.builders)
- [Ethereum JSON RPC Specification](https://github.com/etclabscore/ethereum-json-rpc-specification)
- [Jade Service Runner](https://github.com/etclabscore/jade-service-runner)
- [OpenRPC](https://open-rpc.org)
- [Pristine](https://github.com/etclabscore/pristine)