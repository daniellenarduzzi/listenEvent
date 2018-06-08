var abi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "bytes4"
      }
    ],
    "name": "idToTx",
    "outputs": [
      {
        "name": "buyer",
        "type": "address"
      },
      {
        "name": "seller",
        "type": "address"
      },
      {
        "name": "id",
        "type": "bytes4"
      },
      {
        "name": "date",
        "type": "uint256"
      },
      {
        "name": "value",
        "type": "uint256"
      },
      {
        "name": "key",
        "type": "bytes32"
      },
      {
        "name": "status",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "key",
        "type": "bytes32"
      }
    ],
    "name": "newTxEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "key",
        "type": "bytes32"
      }
    ],
    "name": "updateStatusEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "initializeOperatorEvent",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_buyer",
        "type": "address"
      },
      {
        "name": "_seller",
        "type": "address"
      },
      {
        "name": "_id",
        "type": "bytes4"
      },
      {
        "name": "_date",
        "type": "uint256"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_key",
        "type": "bytes32"
      }
    ],
    "name": "newTx",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_status",
        "type": "uint8"
      },
      {
        "name": "_id",
        "type": "bytes4"
      }
    ],
    "name": "updateStatus",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_operator",
        "type": "address"
      }
    ],
    "name": "initializeOperator",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
const Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var NotaryInstance = web3.eth.contract(abi).at("0x8e368C19992cA5163301041cC0A908F33BEE7F89")
var myEvent = NotaryInstance.initializeOperatorEvent({},{fromBlock: 0, toBlock: 'latest'})
myEvent.watch(function(error, result){
    console.log("on watch")
    console.log(arguments)
})
