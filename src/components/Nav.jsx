import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function Nav() {
  const [active, setActive] = useState("#1");

  return (
    <nav className="fixed z-10 flex flex-row gap-5 py-3 -translate-x-1/2 bg-white bg-opacity-50 w-max px-7 bottom-7 left-1/2 rounded-3xl">
      <a href="#" className="bg-transparent hover:scale-125 text-primary" onClick={() => setActive('#1')}>
        <AiOutlineHome className="bg-transparent" />
      </a>
      <a href="#about" className="bg-transparent rounded-full hover:scale-125 text-primary" onClick={() => setActive('#2')}>
        <AiOutlineUser className="bg-transparent" />
      </a>
      <a href="#experience" className="bg-transparent hover:scale-125 text-primary" onClick={() => setActive('#3')}>
        <MdOutlineComputer className="bg-transparent" />
      </a>
      <a href="#portfolio" className="bg-transparent hover:scale-125 text-primary" onClick={() => setActive('#4')}>
        <MdOutlineWorkOutline className="bg-transparent" />
      </a>
      <a href="#contact" className="bg-transparent hover:scale-125 text-primary ${active === '#4' ? 'scale-125' : ''" onClick={() => setActive('#5')}>
        <BiMessageDetail className="bg-transparent ${active === '#5' ? 'scale-125'" />
      </a>
    </nav>
  );
}
