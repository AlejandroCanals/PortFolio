import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/alejandro-canals-poveda-abaa40143/"
        className="home__social-icon"
        target={"_blank"}
      >
        <i class="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/AlejandroCanals?tab=repositories"
        className="home__social-icon"
        target={"_blank"}
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a
        href="mailto:alejandrocanals17@gmail.com"
        className="home__social-icon"
        target={"_blank"}
      >
        <i class="uil uil-envelope-check"></i>
      </a>
    </div>
  );
};

export default Social;
