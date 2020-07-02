/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface TieredOwnableMockInterface extends Interface {
  functions: {
    assignOwnership: TypedFunctionDescription<{
      encode([_address, _tier]: [string, BigNumberish]): string;
    }>;

    getOwnerTier: TypedFunctionDescription<{
      encode([_owner]: [string]): string;
    }>;

    onlyMaxTier: TypedFunctionDescription<{ encode([]: []): string }>;

    onlyTierFive: TypedFunctionDescription<{ encode([]: []): string }>;

    onlyTierZero: TypedFunctionDescription<{ encode([]: []): string }>;

    anyone: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    OwnershipGranted: TypedEventDescription<{
      encodeTopics([owner, previousTier, newTier]: [
        string | null,
        BigNumberish | null,
        BigNumberish | null
      ]): string[];
    }>;
  };
}

export class TieredOwnableMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): TieredOwnableMock;
  attach(addressOrName: string): TieredOwnableMock;
  deployed(): Promise<TieredOwnableMock>;

  on(event: EventFilter | string, listener: Listener): TieredOwnableMock;
  once(event: EventFilter | string, listener: Listener): TieredOwnableMock;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): TieredOwnableMock;
  removeAllListeners(eventName: EventFilter | string): TieredOwnableMock;
  removeListener(eventName: any, listener: Listener): TieredOwnableMock;

  interface: TieredOwnableMockInterface;

  functions: {
    assignOwnership(
      _address: string,
      _tier: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getOwnerTier(_owner: string): Promise<BigNumber>;

    onlyMaxTier(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    onlyTierFive(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    onlyTierZero(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    anyone(overrides?: TransactionOverrides): Promise<ContractTransaction>;
  };

  assignOwnership(
    _address: string,
    _tier: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getOwnerTier(_owner: string): Promise<BigNumber>;

  onlyMaxTier(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  onlyTierFive(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  onlyTierZero(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  anyone(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  filters: {
    OwnershipGranted(
      owner: string | null,
      previousTier: BigNumberish | null,
      newTier: BigNumberish | null
    ): EventFilter;
  };

  estimate: {
    assignOwnership(_address: string, _tier: BigNumberish): Promise<BigNumber>;

    getOwnerTier(_owner: string): Promise<BigNumber>;

    onlyMaxTier(): Promise<BigNumber>;

    onlyTierFive(): Promise<BigNumber>;

    onlyTierZero(): Promise<BigNumber>;

    anyone(): Promise<BigNumber>;
  };
}
