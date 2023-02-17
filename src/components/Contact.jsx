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
    <section id="contact" className="text-center my-52  mt-20 mx-4 md:mx-24">
      <h5 className="text-bright my-5">Get in touch</h5>
      <h2 className="text-5xl">Contact Me</h2>
      <div className="options grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="col-span-2 text-primary">
          <article className="option hover:scale-105 transition duration-500 hover:bg-soft bg-secondary m-10 p-4 rounded-2xl">
            <BiMailSend className="mx-auto" />
            <small>Email</small>
            <h5 className="break-all">ceder.kristian@gmail.com</h5>
            <a
              href="mailto:ceder.kristian@gmail.com"
              target={"_blank"}
              className="button-2 text-sm text-black hover:border-primary transition rounded-xl px-2 py-1 bg-transparent"
            >
              Send
            </a>
          </article>
          <article className="option hover:scale-105 transition duration-500 hover:bg-soft bg-secondary m-10 p-4 rounded-2xl">
            <BiMessageRoundedDots className="mx-auto" />
            <small>WhatsApp</small>
            <h5 className="break-all">+358401760886</h5>
            <a
              href="https://wa.me/358401760886"
              target={"_blank"}
              className="button-2 text-sm text-black hover:border-primary transition rounded-xl px-2 py-1 bg-transparent"
            >
              Send
            </a>
          </article>
          <article className="option hover:scale-105 transition duration-500 hover:bg-soft bg-secondary m-10 p-4 rounded-2xl">
            <FaFacebookMessenger className="mx-auto" />
            <small>Messenger</small>
            <h5>Kristian Ceder</h5>
            <a
              href="https://m.me/kristian.ceder.3"
              target={"_blank"}
              className="button-2 text-sm text-black hover:border-primary transition rounded-xl px-2 py-1 bg-transparent"
            >
              Send
            </a>
          </article>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="col-span-2 flex flex-col rounded-xl gap-6 mt-10 h-2/3"
        >
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
            className="ml-10 p-6 p-4 border border-solid border-primary rounded-xl resize-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="ml-10 p-6 p-4 border border-solid border-primary rounded-xl resize-none"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
            required
            className="ml-10 p-6 p-4 border border-solid border-primary rounded-xl resize-none"
          ></textarea>
          <button type="submit" className="button-1 ml-10 rounded-xl">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
