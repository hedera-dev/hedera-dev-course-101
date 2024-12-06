# Querying Hedera Network State - Student Guide

Student guide for module 101-02 of the Hedera Developer Course.

Status: Note that this is still a work in progress.
Materials that are not available yet or incomplete are marked with "(WIP)".

## Overview

This module introduces the concept of network state,
and the various ways in which which we interact with it.

This module demonstrates the various methods to
query data from the current state of the Hedera network.
Namely Mirror Node APIs (programmatic),
JSON-RPC (programmatic), and
Hashscan (visual user interface).

## Learning Outcomes

- [ ] Understand the concept of *state* both in general, and on a blockchain
- [ ] Compare and contrast state interaction concepts
  - Request and response
  - Query and update
  - Transport types
  - Protocol types
  - CQRS
  - Transactions
- [ ] Understand the purpose and functionality of Mirror Nodes, JSON-RPC, and Hashscan in Hedera
- [ ] Appreciate than an additional method of interaction with Hedera state, HAPI, exists
- [ ] Compare and contrast the different JSON-RPC endpoints available

**Practical**

- [ ] Issue a CLI instruction to query Hedera Testnet using the Mirror Node API
- [ ] Run a NodeJs script to query Hedera Testnet using the Mirror Node API
- [ ] Look up a JSON-RPC endpoint URL for Hashio
- [ ] Set up a JSON-RPC endpoint URL via 3rd party providers
- [ ] Set up a JSON-RPC endpoint URL via Hedera JSON-RPC Relay
- [ ] Issue a CLI instruction to query Hedera Testnet using JSON-RPC
- [ ] Run a NodeJs script to query Hedera Testnet using the JSON-RPC
- [ ] Browse Hashscan in browser to query Hedera Testnet using a browser

## Self Assessments

TODO_CONTENT

## Definitions

TODO_CONTENT

## Code Snippets

JSON-RPC request body to retrieve the latest block.
Note that you should use `JSON.stringify` to use as input into an HTTP request.

```js
  {
    method: 'eth_getBlockByNumber',
    params: ['latest', false],
    'id': 1,
    'jsonrpc': '2.0',
  }
```

Issue an HTTP `POST` request to a JSON-RPC endpoint at `rpcUrl`.

```js
  await fetch(
    rpcUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonRpcRequestBody,
      redirect: 'follow',
    },
  );
```

## Resources

- [`curl`](https://curl.se/) -
  a CLI tool used in this module to make HTTP requests
- [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) -
  a guide to using `fetch` to make HTTP requests in Javascript
- Blockchain state, as defined in the [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)
  - "[a blockchain] can be viewed as a transaction-based state machine: we begin with a genesis state and incrementally execute transactions to morph it into some current state. It is this current state which we accept as the canonical version [of the blockchain]"
- Blockchain state, as defined by Amrit Kumar. [DApps Dev Club Session 5 Round Up](https://dappsdev.org/blog/2019-05-02-dapps-dev-club-5th-session-roundup/)
  - "[blockchains] are stateful systems. This basically means that a [blockchain] at any point of time can be said to be in a particular "state". ... A state transition is a function that allows users to change the state of the [blockchain]"

## Self Assessment Answers

TODO_CONTENT
