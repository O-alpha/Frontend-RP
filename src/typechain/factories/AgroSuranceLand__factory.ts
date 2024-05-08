/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  AgroSuranceLand,
  AgroSuranceLandInterface,
} from "../AgroSuranceLand";

const _abi = [
  {
    type: "constructor",
    payable: false,
    inputs: [
      {
        type: "string",
        name: "_description",
      },
      {
        type: "string",
        name: "_defaultCropImage",
      },
    ],
  },
  {
    type: "error",
    name: "CannotTransferLand",
    inputs: [],
  },
  {
    type: "error",
    name: "CycleEndTimeLessThanStart",
    inputs: [],
  },
  {
    type: "error",
    name: "CycleNotStartedYet",
    inputs: [],
  },
  {
    type: "error",
    name: "EmptyString",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidCropId",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidLandId",
    inputs: [],
  },
  {
    type: "error",
    name: "LastCycleNotFinished",
    inputs: [],
  },
  {
    type: "error",
    name: "Unauthorized",
    inputs: [],
  },
  {
    type: "event",
    anonymous: false,
    name: "Approval",
    inputs: [
      {
        type: "address",
        name: "owner",
        indexed: true,
      },
      {
        type: "address",
        name: "approved",
        indexed: true,
      },
      {
        type: "uint256",
        name: "tokenId",
        indexed: true,
      },
    ],
  },
  {
    type: "event",
    anonymous: false,
    name: "ApprovalForAll",
    inputs: [
      {
        type: "address",
        name: "owner",
        indexed: true,
      },
      {
        type: "address",
        name: "operator",
        indexed: true,
      },
      {
        type: "bool",
        name: "approved",
        indexed: false,
      },
    ],
  },
  {
    type: "event",
    anonymous: false,
    name: "CropAdded",
    inputs: [
      {
        type: "uint256",
        name: "id",
        indexed: true,
      },
      {
        type: "string",
        name: "name",
        indexed: false,
      },
      {
        type: "string",
        name: "image",
        indexed: false,
      },
    ],
  },
  {
    type: "event",
    anonymous: false,
    name: "CropUpdated",
    inputs: [
      {
        type: "uint256",
        name: "id",
        indexed: true,
      },
      {
        type: "string",
        name: "name",
        indexed: false,
      },
      {
        type: "string",
        name: "image",
        indexed: false,
      },
    ],
  },
  {
    type: "event",
    anonymous: false,
    name: "CycleAdded",
    inputs: [
      {
        type: "address",
        name: "owner",
        indexed: true,
      },
      {
        type: "uint256",
        name: "landId",
        indexed: true,
      },
      {
        type: "uint256",
        name: "cropId",
        indexed: true,
      },
      {
        type: "uint256",
        name: "cycleFrom",
        indexed: false,
      },
      {
        type: "uint256",
        name: "cycleTo",
        indexed: false,
      },
    ],
  },
  {
    type: "event",
    anonymous: false,
    name: "LandAdded",
    inputs: [
      {
        type: "address",
        name: "owner",
        indexed: true,
      },
      {
        type: "uint256",
        name: "landId",
        indexed: true,
      },
      {
        type: "string",
        name: "name",
        indexed: false,
      },
      {
        type: "int32",
        name: "lat",
        indexed: false,
      },
      {
        type: "int32",
        name: "long",
        indexed: false,
      },
      {
        type: "uint256",
        name: "area",
        indexed: false,
      },
    ],
  },
  {
    type: "event",
    anonymous: false,
    name: "OwnershipTransferred",
    inputs: [
      {
        type: "address",
        name: "previousOwner",
        indexed: true,
      },
      {
        type: "address",
        name: "newOwner",
        indexed: true,
      },
    ],
  },
  {
    type: "event",
    anonymous: false,
    name: "Transfer",
    inputs: [
      {
        type: "address",
        name: "from",
        indexed: true,
      },
      {
        type: "address",
        name: "to",
        indexed: true,
      },
      {
        type: "uint256",
        name: "tokenId",
        indexed: true,
      },
    ],
  },
  {
    type: "function",
    name: "COORD_DECIMAL_PLACES",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [],
    outputs: [
      {
        type: "uint8",
      },
    ],
  },
  {
    type: "function",
    name: "addCrop",
    constant: false,
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "string",
        name: "name",
      },
      {
        type: "string",
        name: "image",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "cropId",
      },
    ],
  },
  {
    type: "function",
    name: "addCurrentCycle",
    constant: false,
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "uint256",
        name: "landId",
      },
      {
        type: "uint256",
        name: "cycleCropId",
      },
      {
        type: "uint256",
        name: "cycleFrom",
      },
      {
        type: "uint256",
        name: "cycleTo",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "addLand",
    constant: false,
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "string",
        name: "name",
      },
      {
        type: "int32",
        name: "lat",
      },
      {
        type: "int32",
        name: "long",
      },
      {
        type: "uint256",
        name: "area",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "landId",
      },
    ],
  },
  {
    type: "function",
    name: "approve",
    constant: false,
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "address",
        name: "to",
      },
      {
        type: "uint256",
        name: "tokenId",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "balanceOf",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "address",
        name: "owner",
      },
    ],
    outputs: [
      {
        type: "uint256",
      },
    ],
  },
  {
    type: "function",
    name: "burn",
    constant: false,
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "cropDetails",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "cropId",
      },
      {
        type: "string",
        name: "name",
      },
      {
        type: "string",
        name: "image",
      },
    ],
  },
  {
    type: "function",
    name: "cropExists",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "uint256",
        name: "cropId",
      },
    ],
    outputs: [
      {
        type: "bool",
      },
    ],
  },
  {
    type: "function",
    name: "description",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [],
    outputs: [
      {
        type: "string",
      },
    ],
  },
  {
    type: "function",
    name: "getApproved",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
      },
    ],
    outputs: [
      {
        type: "address",
      },
    ],
  },
  {
    type: "function",
    name: "isApprovedForAll",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "address",
        name: "owner",
      },
      {
        type: "address",
        name: "operator",
      },
    ],
    outputs: [
      {
        type: "bool",
      },
    ],
  },
  {
    type: "function",
    name: "landDetails",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "landId",
      },
      {
        type: "string",
        name: "name",
      },
      {
        type: "uint256",
        name: "area",
      },
      {
        type: "int32",
        name: "lat",
      },
      {
        type: "int32",
        name: "long",
      },
      {
        type: "uint256",
        name: "currentCycleCropId",
      },
      {
        type: "uint256",
        name: "currentCycleFrom",
      },
      {
        type: "uint256",
        name: "currentCycleTo",
      },
      {
        type: "uint256",
        name: "totalCycles",
      },
    ],
  },
  {
    type: "function",
    name: "landHistory",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "uint256",
      },
      {
        type: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "landId",
      },
      {
        type: "uint256",
        name: "historyId",
      },
      {
        type: "uint256",
        name: "cropId",
      },
      {
        type: "uint256",
        name: "from",
      },
      {
        type: "uint256",
        name: "to",
      },
    ],
  },
  {
    type: "function",
    name: "name",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [],
    outputs: [
      {
        type: "string",
      },
    ],
  },
  {
    type: "function",
    name: "owner",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [],
    outputs: [
      {
        type: "address",
      },
    ],
  },
  {
    type: "function",
    name: "ownerOf",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
      },
    ],
    outputs: [
      {
        type: "address",
      },
    ],
  },
  {
    type: "function",
    name: "renounceOwnership",
    constant: false,
    payable: false,
    gas: 29000000,
    inputs: [],
    outputs: [],
  },
  {
    type: "function",
    name: "safeTransferFrom",
    constant: false,
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "address",
        name: "from",
      },
      {
        type: "address",
        name: "to",
      },
      {
        type: "uint256",
        name: "tokenId",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "safeTransferFrom",
    constant: false,
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "address",
        name: "from",
      },
      {
        type: "address",
        name: "to",
      },
      {
        type: "uint256",
        name: "tokenId",
      },
      {
        type: "bytes",
        name: "data",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "setApprovalForAll",
    constant: false,
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "address",
        name: "operator",
      },
      {
        type: "bool",
        name: "approved",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "supportsInterface",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "bytes4",
        name: "interfaceId",
      },
    ],
    outputs: [
      {
        type: "bool",
      },
    ],
  },
  {
    type: "function",
    name: "symbol",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [],
    outputs: [
      {
        type: "string",
      },
    ],
  },
  {
    type: "function",
    name: "tokenByIndex",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "uint256",
        name: "index",
      },
    ],
    outputs: [
      {
        type: "uint256",
      },
    ],
  },
  {
    type: "function",
    name: "tokenOfOwnerByIndex",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "address",
        name: "owner",
      },
      {
        type: "uint256",
        name: "index",
      },
    ],
    outputs: [
      {
        type: "uint256",
      },
    ],
  },
  {
    type: "function",
    name: "tokenURI",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
      },
    ],
    outputs: [
      {
        type: "string",
      },
    ],
  },
  {
    type: "function",
    name: "totalSupply",
    constant: true,
    stateMutability: "view",
    payable: false,
    gas: 29000000,
    inputs: [],
    outputs: [
      {
        type: "uint256",
      },
    ],
  },
  {
    type: "function",
    name: "transferFrom",
    constant: false,
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "address",
        name: "from",
      },
      {
        type: "address",
        name: "to",
      },
      {
        type: "uint256",
        name: "tokenId",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "transferOwnership",
    constant: false,
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "address",
        name: "newOwner",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "updateCrop",
    constant: false,
    payable: false,
    gas: 29000000,
    inputs: [
      {
        type: "uint256",
        name: "cropId",
      },
      {
        type: "string",
        name: "name",
      },
      {
        type: "string",
        name: "image",
      },
    ],
    outputs: [],
  },
] as const;

export class AgroSuranceLand__factory {
  static readonly abi = _abi;
  static createInterface(): AgroSuranceLandInterface {
    return new utils.Interface(_abi as any) as AgroSuranceLandInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AgroSuranceLand {
    return new Contract(
      address,
      _abi as any,
      signerOrProvider
    ) as AgroSuranceLand;
  }
}
