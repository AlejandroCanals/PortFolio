import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // 🔹 Importar traducciones
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { initGA } from "../../utils/analytics.js"; 
import "./cookieConsent.css";

const CookieConsentComponent = () => {
  const { t } = useTranslation(); // 🔹 Obtener función de traducción
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Siempre activadas
    analytics: getCookieConsentValue("analytics") === "true",
    marketing: getCookieConsentValue("marketing") === "true"
  });

  useEffect(() => {
    if (preferences.analytics) {
      initGA(); // 🔹 Inicializa Google Analytics solo si el usuario ha aceptado
    }
  }, [preferences.analytics]);

  const handleAccept = () => {
    document.cookie = "analytics=true; path=/";
    document.cookie = "marketing=true; path=/";
    setPreferences({ ...preferences, analytics: true, marketing: true });
    setShowSettings(false);
    initGA(); // 🔹 Inicializa Google Analytics después de aceptar
  };

  const handleReject = () => {
    document.cookie = "analytics=false; path=/";
    document.cookie = "marketing=false; path=/";
    setPreferences({ ...preferences, analytics: false, marketing: false });
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    document.cookie = `analytics=${preferences.analytics}; path=/`;
    document.cookie = `marketing=${preferences.marketing}; path=/`;
    setShowSettings(false);
    if (preferences.analytics) {
      initGA(); // 🔹 Inicializa Google Analytics solo si se activan las cookies de análisis
    }
  };

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText={t("cookies.accept_all")} // 🔹 Usar traducciones
        declineButtonText={t("cookies.reject")}
        enableDeclineButton
        onAccept={handleAccept}
        onDecline={handleReject}
        buttonStyle={{ backgroundColor: "#28a745", color: "white", padding: "10px 15px", borderRadius: "5px" }}
        declineButtonStyle={{ backgroundColor: "#dc3545", color: "white", padding: "10px 15px", borderRadius: "5px" }}
        style={{ background: "var(--title-color-blue)", textAlign: "center" }}
      >
        {t("cookies.banner_text")}
        <button className="settings-button" onClick={() => setShowSettings(true)}>{t("cookies.configure")}</button>
      </CookieConsent>

      {showSettings && (
        <div className="cookie-settings">
          <h3>{t("cookies.settings_title")}</h3>
          <label>
            <input type="checkbox" checked={preferences.necessary} disabled />
            {t("cookies.necessary")}
          </label>
          <label>
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
            />
            {t("cookies.analytics")}
          </label>
          <label>
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
            />
            {t("cookies.marketing")}
          </label>
          <button onClick={handleSavePreferences}>{t("cookies.save_preferences")}</button>
          <button onClick={() => setShowSettings(false)}>{t("cookies.cancel")}</button>
        </div>
      )}
    </>
  );
};

export default CookieConsentComponent;
