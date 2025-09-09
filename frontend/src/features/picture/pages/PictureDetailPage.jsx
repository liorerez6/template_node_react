import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectGalleryItems } from "../../../store/selectors/gallerySelectors";
import ChatInterface from "../components/ChatInterface";

const PictureDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pictures = useSelector(selectGalleryItems);
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    const foundPicture = pictures.find(p => p.id === id);
    if (foundPicture) {
      setPicture(foundPicture);
    } else if (pictures.length > 0) {
      navigate("/");
    }
  }, [id, pictures, navigate]);

  if (!picture) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <button
        onClick={() => navigate("/")}
        className="mb-4 text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back to Gallery
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <img
                src={picture.imageUrl}
                alt={picture.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-2">{picture.title}</h1>
              <p className="text-lg text-gray-600 mb-4">By {picture.artist}</p>
              <p className="text-gray-700 leading-relaxed">{picture.description}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <ChatInterface pictureId={picture.id} />
        </div>
      </div>
    </div>
  );
};

export default PictureDetailPage;