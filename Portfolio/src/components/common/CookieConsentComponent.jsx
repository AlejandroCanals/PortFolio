import React, { useState, useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { initGA } from "../../utils/analytics.js"; 
import "./cookieConsent.css";

const CookieConsentComponent = () => {
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
        buttonText="Aceptar todas"
        declineButtonText="Rechazar"
        enableDeclineButton
        onAccept={handleAccept}
        onDecline={handleReject}
        buttonStyle={{ backgroundColor: "#28a745", color: "white", padding: "10px 15px", borderRadius: "5px" }}
        declineButtonStyle={{ backgroundColor: "#dc3545", color: "white", padding: "10px 15px", borderRadius: "5px" }}
        style={{ background: "#2B373B", textAlign: "center" }}
      >
        Usamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes aceptar todas, rechazarlas o configurar tus preferencias.
        <button className="settings-button" onClick={() => setShowSettings(true)}>Configurar Cookies</button>
      </CookieConsent>

      {showSettings && (
        <div className="cookie-settings">
          <h3>Configurar Cookies</h3>
          <label>
            <input type="checkbox" checked={preferences.necessary} disabled />
            Cookies Necesarias (Siempre activadas)
          </label>
          <label>
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
            />
            Cookies de Análisis
          </label>
          <label>
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
            />
            Cookies de Marketing
          </label>
          <button onClick={handleSavePreferences}>Guardar Preferencias</button>
          <button onClick={() => setShowSettings(false)}>Cancelar</button>
        </div>
      )}
    </>
  );
};

export default CookieConsentComponent;
