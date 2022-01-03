1. Users can enter the lottery with ETH based on a USD fee
2. Admin will choose when lottery is over (centralized but for later)
3. Lottery will select random winner


How do we want to tes this 

1. `mainnet-fork`
2. `dev` with mocks



```
brownie networks remove mainnet-fork

brownie networks add development mainnet-fork cmd=ganache-cli host=http://127.0.0.1 fork=https://eth-mainnet.alchemyapi.io/v2/E8QmgwrvkaPEIYV7Aqbe4gDxEaS2844O accounts=10 mnemonic=brownie port=8545
```

First delete the default mainnet-fork
Then create another mainnet fork but it pointing to alchemy 
