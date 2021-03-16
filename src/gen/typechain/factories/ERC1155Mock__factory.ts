/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC1155Mock } from "../ERC1155Mock";

export class ERC1155Mock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155Mock> {
    return super.deploy(overrides || {}) as Promise<ERC1155Mock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155Mock {
    return super.attach(address) as ERC1155Mock;
  }
  connect(signer: Signer): ERC1155Mock__factory {
    return super.connect(signer) as ERC1155Mock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Mock;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "batchBurnMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "batchMintMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "burnMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "isOperator",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "mintMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612319806100206000396000f3fe608060405234801561001057600080fd5b50600436106100d35760003560e01c8063a22cb46511610081578063d7a0ad901161005b578063d7a0ad90146101f8578063e985e9c51461020b578063f242432a1461021e576100d3565b8063a22cb465146101bf578063a3f091f5146101d2578063bd7a6c41146101e5576100d3565b80632eb2c2d6116100b25780632eb2c2d614610177578063437ecbe91461018c5780634e1273f41461019f576100d3565b8062fdd58e1461010e57806301ffc9a7146101375780630e89341c14610157575b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101059061204d565b60405180910390fd5b61012161011c366004611dc6565b610231565b60405161012e91906120aa565b60405180910390f35b61014a610145366004611f35565b610264565b60405161012e9190611fd1565b61016a610165366004611f75565b610277565b60405161012e9190611fdc565b61018a610185366004611b7d565b6103ca565b005b61018a61019a366004611def565b6104d5565b6101b26101ad366004611e74565b6104e5565b60405161012e9190611f8d565b61018a6101cd366004611d8c565b610631565b61018a6101e0366004611e21565b6106ca565b61018a6101f3366004611c86565b6106dc565b61018a610206366004611cf7565b6106e7565b61014a610219366004611b4b565b6106f3565b61018a61022c366004611c23565b61072e565b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260208181526040808320938352929052205490565b600061026f82610832565b90505b919050565b606060026102848361088f565b60405160200180838054600181600116156101000203166002900480156102e25780601f106102c05761010080835404028352918201916102e2565b820191906000526020600020905b8154815290600101906020018083116102ce575b5050825160208401908083835b6020831061032c57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016102ef565b5181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990911692169190911790527f2e6a736f6e000000000000000000000000000000000000000000000000000000920191825250604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe50181526005909201905295945050505050565b3373ffffffffffffffffffffffffffffffffffffffff861614806103f357506103f385336106f3565b610448576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f81526020018061220c602f913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166104b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806121806030913960400191505060405180910390fd5b6104c0858585856109bb565b6104ce858585855a86610d0f565b5050505050565b6104e0838383610f86565b505050565b60608151835114610541576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806121e0602c913960400191505060405180910390fd5b6060835167ffffffffffffffff8111801561055b57600080fd5b50604051908082528060200260200182016040528015610585578160200160208202803683370190505b50905060005b8451811015610629576000808683815181106105a357fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008583815181106105f357fe5b602002602001015181526020019081526020016000205482828151811061061657fe5b602090810291909101015260010161058b565b509392505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6106d684848484611031565b50505050565b6104e08383836110e6565b6106d684848484611326565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b3373ffffffffffffffffffffffffffffffffffffffff86161480610757575061075785336106f3565b6107ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612121602a913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610818576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806120f6602b913960400191505060405180910390fd5b61082485858585611570565b6104ce858585855a86611673565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000141561088657506001610272565b61026f82611864565b6060816108d0575060408051808201909152600181527f30000000000000000000000000000000000000000000000000000000000000006020820152610272565b818060005b82156108e957600101600a830492506108d5565b60608167ffffffffffffffff8111801561090257600080fd5b506040519080825280601f01601f19166020018201604052801561092d576020820181803683370190505b5090507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82015b83156109b157600a840660300160f81b8282806001900393508151811061097757fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84049350610954565b5095945050505050565b8051825114610a15576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603581526020018061214b6035913960400191505060405180910390fd5b815160005b81811015610c0757610aaa838281518110610a3157fe5b60200260200101516000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878581518110610a8557fe5b60200260200101518152602001908152602001600020546118c190919063ffffffff16565b6000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868481518110610af657fe5b6020026020010151815260200190815260200160002081905550610b98838281518110610b1f57fe5b60200260200101516000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878581518110610b7357fe5b602002602001015181526020019081526020016000205461193890919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868481518110610be457fe5b602090810291909101810151825281019190915260400160002055600101610a1a565b508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610cb4578181015183820152602001610c9c565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610cf3578181015183820152602001610cdb565b5050505090500194505050505060405180910390a45050505050565b610d2e8573ffffffffffffffffffffffffffffffffffffffff166119b3565b15610f7e5760008573ffffffffffffffffffffffffffffffffffffffff1663bc197c8184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015610de6578181015183820152602001610dce565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015610e25578181015183820152602001610e0d565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015610e61578181015183820152602001610e49565b50505050905090810190601f168015610e8e5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b158015610eb357600080fd5b5087f1158015610ec7573d6000803e3d6000fd5b50505050506040513d6020811015610ede57600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014610f7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603f81526020018061226b603f913960400191505060405180910390fd5b505b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208181526040808320858452909152902054610fbf90826118c1565b73ffffffffffffffffffffffffffffffffffffffff841660008181526020818152604080832087845282528083209490945583518681529081018590528351919333927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629281900390910190a4505050565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020818152604080832086845290915290205461106a9083611938565b73ffffffffffffffffffffffffffffffffffffffff8516600081815260208181526040808320888452825280832094909455835187815290810186905283519293919233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62928290030190a46106d660008585855a86611673565b815181518114611141576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806121b06030913960400191505060405180910390fd5b60005b8181101561121e576111af83828151811061115b57fe5b60200260200101516000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878581518110610a8557fe5b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008684815181106111fb57fe5b602090810291909101810151825281019190915260400160002055600101611144565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156112cc5781810151838201526020016112b4565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561130b5781810151838201526020016112f3565b5050505090500194505050505060405180910390a450505050565b8151835114611380576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061223b6030913960400191505060405180910390fd5b825160005b8181101561145f576113f084828151811061139c57fe5b60200260200101516000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000888581518110610b7357fe5b6000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600087848151811061143c57fe5b602090810291909101810151825281019190915260400160002055600101611385565b508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561150d5781810151838201526020016114f5565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561154c578181015183820152602001611534565b5050505090500194505050505060405180910390a46104ce60008686865a87610d0f565b73ffffffffffffffffffffffffffffffffffffffff84166000908152602081815260408083208584529091529020546115a990826118c1565b73ffffffffffffffffffffffffffffffffffffffff808616600090815260208181526040808320878452825280832094909455918616815280825282812085825290915220546115f99082611938565b73ffffffffffffffffffffffffffffffffffffffff808516600081815260208181526040808320888452825291829020949094558051868152938401859052805191939288169233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a450505050565b6116928573ffffffffffffffffffffffffffffffffffffffff166119b3565b15610f7e5760008573ffffffffffffffffffffffffffffffffffffffff1663f23a6e6184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561174b578181015183820152602001611733565b50505050905090810190601f1680156117785780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b15801561179b57600080fd5b5087f11580156117af573d6000803e3d6000fd5b50505050506040513d60208110156117c657600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014610f7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a8152602001806122aa603a913960400191505060405180910390fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a260000000000000000000000000000000000000000000000000000000014156118b857506001610272565b61026f826119ea565b60008282111561193257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f536166654d617468237375623a20554e444552464c4f57000000000000000000604482015290519081900360640190fd5b50900390565b6000828201838110156119ac57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f536166654d617468236164643a204f564552464c4f5700000000000000000000604482015290519081900360640190fd5b9392505050565b6000813f80158015906119ac57507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141592915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461027257600080fd5b600082601f830112611a68578081fd5b8135611a7b611a76826120d7565b6120b3565b818152915060208083019084810181840286018201871015611a9c57600080fd5b60005b84811015611abb57813584529282019290820190600101611a9f565b505050505092915050565b600082601f830112611ad6578081fd5b813567ffffffffffffffff811115611aea57fe5b611b1b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016120b3565b9150808252836020828501011115611b3257600080fd5b8060208401602084013760009082016020015292915050565b60008060408385031215611b5d578182fd5b611b6683611a34565b9150611b7460208401611a34565b90509250929050565b600080600080600060a08688031215611b94578081fd5b611b9d86611a34565b9450611bab60208701611a34565b9350604086013567ffffffffffffffff80821115611bc7578283fd5b611bd389838a01611a58565b94506060880135915080821115611be8578283fd5b611bf489838a01611a58565b93506080880135915080821115611c09578283fd5b50611c1688828901611ac6565b9150509295509295909350565b600080600080600060a08688031215611c3a578081fd5b611c4386611a34565b9450611c5160208701611a34565b93506040860135925060608601359150608086013567ffffffffffffffff811115611c7a578182fd5b611c1688828901611ac6565b600080600060608486031215611c9a578283fd5b611ca384611a34565b9250602084013567ffffffffffffffff80821115611cbf578384fd5b611ccb87838801611a58565b93506040860135915080821115611ce0578283fd5b50611ced86828701611a58565b9150509250925092565b60008060008060808587031215611d0c578384fd5b611d1585611a34565b9350602085013567ffffffffffffffff80821115611d31578485fd5b611d3d88838901611a58565b94506040870135915080821115611d52578384fd5b611d5e88838901611a58565b93506060870135915080821115611d73578283fd5b50611d8087828801611ac6565b91505092959194509250565b60008060408385031215611d9e578182fd5b611da783611a34565b915060208301358015158114611dbb578182fd5b809150509250929050565b60008060408385031215611dd8578182fd5b611de183611a34565b946020939093013593505050565b600080600060608486031215611e03578283fd5b611e0c84611a34565b95602085013595506040909401359392505050565b60008060008060808587031215611e36578384fd5b611e3f85611a34565b93506020850135925060408501359150606085013567ffffffffffffffff811115611e68578182fd5b611d8087828801611ac6565b60008060408385031215611e86578081fd5b823567ffffffffffffffff80821115611e9d578283fd5b818501915085601f830112611eb0578283fd5b8135611ebe611a76826120d7565b80828252602080830192508086018a828387028901011115611ede578788fd5b8796505b84871015611f0757611ef381611a34565b845260019690960195928101928101611ee2565b509096508701359350505080821115611f1e578283fd5b50611f2b85828601611a58565b9150509250929050565b600060208284031215611f46578081fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146119ac578182fd5b600060208284031215611f86578081fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b81811015611fc557835183529284019291840191600101611fa9565b50909695505050505050565b901515815260200190565b6000602080835283518082850152825b8181101561200857858101830151858201604001528201611fec565b818111156120195783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60208082526027908201527f455243313135354d6574614d696e744275726e4d6f636b3a20494e56414c494460408201527f5f4d4554484f4400000000000000000000000000000000000000000000000000606082015260800190565b90815260200190565b60405181810167ffffffffffffffff811182821017156120cf57fe5b604052919050565b600067ffffffffffffffff8211156120eb57fe5b506020908102019056fe4552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e544552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f5245524331313535235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e47544845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135354d696e744275726e2362617463684275726e3a20494e56414c49445f4152524159535f4c454e475448455243313135352362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e47544845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135354d696e744275726e2362617463684d696e743a20494e56414c49445f4152524159535f4c454e47544845524331313535235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d45535341474545524331313535235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745a2646970667358221220086c8201b52d65a2697e38f393adca3a9ddcde80ef9f4cbf399632a34c73536664736f6c63430007040033";