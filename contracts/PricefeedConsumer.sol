// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PricefeedConsumer {
    AggregatorV3Interface internal dataFeed;

    /**
     * Network: Arbitrum Sepolia 
     * Aggregator: ETH/USD
     * Address: 0xd30e2101a97dcbAeBCBC04F14C3f624E67A35165
     */
    constructor(address _dataFeed) {
        dataFeed = AggregatorV3Interface(_dataFeed);
    }

    function getLatestPrice() public view returns (int) {
        (
            /* uint80 roundID */,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = dataFeed.latestRoundData();
        return price;
    }
}
