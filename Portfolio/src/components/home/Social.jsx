import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/alejandro-canals-poveda/"
        className="home__social-icon"
        target={"_blank"}
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/AlejandroCanals"
        className="home__social-icon"
        target={"_blank"}
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="mailto:alejandrocanals.dev@gmail.com"
        className="home__social-icon"
        target={"_blank"}
      >
        <i className="uil uil-envelope-check"></i>
      </a>
    </div>
  );
};

export default Social;
