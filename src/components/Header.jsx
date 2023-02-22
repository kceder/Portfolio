import React, { useState, useEffect } from "react";
import CV from "../assets/Kristian_Ceder_CV.pdf";
import HeaderSocials from "./HeaderSocials";
import { motion as m } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 2000) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className="pt-28 h-[84vh] md:h-[70vh] overflow-hidden text-center"
    >
      <div className="">
        <div className="overflow-y-hidden">
          <m.h5
            className="mb-10 text-xl text-center text-secondary"
            animate={{ y: "0%" }}
            initial={{ y: "-100%" }}
            transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
          >
            Hello I'm
          </m.h5>
        </div>
        <div className="overflow-hidden">
          <m.h1
            className="mb-10 text-5xl text-center text-primary"
            animate={{ y: "0%" }}
            initial={{ y: "-100%" }}
            transition={{ delay: 0.6, duration: 0.3, ease: "easeOut" }}
          >
            Kristian Ceder
          </m.h1>
        </div>
        <div className="overflow-y-hidden">
          <m.h5
            className="text-xl text-center text-secondary"
            animate={{ y: "0%" }}
            initial={{ y: "-100%" }}
            transition={{ delay: 0.9, duration: 0.3, ease: "easeInOut" }}
          >
            Fullstack Developer
          </m.h5>
        </div>
        <div className="flex justify-center gap-5 mt-9">
          <a href={CV} download={"Kristian_Ceder_CV.pdf"} className="button-1">
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
