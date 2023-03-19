import { getAllDupChannelIcons } from "../algorithms/GetAllDupChannelIcons";
import { VIDEOS, URL } from "../api/api";
import axios from "axios";

export const FETCH_VIDEOS = "FETCH_VIDEOS";

export const fetchVideos = (videos) => {
  return { type: FETCH_VIDEOS, payload: videos };
};

export const FETCH_CHANNELS = "FETCH_CHANNELS";

export const fetchChannels = (channel) => {
  return { type: FETCH_CHANNELS, payload: channel };
};

export const FETCH_VIDEOS_AND_CHANNELS = "FETCH_VIDEOS_AND_CHANNELS";

export const fetchVideosAndChannels = (videosAndChannels) => {
  return { type: FETCH_VIDEOS_AND_CHANNELS, payload: videosAndChannels };
};
export const FETCH_SEARCH_RESULTS = "FETCH_SEARCH_RESULTS";

export const fetchSearchResults = (searched) => {
  return { type: FETCH_SEARCH_RESULTS, payload: searched };
};

export const getVideos = () => {
  return (dispatch) => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=AIzaSyAikmnFoSaBeZHCvf6Bi0aa_XQnt0D_CTM
`
      )
      .then((res) => {
        res.data.items.sort((a, b) =>
          a?.snippet?.channelTitle.localeCompare(b?.snippet?.channelTitle)
        );
        dispatch(fetchVideos(res.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getChannels = (channelId, dupChannelIds) => {
  return (dispatch) => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&part=status&maxResults=50&id=${channelId}&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        if (dupChannelIds !== undefined) {
          getAllDupChannelIcons(res, dupChannelIds);
        }
        dispatch(fetchChannels(res.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getSearchedChannels = (input) => {
  return (dispatch) => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${input}&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        dispatch(fetchSearchResults(res.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
