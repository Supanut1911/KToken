/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";

export interface IKAP20Interface extends utils.Interface {
  functions: {
    "activateOnlyKycAddress()": FunctionFragment;
    "addBlacklist(address)": FunctionFragment;
    "adminTransfer(address,address,uint256)": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "blacklist(address)": FunctionFragment;
    "committee()": FunctionFragment;
    "decimals()": FunctionFragment;
    "name()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "revokeBlacklist(address)": FunctionFragment;
    "setAcceptedKycLevel(uint256)": FunctionFragment;
    "setCommittee(address)": FunctionFragment;
    "setKYC(address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "activateOnlyKycAddress"
      | "addBlacklist"
      | "adminTransfer"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "blacklist"
      | "committee"
      | "decimals"
      | "name"
      | "pause"
      | "paused"
      | "revokeBlacklist"
      | "setAcceptedKycLevel"
      | "setCommittee"
      | "setKYC"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "unpause"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activateOnlyKycAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addBlacklist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "adminTransfer",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "blacklist", values: [string]): string;
  encodeFunctionData(functionFragment: "committee", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "revokeBlacklist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAcceptedKycLevel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCommittee",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setKYC", values: [string]): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "activateOnlyKycAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addBlacklist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adminTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "blacklist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "committee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revokeBlacklist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAcceptedKycLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCommittee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setKYC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "ActivateOnlyKYCAddress()": EventFragment;
    "AddBlacklist(address,address)": EventFragment;
    "Approval(address,address,uint256)": EventFragment;
    "Paused(address)": EventFragment;
    "RevokeBlacklist(address,address)": EventFragment;
    "SetAccecptedKycLevel(uint256,uint256)": EventFragment;
    "SetCommittee(address,address)": EventFragment;
    "SetKYC(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ActivateOnlyKYCAddress"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddBlacklist"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevokeBlacklist"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetAccecptedKycLevel"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetCommittee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetKYC"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface ActivateOnlyKYCAddressEventObject {}
export type ActivateOnlyKYCAddressEvent = TypedEvent<
  [],
  ActivateOnlyKYCAddressEventObject
>;

export type ActivateOnlyKYCAddressEventFilter =
  TypedEventFilter<ActivateOnlyKYCAddressEvent>;

export interface AddBlacklistEventObject {
  account: string;
  caller: string;
}
export type AddBlacklistEvent = TypedEvent<
  [string, string],
  AddBlacklistEventObject
>;

export type AddBlacklistEventFilter = TypedEventFilter<AddBlacklistEvent>;

export interface ApprovalEventObject {
  tokenOwner: string;
  spender: string;
  tokens: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface RevokeBlacklistEventObject {
  account: string;
  caller: string;
}
export type RevokeBlacklistEvent = TypedEvent<
  [string, string],
  RevokeBlacklistEventObject
>;

export type RevokeBlacklistEventFilter = TypedEventFilter<RevokeBlacklistEvent>;

export interface SetAccecptedKycLevelEventObject {
  oldKycLevel: BigNumber;
  newKycLevel: BigNumber;
}
export type SetAccecptedKycLevelEvent = TypedEvent<
  [BigNumber, BigNumber],
  SetAccecptedKycLevelEventObject
>;

export type SetAccecptedKycLevelEventFilter =
  TypedEventFilter<SetAccecptedKycLevelEvent>;

export interface SetCommitteeEventObject {
  oldCommittee: string;
  newComittee: string;
}
export type SetCommitteeEvent = TypedEvent<
  [string, string],
  SetCommitteeEventObject
>;

export type SetCommitteeEventFilter = TypedEventFilter<SetCommitteeEvent>;

export interface SetKYCEventObject {
  oldKyc: string;
  newKyc: string;
}
export type SetKYCEvent = TypedEvent<[string, string], SetKYCEventObject>;

export type SetKYCEventFilter = TypedEventFilter<SetKYCEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  tokens: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface IKAP20 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IKAP20Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    activateOnlyKycAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addBlacklist(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    adminTransfer(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowance(
      tokenOwner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { remaining: BigNumber }>;

    approve(
      spender: string,
      tokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      tokenOwner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    blacklist(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    committee(overrides?: CallOverrides): Promise<[string]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    revokeBlacklist(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCommittee(
      _committee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKYC(
      _kyc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      tokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  activateOnlyKycAddress(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addBlacklist(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  adminTransfer(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowance(
    tokenOwner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    tokens: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(tokenOwner: string, overrides?: CallOverrides): Promise<BigNumber>;

  blacklist(account: string, overrides?: CallOverrides): Promise<boolean>;

  committee(overrides?: CallOverrides): Promise<string>;

  decimals(overrides?: CallOverrides): Promise<number>;

  name(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  revokeBlacklist(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAcceptedKycLevel(
    _kycLevel: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCommittee(
    _committee: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKYC(
    _kyc: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    tokens: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    tokens: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    activateOnlyKycAddress(overrides?: CallOverrides): Promise<void>;

    addBlacklist(account: string, overrides?: CallOverrides): Promise<void>;

    adminTransfer(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    allowance(
      tokenOwner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      tokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(
      tokenOwner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    blacklist(account: string, overrides?: CallOverrides): Promise<boolean>;

    committee(overrides?: CallOverrides): Promise<string>;

    decimals(overrides?: CallOverrides): Promise<number>;

    name(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    revokeBlacklist(account: string, overrides?: CallOverrides): Promise<void>;

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setCommittee(_committee: string, overrides?: CallOverrides): Promise<void>;

    setKYC(_kyc: string, overrides?: CallOverrides): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      tokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: string,
      to: string,
      tokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ActivateOnlyKYCAddress()"(): ActivateOnlyKYCAddressEventFilter;
    ActivateOnlyKYCAddress(): ActivateOnlyKYCAddressEventFilter;

    "AddBlacklist(address,address)"(
      account?: string | null,
      caller?: string | null
    ): AddBlacklistEventFilter;
    AddBlacklist(
      account?: string | null,
      caller?: string | null
    ): AddBlacklistEventFilter;

    "Approval(address,address,uint256)"(
      tokenOwner?: string | null,
      spender?: string | null,
      tokens?: null
    ): ApprovalEventFilter;
    Approval(
      tokenOwner?: string | null,
      spender?: string | null,
      tokens?: null
    ): ApprovalEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "RevokeBlacklist(address,address)"(
      account?: string | null,
      caller?: string | null
    ): RevokeBlacklistEventFilter;
    RevokeBlacklist(
      account?: string | null,
      caller?: string | null
    ): RevokeBlacklistEventFilter;

    "SetAccecptedKycLevel(uint256,uint256)"(
      oldKycLevel?: null,
      newKycLevel?: null
    ): SetAccecptedKycLevelEventFilter;
    SetAccecptedKycLevel(
      oldKycLevel?: null,
      newKycLevel?: null
    ): SetAccecptedKycLevelEventFilter;

    "SetCommittee(address,address)"(
      oldCommittee?: null,
      newComittee?: null
    ): SetCommitteeEventFilter;
    SetCommittee(
      oldCommittee?: null,
      newComittee?: null
    ): SetCommitteeEventFilter;

    "SetKYC(address,address)"(oldKyc?: null, newKyc?: null): SetKYCEventFilter;
    SetKYC(oldKyc?: null, newKyc?: null): SetKYCEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      tokens?: null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      tokens?: null
    ): TransferEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    activateOnlyKycAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addBlacklist(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    adminTransfer(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowance(
      tokenOwner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      tokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(
      tokenOwner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    blacklist(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    committee(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    revokeBlacklist(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCommittee(
      _committee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKYC(
      _kyc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      tokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activateOnlyKycAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addBlacklist(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    adminTransfer(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowance(
      tokenOwner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      tokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      tokenOwner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blacklist(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    committee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    revokeBlacklist(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCommittee(
      _committee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKYC(
      _kyc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      tokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
