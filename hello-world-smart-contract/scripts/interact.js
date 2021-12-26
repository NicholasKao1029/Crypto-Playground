const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
// You will need to set CONTRACT ADDRESS after running deploy.js and noting down the address console logged
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

// For Hardhat 
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");
//console.log(JSON.stringify(contract.abi));

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="kovan", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
console.log(Object.getOwnPropertyNames(helloWorldContract))

async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);

    console.log("Updating the message...");
    const newMessage = "BREAD 🍞"
    const tx = await helloWorldContract.update(newMessage);
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log(`newMessage is now ${newMessage}`);

    console.log(newMessage === updateVal)

}
main();
