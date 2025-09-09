import React from "react";
import { Link } from "react-router-dom";

const PictureCard = ({ picture }) => {
  return (
    <Link to={`/picture/${picture.id}`} className="block">
      <div className="bg-white rounded-lg shadow hover:shadow-md transition">
        <div className="aspect-[3/2] w-full overflow-hidden rounded-t-lg bg-gray-100">
          <img
            src={picture.imageUrl}
            alt={picture.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold">{picture.title}</h3>
          <p className="text-sm text-gray-500">By {picture.artist}</p>
          <p className="mt-2 text-sm text-gray-700 line-clamp-2">
            {picture.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PictureCard;
