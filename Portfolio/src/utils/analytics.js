import ReactGA from "react-ga4";
const TRACKING_ID = "G-1GT3VH6VZS";

export const initGA = () => {
  const analyticsConsent = document.cookie
    .split("; ")
    .find(row => row.startsWith("analytics="))
    ?.split("=")[1];

  if (analyticsConsent === "true") {
    ReactGA.initialize(TRACKING_ID, { debug_mode: false }); // 🔹 Activa el modo depuración
  }
};

export const logPageView = () => {
  const analyticsConsent = document.cookie
    .split("; ")
    .find(row => row.startsWith("analytics="))
    ?.split("=")[1];

  if (analyticsConsent === "true") {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }
};
