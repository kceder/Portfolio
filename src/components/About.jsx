import React from "react";
import ME from "../assets/me.jpeg";
import "../App.css";

export default function About() {
  return (
    <section id="about" className="pb-20 bg-secondary">
      <div className="flex flex-col items-center justify-center px-10 my-10">
        <h1 className="text-5xl text-white mt-20">About me</h1>
        <div className="h-1 w-20 bg-bright my-5"></div>
        <div className="container grid md:grid-cols-2 md:gap-[10%] gap-0 grid-cols-1 mt-20">
          <div className="about w-full aspect-square grid items-center">
            <div className="about_me mx-auto md:width-1/2 width-65% mb-5">
              <img src={ME} alt="Kristian" className="rounded-[5rem]" />
            </div>
          </div>
          <div className="about_content my-auto">
            <div className="about_cards grid md:gap-[1.5rem] gap-4 grid-cols-1">
              <div className="text-soft hover:text-black about_card bg-primary border-solid border border-transparent hover:bg-transparent hover:border transition duration-500 rounded-2xl p-5 text-center">
                <div className="about_card_header">
                  <h3 className="text-2xl">Education</h3>
                </div>
                <div className="about_card_body">
                  <p className="mx-4">
                    Hive Helsinki, Full Stack Web Development
                  </p>
                  <p className="mx-4">
                    Helsinki University Full Stack Open 2022
                  </p>
                  <p className="mx-4">
                    Helsinki University OpenAI
                  </p>
                </div>
              </div>
              <div className="text-soft hover:text-black about_card bg-primary border-solid border border-transparent hover:bg-transparent hover:border transition duration-500 rounded-2xl p-5 text-center">
                <div className="about_card_header">
                  <h3 className="text-2xl">Background</h3>
                </div>
                <div className="about_card_body">
                  <p>
                    Career changer. Before I found my passion in software, I
                    studied economics and worked in business.
                  </p>
                </div>
              </div>
              <div className="text-soft hover:text-black about_card bg-primary border-solid border border-transparent hover:bg-transparent hover:border transition duration-500 rounded-2xl p-5 text-center">
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
