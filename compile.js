const path = require("path");
const fs = require("fs");
const solc = require("solc");
const contractPath = path.resolve(__dirname, "contracts", "todo.sol");
const source = fs.readFileSync(contractPath, "utf8");
// config file for solc
const input = {
  language: "Solidity",
  sources: {
    "todo.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
// compile
const compiler = () => {
  const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts;
  const abi = output["todo.sol"].Todo.abi;
  const evm = output["todo.sol"].Todo.evm.bytecode.object;
  return { abi, output, evm };
};
compiler();
module.exports = { compiler };
