import { useState } from "react";

import "../App.css";

// components
import Navbar from "../Components/Layout/Navbar";
import Hero from "../Components/Hero/Hero";
import HowIBuild from "../Sections/HowIBuild";
import Projects from "../Sections/Projects/Projects";
import Skills from "../Sections/Skills/Skills";
import Architecture from "../Sections/Architecture/Architecture";
import Footer from "../Components/Layout/Footer";
import Contact from "../Sections/Contact/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)]  text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <HowIBuild />
        <Skills />
        <Projects />
        <Architecture />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
