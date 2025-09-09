import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GalleryPage from "./features/gallery/pages/GalleryPage";
import PictureDetailPage from "./features/picture/pages/PictureDetailPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<GalleryPage />} />
      <Route path="/picture/:id" element={<PictureDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;