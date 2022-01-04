from scripts.helpful_scripts import get_account
from brownie import interface, config, network


def main():
    get_weth()


def get_weth():
    """
    MINT WETH BY DEPOSIITNG ETH
    """
    # ABI
    # Address
    account = get_account()
    # hardcoded not using get_contract because no oracle so no need to mock
    weth = interface.IWeth(config["networks"][network.show_active()]["weth_token"])

    tx = weth.deposit({"from": account, "value": 0.1 * 10 ** 18})
    tx.wait(1)
    print("recieved 0.1 weth")

    return tx
