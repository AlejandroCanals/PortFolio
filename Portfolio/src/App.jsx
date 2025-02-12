import { useEffect } from "react";
import TagManager from "react-gtm-module"; // Importa Google Tag Manager
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

function App() {
  useEffect(() => {
    // Inicializa Google Tag Manager con tu ID de GTM
    TagManager.initialize({ gtmId: "GTM-NX37MGGP" }); 
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
