---
title: jade-explorer-a-minimum-block-explorer-for-the-ethereum-stack
---

# Jade Explorer, A Minimal Block Explorer for the Ethereum Stack

![](https://user-images.githubusercontent.com/364566/62577862-aa927780-b854-11e9-9aba-a58eb7b44a47.png)

Jade Explorer is a minimal block explorer for the Ethereum Stack. The explorer utilizes Jade Service Runner for managing background services (Multi-Geth), OpenRPC for underlying functionality, and Pristine. It does not use a database, and can be configured to point at any remote RPC node for any EVM-based network. The goal of Jade Explorer is to provide a resource for network information and block exploration.

Explorer Features:

- Display chain id
- Syncing status
- Runtime configuration for endpoints
- Search by Block, Transaction, Address
- Charts for hash, transaction count, gas used, uncles
- Preview latest blocks

https://twitter.com/Yazanator/status/1169672697632215040?s=20

Need a block explorer for your EVM-based client? Just add it in the url `https://explorer.jade.builders/?rpcUrl=https://`. Here are some examples:

- ETC mainnet https://explorer.jade.builders/?rpcUrl=https://www.ethercluster.com/etc
- Kotti (ETC testnet) https://explorer.jade.builders/?rpcUrl=https://www.ethercluster.com/kotti
- ETH mainnet https://explorer.jade.builders/?rpcUrl=https://main-rpc.linkpool.io/
- Goerli (ETH testnet) https://explorer.jade.builders/?rpcUrl=https://rpc.slock.it/goerli 

Current interface settings allow light-dark mode, set service-runner rpcURL or Ethereum rpcURL.

![](https://github.com/etclabscore/jade-media-assets/blob/master/screenshots/jade-explorer_settings.gif?raw=true)

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

The explorer will run at http://localhost:3000/ which should display multi-geth's status, and make sure multi-geth is running.

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

- [Ethereum JSON RPC Specification](https://github.com/etclabscore/ethereum-json-rpc-specification)
- [Jade Service Runner](https://github.com/etclabscore/jade-service-runner)
- [OpenRPC](https://open-rpc.org)
- [Pristine](https://github.com/etclabscore/pristine)