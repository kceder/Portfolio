import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function HeaderSocials() {
  return (
    <div className="hidden md:fixed flex-col items-center gap-6 bg-transparent sm:hidden md:flex left-9 top-[40%] text-primary">
      <a href="https://www.linkedin.com/in/kristian-ceder/" target="_blank">
        <BsLinkedin className="hover:scale-125" target={"_blank"} />
      </a>
      <a
        href="https://github.com/kceder/"
        target="_blank"
        className="bg-transparent"
      >
        <BsGithub
          className="bg-transparent hover:scale-125"
          target={"_blank"}
        />
      </a>
      <div className="h-16 bg-primary w-[1px]"></div>
    </div>
  );
}
