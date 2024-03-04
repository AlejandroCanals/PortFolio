import React from "react";
import html from "../../assets/svg/html.svg";
import css from "../../assets/svg/css.svg";
import javascript from "../../assets/svg/javascript.svg";
import react from "../../assets/svg/react.svg";
import tailwind from "../../assets/svg/tailwind.svg";
import sass from "../../assets/svg/sass.svg"

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
          <img src={html} alt="html svg" className="skills__icons"></img>
            <div>
              <h3 className="skills__name">HTML</h3>
            </div>
          </div>

          <div className="skills__data">
          <img src={css} alt="css svg" className="skills__icons"></img>
            <div>
              <h3 className="skills__name">CSS</h3>
            </div>
          </div>

          <div className="skills__data">
          <img src={javascript} alt="javascript svg" className="skills__icons"></img>
            <div>
              <h3 className="skills__name">Javascript</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
          <img src={react} alt="react svg " className="skills__icons"></img>
            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>

          <div className="skills__data">
          <img src={tailwind} alt="tailwind svg" className="skills__icons"></img>
            <div>
              <h3 className="skills__name">TailWind</h3>
            </div>
          </div>

          <div className="skills__data">
          <img src={sass} alt="sass svg" className="skills__icons"></img>
            <div>
              <h3 className="skills__name">Sass</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
