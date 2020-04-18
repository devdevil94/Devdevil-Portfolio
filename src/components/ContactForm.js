import React from "react";

export default function ContactForm() {
  return (
    <form className="contactForm validate-form">
      <span className="contactForm__title">Get in touch</span>
      <div className="field validate-input" data-validate="Name is required">
        <input
          className="field__input"
          type="text"
          name="name"
          placeholder="Name"
        />
        <span className="field__inputFocus"></span>
        <span className="field__inputIcon">
          <i className="fa fa-user" aria-hidden="true"></i>
        </span>
      </div>

      <div
        className="field validate-input"
        data-validate="Valid email is required: ex@abc.xyz"
      >
        <input
          className="field__input"
          type="text"
          name="email"
          placeholder="Email"
        />
        <span className="field__inputFocus"></span>
        <span className="field__inputIcon">
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </span>
      </div>

      <div className="field validate-input" data-validate="Message is required">
        <textarea
          className="field__input"
          name="message"
          placeholder="Message"
        ></textarea>
        <span className="field__inputFocus"></span>
      </div>

      <div className="contactForm__btnContainer">
        <button className="contactForm__btn">Send</button>
      </div>
    </form>
  );
}
