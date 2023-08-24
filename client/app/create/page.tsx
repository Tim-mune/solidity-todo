import CreateTask from "@/components/CreateTask";
const page = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-blue-400">
      <div className="p-2 bg-blue-600 xl:w-2/3 sm:w-5/6 xs:w-full ss:w-full md:w-5/6 lg:w-2/3 h-[400px] rounded-lg opacity-95 overflow-scroll scroll-smooth snap-always overflow-x-hidden">
        <CreateTask />
      </div>
    </section>
  );
};

export default page;
