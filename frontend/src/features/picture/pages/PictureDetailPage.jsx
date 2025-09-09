import React from "react";
import { useParams, Link } from "react-router-dom";

const PictureDetailPage = () => {
  const { id } = useParams();
  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-2">Picture #{id}</h1>
      <p className="text-gray-600 mb-6">
        Detail & discussion page will be implemented in Stage 2.
      </p>
      <Link to="/" className="text-blue-600 underline">
        ← Back to Gallery
      </Link>
    </div>
  );
};

export default PictureDetailPage;
