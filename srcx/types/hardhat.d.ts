/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC20Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Token__factory>;
    getContractFactory(
      name: "Greeter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Greeter__factory>;
    getContractFactory(
      name: "KAP20mine",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KAP20mine__factory>;
    getContractFactory(
      name: "KAP20Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KAP20Token__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Authorization",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Authorization__factory>;
    getContractFactory(
      name: "IAdminAsset",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAdminAsset__factory>;
    getContractFactory(
      name: "IAdminProjectRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAdminProjectRouter__factory>;
    getContractFactory(
      name: "Blacklist",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Blacklist__factory>;
    getContractFactory(
      name: "IBlacklist",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBlacklist__factory>;
    getContractFactory(
      name: "IKAP20Committee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20Committee__factory>;
    getContractFactory(
      name: "KAP20Committee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KAP20Committee__factory>;
    getContractFactory(
      name: "IKAP20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20__factory>;
    getContractFactory(
      name: "IKToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKToken__factory>;
    getContractFactory(
      name: "KAP20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KAP20__factory>;
    getContractFactory(
      name: "IKAP20KYC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20KYC__factory>;
    getContractFactory(
      name: "IKYC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKYC__factory>;
    getContractFactory(
      name: "IKYCBitkubChain",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKYCBitkubChain__factory>;
    getContractFactory(
      name: "KYCHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KYCHandler__factory>;
    getContractFactory(
      name: "IPauseable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPauseable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "TimeCounter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimeCounter__factory>;

    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC20Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Token>;
    getContractAt(
      name: "Greeter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Greeter>;
    getContractAt(
      name: "KAP20mine",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KAP20mine>;
    getContractAt(
      name: "KAP20Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KAP20Token>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Authorization",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Authorization>;
    getContractAt(
      name: "IAdminAsset",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAdminAsset>;
    getContractAt(
      name: "IAdminProjectRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAdminProjectRouter>;
    getContractAt(
      name: "Blacklist",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Blacklist>;
    getContractAt(
      name: "IBlacklist",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBlacklist>;
    getContractAt(
      name: "IKAP20Committee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20Committee>;
    getContractAt(
      name: "KAP20Committee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KAP20Committee>;
    getContractAt(
      name: "IKAP20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20>;
    getContractAt(
      name: "IKToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKToken>;
    getContractAt(
      name: "KAP20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KAP20>;
    getContractAt(
      name: "IKAP20KYC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20KYC>;
    getContractAt(
      name: "IKYC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKYC>;
    getContractAt(
      name: "IKYCBitkubChain",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKYCBitkubChain>;
    getContractAt(
      name: "KYCHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KYCHandler>;
    getContractAt(
      name: "IPauseable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPauseable>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "TimeCounter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimeCounter>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}