import React from "react";
import python from "../../assets/svg/python.svg"
import flask from "../../assets/svg/flask.svg"
import django from "../../assets/svg/django.svg"
import nodejs from "../../assets/svg/nodejs.svg"


const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
          <img src={python} alt="python svg" className="skills__icons"></img>

            <div>
              <h3 className="skills__name">Python</h3>
            </div>
          </div>

          <div className="skills__data">
          <img src={django} alt="django svg" className="skills__icons"></img>

            <div>
              <h3 className="skills__name">Django</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
          <img src={flask} alt="flask svg" className="skills__icons"></img>

            <div>
              <h3 className="skills__name">Flask</h3>
            </div>
          </div>

          <div className="skills__data">
          <img src={nodejs} alt="nodejs svg" className="skills__icons"></img>

            <div>
              <h3 className="skills__name">Node.js</h3>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Backend;
