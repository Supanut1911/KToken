/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface AuthorizationInterface extends utils.Interface {
  functions: {
    "PROJECT()": FunctionFragment;
    "adminRouter()": FunctionFragment;
    "setAdmin(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "PROJECT" | "adminRouter" | "setAdmin"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "PROJECT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "adminRouter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setAdmin", values: [string]): string;

  decodeFunctionResult(functionFragment: "PROJECT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "adminRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;

  events: {};
}

export interface Authorization extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AuthorizationInterface;

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
    PROJECT(overrides?: CallOverrides): Promise<[string]>;

    adminRouter(overrides?: CallOverrides): Promise<[string]>;

    setAdmin(
      _adminRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  PROJECT(overrides?: CallOverrides): Promise<string>;

  adminRouter(overrides?: CallOverrides): Promise<string>;

  setAdmin(
    _adminRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    PROJECT(overrides?: CallOverrides): Promise<string>;

    adminRouter(overrides?: CallOverrides): Promise<string>;

    setAdmin(_adminRouter: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    PROJECT(overrides?: CallOverrides): Promise<BigNumber>;

    adminRouter(overrides?: CallOverrides): Promise<BigNumber>;

    setAdmin(
      _adminRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PROJECT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adminRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAdmin(
      _adminRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
