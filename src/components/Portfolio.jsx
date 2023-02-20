import React from "react";
import { useState } from "react";
import sc2 from "../assets/hyper2.jpeg";
import m1 from "../assets/matcha1.jpeg";
import c1 from "../assets/cama1.png";

const projects = [
  {
    title: "Matcha",
    description1:
      "A dating website that allows users to match with interestin people and chat with them in real time.",
    // description2: "The website is built using Node.js, React and MySQL.",
    github: "https://github.com/kceder/Matcha/",
    img: m1,
    used: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "WebSocket",
      "Bootstrap",
      "Axios",
    ],
  },
  {
    title: "HyperTube",
    description1:
      "A movie streaming website that allows users to search for movies and stream them.",
    // description2:
    //   "The website is built using React and Node.js, with Docker for containerization, Redux for state management, Vite for bundling, Tailwind for styling, and PostgreSQL for the database.",
    github: "https://github.com/kceder/HyperTube/",
    img: sc2,
    used: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind",
      "Redux",
      "Vite",
      "Docker",
    ],
  },
  {
    title: "Camagru",
    description1:
      "PHP Backend focused website project that allows users to take pictures and add filters to them.",
    // description2: "The project is built using PHP, MySQL, and Javascript.",
    img: c1,
    github: "https://github.com/kceder/Camagru/",
    used: ["PHP", "Javascript, MySQL", "HTML"],
  },
];

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="portfolio"
      className="text-center mt-24 pt-20 pb-40 px-10 md:h-[96vh] bg-primary"
    >
      <h5 className="my-5 text-white">What have I done</h5>
      <h2 className="text-5xl text-bright">My Portfolio</h2>
      <div className="w-20 h-1 mx-auto my-5 bg-primary"></div>
      <div className="grid grid-cols-1 gap-16 mx-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={index}
            className="relative p-6 border border-transparent border-solid bg-soft rounded-2xl"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <h3 className="mb-5 text-center">{project.title}</h3>
            <img
              src={project.img}
              alt={project.title}
              className={`w-full md:aspect-square rounded-2xl ${
                hoveredProject === index ? "opacity-0 duration-300" : "opacity-100"
              }`}
            />
            <div
              className={`project_info absolute inset-0 rounded-2xl top-8 md:top-12 lg-top-20 p-6 border border-solid border-transparent overflow-scroll ${
                hoveredProject !== index ? "opacity-0 duration-300" : "opacity-100 duration-300"
              }`}
              style={{ transitionDelay: hoveredProject === index ? "300ms" : "0ms" }}
            >
              <ul className="flex flex-row flex-wrap justify-center mb-2">
                {project.used.map((tech) => (
                  <li key={tech} className="mr-2 text-black text text-700">
                    {tech}
                  </li>
                ))}
              </ul>
              <div>
                <p className="text-sm text-primary">{project.description1}</p>
                <p className="text-sm text-primary">{project.description2}</p>
              </div>
              <div className="mt-6 links">
                <button className="px-4 py-2 text-sm text-white border rounded-lg bg-secondary hover:bg-bright">
                  <a href={project.github} target={"_blank"}>Github</a>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
