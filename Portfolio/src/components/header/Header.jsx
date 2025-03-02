import { useState } from "react";
import "./header.css";
import "../../i18n";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";


const Header = () => {
  const { t, i18n } = useTranslation();
  /* Toogle Menu */
  const [toogle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          A.Canals
        </a>
        <div className={toogle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> {t("nav.home")}
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> {t("nav.about")}
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> {t("nav.skills")}
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> {t("nav.projects")}
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="uil uil-book-alt nav__icon"></i> {t("nav.qualification")}
              </a>
            </li>
            <li className="nav__item">
              <a href="#electronica" className="nav__link">
                <i className="uil uil-wrench nav__icon"></i> {t("nav.electronics")}
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> {t("nav.contact")}
              </a>
            </li>
            <li className="nav__item">
              <LanguageSelector />
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!toogle)}
          ></i>
        </div>


        <div className="nav__toggle" onClick={() => showMenu(!toogle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
