/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { DelayedOwner } from "./DelayedOwner";

export class DelayedOwnerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _firstOwner: string,
    _delay: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<DelayedOwner> {
    return super.deploy(_firstOwner, _delay, overrides) as Promise<
      DelayedOwner
    >;
  }
  getDeployTransaction(
    _firstOwner: string,
    _delay: BigNumberish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_firstOwner, _delay, overrides);
  }
  attach(address: string): DelayedOwner {
    return super.attach(address) as DelayedOwner;
  }
  connect(signer: Signer): DelayedOwnerFactory {
    return super.connect(signer) as DelayedOwnerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DelayedOwner {
    return new Contract(address, _abi, signerOrProvider) as DelayedOwner;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_firstOwner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_delay",
        type: "uint256"
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
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "enum DelayedOwner.Status",
            name: "status",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "triggerTime",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        indexed: false,
        internalType: "struct DelayedOwner.Transaction",
        name: "transaction",
        type: "tuple"
      }
    ],
    name: "TransactionCancelled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "enum DelayedOwner.Status",
            name: "status",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "triggerTime",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        indexed: false,
        internalType: "struct DelayedOwner.Transaction",
        name: "transaction",
        type: "tuple"
      }
    ],
    name: "TransactionExecuted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "enum DelayedOwner.Status",
            name: "status",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "triggerTime",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        indexed: false,
        internalType: "struct DelayedOwner.Transaction",
        name: "transaction",
        type: "tuple"
      }
    ],
    name: "TransactionRegistered",
    type: "event"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum DelayedOwner.Status",
            name: "status",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "triggerTime",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct DelayedOwner.Transaction",
        name: "_tx",
        type: "tuple"
      }
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum DelayedOwner.Status",
            name: "status",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "triggerTime",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct DelayedOwner.Transaction",
        name: "_tx",
        type: "tuple"
      }
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
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
        components: [
          {
            internalType: "enum DelayedOwner.Status",
            name: "status",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "triggerTime",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct DelayedOwner.Transaction",
        name: "_tx",
        type: "tuple"
      }
    ],
    name: "isValidWitness",
    outputs: [
      {
        internalType: "bool",
        name: "isValid",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum DelayedOwner.Status",
            name: "status",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "triggerTime",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct DelayedOwner.Transaction",
        name: "_tx",
        type: "tuple"
      }
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
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
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "txHashes",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610cfc380380610cfc83398101604081905261002f91610081565b600080546001600160a01b0319166001600160a01b03841690811782556040518492907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350608052506100b9565b60008060408385031215610093578182fd5b82516001600160a01b03811681146100a9578283fd5b6020939093015192949293505050565b608051610c296100d3600039806104295250610c296000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063893d20e81161005b578063893d20e8146100bd5780638ee00b01146100db578063bbd7be31146100fb578063f2fde38b1461011b5761007d565b80630b8d6f891461008257806313c03236146100975780633a571f30146100aa575b600080fd5b61009561009036600461070f565b61012e565b005b6100956100a536600461070f565b6102b9565b6100956100b836600461070f565b6103bb565b6100c56104d3565b6040516100d291906107e8565b60405180910390f35b6100ee6100e936600461070f565b6104ef565b6040516100d29190610809565b61010e6101093660046107b4565b610534565b6040516100d29190610814565b6100956101293660046106ed565b610546565b80610138816104ef565b61015d5760405162461bcd60e51b815260040161015490610991565b60405180910390fd5b60018251600381111561016c57fe5b146101895760405162461bcd60e51b81526004016101549061087a565b42826020015111156101ad5760405162461bcd60e51b815260040161015490610934565b600282526040516101c2908390602001610b16565b60408051601f19818403018152828252805160209182012060608601516000908152600190925282822055908401516080850151919273ffffffffffffffffffffffffffffffffffffffff9091169161021a916107cc565b6000604051808303816000865af19150503d8060008114610257576040519150601f19603f3d011682016040523d82523d6000602084013e61025c565b606091505b505090508061027d5760405162461bcd60e51b815260040161015490610adf565b7fc1936d3995bdc418e1e0e60366379b2c6d2ac93f3450b5c7e7ec73251ae7cae8836040516102ac9190610b16565b60405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102f05760405162461bcd60e51b8152600401610154906109ee565b806102fa816104ef565b6103165760405162461bcd60e51b815260040161015490610991565b60018251600381111561032557fe5b146103425760405162461bcd60e51b815260040161015490610a82565b60038252604051610357908390602001610b16565b60408051601f198184030181528282528051602091820120606086015160009081526001909252919020557f9422f7a065bb451f342bdeef1b3d7e28d7fc46cbf354810a5fe9564f4b12b7f3906103af908490610b16565b60405180910390a15050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103f25760405162461bcd60e51b8152600401610154906109ee565b6060810151600090815260016020526040902054156104235760405162461bcd60e51b8152600401610154906108d7565b610453427f000000000000000000000000000000000000000000000000000000000000000063ffffffff61062316565b602082015260018181905250604051610470908290602001610b16565b60408051601f198184030181528282528051602091820120606085015160009081526001909252919020557fbdd51b76bdd72264a2947da4c06802cec9e1c1dad4d5edb21050139962e9c603906104c8908390610b16565b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b6000816040516020016105029190610b16565b60408051601f198184030181529181528151602092830120606085015160009081526001909352912054149050919050565b60016020526000908152604090205481565b60005473ffffffffffffffffffffffffffffffffffffffff16331461057d5760405162461bcd60e51b8152600401610154906109ee565b73ffffffffffffffffffffffffffffffffffffffff81166105b05760405162461bcd60e51b81526004016101549061081d565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821780845560405192939116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6000828201838110156106485760405162461bcd60e51b815260040161015490610a4b565b90505b92915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461064b57600080fd5b600082601f830112610685578081fd5b813567ffffffffffffffff81111561069b578182fd5b6106ae6020601f19601f84011601610b9c565b91508082528360208285010111156106c557600080fd5b8060208401602084013760009082016020015292915050565b80356004811061064b57600080fd5b6000602082840312156106fe578081fd5b6107088383610651565b9392505050565b600060208284031215610720578081fd5b813567ffffffffffffffff80821115610737578283fd5b81840160a08187031215610749578384fd5b61075360a0610b9c565b925061075f86826106de565b8352602081013560208401526107788660408301610651565b604084015260608101356060840152608081013582811115610798578485fd5b6107a487828401610675565b6080850152509195945050505050565b6000602082840312156107c5578081fd5b5035919050565b600082516107de818460208701610bc3565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b901515815260200190565b90815260200190565b6020808252602a908201527f4f776e61626c65237472616e736665724f776e6572736869703a20494e56414c60408201527f49445f4144445245535300000000000000000000000000000000000000000000606082015260800190565b60208082526024908201527f44656c617965644f776e657223657865637574653a2054585f4e4f545f50454e60408201527f44494e4700000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252602c908201527f44656c617965644f776e65722372656769737465723a2054585f414c5245414460408201527f595f524547495354455245440000000000000000000000000000000000000000606082015260800190565b6020808252602a908201527f44656c617965644f776e6523657865637574653a2054585f4e4f545f5945545f60408201527f45584543555441424c4500000000000000000000000000000000000000000000606082015260800190565b60208082526033908201527f44656c617965644f776e6572236f6e6c7956616c69645769746e65737365733a60408201527f20494e56414c49445f54585f5749544e45535300000000000000000000000000606082015260800190565b60208082526026908201527f4f776e61626c65236f6e6c794f776e65723a2053454e4445525f49535f4e4f5460408201527f5f4f574e45520000000000000000000000000000000000000000000000000000606082015260800190565b60208082526016908201527f536166654d617468236164643a204f564552464c4f5700000000000000000000604082015260600190565b60208082526023908201527f44656c617965644f776e65722363616e63656c3a2054585f4e4f545f50454e4460408201527f494e470000000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601f908201527f44656c617965644f776e657223657865637574653a2054585f4641494c454400604082015260600190565b600060208252825160048110610b2857fe5b806020840152506020830151604083015273ffffffffffffffffffffffffffffffffffffffff604084015116606083015260608301516080830152608083015160a08084015280518060c0850152610b878160e0860160208501610bc3565b601f01601f19169290920160e0019392505050565b60405181810167ffffffffffffffff81118282101715610bbb57600080fd5b604052919050565b60005b83811015610bde578181015183820152602001610bc6565b83811115610bed576000848401525b5050505056fea26469706673582212206cadb9d6d8d1db74373c6efa925cfd8b2f82e5033b1356130e6fdd24423e47d564736f6c63430006080033";
