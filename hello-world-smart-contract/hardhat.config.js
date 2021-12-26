// hardhat.config.js

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
// console.log("here")
// console.log(API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY)

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "kovan",
  networks: {
      hardhat: {},
      kovan: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};