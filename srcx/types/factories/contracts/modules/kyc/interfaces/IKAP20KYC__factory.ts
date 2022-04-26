/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IKAP20KYC,
  IKAP20KYCInterface,
} from "../../../../../contracts/modules/kyc/interfaces/IKAP20KYC";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "ActivateOnlyKYCAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldKycLevel",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newKycLevel",
        type: "uint256",
      },
    ],
    name: "SetAccecptedKycLevel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldKyc",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newKyc",
        type: "address",
      },
    ],
    name: "SetKYC",
    type: "event",
  },
  {
    inputs: [],
    name: "activateOnlyKycAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_kycLevel",
        type: "uint256",
      },
    ],
    name: "setAcceptedKycLevel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_kyc",
        type: "address",
      },
    ],
    name: "setKYC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IKAP20KYC__factory {
  static readonly abi = _abi;
  static createInterface(): IKAP20KYCInterface {
    return new utils.Interface(_abi) as IKAP20KYCInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKAP20KYC {
    return new Contract(address, _abi, signerOrProvider) as IKAP20KYC;
  }
}