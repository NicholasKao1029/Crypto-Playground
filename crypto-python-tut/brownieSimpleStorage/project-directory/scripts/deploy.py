from brownie import accounts, config, SimpleStorage, network
import os 


def deploy_simple_storage():
    # from ganache 
    account = get_account()
    # from creating an account with brownie `brownie account new [account-name]`
    # account = accounts.load('kovan-metamask')
    # from brownie-config.yaml
    # account = accounts.add(config['wallets']['from_key'])

    
    simple_storage = SimpleStorage.deploy({"from": account})
    stored_value = simple_storage.retrieve()
    print(f"stored_value: {stored_value}")
    transaction = simple_storage.store(15, {"from": account})
    transaction.wait(1)
    print(f"transaction: {transaction}")

    updated_value = simple_storage.retrieve()
    print(f"updated_value: {updated_value}")
    
    print(simple_storage)

def get_account():
    if (network.show_active() == "development"):
        account = accounts[0]
    else:
        account = accounts.add(config['wallets']['from_key'])
    return account

def main():
    deploy_simple_storage()
