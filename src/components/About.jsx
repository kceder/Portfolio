import React from "react";
import ME from "../assets/me.jpeg";
import "../App.css";

export default function About() {
  return (
    <section id="about" className="pb-20 bg-secondary">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl text-white mt-20">Who am I?</h1>
        <p className="text-xl text-white text-center mb-8">-</p>
        <div className="container grid grid-cols-2 gap-[15%]">
          <div className="about w-full aspect-square grid items-center">
            <div className="about_me">
              <img src={ME} alt="Kristian" className="rounded-[5rem]" />
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards grid gap-[1.5rem]">
              <div className="text-light hover:text-black about_card bg-primary border-solid border border-transparent hover:bg-transparent hover:border transition rounded-2xl p-5 text-center">
                <div className="about_card_header">
                  <h3 className="text-2xl">Education</h3>
                </div>
                <div className="about_card_body">
                  <p>
                    Hive Helsinki, Full Stack Web Development
                    Helsinki University: Full Stack Open 2022
                    Helsinki University: OpenAI
                  </p>
                </div>
              </div>
              <div className="text-light hover:text-black about_card bg-primary border-solid border border-transparent hover:bg-transparent hover:border transition rounded-2xl p-5 text-center">
                <div className="about_card_header">
                  <h3 className="text-2xl">Background</h3>
                </div>
                <div className="about_card_body">
                  <p>
                    Career changer. Before I found my passion in software,
                    I studied economics and worked in business.
                  </p>
                </div>
              </div>
              <div className="text-light hover:text-black about_card bg-primary border-solid border border-transparent hover:bg-transparent hover:border transition rounded-2xl p-5 text-center">
                <div className="about_card_header">
                  <h3 className="text-2xl">Out of office</h3>
                </div>
                <div className="about_card_body">
                  <p>
                    I love to explore new places and cultures. I try to spend
                    a lot of time with friends and family, often sharing a meal or a drink.
                    Sport keeps my head clear and is essential for my well-being.
                    Chess is my most recent addiction.
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
