import "./electronica.css";
import Electronica from "../../assets/projects/Electronica.svg";
import { useTranslation } from "react-i18next";

const videos = [
  {
    url: "https://youtu.be/17lXQaysJbQ",
    thumbnail: "https://i.ytimg.com/vi/17lXQaysJbQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKJWMqQ0M6IBXzWgbEikZtjeGrZw",
    duration: "8:45",
  },
  {
    url: "https://www.youtube.com/watch?v=iaUDt0nUrUM",
    thumbnail: "https://i.ytimg.com/vi/iaUDt0nUrUM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLACJRnY4WuNINnvQMsWy36XCs234A",
    duration: "10:11",
  },
  {
    url: "https://youtu.be/cMUkLYb11hk",
    thumbnail: "https://i.ytimg.com/vi/cMUkLYb11hk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7Zrugqq6RB3VkBdzPDYgnCN-xlw",
    duration: "12:30",
  },
];

const Videos = () => {
  const { t } = useTranslation();
  return (

    <section className="electronica__section section" id="electronica">
      <h2 className="section__title">{t("electronics.title")}</h2>
      <div className="about__container container grid video__container">
        <img  alt="Imagen ilustrativa de un técnico" className="about__img"  src={Electronica}/>

        <div className="about__data">
          <p className="about__description">
          {t("electronics.description1")}</p>
          <p className="about__description">
          {t("electronics.description2")}
          </p>
          <p className="about__description">
          {t("electronics.description3")}
          </p>
          <p className="about__description">
          {t("electronics.description4")}
          </p>
        </div>
      </div>
      <div className="video__grid">
        {videos.map((video, index) => (
          <div key={index} className="video__card">
            <div className="thumbnail__container">
              <img src={video.thumbnail} alt={`Video ${index + 1}`} className="thumbnail" />
              <span className="video__duration">{video.duration}</span>
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="play__button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="36px" height="36px">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;