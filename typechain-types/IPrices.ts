/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IPricesInterface extends utils.Interface {
  contractName: "IPrices";
  functions: {
    "addFeed(address,uint256)": FunctionFragment;
    "feedDecimalAdjuster(uint256)": FunctionFragment;
    "feedFor(uint256)": FunctionFragment;
    "getETHPriceFor(uint256)": FunctionFragment;
    "targetDecimals()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addFeed",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feedDecimalAdjuster",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feedFor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getETHPriceFor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "targetDecimals",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "addFeed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feedDecimalAdjuster",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feedFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getETHPriceFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetDecimals",
    data: BytesLike
  ): Result;

  events: {
    "AddFeed(uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddFeed"): EventFragment;
}

export type AddFeedEvent = TypedEvent<
  [BigNumber, string],
  { currency: BigNumber; feed: string }
>;

export type AddFeedEventFilter = TypedEventFilter<AddFeedEvent>;

export interface IPrices extends BaseContract {
  contractName: "IPrices";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPricesInterface;

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
    addFeed(
      _priceFeed: string,
      _currency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feedDecimalAdjuster(
      _currency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feedFor(
      _currency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getETHPriceFor(
      _currency: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    targetDecimals(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addFeed(
    _priceFeed: string,
    _currency: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feedDecimalAdjuster(
    _currency: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feedFor(
    _currency: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getETHPriceFor(
    _currency: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  targetDecimals(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addFeed(
      _priceFeed: string,
      _currency: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    feedDecimalAdjuster(
      _currency: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feedFor(
      _currency: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getETHPriceFor(
      _currency: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    targetDecimals(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "AddFeed(uint256,address)"(
      currency?: BigNumberish | null,
      feed?: string | null
    ): AddFeedEventFilter;
    AddFeed(
      currency?: BigNumberish | null,
      feed?: string | null
    ): AddFeedEventFilter;
  };

  estimateGas: {
    addFeed(
      _priceFeed: string,
      _currency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feedDecimalAdjuster(
      _currency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feedFor(
      _currency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getETHPriceFor(
      _currency: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    targetDecimals(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addFeed(
      _priceFeed: string,
      _currency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feedDecimalAdjuster(
      _currency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feedFor(
      _currency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getETHPriceFor(
      _currency: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    targetDecimals(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}