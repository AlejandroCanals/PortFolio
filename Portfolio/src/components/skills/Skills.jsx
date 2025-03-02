import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Otras";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{t("skills.title")}</h2>
      <span className="section__subtitle"></span>

      <div className="skills__container container">
        <Frontend />
        <Backend />
      </div>

      <div className="skills__container skills__container--otras container ">
        <Tools />
      </div>
    </section>
  );
};

export default Skills;
