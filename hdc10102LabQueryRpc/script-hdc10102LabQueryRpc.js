#!/usr/bin/env node

import { Client, PrivateKey, AccountId } from '@hashgraph/sdk';
import dotenv from 'dotenv';
import { createLogger } from '../util/util.js';

const logger = await createLogger({
  scriptId: 'hdc10102LabQueryRpc',
  scriptCategory: 'task',
});
let client;

async function scriptHdc10102LabQueryRpc() {
  logger.logStart('Welcome to the hdc10102LabQueryRpc task!');

  // Read in environment variables from `.env` file in parent directory
  dotenv.config({ path: '../.env' });
  logger.log('Read .env file');

  // Read in necessary configuration values from .env file
  const rpcRelayRpcUrl = process.env.RPC_URL;
  if (!rpcRelayRpcUrl) {
    throw new Error(
      'Must set RPC_URL environment variable',
    );
  }
  const hashioRpcUrl = 'https://testnet.hashio.io/api';
  const thirdPartyRpcUrl = 'https://docs-demo.hedera-testnet.quiknode.pro/';

  // via Hashio endpoints
  await logger.logReminder('Make a JSON-RPC request to Hedera Testnet via Hashio RPC endpoint');

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

  // Display HTTP response from RPC endpoint
  const rpcResp1Body = await rpcResp1.json();
  console.log(rpcResp1Body);
  console.log('latest block number:', rpcResp1Body?.result?.number);

  // via JSON-RPC relay running on localhost
  await logger.logReminder('Make a JSON-RPC request to Hedera Testnet via RPC relay instance');

  // Construct JSON-RPC request body
  const rpcReq2Body = JSON.parse(JSON.stringify(rpcReq1Body));

  // Send HTTP request to RPC endpoint
  console.log('Sending RPC request to:', rpcRelayRpcUrl);
  const rpcResp2 = await fetch(
    rpcRelayRpcUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rpcReq2Body),
      redirect: 'follow',
    },
  );

  // Display HTTP response from RPC endpoint
  const rpcResp2Body = await rpcResp2.json();
  console.log(rpcResp2Body);
  console.log('latest block number:', rpcResp2Body?.result?.number);

  // via 3rd party RPC endpoints (exercise left to reader, mentioned but not demo’ed)
  await logger.logReminder('Make a JSON-RPC request to Hedera Testnet via 3rd party RPC endpoints');

  // Construct JSON-RPC request body
  // TODO re-use a request body previously constructed

  // Send HTTP request to RPC endpoint
  console.log('Sending RPC request to:', thirdPartyRpcUrl);
  // TODO use fetch to send HTTP request to thirdPartyRpcUrl

  // Display HTTP response from RPC endpoint
  // TODO parse and display the response body, and the block number extracted from it

  logger.logComplete('hdc10102LabQueryRpc task complete!');
}

scriptHdc10102LabQueryRpc().catch((ex) => {
  client && client.close();
  logger ? logger.logError(ex) : console.error(ex);
});
