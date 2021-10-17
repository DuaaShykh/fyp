const Web3 = require("web3")

const web3 = new Web3(
  'https://rinkeby.infura.io/v3/ff68658f87aa40eba6f7b7ed9795e29b',
  null,
  {
    defaultBlock: 'latest',
    transactionConfirmationBlocks: 1,
    transactionBlockTimeout: 5,
  },
);

module.exports = web3;

