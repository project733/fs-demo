import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router, useLocation } from "react-router-dom";

import "./css/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

root.render(
  <React.StrictMode>
    {/* <Router basename={ `/${process.env.PUBLIC_URL}` }> */ }
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
