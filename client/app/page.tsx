import Nav from "../components/Nav";
import Link from "next/link";

const page = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-blue-400">
      <div className="p-4 bg-blue-600 xl:w-2/3 sm:w-5/6 xs:w-full ss:w-full md:w-5/6 lg:w-2/3 h-[400px] rounded-lg opacity-95 overflow-scroll scroll-smooth snap-always overflow-x-hidden">
        <Nav />
        <div className="mt-10">
          <h2 className="text-center capitalize text-yellow-400 tracking-widest font-bold">
            <span className="text-2xl">Your number one Web3.</span>
            <br />
            <span className="tracking-[5px]"> Task manager app</span>
          </h2>
          <section className="flex flex-row gap-5 justify-center mt-20">
            <Link
              href="/tasks"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded"
            >
              See Tasks
            </Link>
            <Link
              href="create"
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
