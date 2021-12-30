from solcx import compile_standard
import json;
from web3 import Web3
import os;
from dotenv import load_dotenv;
load_dotenv();

ganache_address = os.getenv("LOCAL_BLOCKCHAIN_ADDRESS");
kovan_address = os.getenv("KOVAN_BLOCKCHAIN_ADDRESS");
chain_id = int(os.getenv("CHAIN_ID"));


with open("./SimpleStorage.sol", "r") as file:
    simple_storage_file = file.read()

compiled_sol = compile_standard(
    {
        "language": "Solidity",
        "sources": {
            "SimpleStorage.sol": {
                "content": simple_storage_file
            }
        },
        "settings": {
            "outputSelection": {
                "*": {
                    "*": [ "abi", "metadata", "evm.bytecode", "evm.sourceMap"]
                }
            }
        }
    },
    solc_version= "0.8.0",
)

with open("./SimpleStorage.json", "w") as file:
    json.dump(compiled_sol, file, indent=4)

bytecode = compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["evm"]["bytecode"]["object"]


# get abi
abi = compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["abi"]

# connect to kovan
w3 = Web3(Web3.HTTPProvider(kovan_address))

chain_id = chain_id
my_address = os.getenv("PUBLIC_ADDRESS")
my_private_key = os.getenv("PRIVATE_KEY")

# Create contract
SimpleStorage = w3.eth.contract(abi=abi, bytecode=bytecode)

# get latest transcation count
nonce = w3.eth.get_transaction_count(my_address)

# Build transaction
# Sign transaction 
# Send transaction
transaction = SimpleStorage.constructor().buildTransaction({
    'chainId': chain_id,
    'from': my_address,
    'nonce': nonce,
    'gas': 1000000,
    'gasPrice': w3.toWei('21', 'gwei'),
})

signed_transaction = w3.eth.account.sign_transaction(transaction, private_key=my_private_key)

#send signed transaction
print("deplying contract")
tx_hash = w3.eth.send_raw_transaction(signed_transaction.rawTransaction)
tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
print("contract deployed at: ", tx_receipt.contractAddress)


# Working with contract
# 1. address
# 2. Contract ABI
simple_storage = w3.eth.contract(
    address=tx_receipt.contractAddress,
    abi=abi
)

# Call -> Simulate call
# Transaction -> State change

# initial value of fav num
print(simple_storage.functions.retrieve().call())
print(simple_storage.functions.store(15).call())
print(simple_storage.functions.retrieve().call())


print('updating contract')
store_transaction = simple_storage.functions.store(10).buildTransaction({
    'chainId': chain_id,
    'from': my_address,
    'nonce': nonce + 1,
    'gas': 1000000,
    'gasPrice': w3.toWei('21', 'gwei'),
})

signed_store_transaction = w3.eth.account.sign_transaction(store_transaction, private_key=my_private_key)
tx_hash_store = w3.eth.send_raw_transaction(signed_store_transaction.rawTransaction)
tx_receipt_store = w3.eth.wait_for_transaction_receipt(tx_hash_store)
print("contract updated")

print(simple_storage.functions.retrieve().call())
