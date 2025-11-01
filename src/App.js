import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internship from "./components/Internship";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {


  return (
    <>
      <Navbar />
      <div className="pt-20 space-y-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internship />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
