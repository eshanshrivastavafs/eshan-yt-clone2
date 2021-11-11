import { createStore, applyMiddleware, combineReducers } from "redux";
//inorder to combine multiple reducers we use combineReducers
import { composeWithDevTools } from "redux-devtools-extension";
// compositeWithDevTools is a store enhancer that will visualize our
// redux store
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
import {
  homeVideosReducer,
  relatedVideoReducer,
  searchedVideosReducer,
} from "./reducers/videos.reducer";
import { selectedVideoReducer } from "./reducers/videos.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentListReducer } from "./reducers/comments.reducer";
import {
  subscriptionsChannelReducer,
  channelVideosReducer,
} from "./reducers/videos.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentListReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
  subscriptionsChannel: subscriptionsChannelReducer,
  channelVideos: channelVideosReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

// import { createStore, applyMiddleware, combineReducers } from "redux";

// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

// import { authReducer } from "./reducers/auth.reducer.js";

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// const store = createStore(
//   rootReducer,
//   {},
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
