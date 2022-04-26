import { BigNumberish, Overrides } from "ethers";
import hre, { ethers } from "hardhat";
import addressUtils from "../utils/addressUtils";

export async function deployKAP20(
  name_: string,
  symbol_: string,
  _decimals: BigNumberish,
  committee_: string,
  adminRouter_: string,
  kyc_: string,
  acceptedKycLevel_: BigNumberish,
  faucetRate_: BigNumberish,
  maxELap_: BigNumberish,
  overrides?: Overrides & { from?: string | Promise<string> }
) {
  const addressList = await addressUtils.getAddressList(hre.network.name);
  const MinableToken = await ethers.getContractFactory("MinableToken");
  const minableToken = overrides
    ? await MinableToken.deploy(
        name_,
        symbol_,
        _decimals,
        committee_,
        adminRouter_,
        kyc_,
        acceptedKycLevel_,
        faucetRate_,
        maxELap_,
        addressList.TimeCounter,
        overrides
      )
    : await MinableToken.deploy(
        name_,
        symbol_,
        _decimals,
        committee_,
        adminRouter_,
        kyc_,
        acceptedKycLevel_,
        faucetRate_,
        maxELap_,
        addressList.TimeCounter
      );

  console.log(`${symbol_} deployed to:`, minableToken.address);

  await addressUtils.saveAddresses(hre.network.name, {
    [symbol_]: minableToken.address,
  });
}
