import React, { useRef } from "react";
import { BiMailSend, BiMessageRoundedDots } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jq5n50g",
        "template_epawktd",
        form.current,
        "BWeUPdznWt189U3O8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="mx-4 mt-20 text-center my-52 md:mx-24">
      <h5 className="my-5 text-bright">Get in touch</h5>
      <h2 className="text-5xl">Contact Me</h2>
      <div className="grid grid-cols-1 gap-8 options md:grid-cols-4">
        <div className="col-span-2 text-primary">
          <a
            href="mailto:ceder.kristian@gmail.com"
            target={"_blank"}
          >
            <article className="p-4 m-10 transition duration-500 option hover:scale-105 hover:bg-soft bg-secondary rounded-2xl">
              <BiMailSend className="mx-auto" />
              <small>Email</small>
              <h5 className="break-all">ceder.kristian@gmail.com</h5>
              <small>click to send</small>
            </article>
          </a>
          <a
            href="https://wa.me/358401760886"
            target={"_blank"}
          >
            <article className="p-4 m-10 transition duration-500 option hover:scale-105 hover:bg-soft bg-secondary rounded-2xl">
              <BiMessageRoundedDots className="mx-auto" />
              <small>WhatsApp</small>
              <h5 className="break-all">+358401760886</h5>
              <small>click to send</small>
            </article>
          </a>
          <a
            href="https://m.me/kristian.ceder.3"
            target={"_blank"}
          >
            <article className="p-4 m-10 transition duration-500 option hover:scale-105 hover:bg-soft bg-secondary rounded-2xl">
              <FaFacebookMessenger className="mx-auto" />
              <small>Messenger</small>
              <h5>Kristian Ceder</h5>
              <small>click to send</small>
            </article>
          </a>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col col-span-1 gap-6 mt-10 md:col-span-2 rounded-xl h-2/3"
        >
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
            className="p-4 p-6 ml-10 border border-solid resize-none border-primary rounded-xl"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="p-4 p-6 ml-10 border border-solid resize-none border-primary rounded-xl"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
            required
            className="p-4 p-6 ml-10 border border-solid resize-none border-primary rounded-xl"
          ></textarea>
          <button type="submit" className="ml-10 button-1 rounded-xl">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
