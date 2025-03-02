import github from '../../assets/svg/github.svg'
import prestashop from '../../assets/svg/prestashop.svg'
import wordpress from '../../assets/svg/wordpress.png'
import insomnia from '../../assets/svg/insomnia.svg'
import trello from '../../assets/svg/trello.svg'
import xampp from '../../assets/svg/xampp.svg'
import git from '../../assets/svg/git.svg'
import figma from '../../assets/svg/figma.svg'
import axios from '../../assets/svg/axios.svg'
import { useTranslation } from "react-i18next";


const Tools = () => {
  const { t } = useTranslation();
  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills.other_tools")}</h3>
      <div className="skills__box">
        <div className="skills__data">
          <img src={wordpress} alt="wordpress svg" className="skills__icons"></img>
          <h3 className="skills__name">WordPress</h3>
        </div>

        <div className="skills__data">
          <img src={prestashop} alt="prestashop svg" className="skills__icons"></img>
          <h3 className="skills__name">Prestashop</h3>
        </div>

        <div className="skills__data">
          <img src={git} alt="git svg" className="skills__icons"></img>
          <h3 className="skills__name">Git</h3>
        </div>

        <div className="skills__data">
          <img src={github} alt="github svg" className="skills__icons"></img>
          <h3 className="skills__name">Github</h3>
        </div>

        <div className="skills__data">
          <img src={figma} alt="figma svg" className="skills__icons"></img>
          <h3 className="skills__name">Figma</h3>
        </div>

        <div className="skills__data">
          <img src={trello} alt="trello svg" className="skills__icons"></img>
          <h3 className="skills__name">Trello</h3>
        </div>

        <div className="skills__data xampp">
          <img src={xampp} alt="xampp svg" className="skills__icons"></img>
          <h3 className="skills__name">Xampp</h3>
        </div>

        <div className="skills__data insomnia">
          <img src={insomnia} alt="insomnia svg" className="skills__icons"></img>
          <h3 className="skills__name">Insomnia</h3>
        </div>

        <div className="skills__data axios">
          <img src={axios} alt="axios svg" className="skills__icons"></img>
          <h3 className="skills__name">Axios</h3>
        </div>
      </div>
    </div>
  );
};

export default Tools;