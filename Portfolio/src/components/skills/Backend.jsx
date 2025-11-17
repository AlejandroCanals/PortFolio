import python from "../../assets/svg/python.svg";
import php from "../../assets/svg/php.svg";
import django from "../../assets/svg/django.svg";
import sql from "../../assets/svg/sql.svg";
import phpmyadmin from "../../assets/svg/phpmyadmin.svg";
import laravel from "../../assets/svg/laravel.svg";
const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img src={php} alt="php svg" id="php" className="skills__icons"></img>
            <div>
              <h3 className="skills__name">PHP</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src={python} alt="python svg" className="skills__icons"></img>
            <div>
              <h3 className="skills__name">Python</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src={sql} alt="sql svg" className="skills__icons"></img>
            <div>
              <h3 className="skills__name">SQL</h3>
            </div>
          </div>

        </div>

        <div className="skills__group">

          <div className="skills__data">
            <img src={laravel} alt="laravel svg" className="skills__icons"></img>
            <div>
              <h3 className="skills__name">Laravel</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src={django} alt="django svg" className="skills__icons"></img>
            <div>
              <h3 className="skills__name">Django</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src={phpmyadmin} alt="sql svg" className="skills__icons"></img>
            <div>
              <h3 className="skills__name">phpMyadmin</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Backend;
