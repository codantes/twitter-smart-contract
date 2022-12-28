const { ethers, network } = require("hardhat");

async function main() {
  const TokenFactory = await ethers.getContractFactory("TwitterDapp");
  console.log("deploying contract...");
  const Tokens = await TokenFactory.deploy();

  console.log(`contract address: ${Tokens.address}`);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });