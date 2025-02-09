import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [toogleState, setToogleState] = useState(1);

  const toggleTab = (index) => {
    setToogleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Educación - Experiencia</h2>
      <span className="section__subtitle"></span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toogleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Educación
          </div>
          <div
            className={
              toogleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiencia
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toogleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Técnico Superior en Sistemas de Telecomunicaciones e Informáticos </h3>
                <span className="qualification__subtitle">
                IES La torreta - Elche
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 – 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Experto en Transformación Digital</h3>
                <span className="qualification__subtitle">
                FEMPA - Universidad Miguel Hernández
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>

            <div className="qualification__data" >
              <div>
                <h3 className="qualification__title">Cursos, Certificaciones y Proyectos Personales de Programación</h3>
                <span className="qualification__subtitle">
                  Courserea - Udemy - FreeCodeCamp - Youtube
                </span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Presente
                </div>
              </div>

              <div>
                <span className="qualification__line"></span>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toogleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Técnico de Reparación equipos Informáticos y Microelectrónica</h3>
                <span className="qualification__subtitle">
                  Mobilon - Elche
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
              <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Proyectos , Cursos y Certificaciones de Programación</h3>
                <span className="qualification__subtitle">Autodidácta</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Programador Junior Full Stack</h3>
                <span className="qualification__subtitle">Anelis Network - Alicante</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024/09 - Presente
                </div>
              </div>

              <div>
               <span className="qualification__line"></span>
                <span className="qualification__rounder"></span>
           
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
