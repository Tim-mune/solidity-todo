const { web3 } = require("./web3");
const { compiler } = require("./compile");
const { abi } = compiler();
const getInstance = async () => {
  const instance = await new web3.eth.Contract(
    abi,
    "0xF563108EdE356233225af0910CcA09709AFF87fe"
  );
  return instance;
};
getInstance();
module.exports = { getInstance };
