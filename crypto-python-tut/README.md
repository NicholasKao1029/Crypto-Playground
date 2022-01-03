Used [remix](https://remix.ethereum.org)

contract deployed to: *0x706a8284C6943183519cB5F7FD6fE5A3cBaf5F26*
on [etherscan](https://kovan.etherscan.io/address/0x706a8284c6943183519cb5f7fd6fe5a3cbaf5f26)

[youtube-tutorial](https://www.youtube.com/watch?v=M576WGiDBdQ&ab_channel=freeCodeCamp.org)

### Part 1

*SimpleStorage*

- A contract that helps save the favourite numbers of people saved by name.

- There is also the global favourite number initialized to 5 that can be modified (store) and also retrieved (retriev).

### Part 2

*StorageFactory*

- Shows off the ability to create contracts from contracts.
- Importing solidity files based on path. 
- Save created contracts into an array of contracts (SimpleStorage contracts).
- store inside the favourite number of each of the contracts saved by this contract as well as retrieved
    - identified by the index in which the simple storage contract was saved to.

- Shows off the ability to inherit as well


### Part 3

*FundMe*

- A simple crowdsourcing application, where contributors may add funds to a contract that can be only 
withdrawn by the owner of the contract.

- Constructor, which gets run once when the contract is deployed. 
    - used to save the owners addres to be later used to identify the owner.
- Imports from an external package an interface
    - Interface used is a ETH-USD price finder
- Version of said interface communicated via a public view function
- retrieve the price using the aggregator interface.
- convert arbitrary amount of ETH to USD  
- create a modifier that requires that the sender of a message is the owner before executing the rest of the function
    - used for the withdraw function

- Use modifier in the withdraw function 
- translate the address of this contract as well as a the messages sender to payabel addresses
- transfer amount to the owner (asserted via the modifier)
- loop through the funders array so that we can 0 out the mapping of address to amount to funded 
- then assign a new empty array to funders.


### Part 4

*simpleStorage folder*

Compile contract via solcx, uses similar config format to hardhat

deployed contract and interacted with contract on ganacha and then kovan using python web3.

build transaction
sign transaction 
send transaction 
wait for transaction -> get receipt

get a refrence to the contract using address and abi

undersatnd difference between call (doesnt change state only reads) and a transaction (changes state)

### Part 5 

*brownieSimpleStorage folder*

Show a way to use brownie, very much like hardhat for the python developer. 

Does a lot of the heavy work compiling down, setting up a repsitory for you. 
You can save accoutnts via brownie and interact with default accounts from ganache via `accounts` object imported from brownie
There is a CLI tool that you can interact with.
Work with testing contracts


### Part 6 

*brownie-fund-me*

Created a deployment of the fund me contract similr to simple storage but with a more complicated contract.
The main learnings came from the different chains that were spun up.

Understanding the local environment, setting up a ganache-local chain on Ethereum, what this allows is for persisted instances of contracts locally, 
because development chains that get spun up after the script has run that environment is teared down and is lost. 

In our `brownie-config.yml` we define different networks and different values that help with our 
building of the network.

Another big thing that sprung out of from the code is that whlie we working with multiple networks
there are different requirements, with regards to how we get accounts and how we interact with external contracts.
To deal with this we created much more modular code,
    - Accounts
        - Handled via querying the current network to see if we're on a local or forked local to pick 
        a generated account. 
        - or if we're not then we're dealing with deployment keys inside of our config/.env
    - Contracts
        - We are using the chainlink contract ETH/USD that helps us to get converstion data from
        Chain Link which integrates external api data into a decentralized way to the blockchain.
        - So basically we will deploy a mock if we see that we're in our local blockchain environment
        because our dependency on the contract won't exist when that chain is spun up so we have to mock it.
From this we changed the contract to take the address as a parameter which we can pass into {contract}.deploy()
as parameters before the other configuration params, allowing us to have a more flexible and less hard coded code.

We also interacted with the contract via another script, leveraged by the fact we can deploy to a local instance
that doesn't get torndown. 

Lastly we also saw the `publish_source` param for deploy, which is a boolean param that we determine via 
values in our yml config to see if we want to verify the contract (only makes sense on mainnet deployments)


### Part 7 

*smartcontract-lottery

Starting from scratch with a new contract concept, while working with chainlinks vrf randomness contract,
that helps explain how to deal with randomness on the blockchain as blockchains are determinsitic. 

It talks about setting up callback functions, as well as testing these types of interactions via listening to events that you can emit.

Also enum data types during the contracts to make public the state of the contract

Also using a lot of the test Contracts such as LinkToken contract, aggregator and vrfcoordinator. Things such as this are used
when appropriate (specifically when running on LOCAL BLOCKCHAIN ENVIRONMENTS. Abstracting the retrieval of a given contract 
with a mixture of saving information in the config (such as the address) and retrieving it based on our defined names
    - e.g. eth_usd_price_feed
Then deploying if we haven't seen them yet AND we're in the local env, and/or retireving the latest contract by the type from our mapping of name to type.
Or we use the address saved in the config based on the network we've run the process in then building the contract object
via name, address and abi.

Also we created a fund with link method


### Part 8 

*erc20-brownie*

This was a much faster deployment due to the foundation of the previous lessons. 

We used openzepplins ERC20 implementation, to create tokens and deploy them Using helpful_scripts from previous projects.

### Part 9
