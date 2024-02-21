import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Canals</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonial" className="footer_link">
              Testimonials
            </a>
          </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/"
              className="footer__social-link"
              target={"_blank"}
            >
              <i class="uil uil-instagram"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="footer__social-link"
              target={"_blank"}
            >
              <i class="uil uil-dribbble"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="footer__social-link"
              target={"_blank"}
            >
              <i class="uil uil-github-alt"></i>
            </a>
          </div>
            <span className="footer__copy">&#169; Alejandro Canals. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
