//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MetaToken is ERC20 {

    uint constant inital_token_supply = 100;
    uint constant magnitude = (10**18);


    uint constant _initial_supply = inital_token_supply * magnitude;
    constructor() ERC20("MetaToken", "MT") public {
        _mint(msg.sender, _initial_supply);
    }
}
