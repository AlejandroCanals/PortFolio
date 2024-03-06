import React, { useState } from "react";
import "./projects.css";
import GestorImg from "../../assets/Proyectos/GestorReparaciones.png";
import MultitareaImg from "../../assets/Proyectos/AppMultitarea.png";
import FestivalImg from "../../assets/Proyectos/Festival.png";
import BlogCafeImg from "../../assets/Proyectos/BlogCafe.png";
import BienesRaices from "../../assets/Proyectos/BienesRaices.png";

function Projects() {
  const [toogleState, setToogleState] = useState(0);

  const toggleTab = (index) => {
    setToogleState(index);
  };
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Proyectos</h2>

      <div className="projects__container container grid">
        <div className="projects__content">
          <div>
            <h3 className="projects__title">Gestor Reparaciones</h3>
          </div>

          <a href="https://repaircrm.netlify.app/">
            <img className="projects__img" src={GestorImg} alt=""></img>
          </a>

          <span className="projects__description" onClick={() => toggleTab(1)}>
            Descripción
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
          <div>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7150441143128731649/">
              Ver video
            </a>
          </div>
          <div
            className={
              toogleState === 1
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>
              <h3 className="projects__modal-title">Gestor de Reparaciones1</h3>
              <p className="projects__modal-description">
                💡 Esta app surge de mi experiencia como técnico en reparaciones
                electrónicas donde las incidencias se trabajaban con excel y en
                mi opinión no cubrían las necesidades del trabajo.
                <br />
                <br />
                👨‍💻 Es un gestor que permite crear, leer, actualizar y eliminar
                informes de incidencias, además de asignar técnicos a cada
                reparación.
                <br />
                <br />
                🔧 Incluye un seguimiento automatizado de las mismas.
              </p>

              <h3>Tecnologías Usadas</h3>

              <ul className="projects__modal-projects ">
                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">HTML</p>
                </li>

                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">CSS</p>
                </li>

                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Tailwind</p>
                </li>

                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">React</p>
                </li>
                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Python y Django</p>
                </li>
                <a href="https://github.com/AlejandroCanals/RepairShop-CRM">
                  <li className="projects__modal-service">
                    <i
                      class="uil uil-github"
                      style={{ fontSize: "20px", color: "black" }}
                    ></i>
                    <p className="projects__modal-info">Ver en Github</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <div>
            <h3 className="projects__title">App Multitarea</h3>
          </div>
          <a href="https://flask-multitools.onrender.com/">
            <img
              className="projects__img"
              src={MultitareaImg}
            
              alt=""
            ></img>
          </a>

          <span className="projects__description" onClick={() => toggleTab(2)}>
            Descripción
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
          <div>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7122857379330715648/">
              Ver video
            </a>
          </div>

          <div
            className={
              toogleState === 2
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>
              <h3 className="projects__modal-title">App Multitareas</h3>
              <p className="projects__modal-description">
                Esta aplicación que te permite descargar videos y audios de
                YouTube, eliminar fondos de imágenes y fusionar PDFs, ¡Todo en
                una única aplicación!
              </p>

              <h3>Tecnologías Usadas</h3>

              <ul className="projects__modal-projects ">
                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">HTML</p>
                </li>

                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">CSS</p>
                </li>

                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Python</p>
                </li>

                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Flask</p>
                </li>
                <a href="https://github.com/AlejandroCanals/Flask-Multitools">
                  <li className="projects__modal-service">
                    <i
                      class="uil uil-github"
                      style={{ fontSize: "20px", color: "black" }}
                    ></i>
                    <p className="projects__modal-info">Ver en Github</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <div>
            <h3 className="projects__title">Venta de Inmuebles</h3>
          </div>
          <a href="https://real-stateproject.000webhostapp.com/RealState-Project/index.php">
            <img
              className="projects__img"
              src={BienesRaices}
              alt=""
            ></img>
          </a>

          <span className="projects__description" onClick={() => toggleTab(3)}>
            Descripción
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div
            className={
              toogleState === 3
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>
              <h3 className="projects__modal-title">Venta de Inmuebles</h3>
              <p className="projects__modal-description">
                Este proyecto es una plataforma web diseñada para facilitar la
                venta y promoción de propiedades inmobiliarias, además de
                ofrecer un blog informativo sobre temas relacionados con el
                mercado inmobiliario.
              </p>

              <h3>Tecnologías Usadas</h3>

              <ul className="projects__modal-projects ">
                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">HTML</p>
                </li>

                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">SCSS</p>
                </li>

                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">JavaScript</p>
                </li>
                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">PHP</p>
                </li>

                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Node.js</p>
                </li>
                <a href="https://github.com/AlejandroCanals/RealState-Project">
                  <li className="projects__modal-service">
                    <i
                      class="uil uil-github"
                      style={{ fontSize: "20px", color: "black" }}
                    ></i>
                    <p className="projects__modal-info">Ver en Github</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="projects__container container grid">
        <div className="projects__content">
          <div>
            <h3 className="projects__title">Web Festival</h3>
          </div>
          <a href="https://music-festivaal.netlify.app">
            <img className="projects__img" src={FestivalImg} alt=""></img>
          </a>

          <span className="projects__description" onClick={() => toggleTab(4)}>
            Descripción
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div
            className={
              toogleState === 4
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>
              <h3 className="projects__modal-title">Web Festival</h3>
              <p className="projects__modal-description">
                Página web de un festival que ofrece entradas para sus
                conciertos. El sitio está construido principalmente con HTML,
                CSS y JavaScript para lograr estructura, estilo e
                interactividad.
                <br></br>
                <br></br> Además, se implementa Sass (SCSS) para una gestión de
                estilo más eficiente y organizada.
              </p>

              <h3>Tecnologías Usadas</h3>

              <ul className="projects__modal-projects ">
                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">HTML</p>
                </li>

                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">SCSS</p>
                </li>

                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">JavaScript</p>
                </li>

                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Node.js</p>
                </li>
                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Gulp</p>
                </li>
                <a href="https://github.com/AlejandroCanals/Festival-Project">
                  <li className="projects__modal-service">
                    <i
                      class="uil uil-github"
                      style={{ fontSize: "20px", color: "black" }}
                    ></i>
                    <p className="projects__modal-info">Ver en Github</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <div>
            <h3 className="projects__title">Blog de Café</h3>
          </div>

          <a href="https://articulosdecafe.netlify.app/">
            <img className="projects__img" src={BlogCafeImg} alt=""></img>
          </a>

          <span className="projects__description" onClick={() => toggleTab(5)}>
            Descripción
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div
            className={
              toogleState === 5
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>
              <h3 className="projects__modal-title">Blog Cafe</h3>
              <p className="projects__modal-description">
                Este proyecto es un blog de café creado como parte de mi
                aprendizaje en desarrollo web.
                <br></br>
                <br></br>
                Fue uno de mis primeros proyectos y lo desarrollé para practicar
                mis habilidades en HTML, CSS y JavaScript.
                <br></br>
                <br></br>
                El sitio web presenta un diseño totalmente responsive para
                adaptarse a dispositivos móviles, tabletas y computadoras de
                escritorio. café.
              </p>

              <h3>Tecnologías Usadas</h3>

              <ul className="projects__modal-projects ">
                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">HTML</p>
                </li>

                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">CSS</p>
                </li>

                <li className="projects__modal-service">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">JavaScript</p>
                </li>

                <a href="https://github.com/AlejandroCanals/CafeBlog-Project">
                  <li className="projects__modal-service">
                    <i
                      class="uil uil-github"
                      style={{ fontSize: "20px", color: "black" }}
                    ></i>
                    <p className="projects__modal-info">Ver en Github</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
