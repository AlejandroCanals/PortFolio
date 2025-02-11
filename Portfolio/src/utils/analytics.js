import ReactGA from "react-ga4";

const TRACKING_ID = "G-1GT3VH6VZS";

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID, { debug_mode: true });
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
