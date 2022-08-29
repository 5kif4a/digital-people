import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import "./i18n";
import "animate.css";
import Loading from "./pages/Loading";

const App = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./App")), 1500);
  });
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
