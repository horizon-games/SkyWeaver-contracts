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

interface TieredOwnableInterface extends ethers.utils.Interface {
  functions: {
    "assignOwnership(address,uint256)": FunctionFragment;
    "getOwnerTier(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "assignOwnership",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnerTier",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "assignOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnerTier",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipGranted(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipGranted"): EventFragment;
}

export class TieredOwnable extends Contract {
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

  interface: TieredOwnableInterface;

  functions: {
    assignOwnership(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "assignOwnership(address,uint256)"(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getOwnerTier(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getOwnerTier(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  assignOwnership(
    _address: string,
    _tier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "assignOwnership(address,uint256)"(
    _address: string,
    _tier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getOwnerTier(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getOwnerTier(address)"(
    _owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    assignOwnership(
      _address: string,
      _tier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "assignOwnership(address,uint256)"(
      _address: string,
      _tier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getOwnerTier(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getOwnerTier(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    OwnershipGranted(
      owner: string | null,
      previousTier: BigNumberish | null,
      newTier: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { owner: string; previousTier: BigNumber; newTier: BigNumber }
    >;
  };

  estimateGas: {
    assignOwnership(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "assignOwnership(address,uint256)"(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getOwnerTier(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getOwnerTier(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assignOwnership(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "assignOwnership(address,uint256)"(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getOwnerTier(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getOwnerTier(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
