"use client";
import Tasks from "@/components/Tasks";
import { TasksData } from "@/utils/TasksMockUp";
import SecondaryNav from "@/components/SecondaryNav";
import { deployedInstance } from "@/utils/Web3";
import { useEffect } from "react";
const page = () => {
  const instance = deployedInstance();
  if (!instance) {
    return (
      <div>
        <h1 className="text-center text-lg text-red-500">
          Please ensure your connected to your digital wallet...!
        </h1>
      </div>
    );
  }
  const getTasks = async () => {
    const total_tasks = await instance.methods.getTasks().call();
    console.log(total_tasks);
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <section className="flex justify-center items-center h-screen bg-blue-400">
      <div className=" bg-blue-600 xl:w-2/3 sm:w-5/6 xs:w-full ss:w-full md:w-5/6 lg:w-2/3 h-[400px] rounded-lg opacity-95 overflow-scroll scroll-smooth snap-always overflow-x-hidden">
        <button onClick={() => console.log(instance)}>see instance</button>
        <SecondaryNav name="your tasks" />
        <Tasks items={TasksData} />
      </div>
    </section>
  );
};

export default page;
