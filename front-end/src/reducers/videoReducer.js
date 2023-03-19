import {
  FETCH_VIDEOS,
  FETCH_CHANNELS,
  FETCH_VIDEOS_AND_CHANNELS,
  FETCH_SEARCH_RESULTS,
} from "../actions";

export const initialState = {
  videos: [],
  channels: [],
  videos_and_channels: [],
  searchedVideos: [],
  errors: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };
    case FETCH_CHANNELS:
      return {
        ...state,
        channels: action.payload,
      };
    case FETCH_VIDEOS_AND_CHANNELS:
      return {
        ...state,
        videos_and_channels: action.payload,
      };
    case FETCH_SEARCH_RESULTS:
      return {
        ...state,
        searchedVideos: action.payload,
      };
    default:
      return state;
  }
};
