import { initGA, logPageView } from "./utils/analytics";
import React, { useEffect } from "react";
import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About"
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

function App() {
  //Google Analytics
  //En un futuro si uso rutas hay que agregar AnalyticsTracker
  useEffect(() => {
    initGA();
    logPageView();
  },[])

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Qualification />
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </>
  );
}
export default App;
