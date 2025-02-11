import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Alejandro Canals</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li>
           <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer_link">
              Education
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/alejandro-canals-poveda-abaa40143/"
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="mailto:alejandrocanals.dev@gmail.com"
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="uil uil-envelope-check"></i>
          </a>
          <a
            href="https://github.com/AlejandroCanals"
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
