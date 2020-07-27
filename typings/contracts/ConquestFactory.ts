/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { Conquest } from "./Conquest";

export class ConquestFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _skyweaverAssetsAddress: string,
    _conquestEntryTokenId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<Conquest> {
    return super.deploy(
      _skyweaverAssetsAddress,
      _conquestEntryTokenId,
      overrides
    ) as Promise<Conquest>;
  }
  getDeployTransaction(
    _skyweaverAssetsAddress: string,
    _conquestEntryTokenId: BigNumberish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(
      _skyweaverAssetsAddress,
      _conquestEntryTokenId,
      overrides
    );
  }
  attach(address: string): Conquest {
    return super.attach(address) as Conquest;
  }
  connect(signer: Signer): ConquestFactory {
    return super.connect(signer) as ConquestFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Conquest {
    return new Contract(address, _abi, signerOrProvider) as Conquest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_skyweaverAssetsAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_conquestEntryTokenId",
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
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nConquests",
        type: "uint256"
      }
    ],
    name: "ConquestEntered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "previousTier",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newTier",
        type: "uint256"
      }
    ],
    name: "OwnershipGranted",
    type: "event"
  },
  {
    stateMutability: "nonpayable",
    type: "fallback"
  },
  {
    inputs: [],
    name: "MAX_REWARD_AMOUNT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "TIME_BETWEEN_CONQUESTS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_tier",
        type: "uint256"
      }
    ],
    name: "assignOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "conquestEntryID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "conquestsEntered",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      }
    ],
    name: "exitConquest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      }
    ],
    name: "getOwnerTier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "isActiveConquest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "nextConquestTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "skyweaverAssets",
    outputs: [
      {
        internalType: "contract ISkyweaverAssets",
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
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516111bf3803806111bf83398101604081905261002f916100ba565b336000818152602081905260408082206000199081905590519092907fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e908390a46001600160a01b03821661009f5760405162461bcd60e51b8152600401610096906100f2565b60405180910390fd5b60609190911b6001600160601b03191660805260a052610135565b600080604083850312156100cc578182fd5b82516001600160a01b03811681146100e2578283fd5b6020939093015192949293505050565b60208082526023908201527f436f6e717565737423636f6e7374727563746f723a20494e56414c49445f494e60408201526214155560ea1b606082015260800190565b60805160601c60a05161105561016a6000398061023352806103dd525080610316528061035c528061069852506110556000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063a0cf65581161008c578063cdd28b0d11610066578063cdd28b0d146101ae578063e048aef6146101c1578063e8f35d5a146101d4578063f23a6e61146101e7576100cf565b8063a0cf655814610168578063bc197c811461017b578063bc7cce601461019b576100cf565b806301ffc9a7146100f057806317119df5146101195780631cb0a0281461012e5780635d511a111461013657806384f4076e1461014b578063a04f6b4b14610160575b60405162461bcd60e51b81526004016100e790610d0f565b60405180910390fd5b6101036100fe366004610b4e565b6101fa565b6040516101109190610c16565b60405180910390f35b610121610231565b6040516101109190610fd7565b610121610255565b610149610144366004610b24565b61025b565b005b610153610314565b6040516101109190610c36565b610121610338565b61012161017636600461097b565b61033d565b61018e610189366004610996565b61034f565b6040516101109190610c21565b6101036101a936600461097b565b6105ac565b6101496101bc366004610aa5565b6105c1565b6101216101cf36600461097b565b610712565b6101216101e236600461097b565b610724565b61018e6101f5366004610a40565b61073f565b60006001600160e01b031982166301ffc9a760e01b148061022b57506001600160e01b03198216630271189760e51b145b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b61012c81565b336000908152602081905260409020546000199081111561028e5760405162461bcd60e51b81526004016100e790610e6f565b6001600160a01b0383166102b45760405162461bcd60e51b81526004016100e790610f0b565b6001600160a01b038316600081815260208190526040808220549051859391927fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e91a4506001600160a01b03909116600090815260208190526040902055565b7f000000000000000000000000000000000000000000000000000000000000000081565b60c881565b60026020526000908152604090205481565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103995760405162461bcd60e51b81526004016100e790610d46565b83516001146103ba5760405162461bcd60e51b81526004016100e790610c90565b82516001146103db5760405162461bcd60e51b81526004016100e790610f8b565b7f00000000000000000000000000000000000000000000000000000000000000008460008151811061040957fe5b60200260200101511461042e5760405162461bcd60e51b81526004016100e790610d91565b8260008151811061043b57fe5b60200260200101516001146104625760405162461bcd60e51b81526004016100e790610ec1565b6001600160a01b03851660009081526001602052604090205460ff161561049b5760405162461bcd60e51b81526004016100e790610e25565b6001600160a01b0385166000908152600360205260409020544210156104d35760405162461bcd60e51b81526004016100e790610c4a565b6001600160a01b0385166000908152600160208181526040808420805460ff1916841790556002909152909120546105109163ffffffff6107de16565b6001600160a01b03861660009081526002602052604090205561053b4261012c63ffffffff6107de16565b6001600160a01b038616600090815260036020908152604080832093909355600290528190205490517fcfc6e20f951fff57781db2894b809461f33221319f91c415940263667ae9a6e79161059291889190610bfd565b60405180910390a15063bc197c8160e01b95945050505050565b60016020526000908152604090205460ff1681565b336000908152602081905260409020546001908111156105f35760405162461bcd60e51b81526004016100e790610e6f565b6001600160a01b03861660009081526001602052604090205460ff1661062b5760405162461bcd60e51b81526004016100e790610dd7565b60c860005b858110156106675761065d85858381811061064757fe5b905060200201358361080a90919063ffffffff16565b9150600101610630565b506001600160a01b0380881660009081526001602052604090819020805460ff1916905551635a455c5b60e11b81527f00000000000000000000000000000000000000000000000000000000000000009091169063b48ab8b6906106d7908a908a908a908a908a90600401610baa565b600060405180830381600087803b1580156106f157600080fd5b505af1158015610705573d6000803e3d6000fd5b5050505050505050505050565b60036020526000908152604090205481565b6001600160a01b031660009081526020819052604090205490565b60408051600180825281830190925260009160609190602080830190803683375050604080516001808252818301909252929350606092915060208083019080368337019050509050858260008151811061079657fe5b60200260200101818152505084816000815181106107b057fe5b6020026020010181815250506107c9888884848861034f565b5063f23a6e6160e01b98975050505050505050565b6000828201838110156108035760405162461bcd60e51b81526004016100e790610f5b565b9392505050565b60008282111561082c5760405162461bcd60e51b81526004016100e790610cd8565b50900390565b80356001600160a01b038116811461022b57600080fd5b60008083601f84011261085a578182fd5b50813567ffffffffffffffff811115610871578182fd5b602083019150836020808302850101111561088b57600080fd5b9250929050565b600082601f8301126108a2578081fd5b813567ffffffffffffffff8111156108b8578182fd5b60208082026108c8828201610fe0565b838152935081840185830182870184018810156108e457600080fd5b600092505b848310156109075780358252600192909201919083019083016108e9565b505050505092915050565b600082601f830112610922578081fd5b813567ffffffffffffffff811115610938578182fd5b61094b601f8201601f1916602001610fe0565b915080825283602082850101111561096257600080fd5b8060208401602084013760009082016020015292915050565b60006020828403121561098c578081fd5b6108038383610832565b600080600080600060a086880312156109ad578081fd5b85356109b881611007565b945060208601356109c881611007565b9350604086013567ffffffffffffffff808211156109e4578283fd5b6109f089838a01610892565b94506060880135915080821115610a05578283fd5b610a1189838a01610892565b93506080880135915080821115610a26578283fd5b50610a3388828901610912565b9150509295509295909350565b600080600080600060a08688031215610a57578081fd5b610a618787610832565b9450610a708760208801610832565b93506040860135925060608601359150608086013567ffffffffffffffff811115610a99578182fd5b610a3388828901610912565b600080600080600060608688031215610abc578081fd5b610ac68787610832565b9450602086013567ffffffffffffffff80821115610ae2578283fd5b610aee89838a01610849565b90965094506040880135915080821115610b06578283fd5b50610b1388828901610849565b969995985093965092949392505050565b60008060408385031215610b36578182fd5b610b408484610832565b946020939093013593505050565b600060208284031215610b5f578081fd5b81356001600160e01b031981168114610803578182fd5b81835260006001600160fb1b03831115610b8e578081fd5b6020830280836020870137939093016020019283525090919050565b6001600160a01b0386168152608060208201819052600090610bcf9083018688610b76565b8281036040840152610be2818587610b76565b83810360609094019390935250815260200195945050505050565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6001600160e01b031991909116815260200190565b6001600160a01b0391909116815260200190565b60208082526026908201527f436f6e717565737423656e7472793a204e45575f434f4e51554553545f544f4f6040820152655f4541524c5960d01b606082015260800190565b60208082526028908201527f436f6e717565737423656e7472793a20494e56414c49445f4944535f415252416040820152670b2be988a9c8ea8960c31b606082015260800190565b60208082526017908201527f536166654d617468237375623a20554e444552464c4f57000000000000000000604082015260600190565b6020808252601e908201527f436f6e7175657374235f3a20554e535550504f525445445f4d4554484f440000604082015260600190565b6020808252602b908201527f436f6e717565737423656e7472793a20494e56414c49445f454e5452595f544f60408201526a4b454e5f4144445245535360a81b606082015260800190565b60208082526026908201527f436f6e717565737423656e7472793a20494e56414c49445f454e5452595f544f60408201526512d15397d25160d21b606082015260800190565b6020808252602e908201527f436f6e71756573742365786974436f6e71756573743a20555345525f49535f4e60408201526d13d517d25397d0d3d394555154d560921b606082015260800190565b6020808252602a908201527f436f6e717565737423656e7472793a20504c415945525f414c52454144595f496040820152691397d0d3d394555154d560b21b606082015260800190565b60208082526032908201527f5469657265644f776e61626c65236f6e6c794f776e6572546965723a204f574e60408201527145525f544945525f49535f544f4f5f4c4f5760701b606082015260800190565b6020808252602a908201527f436f6e717565737423656e7472793a20494e56414c49445f454e5452595f544f60408201526912d15397d05353d5539560b21b606082015260800190565b60208082526030908201527f5469657265644f776e61626c65237472616e736665724f776e6572736869703a60408201526f20494e56414c49445f4144445245535360801b606082015260800190565b602080825260169082015275536166654d617468236164643a204f564552464c4f5760501b604082015260600190565b6020808252602c908201527f436f6e717565737423656e7472793a20494e56414c49445f414d4f554e54535f60408201526b082a4a482b2be988a9c8ea8960a31b606082015260800190565b90815260200190565b60405181810167ffffffffffffffff81118282101715610fff57600080fd5b604052919050565b6001600160a01b038116811461101c57600080fd5b5056fea26469706673582212208d55b60cbd0076ed0f37d7c9c08c4d09769500caf1a2e2c2e9a9d31a60fc1ca364736f6c63430006080033";
