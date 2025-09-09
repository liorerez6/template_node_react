export const GALLERY_INIT = "GALLERY_INIT";
export const GALLERY_SET_QUERY = "GALLERY_SET_QUERY";

import { pictures as STATIC_PICTURES } from "../../features/gallery/data/pictures";

export const initGallery = () => (dispatch) => {
  dispatch({ type: GALLERY_INIT, payload: STATIC_PICTURES });
};

export const setGalleryQuery = (query) => ({
  type: GALLERY_SET_QUERY,
  payload: query ?? "",
});
