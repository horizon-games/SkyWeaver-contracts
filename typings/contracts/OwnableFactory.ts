/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { Ownable } from "./Ownable";

export class OwnableFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _firstOwner: string,
    overrides?: TransactionOverrides
  ): Promise<Ownable> {
    return super.deploy(_firstOwner, overrides) as Promise<Ownable>;
  }
  getDeployTransaction(
    _firstOwner: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_firstOwner, overrides);
  }
  attach(address: string): Ownable {
    return super.attach(address) as Ownable;
  }
  connect(signer: Signer): OwnableFactory {
    return super.connect(signer) as OwnableFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Ownable {
    return new Contract(address, _abi, signerOrProvider) as Ownable;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_firstOwner",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103aa3803806103aa83398101604081905261002f9161007d565b600080546001600160a01b0319166001600160a01b03831690811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506100ab565b60006020828403121561008e578081fd5b81516001600160a01b03811681146100a4578182fd5b9392505050565b6102f0806100ba6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063893d20e81461003b578063f2fde38b14610059575b600080fd5b61004361006e565b60405161005091906101df565b60405180910390f35b61006c6100673660046101a4565b61008a565b005b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60005473ffffffffffffffffffffffffffffffffffffffff1633146100e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100db9061025d565b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610131576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100db90610200565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821780845560405192939116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6000602082840312156101b5578081fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146101d8578182fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b6020808252602a908201527f4f776e61626c65237472616e736665724f776e6572736869703a20494e56414c60408201527f49445f4144445245535300000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f4f776e61626c65236f6e6c794f776e65723a2053454e4445525f49535f4e4f5460408201527f5f4f574e4552000000000000000000000000000000000000000000000000000060608201526080019056fea2646970667358221220e5a5cfc05692ab624aa2a641ca953ba703a62e754dffd57b3bbdec04c4fc6df464736f6c63430007040033";
