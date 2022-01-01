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


