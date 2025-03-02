import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Alejandro Canals</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer_link">
              {t("nav.about")}
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              {t("nav.skills")}
            </a>
          </li>
          <li>
           <a href="#projects" className="footer_link">
            {t("nav.projects")}
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer_link">
              {t("nav.qualification")}
            </a>
          </li>
          <li>
            <a href="#electronica" className="footer_link">
              {t("nav.electronics")}
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/alejandro-canals-poveda-abaa40143/"
            className="footer__social-link"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="mailto:alejandrocanals.dev@gmail.com"
            className="footer__social-link"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <i className="uil uil-envelope-check"></i>
          </a>
          <a
            href="https://github.com/AlejandroCanals"
            className="footer__social-link"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
