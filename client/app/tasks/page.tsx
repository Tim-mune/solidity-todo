"use client";
import { useEffect, useState } from "react";
import { Web3 } from "web3";
const page = () => {
  useEffect(() => {
    console.log("use effect is working");
    console.log(Web3);
  }, []);
  return <div>page</div>;
};

export default page;
