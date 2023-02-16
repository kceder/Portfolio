import React from "react";
import "../App.css";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Experience() {
  return (
    <section
      id="experience"
      className="text-center my-52"
    >
      <h5 className="text-gray-300 my-5">What skills do I have</h5>
      <h2 className="text-5xl">My Experience</h2>
      <div className="h-1 w-20 bg-primary my-5 mx-auto"></div>

      <div className="grid md:grid-cols-2 gap-8 text-primary mt-20 mx-4 md:mx-24">
        <div className="frontend grid-col-1 bg-bright rounded-2xl py-8 px-10 md:px20 border border-solid border-transparent hover:bg-light hover:border-secondary transition duration-500">
          <h3 className="mb-5 text-primary text-center">Frontend Development</h3>
          <div className="content grid grid-cols-2 gap-y-8">
            <article className="details flex gap-4">
              <BsPatchCheckFill className="items-center"/>
              <h4>React</h4>
            </article>
            <article className="details flex gap-4">
              <BsPatchCheckFill />
              <h4>Javascript</h4>
            </article>
            <article className="details flex gap-4">
              <BsPatchCheckFill />
              <h4>Tailwind</h4>
            </article>
            <article className="details flex gap-4">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
            </article>
            <article className="details flex gap-4">
              <BsPatchCheckFill />
              <h4>CSS</h4>
            </article>
            <article className="details flex gap-4">
              <BsPatchCheckFill />
              <h4>HTML</h4>
            </article>
          </div>
        </div>
        <div className="backend grid-col-1 bg-bright rounded-2xl py-8 px-10 md:px20 border border-solid border-transparent hover:bg-light hover:border-secondary transition duration-500">
          <h3 className="mb-5 text-center">Backend Development</h3>
          <div className="content grid grid-cols-2 gap-y-8">
            <article className="details flex gap-4">
              <BsPatchCheckFill />
              <h4>Node.js</h4>
            </article>
            <article className="details flex gap-4">
              <BsPatchCheckFill />
              <h4>PHP</h4>
            </article>
            <article className="details flex gap-4">
              <BsPatchCheckFill />
              <h4>C</h4>
            </article>
            <article className="details flex gap-4">
              <BsPatchCheckFill />
              <h4>MySQL</h4>
            </article>
            <article className="details flex gap-4">
              <BsPatchCheckFill />
              <h4>Postgres</h4>
            </article>
            <article className="details flex gap-4">
              <BsPatchCheckFill />
              <h4>SQL</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
