---
transition: fade-out
layout: module_title_start
---

::title::

# Query Hedera Network State

::subtitle::

## Hedera Developer Course 101

::speaker::

Brendan Graetz

---
transition: fade-out
layout: toc
---

::title::

# What you will learn

::contents::

- Blockchain state
- CQRS
- Lab: Query with Mirror Node API
- Lab: Query with JSON-RPC
- Lab: Query with Hashscan
- Recap

---
transition: fade-out
layout: section_title_start
---

# Blockchain State

---
transition: fade-out
layout: overview_1
---

::title::

# What is "state"?

::default::

Data
- Information
- Where is it stored?

Agreed upon
- Multiple computers agree
- Is data correct?

---
transition: fade-out
layout: overview_1
---

::title::

# Querying state

::default::

Flow
- Request
- Response

State change
- None

---
transition: fade-out
layout: overview_1
---

::title::

# Updating state

::default::

Flow
- Request
- Response

State change
- Happens

---
transition: fade-out
layout: text_chunks_2
---

::title::

# Blockchain Transactions

::chunk_1::

Data
- State update information
- Transaction metadata ← crypto signature

::chunk_2::

Verification

- Check state change
- Check transaction metadata

---
transition: fade-out
layout: statement_2
---

State in blockchains
is their transactions

---
transition: fade-out
layout: text_chunks_4
---

::title::

# Transports

::chunk_1::

HTTP

::chunk_2::

WS

::chunk_3::

gRPC

::chunk_4::

SSH

---
transition: fade-out
layout: text_chunks_4
---

::title::

# Protocols

::chunk_1::

JSON-RPC

::chunk_2::

protobuf

::chunk_3::

XML

::chunk_4::

plain text

---
transition: fade-out
layout: section_title_end
---

# Recap: Blockchain State

---
transition: fade-out
layout: quiz_section_start
---

# Time for a quiz!

---
transition: fade-out
layout: quiz_mcq_5
---

::question::

Network state on Hedera can be queries using the following methods:

::choice_a::

Mirror Node APIs

::choice_b::

JSON-RPC

::choice_c::

Hedera APIs (HAPIs)

::choice_d::

Hashscan

::choice_e::

<span v-mark.circle.orange="1">All of the above</span>

::position::

1/3


---
transition: fade-out
layout: quiz_mcq_4
---

::question::

What is the JSON-RPC method name to retrieve the most recent block on Hedera?

::choice_a::

<span v-mark.circle.orange="1">eth_getBlockByNumber</span>

::choice_b::

eth_blockNumber

::choice_c::

eth_sendRawTransaction

::choice_d::

eth_getBalance

::position::

2/3

---
transition: fade-out
layout: quiz_mcq_2
---

::question::

The state of the Hedera blockchain can be updated without submitting a transaction

::choice_a::

True

::choice_b::

<span v-mark.circle.orange="1">False</span>

::position::

3/3

---
transition: fade-out
layout: quiz_section_start
---

# Quiz complete!

---
transition: fade-out
layout: section_title_start
---

# Lab: Query network state with JSON-RPC

---
transition: fade-out
layout: toc
---

# Tasks

- Set up
- RPC via Hashio endpoint
- RPC via JSON-RPC relay
- RPC via 3rd party RPC endpoint

---
transition: fade-out
layout: text_chunks_3
---

::title::

# Hedera RPC endpoints

::chunk_1::

Hashio

::chunk_2::

3rd party

::chunk_3::

RPC-Relay

---
transition: fade-out
layout: statement_icon
---

# Quick Demo!

::icon::

TODO icon goes here

---
transition: fade-out
layout: code_and_console
---

# Setup (1)

::console::

```text
🏁 Initialise .env file - start  …

🟣 Please enter values requested, or accept defaults, in the interactive prompts below.  …
These will be used to initialise the '.env' file.

Enter a BIP-39 seed phrase
(enter blank value generate a new one at random)
>

// ...
```

---
transition: fade-out
layout: code_and_console
---

::title::

# Setup (2)

::tab::

`script-hdc10102LabQueryRpc.js`

::code::

```js
// ...
```

::console::

```text
cd hdc10102LabQueryRpc

code script-hdc10102LabQueryRpc.js
```

---
transition: fade-out
layout: code_1
---

::title::

# Markers in the file

::tab::

`script-hdc10102LabQueryRpc.js`

::code::

```js {1,2|4,5|7-9|all}
  // (1) via Hashio endpoints
  await logger.logSection('Make a JSON-RPC request to Hedera Testnet via Hashio RPC endpoint');

  // (2) via JSON-RPC relay running on localhost
  await logger.logSection('Make a JSON-RPC request to Hedera Testnet via RPC relay instance');

 // (3) via 3rd party RPC endpoints
 // (exercise left to student)
 await logger.logSection('Make a JSON-RPC request to Hedera Testnet via 3rd party RPC endpoints');

```

---
transition: fade-out
layout: code_1
---

# RPC request body

::tab::

`script-hdc10102LabQueryRpc.js`

::code::

````md magic-move {lines: true}
```js
  // Construct JSON-RPC request body
  const rpcReq1Body = {
  };
```

```js {all|3}
  // Construct JSON-RPC request body
  const rpcReq1Body = {
    method: 'eth_getBlockByNumber',
    'id': 1,
    'jsonrpc': '2.0',
  };
```

```js {all|5|all}
  // Construct JSON-RPC request body
  const rpcReq1Body = {
    method: 'eth_getBlockByNumber',
    params: [
      'latest',
      false,
    ],
    'id': 1,
    'jsonrpc': '2.0',
  };
```
````

---
transition: fade-out
layout: code_1
---

# Use fetch to send HTTP request

::tab::

`script-hdc10102LabQueryRpc.js`

::code::

````md magic-move {lines: true}
```js
  // Send HTTP request to RPC endpoint
  console.log('Sending RPC request to:', hashioRpcUrl);
  const rpcResp1 = await fetch(
    hashioRpcUrl,
    /* ... */
  );
```

```js
  // Send HTTP request to RPC endpoint
  console.log('Sending RPC request to:', hashioRpcUrl);
  const rpcResp1 = await fetch(
    hashioRpcUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: /* ... */,
      redirect: 'follow',
    },
  );
```

```js
  // Send HTTP request to RPC endpoint
  console.log('Sending RPC request to:', hashioRpcUrl);
  const rpcResp1 = await fetch(
    hashioRpcUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rpcReq1Body),
      redirect: 'follow',
    },
  );
```
````

---
transition: fade-out
layout: code_1
---

# Parse the HTTP response

::tab::

`script-hdc10102LabQueryRpc.js`

::code::

```js {2,3|4|all}
 // Display HTTP response from RPC endpoint
 const rpcResp1Body = await rpcResp1.json();
 console.log(rpcResp1Body);
 console.log('latest block number:', rpcResp1Body?.result?.number);


```

---
transition: fade-out
layout: statement_icon
---

# Demo!

---
transition: fade-out
layout: statement_icon
---

# Demo complete!

---
transition: fade-out
layout: blank_canvas
---

::title::

# What we learnt

::default::

- JSON-RPC format
- Various types of RPC endpoints
- Make HTTP request using fetch
- Parse JSON response

---
transition: fade-out
layout: section_title_end
---

# Lab complete!
