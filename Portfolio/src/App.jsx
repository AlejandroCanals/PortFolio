import { useState } from "react";
import "./App.css";
import React from "react";
import Header from "./components/header/header";
import Home from "./components/home/Home";
import About from "./components/about/About"
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Qualification from "./components/qualification/Qualification";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Qualification />
        <Testimonial/>
        <Contact/>
        
      </main>

      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;
