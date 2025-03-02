import React from "react";
import { useTranslation } from "react-i18next";
import "./modal.css";

const CookiePolicyModal = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* 🔹 Botón de cerrar dentro de la modal */}
        <button className="modal-close" onClick={onClose}>✖</button>

        <h2>{t("cookie_policy.title")}</h2>

        <h3>{t("cookie_policy.section1.title")}</h3>
        <p>{t("cookie_policy.section1.content")}</p>

        <h3>{t("cookie_policy.section2.title")}</h3>
        <p>{t("cookie_policy.section2.cookies.necessary")}</p>
        <p>{t("cookie_policy.section2.cookies.analytics")}</p>

        <h3>{t("cookie_policy.section3.title")}</h3>
        <p>{t("cookie_policy.section3.content")}</p>

        <h3>{t("cookie_policy.section4.title")}</h3>
        <p>{t("cookie_policy.section4.content")}</p>
      </div>
    </div>
  );
};

export default CookiePolicyModal;
