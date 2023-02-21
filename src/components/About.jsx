import React from "react";
import ME from "../assets/me.jpeg";
import "../App.css";

export default function About() {
  return (
    <section id="about" className="pb-20 bg-secondary">
      <div className="flex flex-col items-center justify-center px-10 my-10">
        <h1 className="mt-20 text-5xl text-white">About me</h1>
        <div className="w-20 h-1 my-5 bg-bright"></div>
        <div className="container grid md:grid-cols-2 md:gap-[10%] gap-0 grid-cols-1 mt-20">
          <div className="grid items-center w-full about aspect-square">
            <div className="about_me mx-auto md:width-1/2 width-65% mb-5">
              <img src={ME} alt="Kristian" className="rounded-[1rem] md:rounded-[5rem]" />
            </div>
          </div>
          <div className="my-auto about_content">
            <div className="about_cards grid md:gap-[1.5rem] gap-4 grid-cols-1">
              <div className="p-5 text-center transition duration-500 border border-transparent border-solid text-soft hover:text-black about_card bg-primary hover:bg-transparent hover:border rounded-2xl">
                <div className="about_card_header">
                  <h3 className="text-2xl">Education</h3>
                </div>
                <div className="about_card_body">
                <div className="mx-4 my-3">
                    <p>Hive Helsinki</p>
                    <ul className="text-sm">
                      <li>Full Stack Development</li>
                    </ul>
                  </div>
                  <div className="mx-4 my-3">
                    <p>Helsinki University Courses:</p>
                    <ul className="text-sm">
                      <li>Full Stack Open 2022</li>
                      <li>Element & Ethics of AI</li>
                      <li>Basics of Java</li>
                      <li>Introduction to Cyber Security</li>
                    </ul>
                  </div>
                  <p className="mx-4 my-3">
                    Helsinki University, Economics
                  </p>
                </div>
              </div>
              <div className="p-5 text-center transition duration-500 border border-transparent border-solid text-soft hover:text-black about_card bg-primary hover:bg-transparent hover:border rounded-2xl">
                <div className="about_card_header">
                  <h3 className="text-2xl">Background</h3>
                </div>
                <div className="about_card_body">
                  <p>
                    Career changer. Before I found my passion in software, I
                    studied economics and worked in logistics and business.
                  </p>
                </div>
              </div>
              <div className="p-5 text-center transition duration-500 border border-transparent border-solid text-soft hover:text-black about_card bg-primary hover:bg-transparent hover:border rounded-2xl">
                <div className="about_card_header">
                  <h3 className="text-2xl">Out of office</h3>
                </div>
                <div className="about_card_body">
                  <p>
                    I love to explore new places and cultures. I try to spend a
                    lot of time with friends and family, often sharing a meal or
                    a drink. Sport keeps my head clear and is essential for my
                    well-being. Chess is my most recent addiction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
