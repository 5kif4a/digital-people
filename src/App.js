import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Detailed from "./pages/Detailed";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="detailed" element={<Detailed />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
