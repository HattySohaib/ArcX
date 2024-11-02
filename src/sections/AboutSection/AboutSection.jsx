import React from "react";
import "./AboutSection.css";

import aboutbg from "../../assets/backdrops/aboutbg.png";

function AboutSection() {
  return (
    <section className="about-section">
      <img src={aboutbg} alt="" className="section-background" />

      <div className="about-left">
        <h2>Who are we?</h2>
      </div>
      <div className="about-right">
        <p className="two-tone-text">
          We’re not your average design and development agency.{" "}
          <span className="gray-text">
            We’re a dynamic duo, passionate about
          </span>{" "}
          creating stunning, user-centric websites{" "}
          <span className="gray-text">
            {" "}
            and mobile apps that don’t just look good
          </span>
          —they work.{" "}
          <span className="gray-text">
            Ready to elevate your digital presence?{" "}
          </span>
          Let’s get started.
        </p>
        <div className="btns flex">
          <button className="filled-btn">Learn more</button>
          <button className="outlined-btn">Join Us</button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
