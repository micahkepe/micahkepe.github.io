import React from "react";
import ContactForm from "./ContactForm";

const Contact = ({ windowWidth }) => {
  const paddingClass = windowWidth > 768 ? "pt-8" : "";
  return (
    <section id="contact">
      <div
        className={`contact-content font-inter text-base font-thin text-slate pr-8 pl-3 ${paddingClass}`}
      >
      <ContactForm />
      </div>
    </section>
  );
};

export default Contact;



