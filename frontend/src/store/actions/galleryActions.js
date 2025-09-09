// Action Types
export const GALLERY_INIT = "GALLERY_INIT";
export const GALLERY_SET_QUERY = "GALLERY_SET_QUERY";

// אנו טוענים רשימה קשיחה מתוך data (לשלב 1)
import { pictures as STATIC_PICTURES } from "../../features/gallery/data/pictures";

// Action Creators
export const initGallery = () => (dispatch) => {
  // שלב 1: דאטה מקומי; בעתיד אפשר להחליף ל-fetch מהשרת
  dispatch({ type: GALLERY_INIT, payload: STATIC_PICTURES });
};

export const setGalleryQuery = (query) => ({
  type: GALLERY_SET_QUERY,
  payload: query ?? "",
});
