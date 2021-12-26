async function main() {
    // Param to getContractFactory is the name of the contract contracts/HelloWorld.sol:8
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    // Start deployment, returning a promise that resolves to a contract object
    // Parameter here is the intial param to the constructor of the contract
    const initialMessage = "Hello World!";
    const hello_world = await HelloWorld.deploy(initialMessage);   
    console.log("Contract deployed to address:", hello_world.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
