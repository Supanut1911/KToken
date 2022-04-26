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

export interface IKAP20KYCInterface extends utils.Interface {
  functions: {
    "activateOnlyKycAddress()": FunctionFragment;
    "setAcceptedKycLevel(uint256)": FunctionFragment;
    "setKYC(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "activateOnlyKycAddress"
      | "setAcceptedKycLevel"
      | "setKYC"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activateOnlyKycAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAcceptedKycLevel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setKYC", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "activateOnlyKycAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAcceptedKycLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setKYC", data: BytesLike): Result;

  events: {
    "ActivateOnlyKYCAddress()": EventFragment;
    "SetAccecptedKycLevel(uint256,uint256)": EventFragment;
    "SetKYC(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ActivateOnlyKYCAddress"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetAccecptedKycLevel"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetKYC"): EventFragment;
}

export interface ActivateOnlyKYCAddressEventObject {}
export type ActivateOnlyKYCAddressEvent = TypedEvent<
  [],
  ActivateOnlyKYCAddressEventObject
>;

export type ActivateOnlyKYCAddressEventFilter =
  TypedEventFilter<ActivateOnlyKYCAddressEvent>;

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

export interface SetKYCEventObject {
  oldKyc: string;
  newKyc: string;
}
export type SetKYCEvent = TypedEvent<[string, string], SetKYCEventObject>;

export type SetKYCEventFilter = TypedEventFilter<SetKYCEvent>;

export interface IKAP20KYC extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IKAP20KYCInterface;

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

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKYC(
      _kyc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  activateOnlyKycAddress(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAcceptedKycLevel(
    _kycLevel: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKYC(
    _kyc: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    activateOnlyKycAddress(overrides?: CallOverrides): Promise<void>;

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setKYC(_kyc: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ActivateOnlyKYCAddress()"(): ActivateOnlyKYCAddressEventFilter;
    ActivateOnlyKYCAddress(): ActivateOnlyKYCAddressEventFilter;

    "SetAccecptedKycLevel(uint256,uint256)"(
      oldKycLevel?: null,
      newKycLevel?: null
    ): SetAccecptedKycLevelEventFilter;
    SetAccecptedKycLevel(
      oldKycLevel?: null,
      newKycLevel?: null
    ): SetAccecptedKycLevelEventFilter;

    "SetKYC(address,address)"(oldKyc?: null, newKyc?: null): SetKYCEventFilter;
    SetKYC(oldKyc?: null, newKyc?: null): SetKYCEventFilter;
  };

  estimateGas: {
    activateOnlyKycAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKYC(
      _kyc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activateOnlyKycAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKYC(
      _kyc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}