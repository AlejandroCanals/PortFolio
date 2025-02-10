import React, { useState } from "react";
import "./projects.css";

// Importar imágenes
import GestorImg from "../../assets/Proyectos/GestorReparaciones.png";
import MultitareaImg from "../../assets/Proyectos/AppMultitarea.png";
import FestivalImg from "../../assets/Proyectos/Festival.png";
import BlogCafeImg from "../../assets/Proyectos/BlogCafe.png";
import BienesRaicesImg from "../../assets/Proyectos/BienesRaices.png";

// Datos de los proyectos
const projectsData = [
  {
    id: 1,
    title: "Gestor Reparaciones",
    image: GestorImg,
    link: "https://repaircrm.netlify.app/",
    video: "https://www.linkedin.com/feed/update/urn:li:activity:7150441143128731649/",
    description: [
      "💡 La idea surge de mi experiencia como técnico en reparaciones electrónicas donde las incidencias se trabajaban con Excel y en mi opinión no cubrían las necesidades del trabajo.",
      "👨‍💻 Permite crear, leer, actualizar y eliminar informes de incidencias, además de asignar técnicos a cada reparación.",
      "🔧 Incluye un seguimiento automatizado de las mismas.",
      "Puedes probarlo usando el usuario 'admin' y la contraseña 'admin'."
    ],
    technologies: ["HTML", "CSS", "Tailwind", "React", "Python y Django"],
    github: "https://github.com/AlejandroCanals/RepairShop-CRM",
  },
  {
    id: 2,
    title: "App Multitarea",
    image: MultitareaImg,
    link: "https://flask-multitools.onrender.com/",
    video: "https://www.linkedin.com/feed/update/urn:li:activity:7122857379330715648/",
    description: [
      "📥 Esta aplicación permite descargar videos y audios de YouTube.",
      "🎨 Elimina fondos de imágenes con un solo clic.",
      "📄 Fusiona múltiples PDFs en un solo archivo.",
      "¡Todo en una única aplicación fácil de usar!"
    ],
    technologies: ["HTML", "CSS", "Python", "Flask"],
    github: "https://github.com/AlejandroCanals/Flask-Multitools",
  },
  {
    id: 3,
    title: "Venta de Inmuebles",
    image: BienesRaicesImg,
    link: "https://real-stateproject.000webhostapp.com/RealState-Project/index.php",
    description: [
      "🏡 Plataforma web para la venta y promoción de propiedades inmobiliarias.",
      "📖 Incluye un blog informativo sobre el sector inmobiliario.",
      "🔎 Búsqueda optimizada de inmuebles y gestión sencilla."
    ],
    technologies: ["HTML", "SCSS", "JavaScript", "PHP"],
    github: "https://github.com/AlejandroCanals/RealState-Project",
  },
  {
    id: 4,
    title: "Web Festival",
    image: FestivalImg,
    link: "https://music-festivaal.netlify.app",
    description: [
      "🎵 Página web de un festival con venta de entradas y diseño responsive.",
      "🎨 Implementa Sass (SCSS) para una mejor gestión del estilo.",
      "🎟️ Sistema interactivo de compra de boletos."
    ],
    technologies: ["HTML", "SCSS", "JavaScript", "Gulp"],
    github: "https://github.com/AlejandroCanals/Festival-Project",
  },
  {
    id: 5,
    title: "Blog de Café",
    image: BlogCafeImg,
    link: "https://articulosdecafe.netlify.app/",
    description: [
      "☕ Blog sobre café desarrollado para mejorar habilidades en HTML, CSS y JavaScript.",
      "📱 Diseño responsive para una excelente experiencia en móviles.",
      "📖 Artículos interesantes sobre tipos de café y técnicas de preparación."
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AlejandroCanals/CafeBlog-Project",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const toggleModal = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Proyectos</h2>

      <div className="projects__container container grid">
        {projectsData.map((project) => (
          <div className="projects__content" key={project.id}>
            <div>
              <h3 className="projects__title">{project.title}</h3>
            </div>

            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img className="projects__img" src={project.image} alt={project.title} />
            </a>

            {/* Botones de Descripción y Ver Video */}
            <div className="projects__buttons">
              <button className="projects__btn" onClick={() => toggleModal(project.id)}>
                Descripción <i className="uil uil-info-circle"></i>
              </button>

              {project.video && (
                <a href={project.video} target="_blank" rel="noopener noreferrer" className="projects__btn projects__btn--video">
                  Ver video <i className="uil uil-play-circle"></i>
                </a>
              )}
            </div>

            {/* Modal de descripción */}
            {activeProject === project.id && (
              <div className="projects__modal active-modal">
                <div className="projects__modal-content">
                  <i onClick={() => toggleModal(null)} className="uil uil-times projects__modal-close"></i>
                  <h3 className="projects__modal-title">{project.title}</h3>

                  <div className="projects__modal-description">
                    {Array.isArray(project.description) ? (
                      project.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{project.description}</p>
                    )}
                  </div>

                  <h3>Tecnologías Usadas</h3>
                  <ul className="projects__modal-projects">
                    {project.technologies.map((tech, index) => (
                      <li className="projects__modal-service" key={index}>
                        <i className="uil uil-check-circle projects__modal-icon"></i>
                        <p className="projects__modal-info">{tech}</p>
                      </li>
                    ))}
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <li className="projects__modal-service">
                        <i className="uil uil-github" style={{ fontSize: "20px", color: "black" }}></i>
                        <p className="projects__modal-info">Ver en Github</p>
                      </li>
                    </a>
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
