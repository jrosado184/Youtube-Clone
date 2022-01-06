import { FETCH_VIDEOS, LOADING, loading } from "../actions";

export const initialState = {
  isLoading: false,
  fetchVideos: [],
  errors: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        isLoading: true,
      };
    case FETCH_VIDEOS:
      return {
        fetchVideos: action.payload,
      };
    default:
      return state;
  }
};
