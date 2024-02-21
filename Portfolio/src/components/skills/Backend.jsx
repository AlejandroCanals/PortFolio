import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-python"></i>
            <div>
              <h3 className="skills__name">Python</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-django"></i>
            <div>
              <h3 className="skills__name">Django</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-flask"></i>
            <div>
              <h3 className="skills__name">Flask</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-git"></i>
            <div>
              <h3 className="skills__name">Git</h3>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Backend;
