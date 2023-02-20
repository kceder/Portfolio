import React, { useState, useEffect } from "react";
import CV from "../assets/Kristian_Ceder_CV.pdf";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.pageYOffset > 2000) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <header id="header" className="pt-28 h-[90vh] md:h-[70vh] overflow-hidden text-center">
      <div className="">
        <h5 className="mb-10 text-xl text-center text-secondary">Hello I'm</h5>
        <h1 className="mb-10 text-5xl text-center text-primary">
          Kristian Ceder
        </h1>
        <h5 className="text-xl text-center text-secondary">
          Fullstack Developer
        </h5>
        <div className="flex justify-center gap-5 mt-9">
          <a href={CV} download className="button-1">
            Download CV
          </a>
          <a href="#contact" className="button-2">
            Let's Talk
          </a>
        </div>
        <HeaderSocials />
        {isScrolled ? (
          <a
            href="#header"
            className="fixed hidden rotate-90 bg-transparent right-2 md:block top-1/2 text-primary"
          >
            Scroll Up
          </a>
        ) : (
          <a
            href="#contact"
            className="fixed right-0 hidden rotate-90 bg-transparent md:block top-1/2 text-primary"
          >
            Scroll Down
          </a>
        )}
      </div>
    </header>
  );
}
