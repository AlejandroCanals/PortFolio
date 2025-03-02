import ReactGA from "react-ga4";

const TRACKING_ID = "G-1GT3VH6VZS"; // Reemplaza con tu ID real

export const initGA = () => {
  const analyticsConsent = document.cookie
    .split("; ")
    .find(row => row.startsWith("analytics="))
    ?.split("=")[1];

  if (analyticsConsent === "true") {
    ReactGA.initialize(TRACKING_ID, { debug_mode: true }); // 🔹 Activa el modo depuración
    console.log("✅ Google Analytics Inicializado");
  } else {
    console.log("⚠️ Google Analytics NO activado por falta de consentimiento");
  }
};

export const logPageView = () => {
  const analyticsConsent = document.cookie
    .split("; ")
    .find(row => row.startsWith("analytics="))
    ?.split("=")[1];

  if (analyticsConsent === "true") {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    console.log("📊 Página registrada en GA:", window.location.pathname);
  }
};
