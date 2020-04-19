import React from "react";
import ContactForm from "./ContactForm";
import ContactFormImg from "./ContactFormImg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__column footer__column--left">
          <ContactFormImg />
        </div>
        <div className="footer__column footer__column--right">
          <ContactForm />
        </div>
      </div>
    </footer>
  );
}
