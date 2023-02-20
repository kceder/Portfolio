import React from "react";
import "../App.css";
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
    icon: <FaReact className={"mt-1 text-blue-500"} />,
    title: "React",
    level: "Intermediate",
  },
  {
    icon: <FaJs className={"mt-1 text-yellow-400"} />,
    title: "Javascript",
    level: "Intermediate",
  },
  {
    icon: <SiTailwindcss className={"mt-1 text-cyan-500"} />,
    title: "Tailwind",
    level: "Intermediate",
  },
  {
    icon: <FaBootstrap className={"mt-1 text-purple-500"} />,
    title: "Bootstrap",
    level: "Intermediate",
  },
  {
    icon: <FaCss3Alt className={"mt-1 text-blue-400"} />,
    title: "CSS",
    level: "Intermediate",
  },
  {
    icon: <FaHtml5 className={"mt-1 text-orange-400"} />,
    title: "HTML",
    level: "Intermediate",
  },
];

const backendData = [
  {
    icon: <FaNodeJs className={"mt-1 text-green-500"} />,
    title: "Node.js",
    level: "Intermediate",
  },
  {
    icon: <FaPhp className={"mt-1 text-purple-600"} />,
    title: "PHP",
    level: "Intermediate",
  },
  {
    icon: <FaCode className={"mt-1 text-gray-500"} />,
    title: "C",
    level: "Intermediate",
  },
  {
    icon: <FaDatabase className={"mt-1 text-blue-600"} />,
    title: "MySQL",
    level: "Intermediate",
  },
  {
    icon: <SiPostgresql className={"mt-1 text-blue-500"} />,
    title: "PostgreSQL",
    level: "Intermediate",
  },
  {
    icon: <AiOutlineConsoleSql className={"mt-1 text-yellow-600"} />,
    title: "SQL",
    level: "Intermediate",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="text-center my-52">
      <h5 className="my-5 text-gray-300">What skills do I have</h5>
      <h2 className="text-5xl">My Experience</h2>
      <div className="w-20 h-1 mx-auto my-5 bg-primary"></div>
      <div className="grid gap-8 mx-4 mt-20 md:grid-cols-2 text-primary md:mx-24">
        <div className="px-10 py-8 transition duration-500 border border-transparent border-solid frontend grid-col-1 bg-bright rounded-2xl md:px20 hover:bg-light">
          <h3 className="mb-5 text-center text-primary">
            Frontend Development
          </h3>
          <div className="grid grid-cols-2 content gap-y-4">
            {frontendData.map((data, index) => {
              return (
                <article className="flex gap-4 text-black md:text-lg details" key={index}>
                  {data.icon}
                  <h4>{data.title}</h4>
                </article>
              );
            })}
          </div>
        </div>
        <div className="px-10 py-8 transition duration-500 border border-transparent border-solid backend grid-col-1 bg-bright rounded-2xl md:px20 hover:bg-light">
          <h3 className="mb-5 text-center">Backend Development</h3>
          <div className="grid grid-cols-2 content gap-y-4">
            {backendData.map((data, index) => {
              return (
                <article className="flex gap-4 text-black md:text-lg details" key={index}>
                  {data.icon}
                  <h4>{data.title}</h4>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
