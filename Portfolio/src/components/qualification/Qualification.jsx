import { useState } from "react";
import "./qualification.css";
import { useTranslation } from "react-i18next";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const { t } = useTranslation();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">{t("qualification.title")}</h2>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {t("qualification.education")}
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {t("qualification.experience")}
          </div>
        </div>

        <div className="qualification__sections">
          {/* Educación */}
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            {t("qualification.list.education", { returnObjects: true }).map((edu, index) => (
              <div className="qualification__data" key={index}>
                {/* Alternar la alineación a izquierda y derecha */}
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <h3 className="qualification__title">{edu.title}</h3>
                      <span className="qualification__subtitle">{edu.institution}</span>
                      {edu.year && (
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i> {edu.year}
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="qualification__rounder"></span>
                      {index !== t("qualification.list.education", { returnObjects: true }).length - 1 && (
                        <span className="qualification__line"></span>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div>
                      <span className="qualification__rounder"></span>
                      {index !== t("qualification.list.education", { returnObjects: true }).length - 1 && (
                        <span className="qualification__line"></span>
                      )}
                    </div>
                    <div>
                      <h3 className="qualification__title">{edu.title}</h3>
                      <span className="qualification__subtitle">{edu.institution}</span>
                      {edu.year && (
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i> {edu.year}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Experiencia */}
          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            {t("qualification.list.experience", { returnObjects: true }).map((exp, index) => (
              <div className="qualification__data" key={index}>
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <h3 className="qualification__title">{exp.title}</h3>
                      <span className="qualification__subtitle">{exp.institution}</span>
                      {exp.year && (
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i> {exp.year}
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="qualification__rounder"></span>
                      {index !== t("qualification.list.experience", { returnObjects: true }).length - 1 && (
                        <span className="qualification__line"></span>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div>
                      <span className="qualification__rounder"></span>
                      {index !== t("qualification.list.experience", { returnObjects: true }).length - 1 && (
                        <span className="qualification__line"></span>
                      )}
                    </div>
                    <div>
                      <h3 className="qualification__title">{exp.title}</h3>
                      <span className="qualification__subtitle">{exp.institution}</span>
                      {exp.year && (
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i> {exp.year}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
