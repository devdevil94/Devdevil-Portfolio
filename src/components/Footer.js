import React from "react";
import ContactForm from "./ContactForm";
import ContactFormImg from "./ContactFormImg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Footer() {
  return (
    <footer className="footer">
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <div className="container">
          <div className="footer__column footer__column--left">
            <ContactFormImg />
          </div>
          <div className="footer__column footer__column--right">
            <ContactForm />
          </div>
        </div>
      </ScrollAnimation>
    </footer>
  );
}
