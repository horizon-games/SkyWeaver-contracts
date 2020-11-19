/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Conquest } from "../Conquest";

export class Conquest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _firstOwner: string,
    _skyweaverAssetsAddress: string,
    _silverCardFactoryAddress: string,
    _goldCardFactoryAddress: string,
    _conquestEntryTokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<Conquest> {
    return super.deploy(
      _firstOwner,
      _skyweaverAssetsAddress,
      _silverCardFactoryAddress,
      _goldCardFactoryAddress,
      _conquestEntryTokenId,
      overrides || {}
    ) as Promise<Conquest>;
  }
  getDeployTransaction(
    _firstOwner: string,
    _skyweaverAssetsAddress: string,
    _silverCardFactoryAddress: string,
    _goldCardFactoryAddress: string,
    _conquestEntryTokenId: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _firstOwner,
      _skyweaverAssetsAddress,
      _silverCardFactoryAddress,
      _goldCardFactoryAddress,
      _conquestEntryTokenId,
      overrides || {}
    );
  }
  attach(address: string): Conquest {
    return super.attach(address) as Conquest;
  }
  connect(signer: Signer): Conquest__factory {
    return super.connect(signer) as Conquest__factory;
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
        name: "_firstOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_skyweaverAssetsAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_silverCardFactoryAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_goldCardFactoryAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_conquestEntryTokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nConquests",
        type: "uint256",
      },
    ],
    name: "ConquestEntered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "previousTier",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newTier",
        type: "uint256",
      },
    ],
    name: "OwnershipGranted",
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
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tier",
        type: "uint256",
      },
    ],
    name: "assignOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "conquestEntryID",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "conquestsEntered",
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
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_silverIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_goldIds",
        type: "uint256[]",
      },
    ],
    name: "exitConquest",
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
    ],
    name: "getOwnerTier",
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
    inputs: [],
    name: "goldCardFactory",
    outputs: [
      {
        internalType: "contract IRewardFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isActiveConquest",
    outputs: [
      {
        internalType: "bool",
        name: "",
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
        name: "",
        type: "address",
      },
    ],
    name: "nextConquestTime",
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
        internalType: "address",
        name: "",
        type: "address",
      },
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
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "silverCardFactory",
    outputs: [
      {
        internalType: "contract IRewardFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "skyweaverAssets",
    outputs: [
      {
        internalType: "contract ISkyweaverAssets",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
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
];

const _bytecode =
  "0x61010060405234801561001157600080fd5b50604051611918380380611918833981810160405260a081101561003457600080fd5b50805160208201516040830151606084015160809094015192939192909190846001600160a01b0381166100995760405162461bcd60e51b815260040180806020018281038252602e8152602001806118c7602e913960400191505060405180910390fd5b6001600160a01b0381166000818152602081905260408082206000199081905590519092907fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e908390a4506001600160a01b0384161580159061010457506001600160a01b03831615155b801561011857506001600160a01b03821615155b6101535760405162461bcd60e51b81526004018080602001828103825260238152602001806118f56023913960400191505060405180910390fd5b6001600160601b0319606094851b811660c05292841b8316608052921b1660a05260e0525060805160601c60a05160601c60c05160601c60e0516116e96101de6000398061072a5280610a2f5280610ca352508061090352806109515280610cd2525080610706528061122052508061074e5280610f0d528061107d52806110dd52506116e96000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063a0cf65581161008c578063cdd28b0d11610066578063cdd28b0d14610484578063e048aef614610563578063e8f35d5a14610596578063f23a6e61146105c9576100df565b8063a0cf655814610215578063bc197c8114610248578063bc7cce6014610451576100df565b80633647c84d116100bd5780633647c84d146101ca5780635d511a11146101d257806384f4076e1461020d576100df565b806301ffc9a71461012c578063094227d41461017f57806317119df5146101b0575b6040805162461bcd60e51b815260206004820152601e60248201527f436f6e7175657374235f3a20554e535550504f525445445f4d4554484f440000604482015290519081900360640190fd5b61016b6004803603602081101561014257600080fd5b50357fffffffff000000000000000000000000000000000000000000000000000000001661066b565b604080519115158252519081900360200190f35b610187610704565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101b8610728565b60408051918252519081900360200190f35b61018761074c565b61020b600480360360408110156101e857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610770565b005b610187610901565b6101b86004803603602081101561022b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610925565b61041c600480360360a081101561025e57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169181019060608101604082013564010000000081111561029f57600080fd5b8201836020820111156102b157600080fd5b803590602001918460208302840111640100000000831117156102d357600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561032357600080fd5b82018360208201111561033557600080fd5b8035906020019184602083028401116401000000008311171561035757600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156103a757600080fd5b8201836020820111156103b957600080fd5b803590602001918460018302840111640100000000831117156103db57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610937945050505050565b604080517fffffffff000000000000000000000000000000000000000000000000000000009092168252519081900360200190f35b61016b6004803603602081101561046757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610db8565b61020b6004803603606081101561049a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff82351691908101906040810160208201356401000000008111156104d257600080fd5b8201836020820111156104e457600080fd5b8035906020019184602083028401116401000000008311171561050657600080fd5b91939092909160208101903564010000000081111561052457600080fd5b82018360208201111561053657600080fd5b8035906020019184602083028401116401000000008311171561055857600080fd5b509092509050610dcd565b6101b86004803603602081101561057957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166112ab565b6101b8600480360360208110156105ac57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166112bd565b61041c600480360360a08110156105df57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a08101608082013564010000000081111561062c57600080fd5b82018360208201111561063e57600080fd5b8035906020019184600183028401116401000000008311171561066057600080fd5b5090925090506112e5565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a70000000000000000000000000000000000000000000000000000000014806106fe57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b336000908152602081905260409020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff908111156107e05760405162461bcd60e51b81526004018080602001828103825260328152602001806115fb6032913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166108325760405162461bcd60e51b815260040180806020018281038252602e8152602001806114d6602e913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff841614156108875760405162461bcd60e51b81526004018080602001828103825260318152602001806116836031913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316600081815260208190526040808220549051859391927fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e91a45073ffffffffffffffffffffffffffffffffffffffff909116600090815260208190526040902055565b7f000000000000000000000000000000000000000000000000000000000000000081565b60026020526000908152604090205481565b60003373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146109ad5760405162461bcd60e51b815260040180806020018281038252602b81526020018061152c602b913960400191505060405180910390fd5b83516001146109ed5760405162461bcd60e51b81526004018080602001828103825260288152602001806115046028913960400191505060405180910390fd5b8251600114610a2d5760405162461bcd60e51b815260040180806020018281038252602c815260200180611657602c913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000084600081518110610a5b57fe5b602002602001015114610a9f5760405162461bcd60e51b81526004018080602001828103825260268152602001806115576026913960400191505060405180910390fd5b6002600a0a83600081518110610ab157fe5b602002602001015114610af55760405162461bcd60e51b815260040180806020018281038252602a81526020018061162d602a913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff851660009081526001602052604090205460ff1615610b5a5760405162461bcd60e51b815260040180806020018281038252602a8152602001806115ab602a913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8516600090815260036020526040902054421015610bbe5760405162461bcd60e51b81526004018080602001828103825260268152602001806114b06026913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8516600090815260016020818152604080842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001684179055600290915290912054610c20916113d4565b73ffffffffffffffffffffffffffffffffffffffff8616600090815260026020526040902055610c514260786113d4565b73ffffffffffffffffffffffffffffffffffffffff8087166000908152600360205260408082209390935582517fb390c0ab0000000000000000000000000000000000000000000000000000000081527f000000000000000000000000000000000000000000000000000000000000000060048201526064602482015292517f00000000000000000000000000000000000000000000000000000000000000009092169263b390c0ab926044808301939282900301818387803b158015610d1757600080fd5b505af1158015610d2b573d6000803e3d6000fd5b50505073ffffffffffffffffffffffffffffffffffffffff86166000818152600260209081526040918290205482519384529083015280517fcfc6e20f951fff57781db2894b809461f33221319f91c415940263667ae9a6e79350918290030190a1507fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b60016020526000908152604090205460ff1681565b33600090815260208190526040902054600190811115610e1e5760405162461bcd60e51b81526004018080602001828103825260328152602001806115fb6032913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff861660009081526001602052604090205460ff16610e825760405162461bcd60e51b815260040180806020018281038252602e81526020018061157d602e913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8616600090815260016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905583158015610ed9575081155b15610ee3576112a3565b600184148015610ef1575081155b156110535773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663b48ab8b6878787610f4160016064611435565b6040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018060200184810384528787828181526020019250602002808284376000838201819052601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018681038552875181528751602091820193828a0193509102908190849084905b83811015610ffd578181015183820152602001610fe5565b50505050905001848103825260008152602001602001975050505050505050600060405180830381600087803b15801561103657600080fd5b505af115801561104a573d6000803e3d6000fd5b505050506112a3565b600284148015611061575081155b156110b15773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663b48ab8b6878787610f4160026064611435565b6001841480156110c15750600182145b1561126c5773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663b48ab8b687878761111160016064611435565b6040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018060200184810384528787828181526020019250602002808284376000838201819052601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018681038552875181528751602091820193828a0193509102908190849084905b838110156111cd5781810151838201526020016111b5565b50505050905001848103825260008152602001602001975050505050505050600060405180830381600087803b15801561120657600080fd5b505af115801561121a573d6000803e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b48ab8b6878585610f4160016002600a0a611435565b60405162461bcd60e51b81526004018080602001828103825260268152602001806115d56026913960400191505060405180910390fd5b505050505050565b60036020526000908152604090205481565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b60408051600180825281830190925260009160609190602080830190803683375050604080516001808252818301909252929350606092915060208083019080368337019050509050868260008151811061133c57fe5b602002602001018181525050858160008151811061135657fe5b6020026020010181815250506113a58989848489898080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061093792505050565b507ff23a6e61000000000000000000000000000000000000000000000000000000009998505050505050505050565b60008282018381101561142e576040805162461bcd60e51b815260206004820152601660248201527f536166654d617468236164643a204f564552464c4f5700000000000000000000604482015290519081900360640190fd5b9392505050565b6060808367ffffffffffffffff8111801561144f57600080fd5b50604051908082528060200260200182016040528015611479578160200160208202803683370190505b50905060005b848110156114a7578382828151811061149457fe5b602090810291909101015260010161147f565b50939250505056fe436f6e717565737423656e7472793a204e45575f434f4e51554553545f544f4f5f4541524c595469657265644f776e61626c652361737369676e4f776e6572736869703a20494e56414c49445f41444452455353436f6e717565737423656e7472793a20494e56414c49445f4944535f41525241595f4c454e475448436f6e717565737423656e7472793a20494e56414c49445f454e5452595f544f4b454e5f41444452455353436f6e717565737423656e7472793a20494e56414c49445f454e5452595f544f4b454e5f4944436f6e71756573742365786974436f6e71756573743a20555345525f49535f4e4f545f494e5f434f4e5155455354436f6e717565737423656e7472793a20504c415945525f414c52454144595f494e5f434f4e5155455354436f6e71756573742365786974436f6e71756573743a20494e56414c49445f524557415244535469657265644f776e61626c65236f6e6c794f776e6572546965723a204f574e45525f544945525f49535f544f4f5f4c4f57436f6e717565737423656e7472793a20494e56414c49445f454e5452595f544f4b454e5f414d4f554e54436f6e717565737423656e7472793a20494e56414c49445f414d4f554e54535f41525241595f4c454e4754485469657265644f776e61626c652361737369676e4f776e6572736869703a205550444154494e475f53454c465f54494552a2646970667358221220f153711f0dc4d318428034d7ac68c07bcb5e45ff78c5ac62e9c767eeb6c632b664736f6c634300070400335469657265644f776e61626c6523636f6e7374727563746f723a20494e56414c49445f46495253545f4f574e4552436f6e717565737423636f6e7374727563746f723a20494e56414c49445f494e505554";