import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Detailed from "./pages/Detailed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="detailed" element={<Detailed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
