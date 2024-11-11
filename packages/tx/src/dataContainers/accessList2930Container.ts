import { RLP } from '@ethereumjs/rlp'
import { Address, bytesToBigInt, toBytes } from '@ethereumjs/util'

import { Feature } from '../dataContainerTypes.js'
import { TransactionType } from '../types.js'
import { AccessLists } from '../util.js'

import type {
  AccessList2930Interface,
  CreateContractInterface,
  DefaultContainerInterface,
  ECDSAMaybeSignedInterface,
  ECDSASignedInterface,
  LegacyGasMarketInterface,
  TxConstructorFields,
  TxContainerMethods,
} from '../dataContainerTypes.js'
import type { AccessListBytes, TxOptions } from '../types.js'

type TxType = TransactionType.AccessListEIP2930

const accessListFeatures = new Set<Feature>([
  Feature.ECDSASignable,
  Feature.LegacyGasMarket,
  Feature.AccessLists,
])

export class AccessList2930Container
  implements
    TxContainerMethods,
    DefaultContainerInterface,
    CreateContractInterface,
    LegacyGasMarketInterface,
    ECDSAMaybeSignedInterface,
    AccessList2930Interface
{
  public type: number = TransactionType.AccessListEIP2930 // Legacy tx type

  // Tx data part (part of the RLP)
  public readonly gasPrice: bigint
  public readonly nonce: bigint
  public readonly gasLimit: bigint
  public readonly value: bigint
  public readonly data: Uint8Array
  public readonly to: Address | null
  public readonly accessList: AccessListBytes
  public readonly chainId: bigint

  // Props only for signed txs
  public readonly v?: bigint
  public readonly r?: bigint
  public readonly s?: bigint

  constructor(txData: TxConstructorFields[TxType], txOptions: TxOptions) {
    const { nonce, gasLimit, to, value, data, v, r, s } = txData

    // Set the tx properties
    const toB = toBytes(to === '' ? '0x' : to)
    this.to = toB.length > 0 ? new Address(toB) : null

    this.nonce = bytesToBigInt(toBytes(nonce))
    this.gasLimit = bytesToBigInt(toBytes(gasLimit))
    this.value = bytesToBigInt(toBytes(value))
    this.data = toBytes(data === '' ? '0x' : data)
    this.gasPrice = bytesToBigInt(toBytes(txData.gasPrice))

    // Set signature values (if the tx is signed)

    const vB = toBytes(v)
    const rB = toBytes(r)
    const sB = toBytes(s)
    this.v = vB.length > 0 ? bytesToBigInt(vB) : undefined
    this.r = rB.length > 0 ? bytesToBigInt(rB) : undefined
    this.s = sB.length > 0 ? bytesToBigInt(sB) : undefined

    const { chainId, accessList } = txData

    // NOTE: previously there was a check against common's chainId, this is not here
    // Common is not available in the tx container
    // Likely, we should now check this chain id when signing the tx (to prevent people signing on the wrong chain)
    this.chainId = bytesToBigInt(toBytes(chainId))

    const accessListData = AccessLists.getAccessListData(accessList ?? [])
    this.accessList = accessListData.accessList
  }

  raw() {
    // TODO
    return [new Uint8Array(), new Uint8Array()]
  }
  serialize() {
    return RLP.encode(this.raw())
  }

  supports(feature: Feature) {
    return accessListFeatures.has(feature)
  }

  toJSON() {
    return {}
  }

  // TODO likely add common here: should check against the chain id in this container to prevent
  // signing against the wrong chain id
  sign(privateKey: Uint8Array): AccessList2930Container & ECDSASignedInterface {
    // TODO
    return this as AccessList2930Container & ECDSASignedInterface // Type return value to have v/r/s set
  }
}