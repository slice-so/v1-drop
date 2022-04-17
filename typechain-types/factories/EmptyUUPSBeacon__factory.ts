/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EmptyUUPSBeacon,
  EmptyUUPSBeaconInterface,
} from "../EmptyUUPSBeacon";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementationAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b5060805161129e61004c60003960008181610159015281816101a201528181610242015281816102820152610316015261129e6000f3fe6080604052600436106100705760003560e01c8063715018a61161004e578063715018a6146100d25780638da5cb5b146100e7578063c4d66de81461010f578063f2fde38b1461012f57600080fd5b80633659cfe6146100755780634f1ef2861461009757806352d1902d146100aa575b600080fd5b34801561008157600080fd5b50610095610090366004610a59565b61014f565b005b6100956100a5366004610a8a565b610238565b3480156100b657600080fd5b506100bf610309565b6040519081526020015b60405180910390f35b3480156100de57600080fd5b506100956103bd565b3480156100f357600080fd5b506097546040516001600160a01b0390911681526020016100c9565b34801561011b57600080fd5b5061009561012a366004610a59565b6103f3565b34801561013b57600080fd5b5061009561014a366004610a59565b61050e565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036101a05760405162461bcd60e51b815260040161019790610b4c565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166101ea60008051602062001222833981519152546001600160a01b031690565b6001600160a01b0316146102105760405162461bcd60e51b815260040161019790610b98565b610219816105a6565b60408051600080825260208201909252610235918391906105d0565b50565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036102805760405162461bcd60e51b815260040161019790610b4c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166102ca60008051602062001222833981519152546001600160a01b031690565b6001600160a01b0316146102f05760405162461bcd60e51b815260040161019790610b98565b6102f9826105a6565b610305828260016105d0565b5050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103a95760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610197565b506000805160206200122283398151915290565b6097546001600160a01b031633146103e75760405162461bcd60e51b815260040161019790610be4565b6103f16000610741565b565b600054610100900460ff1661040e5760005460ff1615610412565b303b155b6104755760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610197565b600054610100900460ff16158015610497576000805461ffff19166101011790555b61049f610793565b816040516104ac90610a2f565b6001600160a01b039091168152602001604051809103906000f0801580156104d8573d6000803e3d6000fd5b5060c980546001600160a01b0319166001600160a01b03929092169190911790558015610305576000805461ff00191690555050565b6097546001600160a01b031633146105385760405162461bcd60e51b815260040161019790610be4565b6001600160a01b03811661059d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610197565b61023581610741565b6097546001600160a01b031633146102355760405162461bcd60e51b815260040161019790610be4565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561060857610603836107c2565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610662575060408051601f3d908101601f1916820190925261065f91810190610c19565b60015b6106c55760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608401610197565b6000805160206200122283398151915281146107355760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608401610197565b5061060383838361085f565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166107ba5760405162461bcd60e51b815260040161019790610c32565b6103f161088a565b6001600160a01b0381163b61082f5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610197565b6000805160206200122283398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b610868836108ba565b6000825111806108755750805b156106035761088483836108fa565b50505050565b600054610100900460ff166108b15760405162461bcd60e51b815260040161019790610c32565b6103f133610741565b6108c3816107c2565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b6109625760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610197565b600080846001600160a01b03168460405161097d9190610ca9565b600060405180830381855af49150503d80600081146109b8576040519150601f19603f3d011682016040523d82523d6000602084013e6109bd565b606091505b50915091506109e6828260405180606001604052806027815260200162001242602791396109ef565b95945050505050565b606083156109fe575081610a28565b825115610a0e5782518084602001fd5b8160405162461bcd60e51b81526004016101979190610cc5565b9392505050565b6105298062000cf983390190565b80356001600160a01b0381168114610a5457600080fd5b919050565b600060208284031215610a6b57600080fd5b610a2882610a3d565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215610a9d57600080fd5b610aa683610a3d565b9150602083013567ffffffffffffffff80821115610ac357600080fd5b818501915085601f830112610ad757600080fd5b813581811115610ae957610ae9610a74565b604051601f8201601f19908116603f01168101908382118183101715610b1157610b11610a74565b81604052828152886020848701011115610b2a57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060208284031215610c2b57600080fd5b5051919050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60005b83811015610c98578181015183820152602001610c80565b838111156108845750506000910152565b60008251610cbb818460208701610c7d565b9190910192915050565b6020815260008251806020840152610ce4816040850160208701610c7d565b601f01601f1916919091016040019291505056fe608060405234801561001057600080fd5b5060405161052938038061052983398101604081905261002f91610151565b61003833610047565b61004181610097565b50610181565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6100aa8161014260201b61020a1760201c565b6101205760405162461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60448201527f6e206973206e6f74206120636f6e747261637400000000000000000000000000606482015260840160405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03163b151590565b60006020828403121561016357600080fd5b81516001600160a01b038116811461017a57600080fd5b9392505050565b610399806101906000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633659cfe61461005c5780635c60da1b14610071578063715018a61461009a5780638da5cb5b146100a2578063f2fde38b146100b3575b600080fd5b61006f61006a3660046102fe565b6100c6565b005b6001546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b61006f610139565b6000546001600160a01b031661007e565b61006f6100c13660046102fe565b61016f565b6000546001600160a01b031633146100f95760405162461bcd60e51b81526004016100f09061032e565b60405180910390fd5b61010281610219565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6000546001600160a01b031633146101635760405162461bcd60e51b81526004016100f09061032e565b61016d60006102ae565b565b6000546001600160a01b031633146101995760405162461bcd60e51b81526004016100f09061032e565b6001600160a01b0381166101fe5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100f0565b610207816102ae565b50565b6001600160a01b03163b151590565b6001600160a01b0381163b61028c5760405162461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f6044820152721b881a5cc81b9bdd08184818dbdb9d1c9858dd606a1b60648201526084016100f0565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561031057600080fd5b81356001600160a01b038116811461032757600080fd5b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea26469706673582212208123a6d169a2deb2adf0c6aaaf1a96921c0bb8e1d853e3531dc6f43eed4c873c64736f6c634300080d0033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212205f2f391b0ab8b99b74c583e796a9714b6cf89ad524a50da024685ab71e87d6fe64736f6c634300080d0033";

type EmptyUUPSBeaconConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EmptyUUPSBeaconConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EmptyUUPSBeacon__factory extends ContractFactory {
  constructor(...args: EmptyUUPSBeaconConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "EmptyUUPSBeacon";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EmptyUUPSBeacon> {
    return super.deploy(overrides || {}) as Promise<EmptyUUPSBeacon>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EmptyUUPSBeacon {
    return super.attach(address) as EmptyUUPSBeacon;
  }
  connect(signer: Signer): EmptyUUPSBeacon__factory {
    return super.connect(signer) as EmptyUUPSBeacon__factory;
  }
  static readonly contractName: "EmptyUUPSBeacon";
  public readonly contractName: "EmptyUUPSBeacon";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EmptyUUPSBeaconInterface {
    return new utils.Interface(_abi) as EmptyUUPSBeaconInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EmptyUUPSBeacon {
    return new Contract(address, _abi, signerOrProvider) as EmptyUUPSBeacon;
  }
}