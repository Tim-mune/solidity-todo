"use client";
import SecondaryNav from "./SecondaryNav";
import { deployedInstance, getWeb3Object } from "@/utils/Web3";
import { FormEvent } from "react";
type formInput = {
  title: string;
  content: string;
};

const CreateTask = () => {
  const instance = deployedInstance();
  const { account, web3 } = getWeb3Object();
  const createTask = (item: formInput) => {
    instance.methods
      .create_todo(item.title, item.content)
      .send({ from: account, gas: web3?.utils.toWei(0.005, "ether") });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title");
    const content = formData.get("content");
    console.log(title, content);
    const payload = {
      content,
      title,
    } as formInput;
    console.log(payload);

    // talking to the contract

    // navigate to the tasks screen
  };
  return (
    <div>
      <SecondaryNav name="create tasks" />
      <section className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-2/3  gap-4 items-center"
        >
          <label className="text-white" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-2/3 rounded-md shadow-sm p-2"
          />
          <label className="text-white " htmlFor="content">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            className="w-2/3 rounded-md shadow-sm p-2"
          />
          <button
            type="submit"
            className="self-center bg-yellow-400 p-2 my-1 rounded-md"
            onClick={() => console.log("call the create task function")}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreateTask;
