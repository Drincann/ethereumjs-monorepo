import { RLP } from '@ethereumjs/rlp'
import { BIGINT_2, bytesToBigInt, validateNoLeadingZeroes } from '@ethereumjs/util'

import { LegacyTx } from './tx.js'

import type { TxOptions } from '../types.js'
import type { TxData, TxValuesArray } from './tx.js'
import type { ValueOf } from '@chainsafe/ssz'
import type { ssz } from '@ethereumjs/util'

export type ReplayableTransactionType = ValueOf<typeof ssz.ReplayableTransaction>
export type LegacyTransactionType = ValueOf<typeof ssz.LegacyTransaction>

/**
 * Instantiate a transaction from a data dictionary.
 *
 * Format: { nonce, gasPrice, gasLimit, to, value, data, v, r, s }
 *
 * Notes:
 * - All parameters are optional and have some basic default values
 */
export function createLegacyTx(txData: TxData, opts: TxOptions = {}) {
  return new LegacyTx(txData, opts)
}

/**
 * Create a transaction from an array of byte encoded values ordered according to the devp2p network encoding - format noted below.
 *
 * Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`
 */
export function createLegacyTxFromBytesArray(values: TxValuesArray, opts: TxOptions = {}) {
  // If length is not 6, it has length 9. If v/r/s are empty Uint8Arrays, it is still an unsigned transaction
  // This happens if you get the RLP data from `raw()`
  if (values.length !== 6 && values.length !== 9) {
    throw new Error(
      'Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).',
    )
  }

  const [nonce, gasPrice, gasLimit, to, value, data, v, r, s] = values

  validateNoLeadingZeroes({ nonce, gasPrice, gasLimit, value, v, r, s })

  return new LegacyTx(
    {
      nonce,
      gasPrice,
      gasLimit,
      to,
      value,
      data,
      v,
      r,
      s,
    },
    opts,
  )
}

/**
 * Instantiate a transaction from a RLP serialized tx.
 *
 * Format: `rlp([nonce, gasPrice, gasLimit, to, value, data,
 * signatureV, signatureR, signatureS])`
 */
export function createLegacyTxFromRLP(serialized: Uint8Array, opts: TxOptions = {}) {
  const values = RLP.decode(serialized)

  if (!Array.isArray(values)) {
    throw new Error('Invalid serialized tx input. Must be array')
  }

  return createLegacyTxFromBytesArray(values as TxValuesArray, opts)
}

export function createLegacyTxFromSszTx(
  sszWrappedTx: ReplayableTransactionType | LegacyTransactionType,
  opts: TxOptions = {},
) {
  const {
    payload: {
      nonce,
      chainId,
      maxFeesPerGas: { regular: gasPrice },
      gas: gasLimit,
      to,
      value,
      input: data,
    },
    signature: { ecdsaSignature },
  } = sszWrappedTx as LegacyTransactionType

  const r = bytesToBigInt(ecdsaSignature.slice(0, 32))
  const s = bytesToBigInt(ecdsaSignature.slice(32, 64))
  const yParity = bytesToBigInt(ecdsaSignature.slice(64))

  let v
  if (chainId !== null && chainId !== undefined) {
    v = yParity + BIGINT_2 * chainId + BigInt(35)
  } else {
    v = yParity + BigInt(27)
  }

  return createLegacyTxFromBytesArray(
    [nonce, gasPrice, gasLimit, to, value, data, v, r, s] as TxValuesArray,
    opts,
  )
}
