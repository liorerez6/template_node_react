import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Health from "./pages/Health";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/health" element={<Health />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
