import { ethers } from "hardhat";

async function main() {
  const pricefeedConsumer = await ethers.deployContract("PricefeedConsumer");

  await pricefeedConsumer.waitForDeployment();

  console.log(`PricefeedConsumer deployed to ${pricefeedConsumer.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
