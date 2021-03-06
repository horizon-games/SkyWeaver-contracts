/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IRewardFactoryInterface extends ethers.utils.Interface {
  functions: {
    "batchMint(address,uint256[],uint256[],bytes)": FunctionFragment;
    "getAvailableSupply()": FunctionFragment;
    "livePeriod()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "updatePeriodMintLimit(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "batchMint",
    values: [string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAvailableSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "livePeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePeriodMintLimit",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "batchMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAvailableSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "livePeriod", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePeriodMintLimit",
    data: BytesLike
  ): Result;

  events: {
    "PeriodMintLimitChanged(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PeriodMintLimitChanged"): EventFragment;
}

export class IRewardFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IRewardFactoryInterface;

  functions: {
    batchMint(
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "batchMint(address,uint256[],uint256[],bytes)"(
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAvailableSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getAvailableSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    livePeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    "livePeriod()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    updatePeriodMintLimit(
      _newPeriodMintLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updatePeriodMintLimit(uint256)"(
      _newPeriodMintLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  batchMint(
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "batchMint(address,uint256[],uint256[],bytes)"(
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAvailableSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "getAvailableSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  livePeriod(overrides?: CallOverrides): Promise<BigNumber>;

  "livePeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

  supportsInterface(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  updatePeriodMintLimit(
    _newPeriodMintLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updatePeriodMintLimit(uint256)"(
    _newPeriodMintLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    batchMint(
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "batchMint(address,uint256[],uint256[],bytes)"(
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getAvailableSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "getAvailableSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    livePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "livePeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updatePeriodMintLimit(
      _newPeriodMintLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updatePeriodMintLimit(uint256)"(
      _newPeriodMintLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    PeriodMintLimitChanged(
      oldMintingLimit: null,
      newMintingLimit: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { oldMintingLimit: BigNumber; newMintingLimit: BigNumber }
    >;
  };

  estimateGas: {
    batchMint(
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "batchMint(address,uint256[],uint256[],bytes)"(
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAvailableSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "getAvailableSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    livePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "livePeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updatePeriodMintLimit(
      _newPeriodMintLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updatePeriodMintLimit(uint256)"(
      _newPeriodMintLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    batchMint(
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "batchMint(address,uint256[],uint256[],bytes)"(
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAvailableSupply(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAvailableSupply()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    livePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "livePeriod()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updatePeriodMintLimit(
      _newPeriodMintLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updatePeriodMintLimit(uint256)"(
      _newPeriodMintLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
