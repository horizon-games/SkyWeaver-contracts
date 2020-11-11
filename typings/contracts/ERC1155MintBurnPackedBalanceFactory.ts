/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ERC1155MintBurnPackedBalance } from "./ERC1155MintBurnPackedBalance";

export class ERC1155MintBurnPackedBalanceFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: TransactionOverrides
  ): Promise<ERC1155MintBurnPackedBalance> {
    return super.deploy(overrides) as Promise<ERC1155MintBurnPackedBalance>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ERC1155MintBurnPackedBalance {
    return super.attach(address) as ERC1155MintBurnPackedBalance;
  }
  connect(signer: Signer): ERC1155MintBurnPackedBalanceFactory {
    return super.connect(signer) as ERC1155MintBurnPackedBalanceFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155MintBurnPackedBalance {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155MintBurnPackedBalance;
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
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      }
    ],
    name: "TransferBatch",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "TransferSingle",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "_owners",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      }
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "getIDBinIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "bin",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_binValues",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "getValueInBin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "isOperator",
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
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
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
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
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
    name: "safeTransferFrom",
    outputs: [],
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
        internalType: "bool",
        name: "_approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
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
  "0x608060405234801561001057600080fd5b50611a4c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a25760003560e01c8063a22cb46511610076578063e985e9c51161005b578063e985e9c514610503578063eaec5f811461053e578063f242432a14610561576100a2565b8063a22cb46514610492578063db90e83c146104cd576100a2565b8062fdd58e146100a757806301ffc9a7146100f25780632eb2c2d6146101455780634e1273f41461031b575b600080fd5b6100e0600480360360408110156100bd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610639565b60408051918252519081900360200190f35b6101316004803603602081101561010857600080fd5b50357fffffffff000000000000000000000000000000000000000000000000000000001661068e565b604080519115158252519081900360200190f35b610319600480360360a081101561015b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169181019060608101604082013564010000000081111561019c57600080fd5b8201836020820111156101ae57600080fd5b803590602001918460208302840111640100000000831117156101d057600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561022057600080fd5b82018360208201111561023257600080fd5b8035906020019184602083028401116401000000008311171561025457600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156102a457600080fd5b8201836020820111156102b657600080fd5b803590602001918460018302840111640100000000831117156102d857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506106f3945050505050565b005b6104426004803603604081101561033157600080fd5b81019060208101813564010000000081111561034c57600080fd5b82018360208201111561035e57600080fd5b8035906020019184602083028401116401000000008311171561038057600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156103d057600080fd5b8201836020820111156103e257600080fd5b8035906020019184602083028401116401000000008311171561040457600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506107ca945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561047e578181015183820152602001610466565b505050509050019250505060405180910390f35b610319600480360360408110156104a857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515610a2f565b6104ea600480360360208110156104e357600080fd5b5035610ac8565b6040805192835260208301919091528051918290030190f35b6101316004803603604081101561051957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610ad5565b6100e06004803603604081101561055457600080fd5b5080359060200135610b10565b610319600480360360a081101561057757600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a0810160808201356401000000008111156105c457600080fd5b8201836020820111156105d657600080fd5b803590602001918460018302840111640100000000831117156105f857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b23945050505050565b600080600061064784610ac8565b73ffffffffffffffffffffffffffffffffffffffff871660009081526020818152604080832085845290915290205491935091506106859082610b10565b95945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a260000000000000000000000000000000000000000000000000000000014156106e2575060016106ee565b6106eb82610bf3565b90505b919050565b3373ffffffffffffffffffffffffffffffffffffffff8616148061071c575061071c8533610ad5565b6107575760405162461bcd60e51b815260040180806020018281038252603c8152602001806118af603c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166107a95760405162461bcd60e51b815260040180806020018281038252603d81526020018061177a603d913960400191505060405180910390fd5b6107b585858585610c3d565b6107c3858585855a86611016565b5050505050565b8151815160609190811461080f5760405162461bcd60e51b81526004018080602001828103825260398152602001806117416039913960400191505060405180910390fd5b60008061082f8560008151811061082257fe5b6020026020010151610ac8565b9150915060008060008860008151811061084557fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020549050600083905060608567ffffffffffffffff811180156108b957600080fd5b506040519080825280602002602001820160405280156108e3578160200160208202803683370190505b5090506108f08385610b10565b816000815181106108fd57fe5b602090810291909101015260015b86811015610a225761092289828151811061082257fe5b9096509450828614158061098b575089818151811061093d57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff168a600183038151811061096a57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b156109f9576000808b838151811061099f57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008781526020019081526020016000205493508592505b610a038486610b10565b828281518110610a0f57fe5b602090810291909101015260010161090b565b5098975050505050505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6008810491600790911690565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b6020810282901c63ffffffff1692915050565b3373ffffffffffffffffffffffffffffffffffffffff86161480610b4c5750610b4c8533610ad5565b610b875760405162461bcd60e51b81526004018080602001828103825260378152602001806117ea6037913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610bd95760405162461bcd60e51b81526004018080602001828103825260388152602001806119686038913960400191505060405180910390fd5b610be585858585611273565b6107c3858585855a86611317565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b815181518114610c7e5760405162461bcd60e51b81526004018080602001828103825260428152602001806118216042913960600191505060405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614158015610cba5750600081115b15610e8c57600080610cd28560008151811061082257fe5b73ffffffffffffffffffffffffffffffffffffffff8916600090815260208181526040808320858452909152812054875193955091935091610d2a9190849088908590610d1b57fe5b602002602001015160016114ee565b73ffffffffffffffffffffffffffffffffffffffff881660009081526020818152604080832087845290915281205487519293509091610d809190859089908590610d7157fe5b602002602001015160006114ee565b90508360015b86811015610e3a57610d9d89828151811061082257fe5b9096509450818614610e0c5773ffffffffffffffffffffffffffffffffffffffff8b811660009081526020818152604080832086845280835281842098909855928d16825281815282822094825284815282822095909555878152948452808520549290935291909220549084905b610e1d84868a8481518110610d1b57fe5b9350610e3083868a8481518110610d7157fe5b9250600101610d86565b505073ffffffffffffffffffffffffffffffffffffffff808a16600090815260208181526040808320888452825280832095909555918a16815280825283812095815294905292209190915550610f0f565b60005b81811015610f0d57828181518110610ea357fe5b6020026020010151610ec887868481518110610ebb57fe5b6020026020010151610639565b1015610f055760405162461bcd60e51b81526004018080602001828103825260368152602001806118eb6036913960400191505060405180910390fd5b600101610e8f565b505b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610fbb578181015183820152602001610fa3565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610ffa578181015183820152602001610fe2565b5050505090500194505050505060405180910390a45050505050565b6110358573ffffffffffffffffffffffffffffffffffffffff1661167f565b1561126b5760008573ffffffffffffffffffffffffffffffffffffffff1663bc197c8184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156110ed5781810151838201526020016110d5565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561112c578181015183820152602001611114565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015611168578181015183820152602001611150565b50505050905090810190601f1680156111955780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b1580156111ba57600080fd5b5087f11580156111ce573d6000803e3d6000fd5b50505050506040513d60208110156111e557600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c8100000000000000000000000000000000000000000000000000000000146112695760405162461bcd60e51b815260040180806020018281038252604c815260200180611863604c913960600191505060405180910390fd5b505b505050505050565b61128084838360016116b9565b61128d83838360006116b9565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051808381526020018281526020019250505060405180910390a450505050565b6113368573ffffffffffffffffffffffffffffffffffffffff1661167f565b1561126b5760008573ffffffffffffffffffffffffffffffffffffffff1663f23a6e6184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156113ef5781810151838201526020016113d7565b50505050905090810190601f16801561141c5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b15801561143f57600080fd5b5087f1158015611453573d6000803e3d6000fd5b50505050506040513d602081101561146a57600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e6100000000000000000000000000000000000000000000000000000000146112695760405162461bcd60e51b81526004018080602001828103825260478152602001806119216047913960600191505060405180910390fd5b60006020840263ffffffff8284600181111561150657fe5b14156115a05784821b87019250868310156115525760405162461bcd60e51b81526004018080602001828103825260328152602001806119e56032913960400191505060405180910390fd5b64010000000087831c821686011061159b5760405162461bcd60e51b81526004018080602001828103825260328152602001806119e56032913960400191505060405180910390fd5b611675565b60018460018111156115ae57fe5b141561163e5784821b87039250868311156115fa5760405162461bcd60e51b81526004018080602001828103825260338152602001806117b76033913960400191505060405180910390fd5b84818389901c16101561159b5760405162461bcd60e51b81526004018080602001828103825260338152602001806117b76033913960400191505060405180910390fd5b60405162461bcd60e51b81526004018080602001828103825260458152602001806119a06045913960600191505060405180910390fd5b5050949350505050565b6000813f80158015906116b257507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708114155b9392505050565b6000806116c585610ac8565b73ffffffffffffffffffffffffffffffffffffffff88166000908152602081815260408083208584529091529020549193509150611705908286866114ee565b73ffffffffffffffffffffffffffffffffffffffff90961660009081526020818152604080832094835293905291909120949094555050505056fe455243313135355061636b656442616c616e63652362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e475448455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20554e444552464c4f57455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20554e444552464c4f57455243313135355061636b656442616c616e6365235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20494e56414c49445f42494e5f57524954455f4f5045524154494f4e455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a204f564552464c4f57a2646970667358221220b419437cfc297e4918e372079c5d26c9c5888334c19a2476b9d3b2fba941ccce64736f6c63430007040033";
