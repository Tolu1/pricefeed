import { ethers } from "hardhat";

async function main() {
  const PRICE_FEED_CONTRACT_ADDRESS_ETH_USD =
    "0xd30e2101a97dcbaebcbc04f14c3f624e67a35165";
  const pricefeedConsumer = await ethers.deployContract("PricefeedConsumer", [
    PRICE_FEED_CONTRACT_ADDRESS_ETH_USD,
  ]);
  await pricefeedConsumer.waitForDeployment();
  console.log(`PricefeedConsumer deployed to ${pricefeedConsumer.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
