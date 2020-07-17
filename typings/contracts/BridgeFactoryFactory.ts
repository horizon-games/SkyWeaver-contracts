/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { BridgeFactory } from "./BridgeFactory";

export class BridgeFactoryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _assetsAddr: string,
    _arcadeumCoinAddr: string,
    _arcadeumCoinID: BigNumberish,
    _periodMintLimit: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<BridgeFactory> {
    return super.deploy(
      _assetsAddr,
      _arcadeumCoinAddr,
      _arcadeumCoinID,
      _periodMintLimit,
      overrides
    ) as Promise<BridgeFactory>;
  }
  getDeployTransaction(
    _assetsAddr: string,
    _arcadeumCoinAddr: string,
    _arcadeumCoinID: BigNumberish,
    _periodMintLimit: BigNumberish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(
      _assetsAddr,
      _arcadeumCoinAddr,
      _arcadeumCoinID,
      _periodMintLimit,
      overrides
    );
  }
  attach(address: string): BridgeFactory {
    return super.attach(address) as BridgeFactory;
  }
  connect(signer: Signer): BridgeFactoryFactory {
    return super.connect(signer) as BridgeFactoryFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeFactory {
    return new Contract(address, _abi, signerOrProvider) as BridgeFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_assetsAddr",
        type: "address"
      },
      {
        internalType: "address",
        name: "_arcadeumCoinAddr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_arcadeumCoinID",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_periodMintLimit",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldMintingLimit",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMintingLimit",
        type: "uint256"
      }
    ],
    name: "PeriodMintLimitChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
      }
    ],
    name: "ReDeposit",
    type: "event"
  },
  {
    stateMutability: "nonpayable",
    type: "fallback"
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
    inputs: [
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
      }
    ],
    name: "batchMint",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getAvailableSupply",
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
    inputs: [],
    name: "getPeriodMintLimit",
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
    name: "getSkyweaverAssets",
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
    inputs: [],
    name: "livePeriod",
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
        name: "",
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
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
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
        name: "",
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
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newPeriodMintLimit",
        type: "uint256"
      }
    ],
    name: "updatePeriodMintLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200152638038062001526833981016040819052620000349162000177565b336000818152602081905260408082206000199081905590519092907fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e908390a46001600160a01b038416158015906200009657506001600160a01b03831615155b8015620000a35750600081115b620000cb5760405162461bcd60e51b8152600401620000c290620001ce565b60405180910390fd5b6001600160601b0319606085811b821660805284901b1660a05260c0829052620000fd6001600160e01b036200015116565b600155600281905560038190556040517fdc39d5ec34d8ece158f93c14cfb036acb3e58e254416fe92f43b3a0acd3c4d3d906200013f906000908490620001c0565b60405180910390a15050505062000216565b615460420490565b80516001600160a01b03811681146200017157600080fd5b92915050565b600080600080608085870312156200018d578384fd5b62000199868662000159565b9350620001aa866020870162000159565b6040860151606090960151949790965092505050565b918252602082015260400190565b60208082526028908201527f427269646765466163746f727923636f6e7374727563746f723a20494e56414c604082015267125117d25394155560c21b606082015260800190565b60805160601c60a05160601c60c0516112b0620002766000398061043352806104f652806106fc528061089452508061040552806104c552806106d4528061086c52508061030d5280610618528061064752806108e152506112b06000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063bc197c8111610071578063bc197c8114610163578063c167d1cd14610183578063c56cecd11461018b578063e8f35d5a1461019e578063f23a6e61146101b1578063f6869803146101c4576100b4565b806301ffc9a7146100d55780630ca83480146100fe57806325f5af00146101115780634bb78b14146101265780635d511a111461013b57806365d9c8ad1461014e575b60405162461bcd60e51b81526004016100cc90611191565b60405180910390fd5b6100e86100e3366004610d36565b6101cc565b6040516100f59190610f35565b60405180910390f35b6100e861010c366004610c0f565b610203565b61011961038d565b6040516100f59190611224565b610139610134366004610c8e565b610393565b005b610139610149366004610d0c565b61055d565b610156610616565b6040516100f59190610dfc565b610176610171366004610b00565b61063a565b6040516100f59190610f40565b61011961079d565b610139610199366004610d5e565b6107c0565b6101196101ac366004610ade565b610844565b6101766101bf366004610baa565b61085f565b61011961098d565b60006001600160e01b031982166301ffc9a760e01b14806101fd57506001600160e01b03198216630271189760e51b145b92915050565b336000908152602081905260408120546001908111156102355760405162461bcd60e51b81526004016100cc906110eb565b600061023f61098d565b905060006001548214156102565750600254610260565b5060035460018290555b60005b878110156102f057600087878381811061027957fe5b9050602002013583039050828111610293578092506102e7565b8a6001600160a01b03167f289837d2c94e47ffcbd29fb43a9c9b8a031907685db88e0e63e600fb68ce22328b8b8b8b6040516102d29493929190610ed5565b60405180910390a26000955050505050610383565b50600101610263565b506002819055604051635a455c5b60e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063b48ab8b69061034a908c908c908c908c908c90600401610e69565b600060405180830381600087803b15801561036457600080fd5b505af1158015610378573d6000803e3d6000fd5b505050506001935050505b5095945050505050565b60035490565b33600090815260208190526040902054600019908111156103c65760405162461bcd60e51b81526004016100cc906110eb565b6001600160a01b0384166103ec5760405162461bcd60e51b81526004016100cc90610fa8565b604051627eeac760e11b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169062fdd58e9061045b9030907f000000000000000000000000000000000000000000000000000000000000000090600401610ebc565b60206040518083038186803b15801561047357600080fd5b505afa158015610487573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ab9190610d76565b604051637921219560e11b81529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063f242432a9061052490309089907f00000000000000000000000000000000000000000000000000000000000000009087908b908b90600401610e10565b600060405180830381600087803b15801561053e57600080fd5b505af1158015610552573d6000803e3d6000fd5b505050505050505050565b33600090815260208190526040902054600019908111156105905760405162461bcd60e51b81526004016100cc906110eb565b6001600160a01b0383166105b65760405162461bcd60e51b81526004016100cc906111d4565b6001600160a01b038316600081815260208190526040808220549051859391927fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e91a4506001600160a01b03909116600090815260208190526040902055565b7f000000000000000000000000000000000000000000000000000000000000000090565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156106c9576040516320ec271b60e01b815233906320ec271b906106929087908790600401610f07565b600060405180830381600087803b1580156106ac57600080fd5b505af11580156106c0573d6000803e3d6000fd5b5050505061078b565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610773577f00000000000000000000000000000000000000000000000000000000000000008460008151811061072857fe5b60200260200101511461074d5760405162461bcd60e51b81526004016100cc9061113d565b835160011461076e5760405162461bcd60e51b81526004016100cc90610ff1565b61078b565b60405162461bcd60e51b81526004016100cc90610f55565b5063bc197c8160e01b95945050505050565b60006001546107aa61098d565b146107b7576003546107bb565b6002545b905090565b33600090815260208190526040902054600019908111156107f35760405162461bcd60e51b81526004016100cc906110eb565b8160025411156108035760028290555b7fdc39d5ec34d8ece158f93c14cfb036acb3e58e254416fe92f43b3a0acd3c4d3d6003548360405161083692919061122d565b60405180910390a150600355565b6001600160a01b031660009081526020819052604090205490565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156108d6577f000000000000000000000000000000000000000000000000000000000000000084146108d15760405162461bcd60e51b81526004016100cc9061109c565b61097b565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156109635760405163b390c0ab60e01b8152339063b390c0ab9061092c908790879060040161122d565b600060405180830381600087803b15801561094657600080fd5b505af115801561095a573d6000803e3d6000fd5b5050505061097b565b60405162461bcd60e51b81526004016100cc9061104e565b5063f23a6e6160e01b95945050505050565b615460420490565b80356001600160a01b03811681146101fd57600080fd5b60008083601f8401126109bd578182fd5b50813567ffffffffffffffff8111156109d4578182fd5b60208301915083602080830285010111156109ee57600080fd5b9250929050565b600082601f830112610a05578081fd5b813567ffffffffffffffff811115610a1b578182fd5b6020808202610a2b82820161123b565b83815293508184018583018287018401881015610a4757600080fd5b600092505b84831015610a6a578035825260019290920191908301908301610a4c565b505050505092915050565b600082601f830112610a85578081fd5b813567ffffffffffffffff811115610a9b578182fd5b610aae601f8201601f191660200161123b565b9150808252836020828501011115610ac557600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215610aef578081fd5b610af98383610995565b9392505050565b600080600080600060a08688031215610b17578081fd5b8535610b2281611262565b94506020860135610b3281611262565b9350604086013567ffffffffffffffff80821115610b4e578283fd5b610b5a89838a016109f5565b94506060880135915080821115610b6f578283fd5b610b7b89838a016109f5565b93506080880135915080821115610b90578283fd5b50610b9d88828901610a75565b9150509295509295909350565b600080600080600060a08688031215610bc1578081fd5b610bcb8787610995565b9450610bda8760208801610995565b93506040860135925060608601359150608086013567ffffffffffffffff811115610c03578182fd5b610b9d88828901610a75565b600080600080600060608688031215610c26578081fd5b610c308787610995565b9450602086013567ffffffffffffffff80821115610c4c578283fd5b610c5889838a016109ac565b90965094506040880135915080821115610c70578283fd5b50610c7d888289016109ac565b969995985093965092949392505050565b600080600060408486031215610ca2578283fd5b8335610cad81611262565b9250602084013567ffffffffffffffff80821115610cc9578384fd5b81860187601f820112610cda578485fd5b8035925081831115610cea578485fd5b876020848301011115610cfb578485fd5b949760209095019650909450505050565b60008060408385031215610d1e578182fd5b610d288484610995565b946020939093013593505050565b600060208284031215610d47578081fd5b81356001600160e01b031981168114610af9578182fd5b600060208284031215610d6f578081fd5b5035919050565b600060208284031215610d87578081fd5b5051919050565b81835260006001600160fb1b03831115610da6578081fd5b6020830280836020870137939093016020019283525090919050565b6000815180845260208085019450808401835b83811015610df157815187529582019590820190600101610dd5565b509495945050505050565b6001600160a01b0391909116815260200190565b6001600160a01b03878116825286166020820152604081018590526060810184905260a06080820181905281018290526000828460c084013781830160c090810191909152601f909201601f1916010195945050505050565b6001600160a01b0386168152608060208201819052600090610e8e9083018688610d8e565b8281036040840152610ea1818587610d8e565b83810360609094019390935250815260200195945050505050565b6001600160a01b03929092168252602082015260400190565b600060408252610ee9604083018688610d8e565b8281036020840152610efc818587610d8e565b979650505050505050565b600060408252610f1a6040830185610dc2565b8281036020840152610f2c8185610dc2565b95945050505050565b901515815260200190565b6001600160e01b031991909116815260200190565b60208082526033908201527f427269646765466163746f7279236f6e4552433131353542617463685265636560408201527234bb32b21d1024a72b20a624a22faa27a5a2a760691b606082015260800190565b60208082526029908201527f427269646765466163746f72792377697468647261773a20494e56414c49445f604082015268149150d2541251539560ba1b606082015260800190565b6020808252603a908201527f427269646765466163746f7279236f6e4552433131353542617463685265636560408201527f697665643a20494e56414c49445f41525241595f4c454e475448000000000000606082015260800190565b6020808252602e908201527f427269646765466163746f7279236f6e4552433131353552656365697665643a60408201526d1024a72b20a624a22faa27a5a2a760911b606082015260800190565b6020808252602f908201527f427269646765466163746f7279236f6e4552433131353552656365697665643a60408201526e081253959053125117d05490d7d251608a1b606082015260800190565b60208082526032908201527f5469657265644f776e61626c65236f6e6c794f776e6572546965723a204f574e60408201527145525f544945525f49535f544f4f5f4c4f5760701b606082015260800190565b60208082526034908201527f427269646765466163746f7279236f6e455243313135354261746368526563656040820152731a5d99590e881253959053125117d05490d7d25160621b606082015260800190565b60208082526023908201527f427269646765466163746f7279235f3a20554e535550504f525445445f4d45546040820152621213d160ea1b606082015260800190565b60208082526030908201527f5469657265644f776e61626c65237472616e736665724f776e6572736869703a60408201526f20494e56414c49445f4144445245535360801b606082015260800190565b90815260200190565b918252602082015260400190565b60405181810167ffffffffffffffff8111828210171561125a57600080fd5b604052919050565b6001600160a01b038116811461127757600080fd5b5056fea2646970667358221220c1f4d815de2f059f8850899e4b79a6309ca5f455308df7c687f397937e5dd4ad64736f6c63430006080033";
