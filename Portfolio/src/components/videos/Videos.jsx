import "./videos.css";
import Electronica from "../../assets/Proyectos/Electronica.svg";

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
  return (

    <section className="video__section section">
      <h2 className="section__title">Reparaciones Electrónicas</h2>
      <div className="about__container container grid video__container">
        <img  alt="Imagen ilustrativa de un programador" className="about__img"  src={Electronica}/>

        <div className="about__data">
          <p className="about__description">
          Además de la programación, siempre me ha apasionado el hardware y la electrónica          </p>
          <p className="about__description">
          Durante mi etapa en electrónica, trabajé reparando dispositivos como teléfonos móviles, tablets y ordenadores, adquiriendo experiencia en diagnóstico de fallos, soldadura de componentes y sustitución de piezas.
          </p>
          <p className="about__description">
          En ese tiempo, también realicé diversos proyectos personales de modificación y reparación de dispositivos, como teclados mecánicos, consolas y gadgets.
          </p>
          <p className="about__description">
          Aquí os dejo algunos de los videos de esos proyectos:
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