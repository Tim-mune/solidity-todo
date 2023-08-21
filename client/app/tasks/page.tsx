"use client";
import { getInstance } from "../../../ethereum/todo";
import { useState, useEffect } from "react";
const page = () => {
  const instance = getInstance();
  const getTasks = async () => {
    const res = await instance;
    console.log(res);
  };
  useEffect(() => {
    getTasks();
    console.log(getInstance);
  }, []);
  return (
    <div>
      <h1>tasks go here</h1>
    </div>
  );
};

export default page;
