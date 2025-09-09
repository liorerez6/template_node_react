import React from "react";
import PictureCard from "./PictureCard";

const GalleryGrid = ({ items }) => {
  if (!items?.length) {
    return <p className="text-gray-600">No pictures found.</p>;
  }
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((p) => (
        <PictureCard key={p.id} picture={p} />
      ))}
    </div>
  );
};

export default GalleryGrid;
