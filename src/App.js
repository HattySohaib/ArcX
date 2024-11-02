import React, { useEffect } from "react";
import "./App.css";

import Lenis from "@studio-freight/lenis";

import Header from "./components/Header/Header";
import HeroSection from "./sections/HeroSection/HeroSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import WorkflowSection from "./sections/WorkflowSection/WorkflowSection";
import ResultsSection from "./sections/ResultsSection/ResultsSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkflowSection />
      <ResultsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
