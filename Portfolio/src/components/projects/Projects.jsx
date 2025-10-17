import { useEffect, useState } from "react";
import "./projects.css";
import { useTranslation } from "react-i18next";

// Importar imágenes
import GestorImg from "../../assets/projects/GestorReparaciones.png";
import MultitareaImg from "../../assets/projects/MultitaskApp.png";
import FestivalImg from "../../assets/projects/Festival.png";
import BlogCafeImg from "../../assets/projects/BlogCafe.png";
import BienesRaicesImg from "../../assets/projects/BienesRaices.png";
import MacbookImg from "../../assets/projects/Macbook.png";
import FormacionHipnosis from "../../assets/projects/FormacionHipnosis.jpg";
import AlbionApp from "../../assets/projects/AlbionApp.png";

function Projects() {
  const { t } = useTranslation(); // 🔹 Hook para traducción
  const [activeProject, setActiveProject] = useState(null);

  const toggleModal = (id) => {
    setActiveProject(prev => (prev === id ? null : id));
  };


  const closeModal = () => setActiveProject(null);

  useEffect(() =>{
    if (activeProject !== null){
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "";
    }
  }, [activeProject]);

  const links = [
    "https://albiontopbuilds.com/",
    "https://formacionenhipnosis.com",
    "https://www.linkedin.com/feed/update/urn:li:activity:7150441143128731649/",
    "https://www.linkedin.com/feed/update/urn:li:activity:7122857379330715648/",
    "https://bienesraices.com",
    "https://music-festivaal.netlify.app",
    "https://articulosdecafe.netlify.app/",
  ];

  const images = [
    AlbionApp,
    FormacionHipnosis,
    GestorImg,
    MultitareaImg,
    BienesRaicesImg,
    FestivalImg,
    //BlogCafeImg,
  ]

  // Datos de los proyectos usando traducciones dinámicas
  const rawList = t("projects.list", { returnObjects: true }) || [];
  const list = Array.isArray(rawList) ? rawList : [];

  const projectsData = list.map((proj, index) => ({
    id: index + 1,
    title: proj.title ?? `Proyecto ${index + 1}`,
    image: images[index] ?? images[0],
    description: Array.isArray(proj.description) ? proj.description : [proj.description ?? ""],
    technologies: Array.isArray(proj.technologies) ? proj.technologies : [], // <-- ARREGLO
    link: links[index] ?? "#",
  }));
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">{t("projects.title")}</h2>

      <div className="projects__container container grid">
        {projectsData.map((project) => (
          <div className="projects__content" key={project.id}>
            <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="macbook-container"
            style={{ backgroundImage: `url(${MacbookImg})` }}
          ><img className="projects__img" src={project.image} alt={project.title} /></a>
            {/* Botones de Descripción y Ver Video */}
            <div className="projects__buttons">
              <button className="projects__btn button--zoom" onClick={() => toggleModal(project.id)}>
                {t("projects.description_button")} <i className="uil uil-info-circle"></i>
              </button>
            </div>

            {/* Modal de descripción */}
            {activeProject === project.id && (
              <div
                className="projects__modal active-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby={`modal-title-${project.id}`}
                onClick={closeModal}
              >
                <div
                  className="projects__modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i onClick={closeModal} className="uil uil-times projects__modal-close"></i>
                  <h3 id={`modal-title-${project.id}`} className="projects__modal-title">{project.title}</h3>

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
