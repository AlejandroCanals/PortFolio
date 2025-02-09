import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Otras from "./Otras";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Habilidades Técnicas</h2>
      <span className="section__subtitle"></span>

      <div className="skills__container container">
        <Frontend />
        <Backend />
      </div>

      <div className="skills__container__otras container">
        <Otras />
      </div>
    </section>
  );
};

export default Skills;
