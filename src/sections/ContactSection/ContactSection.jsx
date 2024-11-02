import React from "react";

function ContactSection() {
  return (
    <section className="contact-section">
      <h2>Reach out to us.</h2>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactSection;
