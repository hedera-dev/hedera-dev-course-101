# Lab: Query network state with JSON-RPC

In this lab, you will query the state of the Hedera network.

- Transport: HTTP
- Protocol: JSON-RPC

<!--
[Go to accompanying tutorial](#TODO_TUTORIAL_SEQUENCE_LINK). (WIP)
-->

## Pre-requisites

- You have already initialised this repo,
  and you are able to run the "smoke test" without any errors.

What you will accomplish:

1. TODO_SEQUENCE_X_ACCOMPLISH

<!--
Video:

[![](https://i.ytimg.com/vi/TODO_SEQUENCE_X_NAME_YT_VID_CODE/maxresdefault.jpg)](https://www.youtube.com/watch?v=TODO_SEQUENCE_X_NAME_YT_VID_CODE&list=TODO_SEQUENCE_X_NAME_YT_PL_CODE)

-->

Steps:

1. TODO_SEQUENCE_X_STEPS

## Steps

- In the terminal, start in the **root directory** of this repo
- `cd hdc10102LabQueryRpc`
- `code script-hdc10102LabQueryRpc.js`
- View this code file
- Find the comment: `// (1) via Hashio endpoints`
    - You will see the RPC request body being constructed:
        - for the `eth_getBlockByNumber` RPC
        - its first parameter is `latest`, which asks for the most recent block
    - Next, `fetch` is used to make an HTTP `POST` request to the Hashio RPC URL
    - Finally, the response is displayed:
        - full response (data for the entire block)
        - block number (one specific field within the block)
- Find the comment: `// (2) via JSON-RPC relay running on localhost`
    - You will see the RPC request body being re-used
    - Next, `fetch` is used to make an HTTP `POST` request to the RPC relay RPC URL
        - Note that this should already be running in the background on your computer or container
    - Finally, the response is displayed as before
- Find the comment: `// (3) via 3rd party RPC endpoints`
    - The implementation here is left incomplete
    - **TASK**: You will need to copy and adapt the implementation,
      from either `(1)` or `(2)` above,
      and such that it performs the same RPC request and displays its response.
      The only difference is that you must use a different RPC URL,
      from a 3rd party (`thirdPartyRpcUrl`).
