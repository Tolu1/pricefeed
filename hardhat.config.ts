import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      loggingEnabled: false,
    },
    //   localhost: {
    //     url: "http://127.0.0.1:8545",
    //     accounts: [process.env.HARDHAT_ACCOUNT_PRIVATE_KEY || ""],
    // },
    "arbitrum-sepolia": {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      chainId: 421614,
      accounts: [process.env.DEV_ACCOUNT_PRIVATE_KEY || ""],
    },
  },
};

export default config;
