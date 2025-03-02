import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./languageSelector.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {languages.find((l) => l.code === i18n.language)?.label || "Select Language"} ▼
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {languages.map((lang) => (
            <li key={lang.code} onClick={() => changeLanguage(lang.code)}>
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
