// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract SimpleStorage {

    uint256 favouriteNumber = 5;

    function store(uint256 _favNumber) public {
        favouriteNumber = _favNumber;
    }

    // view, reading off blockchain no tx
    // pure, no state change just does computation (cannot read state either)
    function retrieve() public view returns(uint256) {
        return favouriteNumber;
    }

    struct People {
        uint256 favouriteNumber;
        string name;
    }

    People[] public people;
    mapping(string => uint256) public nameToFavouriteNumber;

    function addPerson(string memory _name, uint256 _favNumber) public {
        people.push(People({
            favouriteNumber: _favNumber,
            name: _name
        }));

        nameToFavouriteNumber[_name] = _favNumber;
    }



}