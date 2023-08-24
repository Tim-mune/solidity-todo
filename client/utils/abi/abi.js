export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tasks",
        type: "uint256",
      },
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "string", name: "title", type: "string" },
          { internalType: "string", name: "content", type: "string" },
          {
            internalType: "enum Todo.task_status",
            name: "status",
            type: "uint8",
          },
          { internalType: "address", name: "createdBy", type: "address" },
        ],
        indexed: false,
        internalType: "struct Todo.Task[]",
        name: "task",
        type: "tuple[]",
      },
    ],
    name: "taskadded",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
    name: "complete_task",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "string", name: "title", type: "string" },
          { internalType: "string", name: "content", type: "string" },
          {
            internalType: "enum Todo.task_status",
            name: "status",
            type: "uint8",
          },
          { internalType: "address", name: "createdBy", type: "address" },
        ],
        internalType: "struct Todo.Task",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "content", type: "string" },
    ],
    name: "create_todo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "string", name: "title", type: "string" },
          { internalType: "string", name: "content", type: "string" },
          {
            internalType: "enum Todo.task_status",
            name: "status",
            type: "uint8",
          },
          { internalType: "address", name: "createdBy", type: "address" },
        ],
        internalType: "struct Todo.Task[]",
        name: "myarr",
        type: "tuple[]",
      },
      { internalType: "uint256", name: "_id", type: "uint256" },
    ],
    name: "getItemIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
    name: "getSingleTask",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "string", name: "title", type: "string" },
          { internalType: "string", name: "content", type: "string" },
          {
            internalType: "enum Todo.task_status",
            name: "status",
            type: "uint8",
          },
          { internalType: "address", name: "createdBy", type: "address" },
        ],
        internalType: "struct Todo.Task",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTasks",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "string", name: "title", type: "string" },
          { internalType: "string", name: "content", type: "string" },
          {
            internalType: "enum Todo.task_status",
            name: "status",
            type: "uint8",
          },
          { internalType: "address", name: "createdBy", type: "address" },
        ],
        internalType: "struct Todo.Task[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "task_count",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "tasks",
    outputs: [
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "string", name: "title", type: "string" },
      { internalType: "string", name: "content", type: "string" },
      { internalType: "enum Todo.task_status", name: "status", type: "uint8" },
      { internalType: "address", name: "createdBy", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
];
