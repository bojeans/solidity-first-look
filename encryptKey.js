const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

const main = async () => {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const encryptedWallet = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD,
    process.env.PRIVATE_KEY
  );
  console.log(encryptedWallet);
  fs.writeFileSync("./.encrypted-wallet.json", encryptedWallet);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
