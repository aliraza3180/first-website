import { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import Button from "./Button";
import emailjs from "@emailjs/browser";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Contact = () => {
  const [agreed, setAgreed] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5smola1", "template_acrwtoj", form.current, {
        publicKey: "N-EXo1Uk6wZNij2Kg",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-background px-6 py-24 sm:py-32 lg:px-8">
      <div className="mt-16 xs:px-16 xxs:px-8 md:px-24">
        <h2 className="flex items-end text-4xl font-bold text-text-primary xl:text-5xl lg:-ml-[26px]">
          Contact <span className="text-primary">&nbsp;me.</span>
        </h2>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-text-primary"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="from_name"
                id="fisrt-name"
                autoComplete="given-name"
                className="block w-full rounded-lg border-0 px-3.5 py-2 text-text-primary shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-700"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-text-primary"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="from_name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-lg border-0 px-3.5 py-2 text-text-primary shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-700"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-text-primary"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="from_email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-lg border-0 px-3.5 py-2 text-text-primary shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-700"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-text-primary"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-lg border-0 px-3.5 py-2 text-text-primary shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-700"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button type="submit" title="Discuss Your Project" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
