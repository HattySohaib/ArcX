import React, { useRef } from "react";
import "./HeroSection.css";

import herobg from "../../assets/backdrops/herobg.png";

import Picture6 from "../../assets/images/1.jpg";

import Picture2 from "../../assets/images/2.jpg";

import Picture3 from "../../assets/images/3.jpg";

import Picture4 from "../../assets/images/4.jpg";

import Picture5 from "../../assets/images/5.jpg";

import Picture1 from "../../assets/images/6.jpg";

import { motion, useScroll, useTransform } from "framer-motion";

function HeroSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["center center", "end end"],
  });

  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scaleImg,
    },
    {
      src: Picture2,
      scale: scale6,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale8,
    },
    {
      src: Picture6,
      scale: scale6,
    },
  ];

  return (
    <section ref={targetRef} className="hero-section">
      <img className="section-background" src={herobg} alt="" />
      <h1 className="page-header">Arc X Studios</h1>
      <p className="page-subheading">
        Designing the Future, One Pixel at a Time
      </p>
      <button className="cta-button">Get Started</button>
      <div className="carousel">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className="image-element">
              <div className="image-container">
                <div className="slide"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default HeroSection;
