// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./SimpleStorage.sol";

contract StorageFactory is SimpleStorage {

    SimpleStorage[] public simpleStorageArray;

    function createSimpleStorage() public {
        SimpleStorage simpleStorage = new SimpleStorage();
        simpleStorageArray.push(simpleStorage);
    }

    function getSimpleStorage(uint256 index) internal view returns(SimpleStorage){
        SimpleStorage simpleStorage = SimpleStorage(address(simpleStorageArray[index]));
        return simpleStorage;
    }

    function sfStore(uint256 _simpleStorageIndex, uint256 _simpleStorageNumber) public {
        // Address
        // ABI to interact with a contract
        getSimpleStorage(_simpleStorageIndex).store(_simpleStorageNumber);
    }

    function sfGet(uint256 _simpleStorageIndex) public view returns(uint256) {
        // Address
        // ABI to interact with a contract
        return getSimpleStorage(_simpleStorageIndex).retrieve();
    }
}