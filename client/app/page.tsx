import Nav from "./components/Nav";
import TaskImg from "../public/task.svg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-blue-400">
      <div className="p-4 bg-blue-600 sm::w-full lg:w-2/3 h-[400px] rounded-lg opacity-95">
        <Nav />
        <div className="mt-10">
          <h2 className="text-center capitalize text-yellow-400 tracking-widest font-semibold text-lg">
            Your number one Web3.
            <br />
            Task manager app
          </h2>
          <section className="flex flex-row gap-5 justify-center mt-20">
            <Link
              href="/tasks"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded"
            >
              See Tasks
            </Link>
            <Link
              href=""
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded"
            >
              Create Task
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
};

export default page;
