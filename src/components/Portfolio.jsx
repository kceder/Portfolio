import React from "react";
import { useState } from "react";

const projects = [
  {
    title: "HyperTube",
    description1:
      "A movie streaming website that allows users to search for movies and stream them.",
    description2:
      "The website is built using React and Node.js, with Docker for containerization, Redux for state management, Vite for bundling, Tailwind for styling, and PostgreSQL for the database.",
    github: "https://github.com/kceder/HyperTube/",
    used: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind",
      "Redux",
      "Vite",
      "Axios",
    ],
  },
  {
    title: "Matcha",
    description1:
      "A dating website that allows users to create a profile and find other users to match with.",
    description2: "The website is built using Node.js, React and MySQL.",
    github: "https://github.com/kceder/Matcha/",
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
    title: "Camagru",
    description1:
      "PHP Backend focused website project that allows users to take pictures and add filters to them.",
    description2: "The project is built using PHP, MySQL, and Javascript.",
    github: "https://github.com/kcederCamagru/",
    used: ["PHP", "Javascript, MySQL", "HTML"],
  },
];

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="portfolio"
      className="text-center mt-24 pt-20 pb-40 px-10 bg-primary h-[80vh] transition"
    >
      <h5 className="text-white my-5">What have I done</h5>
      <h2 className="text-5xl text-bright">My Portfolio</h2>
      <div className="h-1 w-20 bg-primary my-5 mx-auto"></div>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3 mx-4 md:mx:24 transition">
        {projects.map((project, index) => (
          <article
            key={index}
            className="bg-soft rounded-2xl py-8 px-10 md:px20 border border-solid border-transparent hover:scale-110 hover:bg-light hover:border-secondary h-min transition duration-500"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <h3 className="mb-5 text-center">{project.title}</h3>
            {hoveredProject === index && (
              <>
                <ul className="flex flex-row flex-wrap justify-center mb-2 transition">
                  {project.used.map((tech) => (
                    <li className="text text-black text-700 mr-2">{tech}</li>
                  ))}
                </ul>
                <div className="project_info transition">
                  <p className="text-sm text-primary">{project.description1}</p>
                  <p className="text-sm text-primary">{project.description2}</p>
                </div>
                <div className="links mt-6">
                  <button className="bg-secondary text-sm text-white border rounded-lg py-2 px-4 hover:bg-bright transition duration-500">
                    <a href={project.github}>Github</a>
                  </button>
                </div>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
