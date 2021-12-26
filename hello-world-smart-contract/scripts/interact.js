// interact.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

// interact.js

// For Hardhat 
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");
//console.log(JSON.stringify(contract.abi));
// interact.js

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="kovan", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
console.log(Object.getOwnPropertyNames(helloWorldContract))
// interact.js

// ...

// interact.js

async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);
    
    console.log("Updating the message...");
    const updateVal = "This is the new message.";
    const tx = await helloWorldContract.update("This is the new message.");
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log(`newMessage is now ${newMessage}`);

    console.log(newMessage === updateVal)

  }
  main();