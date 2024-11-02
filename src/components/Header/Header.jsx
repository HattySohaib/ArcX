import React, { useState } from "react";
import "./Header.css";

import logo from "../../assets/images/Group 11.png";
import add from "../../assets/icons/add.png";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

function Header() {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const [hidden, setHidden] = useState(false);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={`${hidden ? "hidden" : "visible"}`}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="header"
    >
      <img className="header-logo" src={logo} />
      <nav>
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a id="blog-btn" href="#">
              Blog <img className="blog-btn-icon" src={add} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;
