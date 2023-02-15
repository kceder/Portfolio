import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

export default function Nav() {
  return (
    <nav className="flex flex-row bg-white -translate-x-1/2 bg-opacity-50 w-max block py-3 px-7 z-10 fixed bottom-7 left-1/2 gap-5 rounded-3xl">
      <a href="#" className="bg-transparent hover:scale-125 text-primary">
        <AiOutlineHome className="bg-transparent" />
      </a>
      <a href="#about" className="bg-transparent hover:scale-125 text-primary">
        <AiOutlineUser className="bg-transparent" />
      </a>
      <a href="#experience" className="bg-transparent hover:scale-125 text-primary">
        <MdOutlineComputer className="bg-transparent" />
      </a>
      <a href="#contact" className="bg-transparent hover:scale-125 text-primary">
        <BiMessageDetail className="bg-transparent" />
      </a>
    </nav>
  );
}
