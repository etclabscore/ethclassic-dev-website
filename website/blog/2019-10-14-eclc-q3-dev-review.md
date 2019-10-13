---
title: Ethereum Classic Labs Core — Quarterly Development Review Q3, 2019
author: Stevan Lohja
authorURL: http://twitter.com/stevanlohja
---

![article_banner](https://github.com/stevanlohja/ETC_Gifs/blob/master/etc_death_star.png?raw=true)

It’s been 10 months since Ethereum Classic Labs Core (ECLC) launched, and we are blessed to have made so much progress since.

## Atlantis, next stop Agharta

The ETC community worked relentlessly to coordinate the Atlantis hard fork. ECL/ ECLC are proud to have championed Atlantis along side the broader community and we stand behind consensus for the next upgrades to come (Agharta).

# Third-Quarter 2019 Achievements

## EVM/ Compiler Team

### EVM-LLVM Backend

- Major progress on EVM-LLVM backend nearing Alpha release. If you want a sneak peak, then check out the project repo [here](https://github.com/etclabscore/evm_llvm).

![evm_llvm_img](https://miro.medium.com/max/1150/1*fN8cQg_61dircMPhnzfogw.png)

The EVM-LLVM back-end project will allow developers use a large scope of programming languages (Rust for smart contracts!) other than Solidity to target the Ethereum Virtual Machine (EVM), they can also immediately benefit from various development tools built around LLVM infrastructure.

## Client Team

- Contributed to [Multi-Geth](https://github.com/multi-geth/multi-geth) [release](https://github.com/multi-geth/multi-geth/releases) `v1.9.3` with updates to upstream tracking and OpenRPC service definition.
- Contributed [CLI](https://github.com/gregdhill/go-openrpc/pull/4) to [Go-OpenRPC](https://github.com/gregdhill/go-openrpc), a Go-lang instance of OpenRPC forked by Greg Hill whom's working on *Hyperledger Burrow. Hyperledger Burrow now utilizes OpenRPC.*

## Tooling Team

### OpenRPC

![open_rpc_logo](https://github.com/open-rpc/design/blob/master/icons/open-rpc-logo-noText/open-rpc-logo-noText%20(PNG)/128x128.png?raw=true)

- [OpenRPC Spec](https://spec.open-rpc.org/) [releases](https://github.com/open-rpc/spec/releases) `v1.1.11` to `v1.2x`.

The OpenRPC Specification defines a standard, programming language-agnostic interface description for JSON-RPC 2.0 APIs.

- [OpenRPC Inspector](https://inspector.open-rpc.org/) `1x` released.
  
- Inspector tool implemented in OpenRPC Playground.

![inspector_img](https://i.imgur.com/PA4sVM3.png)

OpenRPC Inspector is a simple tool to create, modify and execute JSON-RPC requests. It can be used as a standalone tool or included in other projects. Now developers can test their APIs in the playground by using the inspector tool conveniently embedded within the documentation of their APIs.

- [OpenRPC Playground](https://playground.open-rpc.org/) [releases](https://github.com/open-rpc/playground/releases) focused on performance and stability.

![open_rpc_playground_img](https://user-images.githubusercontent.com/364566/60648033-ef5d6580-9df3-11e9-8b48-5e239f0c7574.png)

The OpenRPC Playground is an online IDE that allows developers to build documentation driven JSON-RPC 2.0 APIs. 

- OpenRPC semantic release plugin 1x [released](https://github.com/open-rpc/semantic-release-plugin).
  
- OpenRPC client-js [releases](https://github.com/open-rpc/client-js/releases).

Client-js is a browser-compatible JSON-RPC client with multiple transports:

- OpenRPC server-js [releases](https://github.com/open-rpc/server-js/releases).

OpenRPC server-js is a JSON-RPC 2.0 server implementation that supports multiple transport protocols. Inspired by [mole-rpc](https://github.com/koorchik/node-mole-rpc), built for OpenRPC.

- OpenRPC generator-client [releases](https://github.com/open-rpc/generator-client/releases).

The generator-client is a tool to generate clients based on a given OpenRPC document. Currently supports Rust, JavaScript/ Typescript, and more to come.

- OpenRPC meta schema [releases](https://github.com/open-rpc/meta-schema/releases).

- [Ethereum JSON](https://github.com/etclabscore/ethereum-json-rpc-specification) RPC API [releases](https://github.com/etclabscore/ethereum-json-rpc-specification/releases).

![eth_json_rpc_api](https://pbs.twimg.com/media/ECbGY3XWkAMf2uX?format=jpg&name=small)

The Ethereum JSON RPC API is a a JSON-RPC API to interface with the [EthereumStack](https://github.com/etclabscore/ethereum-json-rpc-specification/releases).

### Jade Suite

![jade_explorer_img](https://miro.medium.com/max/1121/0*Iy8iW5zEyJU56XkA.png)

The goal of Jade is to enable the creation of decentralized, peer to peer applications built for Ethereum Classic.

- [Jade Explorer](https://explorer.jade.builders/) [released](https://github.com/etclabscore/jade-explorer).

![jade_explorer_img](https://i.imgur.com/p8iNuJg.gif)

Jade Explorer is a minimal open-source block explorer for the Ethereum Stack and can be configured at any remote RPC node for any EVM-based network. We’ve recently implemented a change language feature which currently supports Chinese and Korean.

- [Jade Service Runner UI](https://github.com/etclabscore/jade-service-runner-ui) [released](https://github.com/etclabscore/jade-service-runner-ui).

![jsr_ui_img](https://user-images.githubusercontent.com/364566/63100364-cc15f200-bf2b-11e9-9698-12e05a8d0bd0.gif)

Jade Service Runner UI is an app that bundles Jade Service Runner and its interface into an easy to use application for users to install, manage, and discover locally run services.

- [Jade Signer RPC](https://github.com/etclabscore/jade-signer-rpc) [pre-releases](https://github.com/etclabscore/jade-signer-rpc/releases).

Jade Signer JSON-RPC API lets you manage keys, sign transactions and messages offline for any EVM-based blockchain.

## Forward Goals

### Agharta Hard Fork

- Activtely partipcate in [ECIP-1056 Agharta Upgrade](http://ecips.ethereumclassic.org/ECIPs/ecip-1056)

![agharta_img](https://github.com/stevanlohja/ETC_Gifs/blob/master/Forks/agharta-banner.jpg?raw=true)

ECLC plans to be an active participant in the Agharta network upgrade. A public core devs call to discuss the specification is planned on Thursday, October 24, 2019, 1pm UTC. Details of the meeting can be found [here](https://github.com/ethereumclassic/ECIPs/issues/135). The intention of the Agharta network upgrade is to increase ETC-ETH compatabilty by being inclusive of the ETH *Constaninople* & *Petersburg* hard forks and possibly more.

## ECLC in the Media

🔗⏯ [ETC Summit 2019 - Day 1 - Talk 05 - Shane Jonas - The Future of JSON RPC Tooling](https://www.youtube.com/watch?v=g2zUSyXW6nI)

🔗⏯ [ETC Summit 2019 - Day 1 - Talk 06 - Zane Starr - Jade Service Runner: Bridging the Decentralized Ser...](https://www.youtube.com/watch?v=xZuZ-wrWCFs)

🔗⏯ [Jade Explorer - a minimal open-source block explorer for the Ethereum Stack](https://www.youtube.com/watch?v=O3CguPx_XDE&t=3s)

🔗⏯ [Mordor teaser (see description)](https://www.youtube.com/watch?v=3bmjiJDhGyo)

🔗📰 [The EVM-LLVM is coming to Ethereum Classic! What you need to know.](https://medium.com/etclabscore/the-evm-llvm-is-coming-to-ethereum-classic-what-you-need-to-know-c13962f25571)

🔗📰 [Jade Explorer, A Minimal Block Explorer for the Ethereum Stack
](https://medium.com/etclabscore/jade-explorer-a-minimal-block-explorer-for-the-ethereum-stack-a0df1aecdc38)

## Connect with ECL and ECLC

- Chat on [Discord](https://discordapp.com/invite/NgzMPaj), [Telegram](https://t.me/etclabs)
- Follow [ECL](https://twitter.com/etclabs) and [ECLC](https://twitter.com/etclabscore) on Twitter
- Ethereum Classic Labs Core [Github](https://github.com/etclabscore)
- Ethereum Classic Labs [Blog](https://medium.com/ethereum-classic-labs)