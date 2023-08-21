const { Web3 } = require("web3");
const dotenv = require("dotenv");
dotenv.config();

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is up and running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/23da94b0cd2945e99738ac952ed40e68"
  );
  web3 = new Web3(provider);
}
module.exports = { web3 };
