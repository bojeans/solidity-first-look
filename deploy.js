const ethers = require("ethers");
const fs = require("fs-extra");

const main = async () => {
  // From Ganache app
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );

  //   Test private key from Ganache app
  const wallet = new ethers.Wallet(
    "0x129c6a5ab687518599f3295f3da317c7951c2703bb0e8e35bae230a4476959f4",
    provider
  );

  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying contract...");
  const contract = await contractFactory.deploy();
  console.log(contract);
};

main();
