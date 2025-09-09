export const GALLERY_INIT = "GALLERY_INIT";
export const GALLERY_SET_QUERY = "GALLERY_SET_QUERY";


const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const initGallery = () => async (dispatch) => {
  try {
    const res = await fetch(`${API_BASE}/api/pictures`, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    dispatch({ type: GALLERY_INIT, payload: data });
  } catch (err) {
    console.error("Failed to load pictures:", err);
    dispatch({ type: GALLERY_INIT, payload: [] });
  }
};

export const setGalleryQuery = (query) => ({
  type: GALLERY_SET_QUERY,
  payload: query ?? "",
});
