import React from "react";
import ContactForm from "./ContactForm";
import ContactFormImg from "./ContactFormImg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__column">
        <ContactFormImg />
      </div>
      <div className="footer__column">
        <ContactForm />
      </div>
    </footer>
  );
}
