import { VIDEOS, API_KEY, URL } from "../api/api";
import axios from "axios";

export const LOADING = "LOADING";

export const loading = () => {
  return { type: LOADING };
};

export const FETCH_VIDEOS = "FETCH_VIDEOS";

export const fetchVideos = (videos) => {
  return { type: FETCH_VIDEOS, payload: videos };
};

export const FETCH_CHANNELS = "FETCH_CHANNELS";

export const fetchChannels = (channel) => {
  return { type: FETCH_CHANNELS, payload: channel };
};

export const getVideos = () => {
  return (dispatch) => {
    dispatch(loading);
    axios
      .get(`${URL}${VIDEOS}${API_KEY}`)
      .then((res) => {
        dispatch(fetchVideos(res.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
