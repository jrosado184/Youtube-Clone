import {
  FETCH_VIDEOS,
  FETCH_CHANNELS,
  FETCH_VIDEOS_AND_CHANNELS,
  LOADING,
} from "../actions";

export const initialState = {
  loading: false,
  videos: [],
  channels: [],
  videos_and_channels: [],
  errors: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        loading: true,
      };
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
    default:
      return state;
  }
};
