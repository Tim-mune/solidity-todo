const { web3 } = require("./web3");
const { compiler } = require("./compile");
const { abi } = compiler();
const getInstance = async (addr) => {
  const instance = await new web3.eth.Contract(abi, addr);
  return instance;
};
getInstance("0xF563108EdE356233225af0910CcA09709AFF87fe");
module.exports = { getInstance };
