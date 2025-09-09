import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

// קיימים אצלך
import healthReducer from "./reducers/healthReducer";

// חדש לגלריה
import galleryReducer from "./reducers/galleryReducer";

const rootReducer = combineReducers({
  health: healthReducer,   // אם לא צריך – אפשר להסיר בהמשך
  gallery: galleryReducer, // הוספה לגלריה
});

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
