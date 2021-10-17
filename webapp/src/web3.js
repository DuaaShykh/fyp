import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);
window.web3 = web3;
window.ethereum.enable();

export default web3;
