import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Detailed from "./pages/Detailed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="detailed" element={<Detailed />} />
    </Routes>
  );
}

export default App;
