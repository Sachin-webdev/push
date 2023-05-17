import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import {
  createMessagereducer,
  getAllMessagereducer,
  messageDeleteReducer,
} from "./reducers/messageReducer";
import {
  addToGalleryReducer,
  allGalleryReducer,
  galleryDeleteReducer,
  singleGalleryReducer,
} from "./reducers/galleryreducer";
import {
  addEvents,
  allEventReducer,
  eventDeleteReducer,
  singleEventReducer,
} from "./reducers/eventReducer";
import { adminReducer, allAdminReducer } from "./reducers/adminReducer";

const reducer = combineReducers({
  newMessage: createMessagereducer,
  allMessages: getAllMessagereducer,
  addTogallery: addToGalleryReducer,
  allGalleryImage: allGalleryReducer,
  gallery: singleGalleryReducer,
  newEvent: addEvents,
  allEvent: allEventReducer,
  event: singleEventReducer,
  admin: allAdminReducer,
  deletemessage: messageDeleteReducer,
  deletegallery: galleryDeleteReducer,
  deleteevent: eventDeleteReducer,
  adminLogin: adminReducer,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
