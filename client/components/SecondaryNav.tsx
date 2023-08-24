import React from "react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const SecondaryNav: React.FC<{ name: string }> = ({ name }) => {
  return (
    <nav className="flex flex-row justify-between p-4 sticky bg-inherit overflow-hidden top-0 mx-6">
      <h2 className="font-light first-letter:text-2xl">{name}</h2>
      <Link href="/" key="home">
        <FaHome className=" fill-white text-[22px] before:text-sm after:text-lg hover:rotate-12 hover:scale-95 hover:opacity-90" />
      </Link>
    </nav>
  );
};

export default SecondaryNav;
