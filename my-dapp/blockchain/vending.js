import Web3 from "web3";

//       web3 = new Web3(window.ethereum);

// web3 = new Web3();

var web3 = new Web3();

const abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  { inputs: [{ internalType: "address", name: "", type: "address" }], name: "donutBalances", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
  { inputs: [], name: "getVendingMachineBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
  { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
  { inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }], name: "purchase", outputs: [], stateMutability: "payable", type: "function" },
  { inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }], name: "restock", outputs: [], stateMutability: "nonpayable", type: "function" },
];
const vmContract = new web3.eth.Contract(abi, "0x7DAd89b63c82866a0b3DE9E83d76fDB80589CB53");

export default vmContract;
