import { VIDEOS, URL } from "../api/api";
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
      .get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=AIzaSyAikmnFoSaBeZHCvf6Bi0aa_XQnt0D_CTM
`)
      .then((res) => {
        dispatch(fetchVideos(res.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
