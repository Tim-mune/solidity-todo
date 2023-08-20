const dotenv = require("dotenv");
const { compiler } = require("./compile");
dotenv.config();
const { Web3 } = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");
let mnemonic = process.env.MYKEYS;
let infura_url = process.env.INFURA_URL;

const provider = new HDWalletProvider(mnemonic, infura_url);
const web3 = new Web3(provider);

// get abi
const { abi, evm } = compiler();
const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log(`attempting to deploy from accounts of ${accounts[0]}`);
    const result = await new web3.eth.Contract(abi)
      .deploy({ data: evm })
      .send({ gas: "2000000", from: accounts[0] });
    console.log("Contract deployed to", result.options.address);
    provider.engine.stop();
  } catch (error) {
    console.log(error);
  }
};
deploy();
