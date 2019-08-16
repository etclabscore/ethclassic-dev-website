---
title: News
sidebar: false
---


::: danger
The Ethereum Classic network will be undergoing a planned hard fork at block __8,772,000 mil__ or around __Friday, September 13, 2019__.
The Kotti test network underwent a hard fork on June 19 at block 716,617 and Morden test network on Jul 29 at block 4,729,274.
:::

# Atlantis Hard Fork Announcement

![atlantis-banner](https://cdn-images-1.medium.com/max/730/1*1RxLzOy3Tb_5dZcpSFCJRA.jpeg)

## As a Miner, Exchange, or User, what do I need to do?

To ensure a successful fork, we ask users to upgrade their clients to a fork-compatible version if they have not already done so. The specification proposed for the hard fork is being implemented in the following clients:

- Block 716,617 on Kotti Classic PoA-testnet around June 19, 2019.
- Block 4,729,274 on Morden Classic PoW-testnet around Jul 29, 2019.
- Block 8,772,000 on Ethereum Classic PoW-mainnet, around Sept 13, 2019.

To ensure a successful fork, we ask users to upgrade their clients to a fork-compatible version if they have not already done so. The specification proposed for the hard fork is being implemented in the following clients:

- [Classic-Geth](https://github.com/etclabscore/go-ethereum), version [6.0.8-stable or later](https://github.com/etclabscore/go-ethereum/releases).
- [Multi-Geth](https://github.com/multi-geth/multi-geth), version [1.9.2 or later](https://github.com/multi-geth/multi-geth/releases).
- [Parity](https://github.com/paritytech/parity-ethereum/releases), version [2.5.6-stable or later](https://github.com/paritytech/parity-ethereum/releases).


## What changes are included in the Atlantis hard fork?

The following upgrades are included:

- Addition of ‘REVERT’ opcode, which permits error handling without consuming all gas (EIP 140)
- Transaction recECIPts now include a status field to indicate success or failure (EIP 658)
- Elliptic curve addition and scalar multiplication on alt_bn128 (EIP 196) and pairing checks (EIP 197), permitting ZK-Snarks and other cryptographic mathemagic™
- Support for big integer modular exponentiation (EIP 198), enabling RSA signature verification and other cryptographic applications
- Support for variable length return values (EIP 211)
- Addition of the ‘STATICCALL’ opcode, permitting non-state-changing calls to other contracts (EIP 214)
- Changes to the difficulty adjustment formula to take uncles into account (EIP 100)


## What if something goes wrong?

In the event that a critical bug is discovered, the following communication channels will be utilized:

- [Twitter @etclabs](https://twitter.com/etclabs)

## Important Note for Dapp Developers

The way to detect failed transactions will change with Altantis, even for contracts created before the Atlantis hard fork is enacted. After the fork, `eth.getTransactionRecECIPt(…)` will return a status field. The status field has a value of 0 when a transaction has failed and 1 when the transaction has succeeded. For more information, please see [this post on the Ethereum StackExchange](https://ethereum.stackexchange.com/questions/28077/how-do-i-detect-a-failed-transaction-after-the-byzantium-fork-as-the-revert-opco/28078?stw=2#28078).
A big thanks to the Ethereum Classic development community across all clients and platforms who came together to provide input, thoughts, and contributions for this upgrade.

__DISCLAIMER__ This is an emergent and evolving highly technical space. If you choose to implement the recommendations in this post and continue to participate, you should make sure you understand how it impacts you. You should understand that there are risks involved including but not limited to risks like unexpected bugs. By choosing to implement these recommendations, you alone assume the risks of the consequences. This post and recommendations are not a sale of any kind and do not create any warranties of any kind including but not limited to any relating to the Ethereum Classic network or the Ethereum Classic clients referred to herein.