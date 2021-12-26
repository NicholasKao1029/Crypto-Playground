async function main() {
    // Grab the contract factory 
    // Corresponds to name of contract
    const MyNFT = await ethers.getContractFactory("NFTContractName");
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy(); // Instance of the contract 

    console.log(myNFT)

    console.log("Contract deployed to address:", myNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
