import hre, { ethers } from "hardhat";
import addressUtils from "../utils/addressUtils";

export async function deployERC20(name_: string, symbol_: string) {
  const erc20 = await ethers.getContractFactory("ERC20Token");
  const token = await erc20.deploy(name_, symbol_);

  console.log(`${symbol_} deployed to: `, token.address);

  await addressUtils.saveAddresses(hre.network.name, {
    [symbol_]: token.address,
  });
}
