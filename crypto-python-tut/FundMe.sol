// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";


contract FundMe {

    mapping(address => uint256) public addressToAmountFunded;
    address[] public funders;
    address public owner;
    constructor() public {
        owner = msg.sender;
    }

    function fund() public payable  {
        uint256 minimumUsd = 50 * 10 ** 18;
        require(getConversionRate(msg.value) >= minimumUsd, "Less then minimum amount");
        // what is ETH -> USD
        addressToAmountFunded[msg.sender] += msg.value;
        funders.push(msg.sender);
    }

    function getPriceFeedContract() private view returns (AggregatorV3Interface) {
        // Uses Chainlink's Kovan contract for ETH-USD price
        return AggregatorV3Interface(0x9326BFA02ADD2366b30bacB125260Af641031331);
    }

    function getVersion() public view returns (uint256) {
        AggregatorV3Interface priceFeed = getPriceFeedContract();
        return priceFeed.version();
    }

    function getPrice() public view returns(uint256) {
        AggregatorV3Interface priceFeed = getPriceFeedContract();
        // interface returns five values we only need the answer
        (, int256 answer,,,) = priceFeed.latestRoundData();
        // returns a eight digit representing wei amount, multiplied by another 1e10 to get all 18 digits (1 eth = 1e18 wei)
        return uint256(answer * 10000000000);
    }

    function getConversionRate(uint256 ethAmount) public view returns(uint256) {
        uint256 ethPrice = getPrice();
        uint256 weiToEth = 10**18;
        uint256 ethAmountUsd = ((ethPrice * ethAmount) / weiToEth);
        return ethAmountUsd;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "only owner can withdraw");
        _;
    }

    function withdraw() payable onlyOwner public { 
        address payable payableContractAddr = payable(address(this));    
        address payable payableSender = payable(msg.sender);
        payableSender.transfer(payableContractAddr.balance);
        for (uint256 funderIndex=0; funderIndex<funders.length; fundersIndex++) {
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;
        }
        funders = new address[](0);
    }
}