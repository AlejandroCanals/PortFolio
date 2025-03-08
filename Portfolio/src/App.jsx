import { useEffect } from "react";
import TagManager from "react-gtm-module";
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
import Videos from "./components/electronica/Electronica";
import CookieConsentComponent from "./components/common/CookieConsentComponent";
import { useTranslation } from "react-i18next";


function App() {
  useEffect(() => {
    // Inicializa Google Tag Manager con tu ID de GTM
    TagManager.initialize({ gtmId: "GTM-NX37MGGP" }); 
  }, []);

  const { t, i18n } = useTranslation();
  //Traducciones para metatile y metadescription
  useEffect(() => {
    document.title = t("meta.title");
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t("meta.description"));

    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", t("meta.title"));
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", t("meta.description"));
  }, [t, i18n.language]); 

  return (
    <>
      <CookieConsentComponent />
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Qualification />
        <Videos />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
