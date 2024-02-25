import { expect } from "chai";
import { ethers } from "hardhat";

describe("PricefeedConsumer", function () {
  let pricefeedConsumer: any;
  let initialPrice: BigInt;

  beforeEach(async function () {
    const [owner, chainlink] = await ethers.getSigners();

    initialPrice = BigInt(42 * (10 ^ 18));
    const mockPriceFeed = await ethers.deployContract(
      "MockV3Aggregator",
      [18, initialPrice],
      chainlink
    );
    mockPriceFeed.waitForDeployment();

    const TEST_PRICE_FEED_CONTRACT_ADDRESS_ETH_USD =
      await mockPriceFeed.getAddress();
    pricefeedConsumer = await ethers.deployContract(
      "PricefeedConsumer",
      [TEST_PRICE_FEED_CONTRACT_ADDRESS_ETH_USD],
      owner
    );
    pricefeedConsumer.waitForDeployment();
  });

  describe("getLatestPrice", function () {
    it("Should return a non-zero price", async function () {
      const latestPrice = await pricefeedConsumer.getLatestPrice();
      expect(latestPrice).to.be.gt(0, "The price should be greater than 0");
    });

    it("Should return price from chainlink oracle", async function () {
      const latestPrice = await pricefeedConsumer.getLatestPrice();
      expect(latestPrice).to.equal(
        initialPrice,
        "The latest price should be equal to the initial price in our mock contract at deployment"
      );
    });
  });
});
