---
id: doc1
title: Beginners 🔰
sidebar_label: Beginners 🔰
---

## What is Ethereum Classic (ETC)?

Ethereum Classic is a decentralized blockchain platform that lets anyone build and use decentralized applications that run on blockchain technology. Like Bitcoin, no one controls or owns Ethereum Classic – it is an open-source project built by people around the world. Unlike the Bitcoin protocol, Ethereum Classic was designed to be adaptable and flexible. It is easy to create new applications on the Ethereum Classic platform.

In 2014, Ethereum founders Vitalik Buterin, Gavin Wood and Jeffrey Wilcke began work on a next-generation blockchain that had the ambitions to implement a general, fully trustless smart contract platform.

## Ethereum Virtual Machine (EVM)

![evm-info-graphic](https://miro.medium.com/max/482/1*CKfZaQRip1LZJlN_tlyy8Q.png)

Ethereum Classic is a programmable blockchain. Rather than give users a set of pre-defined operations (e.g. bitcoin transactions), Ethereum Classic allows users to create operations of any complexity. It serves as a platform for many different types of decentralized blockchain applications, including but not limited to cryptocurrencies.

Ethereum Classic in the narrow sense refers to a suite of protocols that define a platform for decentralized applications. At the heart of it is the Ethereum Virtual Machine (“EVM”), which can execute code of arbitrary algorithmic complexity. In computer science terms, Ethereum Classic is “Turing complete”. Developers can create applications that run on the EVM using friendly programming languages modeled on existing languages like JavaScript and Python.

Ethereum Classic includes a peer-to-peer network protocol. The Ethereum Classic blockchain database is maintained and updated by many nodes connected to the network. Each node of the network runs the EVM and executes the same instructions.

This massive parallelization of computing across the entire Ethereum Classic network is not done to make computation more efficient. In fact, this process makes computation on Ethereum  Classic far slower and more expensive than on a traditional “computer”. Rather, every Ethereum Classic node runs the EVM to maintain consensus across the blockchain. Decentralized consensus gives Ethereum Classic extreme levels of fault tolerance, ensures zero downtime, and makes data stored on the blockchain forever unchangeable and censorship-resistant.

The Ethereum Classic platform itself is featureless or value-agnostic. Similar to programming languages, it is up to entrepreneurs and developers to decide what it should be used for. However, certain application types benefit more than others from Ethereum Classic's capabilities. Specifically, Ethereum Classic is suited for applications that automate direct interaction between peers or facilitate coordinated group action across a network. For instance, applications for coordinating peer-to-peer marketplaces, or the automation of complex financial contracts. Bitcoin allows for individuals to exchange cash without involving any middlemen like financial institutions, banks, or governments. Ethereum Classic’s impact may be more far-reaching. In theory, financial interactions or exchanges of any complexity could be carried out automatically and reliably using code running on Ethereum Classic. Beyond financial applications, any environments where trust, security, and permanence are important – for instance, asset-registries, voting, governance, and the internet of things – could be massively impacted by the Ethereum Classic platform.

## How does Ethereum Classic Classic work?

Ethereum Classic incorporates many features and technologies that will be familiar to users of Bitcoin, while also introducing many modifications and innovations of its own.

Whereas the Bitcoin blockchain was purely a list of transactions, Ethereum Classic's basic unit is the account. The Ethereum Classic blockchain tracks the state of every account, and all state transitions on the Ethereum Classic blockchain are transfers of value and information between accounts. There are two types of accounts:

- Externally Owned Accounts (EOAs), which are controlled by private keys
- Contract Accounts, which are controlled by their contract code and can only be “activated” by an EOA

For most users, the basic difference between these is that human users control EOAs - because they can control the private keys which give control over an EOA. Contract accounts, on the other hand, are governed by their internal code. If they are “controlled” by a human user, it is because they are programmed to be controlled by an EOA with a certain address, which is in turn controlled by whoever holds the private keys that control that EOA. The popular term “smart contracts” refers to code in a Contract Account – programs that execute when a transaction is sent to that account. Users can create new contracts by deploying code to the blockchain.

Contract accounts only operate when instructed to do so by an EOA. So a Contract account can't be performing native operations like random number generation or API calls – it can do these things only if prompted by an EOA. This is because Ethereum Classic requires nodes to be able to agree on the outcome of computation, which requires a guarantee of strictly deterministic execution.

Like in Bitcoin, users must pay small transaction fees to the network. This protects the Ethereum Classic blockchain from frivolous or malicious computational tasks, like DDoS attacks or infinite loops. The sender of a transaction must pay for each step of the “program” they activated, including computation and memory storage. These fees are paid in amounts of Ethereum Classic's native value-token, Classic-Ether.

These transaction fees are collected by the nodes that validate the network. These “miners” are nodes in the Ethereum Classic network that receive, propagate, verify, and execute transactions. The miners then group the transactions – which include many updates to the “state” of accounts in the Ethereum Classic blockchain – into what are called “blocks”, and miners then compete with one another for their block to be the next one to be added to the blockchain. Miners are rewarded with ether for each successful block they mine. This provides the economic incentive for people to dedicate hardware and electricity to the Ethereum Classic network. Just as in the Bitcoin network, miners are tasked with solving a complex mathematical problem to successfully “mine” a block. This is known as a “Proof of Work”. Any computational problem that requires orders of magnitude more resources to solve algorithmically than it takes to verify the solution is a good candidate for proof of work.