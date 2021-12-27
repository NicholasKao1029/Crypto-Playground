require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    kovan: {
      url: `${process.env.ALCHEMY_URL}`,
      accounts: [`0x${process.env.KOVAN_PRIVATE_KEY}`],
    },
  },
};
