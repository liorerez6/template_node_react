import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initGallery, setGalleryQuery } from "../../../store/actions/galleryActions";
import { selectGalleryFiltered, selectGalleryQuery } from "../../../store/selectors/gallerySelectors";
import SearchBar from "../components/SearchBar";
import GalleryGrid from "../components/GalleryGrid";

const GalleryPage = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectGalleryQuery);
  const items = useSelector(selectGalleryFiltered);

  useEffect(() => {
    dispatch(initGallery());
  }, [dispatch]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Art Talks</h1>
      </div>
      <SearchBar value={query} onChange={(v) => dispatch(setGalleryQuery(v))} />
      <GalleryGrid items={items} />
    </div>
  );
};

export default GalleryPage;
