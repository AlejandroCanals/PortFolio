import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-html5"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-css3"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-javascript"></i>{" "}
            <div>
              <h3 className="skills__name">Javascript</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-react"></i>
            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-tailwind-css"></i>
            <div>
              <h3 className="skills__name">TailWind</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-sass"></i>
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
