window.BENCHMARK_DATA = {
  "lastUpdate": 1671184433080,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd551ec3fae34518319437023848050b8e8ef7cd",
          "message": "evm: fix 3860 implementation + tests (#2397)\n\n* evm: fix 3860 implementation + tests\r\n\r\n* Adapt original EIP-3860 tests from vm\r\n\r\n* add test for Create2\r\n\r\n* Add test for CREATE\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2022-11-03T12:41:01-04:00",
          "tree_id": "ce3bb5d7e832c8c2d800826777ceb905516b205c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/cd551ec3fae34518319437023848050b8e8ef7cd"
        },
        "date": 1667493816281,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19265,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19298,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18783,
            "range": "±5.51%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19124,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18724,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "83 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d8bbd10847659f885ccf489246b74b92f1c0066",
          "message": "Implement EIP4895: Beacon Chain withdrawals (#2353)\n\n* common: add eip 4895\r\n\r\n* block: implement EIP4895\r\n\r\n* vm: add EIP4895\r\n\r\n* block: eip4895 tests\r\n\r\n* vm: add eip4895 tests\r\n\r\n* block: fix trest\r\n\r\n* vm: fix tests\r\n\r\n* change withdrawal type to object format and add validator index\r\n\r\n* fix vm withdrawal spec\r\n\r\nCo-authored-by: harkamal <gajinder@g11.in>",
          "timestamp": "2022-11-04T02:20:56+05:30",
          "tree_id": "ba26c5d6e0728e5afc4db1fe913fb27bd83af9de",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4d8bbd10847659f885ccf489246b74b92f1c0066"
        },
        "date": 1667508856437,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 9704,
            "range": "±3.74%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 10131,
            "range": "±2.68%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 9628,
            "range": "±5.31%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 9876,
            "range": "±2.66%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 9928,
            "range": "±2.39%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd121bee508d2e8eb18e491f5a97182ab61224d3",
          "message": "client: Fix skeleton reset scenario when head announced before subchain 0 tail (#2408)",
          "timestamp": "2022-11-07T10:41:29+01:00",
          "tree_id": "13d08a625e5931442c76cad7159d4b65146f7bc7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fd121bee508d2e8eb18e491f5a97182ab61224d3"
        },
        "date": 1667814247188,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18970,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19078,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18210,
            "range": "±5.21%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18835,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18614,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d470d336fa2cd606dbac31c4c6f8a6a1981f878",
          "message": "client: Miscellaneous tx related fixes for eth methods  (#2411)\n\n* client: Extend RpcTx type with 1559 fields and make blockOpt optional in estimateGas\r\n\r\n* add optional block opt test\r\n\r\n* bundle validation\r\n\r\n* extract and add test for rpc tx field extenstion\r\n\r\n* Add test coverage\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2022-11-07T13:34:58-05:00",
          "tree_id": "f4ce386560caa137b33d2c6a1c1a080aa40de4a4",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9d470d336fa2cd606dbac31c4c6f8a6a1981f878"
        },
        "date": 1667846294924,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 9771,
            "range": "±3.30%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 10054,
            "range": "±2.20%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 9892,
            "range": "±4.24%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 9951,
            "range": "±2.45%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 9968,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d23fd07290fb3217e3371b0c42425647e28e89c",
          "message": "Add txpool_content rpc method for pending txs fetch (#2410)\n\n* Add txpool_content rpc method for pending txs fetch\r\n\r\n* Fix rpc export\r\n\r\n* Add tests for `txpool_content`\r\n\r\n* address feedback\r\n\r\n* Include vm by default in rpc tests\r\n\r\n* Missed commits from shandong\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2022-11-09T12:05:56-05:00",
          "tree_id": "cd05f026435ca6444d7bc17bf0d52d515be443d1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6d23fd07290fb3217e3371b0c42425647e28e89c"
        },
        "date": 1668014108578,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19146,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18415,
            "range": "±4.90%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19435,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18814,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18368,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "83 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "80117772+rodrigoherrerai@users.noreply.github.com",
            "name": "Rodrigo Herrera Itie",
            "username": "rodrigoherrerai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a300314a5377146f8115684ce5fbf3950e71164",
          "message": "Implementation of 'eth_gasPrice' (#2396)\n\n* support for eth_gasPrice\r\n\r\n* improve description\r\n\r\n* Update eth.ts\r\n\r\n* pr changes\r\n\r\n* update gas price main entry point for pr changes\r\n\r\n* removing tx lookup\r\n\r\n* adding minGasPrice config for 1559 chains\r\n\r\n* Update packages/client/lib/rpc/modules/eth.ts\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2022-11-11T12:49:06+01:00",
          "tree_id": "318e413a4ce57bcc01f034c209d84d5773b8e5bb",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5a300314a5377146f8115684ce5fbf3950e71164"
        },
        "date": 1668167508041,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18174,
            "range": "±4.91%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18556,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17468,
            "range": "±7.28%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18381,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17871,
            "range": "±1.77%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hossam.saraya@gmail.com",
            "name": "dlock",
            "username": "daedlock"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ccb47787b813c41697069b1aa025716372d27155",
          "message": "Change vm.evm.on to vm.evm.events.on (#2417)",
          "timestamp": "2022-11-11T12:46:53-05:00",
          "tree_id": "524d8932146f11b97fd017e4b19d498b6fdf78e2",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ccb47787b813c41697069b1aa025716372d27155"
        },
        "date": 1668188965649,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19433,
            "range": "±2.76%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18610,
            "range": "±5.42%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19863,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19120,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17591,
            "range": "±7.17%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a001b434b722a591d378835fbe3d81d78c04e924",
          "message": "stateManager: add EthersStateManager to exports (#2419)",
          "timestamp": "2022-11-14T13:44:48+01:00",
          "tree_id": "97a2fad3fb4060466630b829c50ec97ad3077877",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a001b434b722a591d378835fbe3d81d78c04e924"
        },
        "date": 1668430105702,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 10612,
            "range": "±2.79%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 10338,
            "range": "±4.73%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 10770,
            "range": "±2.57%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 9981,
            "range": "±6.97%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 10614,
            "range": "±2.75%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43966fc6ca77a92352e95a986d6bf4182783f813",
          "message": "client: Handle genesis and genesis extention properly for skeleton (#2420)",
          "timestamp": "2022-11-14T15:56:18+01:00",
          "tree_id": "84aa63ced90c8fe1391ec3e7b87f0c45b5fabaf5",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/43966fc6ca77a92352e95a986d6bf4182783f813"
        },
        "date": 1668437953498,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15562,
            "range": "±4.29%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16113,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15207,
            "range": "±8.67%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422908",
            "value": 16244,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 15951,
            "range": "±2.26%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fdd4397c91eaa1253d299f6b8b76a4cf861b0b68",
          "message": "client: Fix enode to ip4 and write the same to disk (#2407)\n\n* client: Fix enode to ip4 and write the same to disk\r\n\r\n* fix tests\r\n\r\n* handle test error\r\n\r\n* Add test for ipv6 parsing\r\n\r\n* update url\r\n\r\n* move writing to file to cli\r\n\r\n* Move function placement to make eslint happy\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2022-11-14T22:07:56+05:30",
          "tree_id": "63f1e557a29f250b0f73e32b5259079180fdb219",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fdd4397c91eaa1253d299f6b8b76a4cf861b0b68"
        },
        "date": 1668444075819,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 10450,
            "range": "±3.22%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 10558,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 10504,
            "range": "±2.53%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 10158,
            "range": "±6.85%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 10757,
            "range": "±2.20%",
            "unit": "ops/sec",
            "extra": "82 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "614381a440119b2289c835c3770cb01dee62264f",
          "message": "client: Fix sendTransactions peer loop and enchance txpool logs  (#2412)\n\n* client: Enchance txpool logs with success/failure of add, broadcast, block selection logs\r\n\r\n* Txpool stats calculator on info or debug logging\r\n\r\n* remove console log\r\n\r\n* enable logging for txstats in test spec\r\n\r\n* add test cases for handled errors\r\n\r\n* add testcase for marking errored broadcasts\r\n\r\n* cover pool stats logger\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2022-11-15T09:05:16-05:00",
          "tree_id": "4543cd6b9321b3b01481cd5b542266c8679bc12e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/614381a440119b2289c835c3770cb01dee62264f"
        },
        "date": 1668521311436,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 10462,
            "range": "±4.42%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 10195,
            "range": "±2.58%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 10235,
            "range": "±6.11%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 10728,
            "range": "±2.58%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 10580,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd8c2827eed78c0d9394278552408e3c3a571db8",
          "message": "client: Use unpadded int/bigint to buffer in net protocols (#2409)\n\n* client: Correctly encode 0 in the devp2p protocols\r\n\r\n* lint\r\n\r\n* lint\r\n\r\n* respond with empty buffer than 0\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\n\r\n* fix return type\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\n\r\n* remove bufferlike\r\n\r\n* use unpadded versions\r\n\r\n* add spec test\r\n\r\n* fix typo\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>",
          "timestamp": "2022-11-16T13:02:59+01:00",
          "tree_id": "5df9ff9913ada38f2f072b83095d8edc2d9c887b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fd8c2827eed78c0d9394278552408e3c3a571db8"
        },
        "date": 1668600333247,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19277,
            "range": "±2.59%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18512,
            "range": "±4.53%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19718,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18998,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17100,
            "range": "±9.46%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5274b49e07ced73259617861e5115ddbc188427f",
          "message": "Optimize the fromSource dockerfile package install (#2425)\n\n* Optimize the fromSource dockerfile package install\r\n\r\n* fix the Dockerfile.fromSource",
          "timestamp": "2022-11-16T15:22:43+01:00",
          "tree_id": "dac7fb8f4442b1f0540f465a63560a1b2de4a67f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5274b49e07ced73259617861e5115ddbc188427f"
        },
        "date": 1668608722467,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 17980,
            "range": "±3.93%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17522,
            "range": "±5.75%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18531,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18070,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 16156,
            "range": "±10.29%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a00251d4d4da850a29c4027e91ee5badf0c22df3",
          "message": "client: Implement withdrawals via engine api (#2401)\n\n* client: Implement v2 versions for execution api supporting withdrawals\r\n\r\n* create v2 endpoints and proxy them to main handlers\r\n\r\n* refac withdrawals to have a correct withdrawal object\r\n\r\n* fix lint\r\n\r\n* add v2 versions and withdrawal validator\r\n\r\n* extract out withdrawals as separate class\r\n\r\n* use withdrawal in newpayload\r\n\r\n* fix the v2 binding for fcu\r\n\r\n* add withdrawals to block building\r\n\r\n* add withdrawals to shanghai\r\n\r\n* fully working withdrawals feature\r\n\r\n* add withdrawals data in eth getBlock response\r\n\r\n* check genesis annoucement\r\n\r\n* fix and test empty withdrawals\r\n\r\n* add static helpers for trie roots\r\n\r\n* clean up trie roots\r\n\r\n* fix withdrawals root to match with other clients\r\n\r\n* skeleton improv + withdrawal root check\r\n\r\n* add the failing withdrawal root mismatch testcase\r\n\r\n* fix the stateroot mismatch\r\n\r\n* skip withdrawal reward if 0 on runblock too\r\n\r\n* fix spec\r\n\r\n* restore the buildblock's trieroot method\r\n\r\n* rename gen root methods\r\n\r\n* improve the jsdocs\r\n\r\n* genesis handling at skeleton sethead\r\n\r\n* cleanup skeleton\r\n\r\n* cleanup bigint literal\r\n\r\n* remove extra typecasting\r\n\r\n* add comments for spec vec source\r\n\r\n* withdrawal spec vector in test\r\n\r\n* improve var name\r\n\r\n* refactor withdrawal and enhance spec test\r\n\r\n* add zero amount withdrawal test case for vm block run\r\n\r\n* add spec test for buildblock with withdrawals",
          "timestamp": "2022-11-18T11:16:13+01:00",
          "tree_id": "941db929f0e4dcb72c52d4b036067d4343eaf41b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a00251d4d4da850a29c4027e91ee5badf0c22df3"
        },
        "date": 1668766756155,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14899,
            "range": "±4.03%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15014,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14294,
            "range": "±8.59%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15031,
            "range": "±2.85%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14616,
            "range": "±2.56%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aleksandar.cakalic@gmail.com",
            "name": "Aleksandar Cakalic",
            "username": "Cussone"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "161a4029c2fc24e5d04da6ad3aab4ac3c72af0f8",
          "message": "common: Arbitrum One support (#2426)\n\n* Add `ArbitrumOne` to `enums.ts`\r\n\r\n* Add `ArbitrumOne` check to `static custom` method of `Common` class",
          "timestamp": "2022-11-18T18:21:09+01:00",
          "tree_id": "9ea70e8b577d0b2a9b6d99f94db8c23c7d87fa81",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/161a4029c2fc24e5d04da6ad3aab4ac3c72af0f8"
        },
        "date": 1668792243843,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18926,
            "range": "±3.46%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19065,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18479,
            "range": "±5.47%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18760,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18495,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "83 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33f68c6827e75de3f266199855c34f2c136517e2",
          "message": "common: Parse post-merge hardfork config in parseGethParams and handle post-merge genesis block (#2427)\n\n* correctly set hf order\r\n\r\n* test specs\r\n\r\n* fix the merge hf push condition\r\n\r\n* try placing merge block in better wat\r\n\r\n* fix test spec for kiln\r\n\r\n* alternate fix of skipping only pos validation on genesis\r\n\r\n* move merge validations to non genesis\r\n\r\n* fix unsupported test case\r\n\r\n* correctly set hardfork\r\n\r\n* resolve test genesis poisioning\r\n\r\n* add comment\r\n\r\n* cli arg for mergeforkid placement\r\n\r\n* place merge only after genesis\r\n\r\n* fix tests\r\n\r\n* restore test\r\n\r\n* address another case for merge just post genesis\r\n\r\n* test case for the new edge case\r\n\r\n* add comment",
          "timestamp": "2022-11-22T14:33:46+01:00",
          "tree_id": "5f5c6cc0f865670de619cfc632499d8ea4851776",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/33f68c6827e75de3f266199855c34f2c136517e2"
        },
        "date": 1669124190663,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18151,
            "range": "±4.05%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17505,
            "range": "±5.68%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18045,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15657,
            "range": "±10.73%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18390,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66335769+ScottyPoi@users.noreply.github.com",
            "name": "Scotty",
            "username": "ScottyPoi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "256bdb92f6dd57f6b4e1ab4ca44b25ed37385c3c",
          "message": "EthJS DEBUG variable (#2433)\n\n* EVM: check for 'ethjs' DEVUG variable\r\n\r\n* vm: check for 'ethjs' DEBUG variable\r\n\r\n* devp2p: check for 'ethjs' DEVUG variable\r\n\r\n* statemanager: : check for 'ethjs' DEBUG variable\r\n\r\n* Update test scripts with 'ethjs' DEBUG variable",
          "timestamp": "2022-11-28T12:19:08+01:00",
          "tree_id": "eca08d01dd5ae997b79850a5c1448e0ce03c3c50",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/256bdb92f6dd57f6b4e1ab4ca44b25ed37385c3c"
        },
        "date": 1669634507833,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19329,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18534,
            "range": "±5.12%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19729,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19167,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17261,
            "range": "±8.95%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc4cd91831bbfc145a1e6812a9da836c1eb2ae6a",
          "message": "Fix nonce problem (#2404)\n\n* vm/evm: update nonce before entering execution frame\r\n\r\n* vm/evm: update nonce in evm",
          "timestamp": "2022-12-02T10:11:02-05:00",
          "tree_id": "8f64a405e0eeb77a2ed1491de58fe5830c8a6a05",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/dc4cd91831bbfc145a1e6812a9da836c1eb2ae6a"
        },
        "date": 1669994018827,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19456,
            "range": "±2.93%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19435,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18949,
            "range": "±5.45%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19302,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18864,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "45490452b9709818c343b594b71b835674a2e1a9",
          "message": "evm: optimize memory extensions (MSTORE/MLOAD related ops) (#2405)\n\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2022-12-02T10:59:51-05:00",
          "tree_id": "3422d1ea9f6bd1c714457a4e6a50d5b3407f045d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/45490452b9709818c343b594b71b835674a2e1a9"
        },
        "date": 1669997502465,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14155,
            "range": "±5.85%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 14982,
            "range": "±2.33%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 13902,
            "range": "±8.47%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15561,
            "range": "±2.31%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14619,
            "range": "±2.89%",
            "unit": "ops/sec",
            "extra": "81 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48c3d85c630f20d1f83f2b4c5dfab1a286b8a33f",
          "message": "pre-shanghai: Eof testnet setup (#2316)\n\n* client: Shandong testnet single instance sim run\r\n\r\n* remove extra rebased code\r\n\r\n* reduce diff\r\n\r\n* lint\r\n\r\n* remove feeHistory stub\r\n\r\n* add shandong cleanup comment\r\n\r\n* rename shandong to eof\r\n\r\n* make NETWORK specification mandatory\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2022-12-05T22:53:55+05:30",
          "tree_id": "e2b782799244230320b5b9b925d777689465a822",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/48c3d85c630f20d1f83f2b4c5dfab1a286b8a33f"
        },
        "date": 1670261207334,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18396,
            "range": "±2.28%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17724,
            "range": "±4.43%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18267,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 16183,
            "range": "±10.49%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18671,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6a896bad4abc285fea1ea92f5c0e363c7f45ee6",
          "message": "evm: fix forfeiting refunds/selfdestructs when there is a codestore-out-of-gas error (chainstart/frontier only) (#2439)\n\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-12-06T14:54:25+01:00",
          "tree_id": "d83261f98c0a3d6ec66284fa6373ed5f4154851d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b6a896bad4abc285fea1ea92f5c0e363c7f45ee6"
        },
        "date": 1670335021641,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19500,
            "range": "±2.53%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18586,
            "range": "±4.97%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19660,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19128,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17001,
            "range": "±9.37%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea4288e644059faf109deae150ee68f18056c5e1",
          "message": "Fix logic bug in txPool.validate (#2441)\n\n* Fix logic bug in txPool.add\r\n\r\n* Fix sendRawTransaction test\r\n\r\n* Fix other broken test\r\n\r\n* Fix integration test",
          "timestamp": "2022-12-07T10:21:58+01:00",
          "tree_id": "25e635219765e90fe48092693463ca244349e542",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ea4288e644059faf109deae150ee68f18056c5e1"
        },
        "date": 1670405102127,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16613,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16257,
            "range": "±2.30%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15501,
            "range": "±7.86%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422908",
            "value": 16187,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 15848,
            "range": "±2.31%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim@daubenschuetz.de",
            "name": "Tim Daubenschütz",
            "username": "TimDaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d398cba77d7e5d88566076b58379400c1f0d3b8",
          "message": "In readme, remove references to LevelDB abstraction (#2434)\n\n`LevelDB` abstraction was removed and can now not be imported through @ethereumjs/trie >= 5.0.0 anymore. Hence, for most examples in the readme.md file, we're removing references to a top-level exported `LevelDB` abstraction, and we're replacing it with the generic and in-memory `MapDB` implementation.",
          "timestamp": "2022-12-07T11:00:07+01:00",
          "tree_id": "6c17cd6db670c2bddf4dff98b2e0f637e6c53141",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/0d398cba77d7e5d88566076b58379400c1f0d3b8"
        },
        "date": 1670407770382,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19363,
            "range": "±2.15%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18391,
            "range": "±4.59%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19429,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18880,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17326,
            "range": "±7.80%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f34d2376dc0a8bef096b69e890308428a33297a4",
          "message": "Common custom chain bugs (#2448)\n\n* Fix two edge case bugs",
          "timestamp": "2022-12-13T08:52:12-05:00",
          "tree_id": "18f0b73b684b8dab409c99e1471aa8a3a93bdf51",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f34d2376dc0a8bef096b69e890308428a33297a4"
        },
        "date": 1670939743681,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 9531,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 9421,
            "range": "±4.64%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 9666,
            "range": "±2.70%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 9175,
            "range": "±6.12%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 9872,
            "range": "±2.09%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1bf118ccd9cc48fbbad564a97eda63629f6bd16",
          "message": "Implement `debug_traceTransaction` RPC endpoint (#2444)\n\n* add basic debug_traceTransaction rpc endpoint\r\n\r\n* Add first test\r\n\r\n* WIP tests\r\n\r\n* Add test for simple code execution\r\n\r\n* Add more tests\r\n\r\n* rename test data file\r\n\r\n* add tracer opts validation\r\n\r\n* add structLog interface\r\n\r\n* Add storage to structLogs\r\n\r\n* add error to structLogs\r\n\r\n* Throw on enabling return data opt\r\n\r\n* Update tests\r\n\r\n* Remove invalid test\r\n\r\n* Add tests for other invalid params",
          "timestamp": "2022-12-13T10:27:56-05:00",
          "tree_id": "64eb1b9694f0895a2576edee9600c8bb5f6f60c8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c1bf118ccd9cc48fbbad564a97eda63629f6bd16"
        },
        "date": 1670945446695,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18380,
            "range": "±2.62%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17890,
            "range": "±5.16%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16639,
            "range": "±9.05%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18618,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17729,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e77b0f434661b00c8056b541dcdae636c7f9c42",
          "message": "Exclude sim from client unit tests (#2447)",
          "timestamp": "2022-12-13T21:28:35+05:30",
          "tree_id": "5702d5f60d261e53cf91ebe8961009fb7ce56e1e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7e77b0f434661b00c8056b541dcdae636c7f9c42"
        },
        "date": 1670947272051,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19432,
            "range": "±3.09%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19443,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18995,
            "range": "±4.40%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19158,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18880,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18753754fe905591085caf65f82b812be7146507",
          "message": "common: Implement hardfork by time (#2437)\n\n* common: Implement hardfork by time\r\n\r\n* fix the interface and add pass timestamp param\r\n\r\n* fix eval\r\n\r\n* fixes\r\n\r\n* fix next nextHardforkBlock\r\n\r\n* fix next hf\r\n\r\n* fix shanghai time\r\n\r\n* fix hf cond\r\n\r\n* handle edgecase\r\n\r\n* add some permuation combinations for two timestamp based hardforks\r\n\r\n* fix blockchain checkAndTransition hardfork\r\n\r\n* remove null/undefined hardforks from geth genesis while parsing\r\n\r\n* address feedback\r\n\r\n* incorp feedback\r\n\r\n* improve wording\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\n\r\n* Rename unofficial hardforks\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2022-12-14T10:51:35-05:00",
          "tree_id": "2a9cae3fa394c29795de79cf09e595bbd51c9530",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/18753754fe905591085caf65f82b812be7146507"
        },
        "date": 1671033252815,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18501,
            "range": "±4.05%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18862,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17711,
            "range": "±7.79%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18623,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18364,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zyx1993@126.com",
            "name": "Jowie",
            "username": "JowieXiang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d84b87787333c6306862cb2990525d87ce89039",
          "message": "Add eth_getTransactionByBlockHashAndIndex RPC Endpoint (#2443)\n\n* getTransactionByBlockHashAndIndex\n\n* add tests\n\n* fix only\n\n* Remove commented code\n\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2022-12-14T12:15:11-05:00",
          "tree_id": "94f31bbe5f6e3528419ca59f4b528e8e9ddecef1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9d84b87787333c6306862cb2990525d87ce89039"
        },
        "date": 1671038271398,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19232,
            "range": "±4.25%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18200,
            "range": "±5.72%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19623,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18910,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 16965,
            "range": "±8.83%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "696b36fe9091cd67f3e0a70bc696e41bd16e57a2",
          "message": "New December Releases (#2445)\n\n* Added CHANGELOG entry, bumped version number, updated upstream dependency versions, rebuild docs, some withdrawal module code docs (Util v8.0.3)\r\n\r\n* Added CHANGELOG entry, bumped version number, updated upstream dependency versions, rebuild docs (Common v3.0.2)\r\n\r\n* Added CHANGELOG entry, bumped version number, updated upstream dependency versions, rebuild docs (Trie v5.0.2)\r\n\r\n* Added CHANGELOG entry, bumped version number, updated upstream dependency versions, rebuild docs (Tx v4.0.2)\r\n\r\n* Added CHANGELOG entry, bumped version number, updated upstream dependency versions, rebuild docs (Block v4.1.0)\r\n\r\n* Added withdrawal code example to Block README\r\n\r\n* Added CHANGELOG entry, bumped version number, updated upstream dependency versions, rebuild docs (StateManager v1.0.2)\r\n\r\n* Added CHANGELOG entry, bumped version number, updated upstream dependency versions, rebuild docs (Devp2p v5.0.2)\r\n\r\n* Added CHANGELOG entry, bumped version number, updated upstream dependency versions, rebuild docs (Ethash v2.0.2)\r\n\r\n* Added CHANGELOG entry, bumped version number, updated upstream dependency versions, rebuild docs (Blockchain v6.1.0)\r\n\r\n* Added CHANGELOG entry, bumped version number, updated upstream dependency versions, rebuild docs (EVM v1.2.3)\r\n\r\n* Added CHANGELOG entry, bumped version number, updated upstream dependency versions, rebuild docs (VM v6.3.0)\r\n\r\n* Client -> Release: Bumped version to v0.6.6, added CHANGELOG entry\r\n\r\n* Rebuild package-lock.json\r\n\r\n* Release updates (removed sharding and EOF internal HFs, CHANGELOG updates (in particular Hardfork-By-Time addition))\r\n\r\n* Remove extraneous comment\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2022-12-15T16:55:46+01:00",
          "tree_id": "54af64530cb76379ec4c18aee1c3e0b85176a38f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/696b36fe9091cd67f3e0a70bc696e41bd16e57a2"
        },
        "date": 1671119937140,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14862,
            "range": "±3.70%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 14861,
            "range": "±4.73%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14035,
            "range": "±8.42%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15440,
            "range": "±2.16%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14850,
            "range": "±2.57%",
            "unit": "ops/sec",
            "extra": "82 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47403fc028e1098bd625ff32ee3b5441481cdfbf",
          "message": "Fix EVM test scripts (#2451)\n\n* Fix coverage test script\r\n\r\n* Fix tests\r\n\r\n* Update tests",
          "timestamp": "2022-12-16T10:51:10+01:00",
          "tree_id": "5b84d6ec2a001b95514d5ba854033f504c0d43c9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/47403fc028e1098bd625ff32ee3b5441481cdfbf"
        },
        "date": 1671184432453,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19545,
            "range": "±2.45%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18885,
            "range": "±4.64%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19861,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19128,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17024,
            "range": "±8.37%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      }
    ]
  }
}