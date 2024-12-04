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

  await logger.logReminder('This is a reminder');

  // Initialise the operator account
  const operatorIdStr = process.env.OPERATOR_ACCOUNT_ID;
  const operatorKeyStr = process.env.OPERATOR_ACCOUNT_PRIVATE_KEY;
  if (!operatorIdStr || !operatorKeyStr) {
    throw new Error(
      'Must set OPERATOR_ACCOUNT_ID and OPERATOR_ACCOUNT_PRIVATE_KEY environment variables',
    );
  }
  const operatorId = AccountId.fromString(operatorIdStr);
  const operatorKey = PrivateKey.fromStringECDSA(operatorKeyStr);
  client = Client.forTestnet().setOperator(operatorId, operatorKey);
  logger.log('Using account:', operatorIdStr);

  await logger.logSection('Running the main part of the script');
  logger.log('Doing something that takes 1 second.');
  await new Promise((resolve) => {
    setTimeout(resolve, 1_000);
  });
  if (!!true) {
    throw new Error('Demo error, this was inevitable!');
  }

  client.close();
  logger.logComplete('hdc10102LabQueryRpc task complete!');
}

scriptHdc10102LabQueryRpc().catch((ex) => {
  client && client.close();
  logger ? logger.logError(ex) : console.error(ex);
});
