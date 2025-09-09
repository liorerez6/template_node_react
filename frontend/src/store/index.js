import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import galleryReducer from "./reducers/galleryReducer";
import chatReducer from "./reducers/chatReducer"; 

const rootReducer = combineReducers({
  gallery: galleryReducer,
  chat: chatReducer, 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;