# Hello World Smart Contract

This is a barebones repo demonstrating the hello world of smart contracts on the `kovan` test network.
Should work on any test network. Given that you modify the repo where `kovan` shows up to use another one e.g. `ropsten`

Contains a smart contract definition that saves a string in memory that is modifiable via `interact.js:35`.

## Dependecies
[Alchemy](https://www.alchemy.com/) for the `API_URL` and `API_KEY`
[MetaMask](https://metamask.io/) for Etherum wallet 
[Kovan Faucet](https://github.com/kovan-testnet/faucet) to have tokens to play with in the `kovan` test network

## File Overview

### .env
Create a `.env` file containing 
`API_URL`
`API_KEY`
[Getting Started with Alchemy](https://docs.alchemy.com/alchemy/introduction/getting-started) to get your API values

`PRIVATE_KEY`
After creating an account on metamask generate your private key to be able to sign transactions interacting and deploying
[Export Private Key](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key)

`ETHERSCAN_API_KEY`
[Etherscan API](https://etherscan.io/apis)
create a free account on etherscan to be able to verify your smart contract

### Hello World of contracts
In `contracts/HelloWorld.sol` exists a simple contract that shows off 
- `State` variables in contract storage
- `Constructors`, initalizing state when contract is deployed
- `Function`, public function that allows users to interact with the contract

### deploy.js
A Bare bones script for deploying your helloWorld contract
Console logs the address of the newly created contract that you can look up on in 
`https://kovan.etherscan.io/address/${CONTRACT_ADDRESS}`

### interact.js
Script demonstrating ability to interact with the smart contract using it's `update` function. 
To change string being stored in contract.

### hardhat.config.js
Config file for hardhat. 
[More details](https://hardhat.org/config/)


### CMDS

*Deploy*
`yarn hardhat run ./scripts/deploy.js`

*verify*
`yarn hardhat verify [CONTRACT ADDRESS] --network [NETWORK NAME] '[INITIAL MESSAGE]'`
e.g. 
`yarn hardhat verify 0xe999B0f306ff1936AF9771F627D8a44A1F5C90FF --network kovan 'Hello World!'`

*Update message*
`yarn hardhat run ./scripts/interact.js`

## Deploy Steps

`yarn` or `npm install` proj dependencies
 
