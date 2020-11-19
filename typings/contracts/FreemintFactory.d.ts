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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface FreemintFactoryInterface extends ethers.utils.Interface {
  functions: {
    "assignOwnership(address,uint256)": FunctionFragment;
    "batchMint(address[],uint256[],uint256[])": FunctionFragment;
    "getOwnerTier(address)": FunctionFragment;
    "getSkyweaverAssets()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "assignOwnership",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchMint",
    values: [string[], BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnerTier",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSkyweaverAssets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "assignOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "batchMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getOwnerTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSkyweaverAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipGranted(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipGranted"): EventFragment;
}

export class FreemintFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FreemintFactoryInterface;

  functions: {
    assignOwnership(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "assignOwnership(address,uint256)"(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    batchMint(
      _recipients: string[],
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "batchMint(address[],uint256[],uint256[])"(
      _recipients: string[],
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getOwnerTier(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getOwnerTier(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getSkyweaverAssets(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getSkyweaverAssets()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  assignOwnership(
    _address: string,
    _tier: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "assignOwnership(address,uint256)"(
    _address: string,
    _tier: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  batchMint(
    _recipients: string[],
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "batchMint(address[],uint256[],uint256[])"(
    _recipients: string[],
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getOwnerTier(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getOwnerTier(address)"(
    _owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSkyweaverAssets(overrides?: CallOverrides): Promise<string>;

  "getSkyweaverAssets()"(overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

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

    batchMint(
      _recipients: string[],
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "batchMint(address[],uint256[],uint256[])"(
      _recipients: string[],
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    getOwnerTier(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getOwnerTier(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSkyweaverAssets(overrides?: CallOverrides): Promise<string>;

    "getSkyweaverAssets()"(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    OwnershipGranted(
      owner: string | null,
      previousTier: BigNumberish | null,
      newTier: BigNumberish | null
    ): EventFilter;
  };

  estimateGas: {
    assignOwnership(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "assignOwnership(address,uint256)"(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    batchMint(
      _recipients: string[],
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "batchMint(address[],uint256[],uint256[])"(
      _recipients: string[],
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    getOwnerTier(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getOwnerTier(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSkyweaverAssets(overrides?: CallOverrides): Promise<BigNumber>;

    "getSkyweaverAssets()"(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assignOwnership(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "assignOwnership(address,uint256)"(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    batchMint(
      _recipients: string[],
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "batchMint(address[],uint256[],uint256[])"(
      _recipients: string[],
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getOwnerTier(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getOwnerTier(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSkyweaverAssets(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSkyweaverAssets()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}