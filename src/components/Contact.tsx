"use client";

import { useState, type FormEvent } from "react";
import { EMAIL } from "@/lib/links";

const FORM_ENDPOINT = "https://getform.io/f/dcc947d9-c434-46a9-a6d9-b5c437a7284a";

const inputClass = "bg-[#ccd6f6] text-gray-900 p-2 focus:outline-none focus:ring-2 focus:ring-secondary";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-primary flex justify-center items-center p-4 pt-[80px]"
    >
      <form
        method="POST"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-secondary text-gray-300">
            Contact
          </h2>
          <p className="text-gray-300 py-4">
            Submit the form below or email me at{" "}
            <a href={`mailto:${EMAIL}`} className="text-secondary hover:underline">
              {EMAIL}
            </a>
          </p>
        </div>
        <label htmlFor="contact-name" className="sr-only">Name</label>
        <input
          required
          id="contact-name"
          className={inputClass}
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="name"
        />
        <label htmlFor="contact-email" className="sr-only">Email</label>
        <input
          required
          id="contact-email"
          className={`my-4 ${inputClass}`}
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
        />
        <label htmlFor="contact-message" className="sr-only">Message</label>
        <textarea
          required
          id="contact-message"
          className={inputClass}
          name="message"
          rows={10}
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          disabled={status === "sending"}
          className="text-white border-2 hover:bg-secondary hover:border-secondary px-4 py-3 my-8 mx-auto flex items-center disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Let's Collaborate"}
        </button>
        <p role="status" className="text-center min-h-[1.5rem]">
          {status === "sent" && (
            <span className="text-secondary">Thanks! Your message has been sent. I'll get back to you soon.</span>
          )}
          {status === "error" && (
            <span className="text-red-400">
              Something went wrong. Please email me directly at {EMAIL}.
            </span>
          )}
        </p>
      </form>
    </section>
  );
};

export default Contact;
