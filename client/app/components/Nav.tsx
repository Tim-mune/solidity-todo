import { AiOutlineBell, AiOutlineBars } from "react-icons/ai";
const Nav = () => {
  return (
    <section className="flex flex-row items-center justify-between m-4">
      <div className="">
        <h1 className="text-base capitalize font-extrabold leading-tight first-letter:text-2xl tracking-wide">
          Welcome Timz
        </h1>
      </div>
      <div className="flex flex-row justify-around items-center gap-10">
        <AiOutlineBell className=" fill-white text-[22px] before:text-sm after:text-lg hover:rotate-12 hover:scale-95 hover:opacity-90" />
        <AiOutlineBars className=" fill-white text-[22px] before:text-sm after:text-lg hover:rotate-12 hover:scale-95 hover:opacity-90" />
      </div>
    </section>
  );
};

export default Nav;
