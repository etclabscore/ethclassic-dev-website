---
title: News
sidebar: false
---

![atlantis-banner](https://cdn-images-1.medium.com/max/730/1*1RxLzOy3Tb_5dZcpSFCJRA.jpeg)

Dear Ethereum Classic stakeholder,

:::danger
The Ethereum Classic (ETC) network will be undergoing a planned hard fork at block  **8,772,000**  mil or around 12:00 UTC and 13:00 UTC on  **Friday, September 13, 2019**.
:::
The Kotti test network underwent a hard fork on June 19 at block 716,617 and Morden test network on Jul 29 at block 4,729,274.

**As a Miner, Exchange, or User, what do I need to do?**

To ensure a successful fork, we ask users to upgrade their clients to a fork-compatible version if they have not already done so. The specification proposed for the hard fork is being implemented in the following clients:

- Classic-Geth, version [**6.0.8-stable  or later**](https://github.com/etclabscore/go-ethereum/releases).
- Multi-Geth, version [**1.9.2-stable or later**](https://github.com/etclabscore/multi-geth/releases).
- Parity, version [**2.5.6-stable or later**](https://github.com/paritytech/parity-ethereum/releases).

**What is a hard fork in Ethereum Classic?**

A hard fork is a change to the underlying Ethereum Classic protocol, creating new rules to improve the system. The protocol changes are activated at a specific block number. All Ethereum Classic clients need to upgrade, otherwise, they will be stuck on an incompatible chain following the old rules.

**What is Atlantis?**

Atlantis is a planned Ethereum Classic protocol upgrade. Atlantis is occurring at block number 8,772,000 mil. Atlantis implements Ethereum&#39;s Byzantium and Spurious Dragon upgrades to the Ethereum Classic network and has been adopted as an accepted Ethereum Classic Improvement specification which can be found at [ECIP-1054](https://github.com/etclabscore/ECIPs/blob/master/ECIPs/ecip-1054.md).

**What changes are included in the Atlantis hard fork?**

The following upgrades are included:

- Addition of &#39;REVERT&#39; opcode, which permits error handling without consuming all gas ([EIP 140](https://github.com/ethereum/EIPs/pull/206))
- Transaction receipts now include a status field to indicate success or failure ([EIP 658](https://github.com/ethereum/EIPs/pull/658))
- Elliptic curve addition and scalar multiplication on alt\_bn128 ([EIP 196](https://github.com/ethereum/EIPs/pull/213)) and pairing checks ([EIP 197](https://github.com/ethereum/EIPs/pull/212)), permitting ZK-Snarks and other cryptographic mathemagic™
- Support for big integer modular exponentiation ([EIP 198](https://github.com/ethereum/EIPs/pull/198)), enabling RSA signature verification and other cryptographic applications
- Support for variable-length return values ([EIP 211](https://github.com/ethereum/EIPs/pull/211))
- Addition of the &#39;STATICCALL&#39; opcode, permitting non-state-changing calls to other contracts ([EIP 214](https://github.com/ethereum/EIPs/pull/214))
- Changes to the difficulty adjustment formula to take uncles into account ([EIP 100](https://github.com/ethereum/EIPs/issues/100))

**What if something goes wrong?**

**In the event that a critical bug is discovered, the following communication channels will be utilized:**

- ETC Labs Twitter [@etclabs](https://twitter.com/@etclabs)
- ETC Labs Telegram [https://t.me/etclabs](https://t.me/etclabs)
- ETC Labs/ Core Discord [https://discord.gg/S9AT3X2E
](https://discord.gg/S9AT3X2)

**Important Note for Dapp Developers:**

**The way to detect failed transactions will change with Altantis, even for contracts created before the Atlantis hard fork is enacted.**  After the fork, _eth.getTransactionRecECIPt(…)_ will return a status field. The status field has a value of 0 when a transaction has failed and 1 when the transaction has succeeded. For more information, please see [this post on the Ethereum StackExchange](https://ethereum.stackexchange.com/questions/28077/how-do-i-detect-a-failed-transaction-after-the-byzantium-fork-as-the-revert-opco/28078?stw=2#28078).

A big thanks to the Ethereum Classic development community across all clients and platforms who came together to provide input, thoughts, and contributions for this upgrade.

**DISCLAIMER****  **This is an emergent and evolving highly technical space. If you choose to implement the recommendations in this post and continue to participate, you should make sure you understand how it impacts you. You should understand that there are risks involved including but not limited to risks like unexpected bugs. By choosing to implement these recommendations, you alone assume the risks of the consequences. This post and recommendations are not a sale of any kind and do not create any warranties of any kind including but not limited to any relating to the Ethereum Classic network or the Ethereum Classic clients referred to herein.