import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GalleryPage from "./features/gallery/pages/GalleryPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<GalleryPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
