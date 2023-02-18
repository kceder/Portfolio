import React from "react";
import "../App.css";
import { BsPatchCheckFill } from "react-icons/bs";
// import logos from react-icons for react, javascript, tailwind, bootstrap, css, html, node.js, php, c, mysql, postgres, sql
import {
  FaReact,
  FaJs,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaCode,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiPostgresql } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

const frontendData = [
  {
    icon: <FaReact className={"mt-1"} />,
    title: "React",
    level: "Intermediate",
  },
  {
    icon: <FaJs className={"mt-1"} />,
    title: "Javascript",
    level: "Intermediate",
  },
  {
    icon: <SiTailwindcss className={"mt-1"} />,
    title: "Tailwind",
    level: "Intermediate",
  },
  {
    icon: <FaBootstrap className={"mt-1"} />,
    title: "Bootstrap",
    level: "Intermediate",
  },
  {
    icon: <FaCss3Alt className={"mt-1"} />,
    title: "CSS",
    level: "Intermediate",
  },
  {
    icon: <FaHtml5 className={"mt-1"} />,
    title: "HTML",
    level: "Intermediate",
  },
];

const backendData = [
  {
    icon: <FaNodeJs className={"mt-1"} />,
    title: "Node.js",
    level: "Intermediate",
  },
  {
    icon: <FaPhp className={"mt-1"} />,
    title: "PHP",
    level: "Intermediate",
  },
  {
    icon: <FaCode className={"mt-1"} />,
    title: "C",
    level: "Intermediate",
  },
  {
    icon: <FaDatabase className={"mt-1"} />,
    title: "MySQL",
    level: "Intermediate",
  },
  {
    icon: <SiPostgresql className={"mt-1"} />,
    title: "PostgreSQL",
    level: "Intermediate",
  },
  {
    icon: <AiOutlineConsoleSql className={"mt-1"} />,
    title: "SQL",
    level: "Intermediate",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="text-center my-52">
      <h5 className="text-gray-300 my-5">What skills do I have</h5>
      <h2 className="text-5xl">My Experience</h2>
      <div className="h-1 w-20 bg-primary my-5 mx-auto"></div>

      <div className="grid md:grid-cols-2 gap-8 text-primary mt-20 mx-4 md:mx-24">
        <div className="frontend grid-col-1 bg-bright rounded-2xl py-8 px-10 md:px20 border border-solid border-transparent hover:bg-light transition duration-500">
          <h3 className="mb-5 text-primary text-center">
            Frontend Development
          </h3>
          <div className="content grid grid-cols-2 gap-y-8">
            {frontendData.map((data, index) => {
              return (
                <article className="details flex gap-4" key={index}>
                  {data.icon}
                  <h4>{data.title}</h4>
                  <small>{data.level}</small>
                </article>
              );
            })}
          </div>
        </div>
        <div className="backend grid-col-1 bg-bright rounded-2xl py-8 px-10 md:px20 border border-solid border-transparent hover:bg-light transition duration-500">
          <h3 className="mb-5 text-center">Backend Development</h3>
          <div className="content grid grid-cols-2 gap-y-8">
            {backendData.map((data, index) => {
              return (
                <article className="details flex gap-4" key={index}>
                  {data.icon}
                  <h4>{data.title}</h4>
                  <small>{data.level}</small>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
