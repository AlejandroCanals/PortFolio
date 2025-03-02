import { useState } from "react";
import "./projects.css";
import { useTranslation } from "react-i18next";

// Importar imágenes
import GestorImg from "../../assets/Proyectos/GestorReparaciones.png";
import MultitareaImg from "../../assets/Proyectos/AppMultitarea.png";
import FestivalImg from "../../assets/Proyectos/Festival.png";
import BlogCafeImg from "../../assets/Proyectos/BlogCafe.png";
import BienesRaicesImg from "../../assets/Proyectos/BienesRaices.png";
import MacbookImg from "../../assets/Proyectos/Macbook.png";
import FormacionHipnosis from "../../assets/Proyectos/FormacionHipnosis.jpg";

function Projects() {
  const { t } = useTranslation(); // 🔹 Hook para traducción
  const [activeProject, setActiveProject] = useState(null);

  const toggleModal = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  // Datos de los proyectos usando traducciones dinámicas
  const projectsData = t("projects.list", { returnObjects: true }).map((proj, index) => ({
    id: index + 1,
    title: proj.title,
    image: [FormacionHipnosis, GestorImg, MultitareaImg, BienesRaicesImg, FestivalImg, BlogCafeImg][index], // Asigna imágenes en el mismo orden
    description: proj.description,
    technologies: proj.technologies
  }));

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">{t("projects.title")}</h2>

      <div className="projects__container container grid">
        {projectsData.map((project) => (
          <div className="projects__content" key={project.id}>
            <div className="macbook-container" style={{ backgroundImage: `url(${MacbookImg})` }}>
              <img className="projects__img" src={project.image} alt={project.title} />
            </div>

            {/* Botones de Descripción y Ver Video */}
            <div className="projects__buttons">
              <button className="projects__btn" onClick={() => toggleModal(project.id)}>
                {t("projects.description_button")} <i className="uil uil-info-circle"></i>
              </button>
            </div>

            {/* Modal de descripción */}
            {activeProject === project.id && (
              <div className="projects__modal active-modal">
                <div className="projects__modal-content">
                  <i onClick={() => toggleModal(null)} className="uil uil-times projects__modal-close"></i>
                  <h3 className="projects__modal-title">{project.title}</h3>

                  <div className="projects__modal-description">
                    {project.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  <h3>{t("projects.technologies")}</h3>
                  <ul className="projects__modal-projects">
                    {project.technologies.map((tech, index) => (
                      <li className="projects__modal-service" key={index}>
                        <i className="uil uil-check-circle projects__modal-icon"></i>
                        <p className="projects__modal-info">{tech}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
