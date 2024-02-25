# Chainlink Pricefeed Demo

This project demonstrates how to fetch the latest ETH/USD price using Chainlink Price Feeds on the Arbitrum Sepolia network.

## Quick Start

1. Install dependencies: `npm install`
2. Compile the contract: `npx hardhat compile`
3. Run tests: `npx hardhat test`
4. Deploy to Arbitrum Sepolia: `npx hardhat run scripts/deploy.js --network arbitrum-sepolia`
5. Interact with the deployed contract using Hardhat console or scripts.

## Deployed Contract Interaction

To fetch the latest price from the deployed contract, use the `getLatestPrice` function:

```javascript
const contract = await ethers.getContractAt(
  "PricefeedConsumer",
  "DEPLOYED_CONTRACT_ADDRESS"
);
console.log(await contract.getLatestPrice());
```
