/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IKAP20Committee,
  IKAP20CommitteeInterface,
} from "../../../../../contracts/modules/committee/interfaces/IKAP20Committee";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldCommittee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newComittee",
        type: "address",
      },
    ],
    name: "SetCommittee",
    type: "event",
  },
  {
    inputs: [],
    name: "committee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_committee",
        type: "address",
      },
    ],
    name: "setCommittee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IKAP20Committee__factory {
  static readonly abi = _abi;
  static createInterface(): IKAP20CommitteeInterface {
    return new utils.Interface(_abi) as IKAP20CommitteeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKAP20Committee {
    return new Contract(address, _abi, signerOrProvider) as IKAP20Committee;
  }
}
