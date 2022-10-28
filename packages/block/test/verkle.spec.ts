import { Chain, Common, Hardfork } from '@ethereumjs/common'
import * as tape from 'tape'

import { Block } from '../src'

import * as verkleBlockJSON from './testdata/verkleBlock.json'

tape('[VerkleBlock]: Verkle Block Functionality (Fake-EIP-999001)', function (t) {
  t.test('should test block initialization', function (st) {
    const common = new Common({ chain: Chain.Mainnet, hardfork: Hardfork.London, eips: [999001] })

    const block = Block.fromBlockData(verkleBlockJSON, { common })

    const key = '0x695921dca3b16c5cc850e94cdd63f573c467669e89cec88935d03474d6bdf901'
    const value = '0xe703c84e676dc11b000000000000000000000000000000000000000000000000'
    st.equal(block.header.verklePreState![key], value, 'should read in the verkle state')

    const proofStart = '0x000000000600000008'
    st.equal(block.header.verkleProof!.slice(0, 20), proofStart, 'should read in the verkle proof')
    st.end()
  })
})
