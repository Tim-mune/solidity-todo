import { Web3 } from "web3";
import { abi } from "./abi/abi";
export const getWeb3Object = () => {
  let account;
  let web3;
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    web3 = new Web3(window.ethereum);
  } else {
    // web3 = new Web3("http://127.0.0.1:8545");
    web3 = undefined;
  }
  account =
    web3.eth.getAccounts()[0] || "0xD3E2681048A305F11e0B02e380E23FB3ebDa965A";
  return { web3, account };
};

export const deployedInstance = () => {
  const { web3 } = getWeb3Object();
  const result = new web3.eth.Contract(
    abi,
    "0xD3E2681048A305F11e0B02e380E23FB3ebDa965A"
  );

  return result;
};
