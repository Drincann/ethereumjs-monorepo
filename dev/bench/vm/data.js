window.BENCHMARK_DATA = {
  "lastUpdate": 1721979267866,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
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
          "id": "ea4bc06eb54b371b600c940ca1471c0249c1e94b",
          "message": "Block: replace static constructors (#3489)\n\n* Block: rewrite static constructors as external functions\r\n\r\n* Block: rewrite  \"TrieRoot\" static methods to external functions\r\n\r\n* Block: remove static methods from Block class\r\n\r\n* Block: correct function name\r\n\r\n* Block: switch static methods for new functions\r\n\r\n* Blockchain: switch use of Block static methods to new functions\r\n\r\n* TX:  switch use of Block static methods to new functions\r\n\r\n* Common:  switch use of Block static methods to new functions\r\n\r\n* devp2p:  switch use of Block static methods to new functions\r\n\r\n* ethash:  switch use of Block static methods to new functions\r\n\r\n* statemanager:  switch use of Block static methods to new functions\r\n\r\n* VM:  switch use of Block static methods to new functions\r\n\r\n* client: replace Block static methods with new functions\r\n\r\n* block: export helper functions\r\n\r\n* VM: fix imports\r\n\r\n* fix imports\r\n\r\n* import helpers from util\r\n\r\n* rename blockFrom... to createBlockFrom...\r\n\r\n* fix import\r\n\r\n* Block: rename blockConstructor.ts to constructors.ts\r\n\r\n* Fix remaining client tests\r\n\r\n* Add central Block class TSDoc overview with a list with the linked constructor methods available\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2024-07-12T10:37:54+02:00",
          "tree_id": "7e8f692e4a766955b0c4aaff8b2543b86154c2d7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ea4bc06eb54b371b600c940ca1471c0249c1e94b"
        },
        "date": 1720773631399,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38604,
            "range": "±2.21%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36314,
            "range": "±4.28%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37645,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36761,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 36031,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "89 samples"
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
          "id": "645cd9124878f6dbdbddb9c0e42f852ffb7c398c",
          "message": "Monorepo: Set sideEffects to false for all Packages (#3497)\n\n* Add sideEffects set to false to first package (RLP)\r\n\r\n* Activate sideEffects set to false for all libraries (except client)",
          "timestamp": "2024-07-12T08:59:06-04:00",
          "tree_id": "f0d4af78a60ed6dea7d5e4b674f9bbe6225b8e34",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/645cd9124878f6dbdbddb9c0e42f852ffb7c398c"
        },
        "date": 1720789306294,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38679,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36820,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37538,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36799,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35960,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "87 samples"
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
          "id": "94d02e6490a68a86e6576c5ba501e1fe78be2f08",
          "message": "Fix Prague test runner (#3498)\n\n* prague: swap 3074 for 7702 eip\r\n\r\n* vm: requests: ensure system address nonce does not get updated\r\n\r\n* vm: state runner: fix some 7702 tests\r\n\r\n* vm: state: fix all 7702 state tests",
          "timestamp": "2024-07-12T14:22:40-04:00",
          "tree_id": "599017879d80f46882d30a5045d680c7cdf01269",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/94d02e6490a68a86e6576c5ba501e1fe78be2f08"
        },
        "date": 1720808717529,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 39021,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36788,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37744,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36973,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 36002,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "86 samples"
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
          "id": "ef209306672e3d6bafbd3d21bf4a5b29eebdf84e",
          "message": "EVM/Common: SimpleStateManager (#3482)\n\n* Add SimpleStateManager implementation\r\n\r\n* Common SimpleStateManager fixes, add explicit ethereum-cryptography dependency (already in through Util dependency)\r\n\r\n* Rebuild package-lock.json\r\n\r\n* Integrate SimpleStateManager into existing checkpointing tests\r\n\r\n* Integrate into EVM, remove stateManager dependency\r\n\r\n* Rebuild packack-lock.json\r\n\r\n* Move OriginalStorageCache class to Common, deprecate old location\r\n\r\n* Use full OriginalStorageCache implementation in SimpleStateManager\r\n\r\n* Add some docs\r\n\r\n* Rename topA, topC, topS to something more expressive, make protected\r\n\r\n* Rename add() -> checkpointSync(), make protected\r\n\r\n* More elegant commit() implementation\r\n\r\n* Add flexible keccak256\r\n\r\n* Minor\r\n\r\n* Update packages/common/src/state/simple.ts\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\n\r\n* move simple to stateManager\r\n\r\n* add simple example\r\n\r\n* lint\r\n\r\n* Revert bundler config changes\r\n\r\n* update docs\r\n\r\n* address feedback\r\n\r\n* address feedback\r\n\r\n---------\r\n\r\nCo-authored-by: Scorbajio <indigophi@protonmail.com>\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2024-07-12T21:30:42+02:00",
          "tree_id": "937d07adc68cad377b02f5c60c59a4de7700bf81",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ef209306672e3d6bafbd3d21bf4a5b29eebdf84e"
        },
        "date": 1720812798900,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38255,
            "range": "±2.04%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36725,
            "range": "±2.24%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 36006,
            "range": "±2.33%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36476,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 34638,
            "range": "±2.61%",
            "unit": "ops/sec",
            "extra": "88 samples"
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
          "id": "80434b7d46e4f6630756ee5f18acae9f306c478e",
          "message": "Blockchain: replace static constructors (#3491)\n\n* blockchain: move static methods to external functions\r\n\r\n* monorepo: switch static Blockchain methods for functions\r\n\r\n* fix import\r\n\r\n* update in example\r\n\r\n* update block constructor\r\n\r\n* lint fix\r\n\r\n* blockchain: move constructor functions to 'constructors.ts'",
          "timestamp": "2024-07-12T22:07:06+02:00",
          "tree_id": "09ae83558c92e66806573ec1b6f386b2e37d0fb9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/80434b7d46e4f6630756ee5f18acae9f306c478e"
        },
        "date": 1720814991256,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38566,
            "range": "±2.09%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 35925,
            "range": "±4.18%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37137,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36128,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35462,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "89 samples"
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
          "id": "e44122ab2cb3680bec335ae6e8313df624193fec",
          "message": "RPC: implement eth_getBlockReceipts (#3499)\n\n* RPC: implement eth_getBlockReceipts\r\n\r\n* RPC: test eth_getBlockReceipts\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2024-07-12T22:34:14+02:00",
          "tree_id": "9bd0cabe4991e9679494501cfa1fe8c1feec006e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e44122ab2cb3680bec335ae6e8313df624193fec"
        },
        "date": 1720816606442,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38438,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36546,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37277,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36667,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35676,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "89 samples"
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
          "id": "c4bb9794665e22664b27ac02a268917a7b65aea7",
          "message": "Common: replace static methods (#3502)\n\n* Common: extract static constructors\r\n\r\n* Common: extract static methods\r\n\r\n* Common: export from constructors.ts\r\n\r\n* Common: remove methods from common class\r\n\r\n* update downstream use of methods",
          "timestamp": "2024-07-13T00:02:24+02:00",
          "tree_id": "a6f5a08f57bd5708772e9878ec1e5dddd12f2c8c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c4bb9794665e22664b27ac02a268917a7b65aea7"
        },
        "date": 1720821898499,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38801,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36738,
            "range": "±2.95%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37293,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36642,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422910",
            "value": 36005,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "89 samples"
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
          "id": "303b045657c589f00e46009aac9262302a36d3c2",
          "message": "Client: fix more hive RPC-Compat tests (#3503)\n\n* client: pass block to eth_call for block inspection data (base fee / blockhash)\r\n\r\n* client: ensure \"input\" param is handled on RPC correctly\r\n\r\n* client: add getTransactionByBlockNumberAndIndex",
          "timestamp": "2024-07-15T10:04:50+02:00",
          "tree_id": "52add95a8bd3ece3f18e194f84e69d186da5b908",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/303b045657c589f00e46009aac9262302a36d3c2"
        },
        "date": 1721030855465,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 37422,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36559,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 35019,
            "range": "±4.34%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 35730,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35232,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "91 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d8ad713a0c7c082b1c399ca570cf639dcc9fc2d",
          "message": "common: move description string from being an object field to a comment (#3500)\n\n* common: move description string from being an object field to a comment\r\n\r\n* Remove ParamDict type\r\n\r\n* Update type and fix test\r\n\r\n* vm: remove old EIP-2935 config\r\n\r\n---------\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>",
          "timestamp": "2024-07-15T21:48:07+02:00",
          "tree_id": "ed72036d2fee417d865c32ee6287543e32a4d704",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4d8ad713a0c7c082b1c399ca570cf639dcc9fc2d"
        },
        "date": 1721073105433,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 37856,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36837,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 35559,
            "range": "±4.33%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36197,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35151,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "88 samples"
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
          "id": "80fcde6449b491772bb915a5341fce5f816c6345",
          "message": "Common: allow overriding params (#3506)\n\n* common: expand custom chain type to support param overrides\r\n\r\n* vm: update 2935 test to override history address param\r\n\r\n* common: update types\r\n\r\n* common: correctly build params cache with all available topics\r\n\r\n* common: do not duplicate types\r\n\r\n* common: remove unused params\r\n\r\n* common: add override param test",
          "timestamp": "2024-07-15T22:55:01+02:00",
          "tree_id": "dbc3c33311b73f55a35b59c9191b9754a91ee4dd",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/80fcde6449b491772bb915a5341fce5f816c6345"
        },
        "date": 1721077056736,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 37836,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 35728,
            "range": "±3.57%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 36525,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 35576,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 34779,
            "range": "±2.18%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d83e3bc4608ba62d9f1a118a6191c7dd340bb06",
          "message": "refactor: restrict PrefixedHexString types (#3510)\n\n* refactor: restrict PrefixedHexString types\r\n\r\n* block: remove null from comments\r\n\r\n* client: minor type fixes",
          "timestamp": "2024-07-17T09:43:29+02:00",
          "tree_id": "49ff99f2ef66c2886c8b6173ba047d534d2551f3",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6d83e3bc4608ba62d9f1a118a6191c7dd340bb06"
        },
        "date": 1721202491476,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38460,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36653,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37218,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36601,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35727,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "89 samples"
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
          "id": "03fa9124d59eed777ee7c57448d0593e088a9e46",
          "message": "Blockchain: More Modern and Flexible Consensus Layout / Tree Shaking Optimization (#3504)\n\n* Switch to a more flexible Blockchain consensusDict options structure allowing to pass in different consensus objects\r\n\r\n* Remove misplaced (non consensus checkand useless (already checked in block header) difficulty equals 0 check from CasperConsensus\r\n\r\n* Shift to a new consensus semantics adhering to the fact that *consensus* and *consensus validation* is basically the same, allowing for more flexible instantiation and optional consensus object usage\r\n\r\n* Remove redundant validateConsensus flag, fix block validation, clique and custom consensus tests\r\n\r\n* Readd validateConsensus flag (default: true) to allow for more fine-grained settings to use the mechanism (e.g. Clique) but skip the respective validation\r\n\r\n* Find a middle ground between convenience (allow mainnet default blockchain without need for ethash passing in) and consensus availability validation (now in the validate() call)\r\n\r\n* Add clique example\r\n\r\n* Client fixes\r\n\r\n* Fix VM test\r\n\r\n* Minor\r\n\r\n* Remove Ethash dependency from Blockchain, adjust EthashConsensus ethash object integration\r\n\r\n* Re-add CasperConsensus exports\r\n\r\n* Rebuild package-lock.json\r\n\r\n* EtashConsensus fix\r\n\r\n* Fixes\r\n\r\n* Fix client CLI tests\r\n\r\n* Cleaner consensus check on validate call\r\n\r\n* More consistent check for consensus object, re-add test for custom consensus transition\r\n\r\n* Re-add difficulty check for PoS, re-activate removed test",
          "timestamp": "2024-07-17T11:15:00+02:00",
          "tree_id": "e3552fa971ce5f51cf15720f0718d4d18a3a5c84",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/03fa9124d59eed777ee7c57448d0593e088a9e46"
        },
        "date": 1721207854153,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 37669,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 37387,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37213,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422908",
            "value": 34446,
            "range": "±4.23%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35618,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "89 samples"
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
          "id": "41931d6d737f83c107a9927fbc85dc820cf8f0db",
          "message": "Ensure EthJS and Grandine talk (#3511)\n\n* jwt-simple: ensure unpadded payloads are accepted\r\n\r\n* jwt-simple: ensure encoded jwts are also unpadded",
          "timestamp": "2024-07-17T13:16:25+02:00",
          "tree_id": "a03bd62fe8c3e3d9f88b499251a2479978c3d13f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/41931d6d737f83c107a9927fbc85dc820cf8f0db"
        },
        "date": 1721215140880,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38499,
            "range": "±2.32%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36951,
            "range": "±2.47%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37526,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36547,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35429,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "89 samples"
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
          "id": "df31a69f96c6ec93dcf417f046de0da936046dba",
          "message": "Common: Simplify EIP and Hardfork Config Structure (#3512)\n\n* Remove comment, url, status from hardfork and EIP configs (moved to code docs)\r\n\r\n* Minor",
          "timestamp": "2024-07-17T14:43:23+02:00",
          "tree_id": "5f1550e2789a4bf6e93e785c1d98ea4ce86194c4",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/df31a69f96c6ec93dcf417f046de0da936046dba"
        },
        "date": 1721220383054,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 37837,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36184,
            "range": "±2.42%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 36676,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36144,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422910",
            "value": 33516,
            "range": "±4.84%",
            "unit": "ops/sec",
            "extra": "85 samples"
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
          "id": "a9d4f0df86e9f49d87230371360a7fb1fa5a6cf1",
          "message": "Tx: remove static TransactionFactory methods (#3514)\n\n* tx: remove TransactionFactory\r\n\r\n* tx: explicitly export methods\r\n\r\n* block: fix build\r\n\r\n* vm: fix tests\r\n\r\n* client: fix build / tests\r\n\r\n* apply changes to tests / examples\r\n\r\n* lint block package\r\n\r\n---------\r\n\r\nCo-authored-by: ScottyPoi <scott.simpson@ethereum.org>",
          "timestamp": "2024-07-18T09:07:19+02:00",
          "tree_id": "f3bc7d850233424a59adcb6a5c2e711562c834d3",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a9d4f0df86e9f49d87230371360a7fb1fa5a6cf1"
        },
        "date": 1721286602492,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 37606,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 37098,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 36993,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36195,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 33164,
            "range": "±4.92%",
            "unit": "ops/sec",
            "extra": "81 samples"
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
          "id": "f325b62456592005d7ac9f5ae80e15026a66d02f",
          "message": "Trie: replace static methods (#3515)\n\n* Trie: extract static methods\r\n\r\n* update downstream\r\n\r\n* delete trie.create\r\n\r\n* trie: update test\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2024-07-18T09:56:45+02:00",
          "tree_id": "8ca93dce6d0c76112284c33e1bcce8f7c2ef1587",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f325b62456592005d7ac9f5ae80e15026a66d02f"
        },
        "date": 1721289562794,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38000,
            "range": "±2.70%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 37663,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37381,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36469,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422910",
            "value": 32981,
            "range": "±5.33%",
            "unit": "ops/sec",
            "extra": "83 samples"
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
          "id": "10e74b9289b15f5348fa8a8eef6eb8cc113b1fa9",
          "message": "EVM: replace static constructor (#3516)\n\n* EVM: replace static constructor\r\n\r\n* update downstream\r\n\r\n* update in tests\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2024-07-18T10:17:01+02:00",
          "tree_id": "a3f8c2e407c7902ef76159e06ea544c1c6116596",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/10e74b9289b15f5348fa8a8eef6eb8cc113b1fa9"
        },
        "date": 1721290775313,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38006,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36118,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 36476,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36222,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35214,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "89 samples"
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
          "id": "3bd1847c0900d765419a4ab3dd9a7774a52783d2",
          "message": "Common/Monorepo: Remove NetworkId (#3513)\n\n* Remove networkId in Common\r\n\r\n* Killing off networkId in everything except client and devp2p\r\n\r\n* Fully remove from devp2p and client\r\n\r\n* docs: adjust readme\r\n\r\n* Update packages/client/bin/cli.ts\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\n\r\n* Update packages/client/bin/cli.ts\r\n\r\nCo-authored-by: Scotty <66335769+ScottyPoi@users.noreply.github.com>\r\n\r\n---------\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\nCo-authored-by: Scotty <66335769+ScottyPoi@users.noreply.github.com>",
          "timestamp": "2024-07-18T10:37:30+02:00",
          "tree_id": "a799350e869ccc1e186ad846b6f2968c1cc52244",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3bd1847c0900d765419a4ab3dd9a7774a52783d2"
        },
        "date": 1721292006597,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 37556,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36128,
            "range": "±3.21%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 36565,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 35848,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35162,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "88 samples"
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
          "id": "3abbcd070b020fa6ea842f6e8ca3cde7d4499acd",
          "message": "Common: Remove HF names from Params Dict (#3517)\n\n* Remove hardfork names from hardfork params dict\n\n* Merge branch 'master' into common-remove-hardfork-names\n\n* Small fix",
          "timestamp": "2024-07-18T06:25:27-04:00",
          "tree_id": "96697fe4bff5dd8c1fbac2eacb2693326b931d28",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3abbcd070b020fa6ea842f6e8ca3cde7d4499acd"
        },
        "date": 1721298484004,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38416,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36082,
            "range": "±3.48%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37428,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36622,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35797,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "89 samples"
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
          "id": "d7c26198e7967c6303b5b65988979a5461a6223b",
          "message": "Apply leaf marker on all touched values (#3520)\n\n* Apply leaf marker to touched values\r\n\r\n* Add test for leaf marker",
          "timestamp": "2024-07-18T21:37:36+02:00",
          "tree_id": "49155afc44264f9ccdbf73577ae531a15a023475",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d7c26198e7967c6303b5b65988979a5461a6223b"
        },
        "date": 1721331614335,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38440,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36338,
            "range": "±3.42%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37102,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36298,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35774,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "90 samples"
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
          "id": "b543d2fefa97c70fc0b5b3b9ead29734346a2503",
          "message": "Switch `js-sdsl` to `js-sdsl/orderedMap` sub package (#3528)\n\n* Switch js-sdsl to isolated package\r\n\r\n* lint",
          "timestamp": "2024-07-22T14:38:04+02:00",
          "tree_id": "febf269542f44854d30c5ff7c182a7f6ab175297",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b543d2fefa97c70fc0b5b3b9ead29734346a2503"
        },
        "date": 1721652335277,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38699,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 37062,
            "range": "±2.77%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 36820,
            "range": "±2.69%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36655,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 36052,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "88 samples"
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
          "id": "fb506280ff40b11d526f9429356609de16554d19",
          "message": " VM: runTx(), runBlock(), buildBlock() Standalone Methods (#3530)\n\n* Move over runTx()\r\n\r\n* runTx() test and upstream usage fixes\r\n\r\n* client/test: fix import\r\n\r\n* vm: add original runTx docs to runTx\r\n\r\n* vm: unbind runBlock\r\n\r\n* vm: export runBlock\r\n\r\n* unbind runBlock in tests and client\r\n\r\n* vm/client: unbind buildBlock\r\n\r\n* vm: standalone emitEVMProfile\r\n\r\n* vm: fix tests\r\n\r\n* client: fix tests\r\n\r\n* client: fix docker build\r\n\r\n---------\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>",
          "timestamp": "2024-07-23T09:54:17+02:00",
          "tree_id": "7f9cd3dee1943e50eca014641dc82cca2a3ba30f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fb506280ff40b11d526f9429356609de16554d19"
        },
        "date": 1721721534169,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38883,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36623,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37845,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 37142,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 36031,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "89 samples"
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
          "id": "0e18cb29cf3f72d192c4a3b2502aa392d7ff58a4",
          "message": "util: Replace account static constructors (#3524)\n\n* Account: move static constructors to functions\r\n\r\n* update downstream\r\n\r\n* update examples\r\n\r\n* util: account constructors: use naming conventions\r\n\r\n---------\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2024-07-23T10:43:28+02:00",
          "tree_id": "cc327975349bcc91c90504b49a01ac98bae0ea30",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/0e18cb29cf3f72d192c4a3b2502aa392d7ff58a4"
        },
        "date": 1721724373953,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38230,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 35986,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 36762,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422908",
            "value": 35818,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 34435,
            "range": "±2.43%",
            "unit": "ops/sec",
            "extra": "86 samples"
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
          "id": "f66a5e0d0ae405323eb06c95b657314085c87d0c",
          "message": "Common Refactor (#3532)\n\n* Align gas price names\n\n* Throw for parameter accesses on non-existing values instead of implicitly 0-lifying\n\n* Gas price fixes\n\n* Some fixes\n\n* Fixes\n\n* Fix client eth_gasPrice RPC call test\n\n* Switch to a consistent EIP based structure (remove hybrid HF/EIP parameter structure)\n\n* Code simplifications, locally remove topic from param* API in Common, fix tests\n\n* Monorepo-wide topic removal\n\n* Fixes\n\n* Minor\n\n* Fix client test",
          "timestamp": "2024-07-23T13:20:52-04:00",
          "tree_id": "49722e28063b6ea18b4a533193f53aec2f01e853",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f66a5e0d0ae405323eb06c95b657314085c87d0c"
        },
        "date": 1721755535529,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38185,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 37076,
            "range": "±2.20%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422907",
            "value": 35969,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36162,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35731,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "90 samples"
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
          "id": "5d4b2b2f881852a8c1c28392c5c85aa82c69fd09",
          "message": "Tx: move and rename constructors (#3533)\n\n* tx: move files into dirs\r\n\r\n* tx: remove static constructors\r\n\r\n* tx: export new constructors\r\n\r\n* monorepo: rename all tx constructors\r\n\r\n* tx: fix tests\r\n\r\n* fix examples\r\n\r\n* fix tx examples\r\n\r\n* add 4844 docs\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\n\r\n* tx: update dev docs\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2024-07-23T21:41:33+02:00",
          "tree_id": "a8604de648ed2c3689ff42f7a1b971874f52814a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5d4b2b2f881852a8c1c28392c5c85aa82c69fd09"
        },
        "date": 1721763852019,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38756,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36175,
            "range": "±3.21%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37355,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36749,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35650,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "88 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da22a3881cab3baa9c655ffd48273ae9bbd3b028",
          "message": "Refactor trie util helpers (#3534)\n\n* Rename nibblestoBytes to nibblesTypeToPackedBytes\r\n\r\n* Rename function\r\n\r\n* Fix function name\r\n\r\n* Make nibblesToBytes return a byte array to conform to how bytesToNibbles returns one\r\n\r\n* Fix lint issues\r\n\r\n* Fix function name\r\n\r\n* Fix lint issue\r\n\r\n* update import\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2024-07-24T07:39:29-04:00",
          "tree_id": "87c80d02717fd67648f3e1257e7c78c6bc094843",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/da22a3881cab3baa9c655ffd48273ae9bbd3b028"
        },
        "date": 1721821326999,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 37812,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 35518,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 36960,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422908",
            "value": 35937,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35314,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "89 samples"
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
          "id": "759dcd2cc49372243f78b20990a6124f8e3d8c11",
          "message": "tx: clarify some method names (#3535)\n\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2024-07-24T14:22:35+02:00",
          "tree_id": "eb64eca16ea18393887f7f46fe86e779ab7ddbb6",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/759dcd2cc49372243f78b20990a6124f8e3d8c11"
        },
        "date": 1721823929974,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38269,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 35894,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37109,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36326,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35489,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "89 samples"
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
          "id": "23d796d9223958af937aa2039f45f7cd5f323ab9",
          "message": "Update linting (#3539)",
          "timestamp": "2024-07-25T10:48:35-04:00",
          "tree_id": "8475c15a05085bd9c8a609ab42a74d233806cd2f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/23d796d9223958af937aa2039f45f7cd5f323ab9"
        },
        "date": 1721919075068,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 37936,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 35827,
            "range": "±3.26%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 36390,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 35759,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35129,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "88 samples"
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
          "id": "bf588e25a14f4f9f5b8976dc5abfb58467f2699c",
          "message": "client: change MAX_TXS_EXECUTE default to 200 (#3540)",
          "timestamp": "2024-07-25T12:11:53-04:00",
          "tree_id": "281742bca9fc231641e72598b5348cdf93a2d844",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/bf588e25a14f4f9f5b8976dc5abfb58467f2699c"
        },
        "date": 1721924081480,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38557,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 35951,
            "range": "±3.26%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37605,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36549,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35810,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "88 samples"
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
          "id": "1b881bcb8e888b4fcd14d7699feab58c506458b6",
          "message": "Common: Remove Parameters (#3537)\n\n* Separate params from EIP configs\r\n\r\n* Make requiredEIPs optional\r\n\r\n* Add internal params dict using params option, add updateParams() and resetParams() methods, add tests\r\n\r\n* Minor\r\n\r\n* Move EVM param to EVM parms dict\r\n\r\n* Fix local Common tests, add params test config\r\n\r\n* Fix tests and example\r\n\r\n* Add dedicated params config for Block\r\n\r\n* Add dedicated params dict for Tx\r\n\r\n* Add dedicated VM params config\r\n\r\n* Minor\r\n\r\n* Remove last params from Common, test fixes\r\n\r\n* Fully remove params dict from Common\r\n\r\n* Fixes\r\n\r\n* Add a consistent params option for tx, block, evm and vm to allow to override the default parameter set\r\n\r\n* Disallow BigInt in parameter files (simply use string) to avoid deep cloning/serialization problems\r\n\r\n* Add additional deep copy notes on params option code docs, use deep copy in tests\r\n\r\n* Lint fixes\r\n\r\n* Address review comments",
          "timestamp": "2024-07-26T09:29:36+02:00",
          "tree_id": "621db0e06a0d48db6e670e302a5c2d286f84bed1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1b881bcb8e888b4fcd14d7699feab58c506458b6"
        },
        "date": 1721979267288,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 38438,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422906",
            "value": 36522,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37336,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36390,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35864,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "87 samples"
          }
        ]
      }
    ]
  }
}