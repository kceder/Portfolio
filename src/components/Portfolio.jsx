import React from "react";
import { BsGithub } from "react-icons/bs";

const projects = [
  {
    title: "HyperTube",
    description1:
      "A movie streaming website that allows users to search for movies and stream them.",
    description2:
      "The website is built using React, Node.js, Express, and Postgres.",
    github: "https://github.com/kceder",
  },
  {
    title: "Matcha",
    description1:
      "A dating website that allows users to create a profile and find other users to match with.",
    description2: "The website is built using Node.js, React and MySQL.",
    github: "https://github.com/kceder",
  },
  {
    title: "Camagru",
    description1:
      "Backend focused website project that allows users to take pictures and add filters to them.",
    description2: "The website is built using PHP, MySQL, and Javascript.",
    github: "https://github.com/kceder",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="text-center mt-24 pt-20 pb-40 px-10 bg-primary"
    >
      <h5 className="text-white my-5">What have I done</h5>
      <h2 className="text-5xl text-bright">My Portfolio</h2>
      <div className="h-1 w-20 bg-primary my-5 mx-auto"></div>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3 mx-4 md:mx:24">
        {projects.map((project) => (
          <article className="bg-soft rounded-2xl py-8 px-10 md:px20 border border-solid border-transparent hover:scale-110 hover:bg-light hover:border-secondary transition duration-500">
            <h3 className="mb-5 text-center">{project.title}</h3>
            <div className="project_info">
              <p className="text-sm text-primary">{project.description1}</p>
              <p className="text-sm text-primary">{project.description2}</p>
            </div>
            <div className="links mt-6">
              <button className="bg-secondary text-sm text-white border rounded-lg py-2 px-4 hover:bg-bright transition duration-500">
                <a href={project.github}>Github</a>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
