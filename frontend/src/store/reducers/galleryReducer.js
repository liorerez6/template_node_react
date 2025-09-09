import { GALLERY_INIT, GALLERY_SET_QUERY } from "../actions/galleryActions";

const initialState = {
  items: [],     
  query: "",     
  filtered: [],  
};

const normalize = (s) => (s || "").toString().toLowerCase().trim();

export default function galleryReducer(state = initialState, action) {
  switch (action.type) {
    case GALLERY_INIT: {
      const items = action.payload || [];
      return { ...state, items, filtered: items };
    }
    case GALLERY_SET_QUERY: {
      const q = normalize(action.payload);
      if (!q) return { ...state, query: "", filtered: state.items };
      const filtered = state.items.filter((p) => {
        const t = normalize(p.title);
        const a = normalize(p.artist);
        return t.includes(q) || a.includes(q);
      });
      return { ...state, query: action.payload, filtered };
    }
    default:
      return state;
  }
}
