import hre, { ethers } from "hardhat";
import { Greeter } from "../srcx/types/contracts/Greeter";
import { deployERC20 } from "./erc20";
import timeUtils from "../utils/timeUtils";
import addressUtils from "../utils/addressUtils";
import { parseEther } from "ethers/lib/utils";
import { deployTimeCounter } from "./timeCounter";
import { deployKAP20 } from "./kap20";

async function main() {
  // await deployERC20("Astro", "AST");

  const addressList = await addressUtils.getAddressList(hre.network.name);
  const committee = addressList["Committee"];
  const kyc = addressList["KYC"];
  const adminRouter = addressList["AdminProjectRouter"];

  await deployTimeCounter();

  await deployKAP20(
    "Bitkub-Peg Astro",
    "KAST",
    18,
    committee,
    adminRouter,
    kyc,
    4,
    parseEther("0.000020269"),
    timeUtils.duration.hours(2)
  );
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
