import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import "./i18n";
import "animate.css";
import Loading from "./pages/Loading";
import App from "./App";

const LazyApp = lazy(() => {
  localStorage.setItem("notfirstVisit", 1);

  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./App")), 1500);
  });
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {localStorage.getItem("notfirstVisit") ? (
      <App />
    ) : (
      <Suspense fallback={<Loading />}>
        <LazyApp />
      </Suspense>
    )}
  </React.StrictMode>
);
