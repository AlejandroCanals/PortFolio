import { useState } from "react";
import "./projects.css";
import { useTranslation } from "react-i18next";

import AlbionApp from "../../assets/projects/AlbionApp.webp";
import FormacionHipnosis from "../../assets/projects/FormacionHipnosis.jpg";
import GestorImg from "../../assets/projects/GestorReparaciones.png";
import MultitareaImg from "../../assets/projects/MultitaskApp.png";
import BienesRaicesImg from "../../assets/projects/BienesRaices.webp";
import FestivalImg from "../../assets/projects/Festival.webp";
import BlogCafeImg from "../../assets/projects/BlogCafe.webp";
import MacbookImg from "../../assets/projects/Macbook.png";

const filters = ["all", "custom", "wordpress", "prestashop"];

const projectBlueprint = [
  {
    id: 1,
    image: AlbionApp,
    link: "https://albiontopbuilds.com/",
    category: "custom",
  },
  {
    id: 2,
    image: FormacionHipnosis,
    link: "https://formacionenhipnosis.com",
    category: "custom",
  },
  {
    id: 3,
    image: GestorImg,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7150441143128731649/",
    category: "custom",
  },
  {
    id: 4,
    image: MultitareaImg,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7122857379330715648/",
    category: "custom",
  },
  {
    id: 5,
    image: BienesRaicesImg,
    link: "https://bienesraices.com",
    category: "custom",
  },
  {
    id: 6,
    image: FestivalImg,
    link: "https://music-festivaal.netlify.app",
    category: "custom",
  },
  {
    id: 7,
    image: BlogCafeImg,
    link: "https://articulosdecafe.netlify.app/",
    category: "custom",
  },
];

function Projects() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const translations = t("projects.list", { returnObjects: true }) || [];
  const projectsData = projectBlueprint.map((project, index) => ({
    ...project,
    ...translations[index],
  }));

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">{t("projects.title")}</h2>

      <div className="projects__filters">
        {filters.map((filterKey) => (
          <button
            key={filterKey}
            className={`projects__filter-btn ${activeFilter === filterKey ? "active" : ""}`}
            onClick={() => setActiveFilter(filterKey)}
          >
            {t(`projects.filters.${filterKey}`)}
          </button>
        ))}
      </div>

      <div className="projects__container container grid">
        {filteredProjects.map((project) => (
          <div className="projects__content" key={project.id}>
            <div className="macbook-container" style={{ backgroundImage: `url(${MacbookImg})` }}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="macbook-container"
                style={{ backgroundImage: `url(${MacbookImg})` }}
              >
                <img className="projects__img" src={project.image} alt={project.title} />
              </a>
            </div>

            <div className="projects__body">
              <div className="projects__header">
                <h3 className="projects__title">{project.title}</h3>
                <span className={`projects__category projects__category--${project.category}`}>
                  {t(`projects.filters.${project.category}`)}
                </span>
              </div>

              <div className="projects__description">
                {project.description?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="projects__tech-stack">
                <span className="projects__tech-stack-title">{t("projects.technologies")}</span>
                <div className="projects__tech-tags">
                  {project.technologies?.map((tech) => (
                    <span className="projects__tech-tag" key={`${project.id}-${tech}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
