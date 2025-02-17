import { useState } from "react";
import "./header.css";

const Header = () => {
  /* Toogle Menu */
  const [toogle , showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          A.Canals
        </a>
        <div className={toogle ? "nav__menu show-menu" : "nav__menu "}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> Sobre mí
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Habilidades
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Proyectos
              </a>
            </li>

            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="uil uil-book-alt nav__icon"></i> Formación
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contacto
              </a>
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
