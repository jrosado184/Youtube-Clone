import React, { useEffect, useState } from "react";
import { getVideos } from "../actions";
import Recommended from "./Recommended";
import { fetchChannels } from "../actions";
import { CHANNELS, URL } from "../api/api";
import axios from "axios";
import { connect } from "react-redux";
import moment from "moment";

const RecommendedList = ({ dispatch, videos, channels }) => {
  const [loading, setLoading] = useState(true);

  const channelId = [];

  let videos_and_channels = [];

  for (let i = 0; i < videos.length; i++) {
    channelId.push(videos[i]?.snippet?.channelId);

    channels.sort((a, b) => a?.snippet?.title.localeCompare(b?.snippet?.title));
    videos.sort((a, b) =>
      a?.snippet?.channelTitle.localeCompare(b?.snippet?.channelTitle)
    );

    videos_and_channels.push({
      video: videos[i],
      channel: channels[i],
    });
  }

  const getChannels = () => {
    return (dispatch) => {
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&maxResults=50&id=${channelId}&key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          dispatch(fetchChannels(res.data.items));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  useEffect(() => {
    dispatch(getVideos());
    !loading && dispatch(getChannels());
  }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='w-[87%] h-2 flex flex-wrap justify-center my-32 sm:ml-[6%] md:ml-[12%] md3:ml-[8%] md4:ml-[8%] lg:ml-[13%] gap-y-9'>
      {videos_and_channels?.map((info, index) => (
        <Recommended info={info} key={index} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    videos: state.videos,
    channels: state.channels,
  };
};

export default connect(mapStateToProps)(RecommendedList);
