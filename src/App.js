import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills"; // New Component
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <nav className="navigation">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <main>
        <About />
        <Skills /> { /* Insert component into the main */ }
        <Experience />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
