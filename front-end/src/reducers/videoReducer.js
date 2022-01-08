import { FETCH_VIDEOS, FETCH_CHANNELS, LOADING } from "../actions";

export const initialState = {
  loading: false,
  videos: [],
  channels: [],
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
    default:
      return state;
  }
};
