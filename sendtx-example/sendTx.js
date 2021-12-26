async function main() {
    require('dotenv').config();
    const { API_URL, PRIVATE_KEY } = process.env;
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3(API_URL);
    console.log(web3)
    const myAddress = '0xccEaa59f343c201a7Bf766e109c6E27eB76ABE58' //TODO: replace this address with your own public address
   
    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); // nonce starts counting from 0
    console.log(nonce)

    // const data = 'first time?'
    // const dataEncoded = new Buffer(data).toString('hex');

    const transaction = {
     'to': '0x2748a71C8a116514c66245A27Faa558024688530', // friendo account
     'value': 100,
     'gas': 30000,
     'maxPriorityFeePerGas': 1000000108,
     'nonce': nonce,
     // optional data field to send message or execute smart contract
    };
   
    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
    console.log(signedTx)
    
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
    } else {
      console.log("❗Something went wrong while submitting your transaction:", error)
    }
   });
}

main();
