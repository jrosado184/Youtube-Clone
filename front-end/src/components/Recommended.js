import React, { useEffect } from "react";
import { fetchChannels } from "../actions";
import { connect } from "react-redux";
import { CHANNELS, API_KEY, URL } from "../api/api";
import axios from "axios";

const Recommended = ({ video, dispatch, channels }) => {
  const getChannels = () => {
    return (dispatch) => {
      axios
        .get(`${URL}${CHANNELS}${video.snippet.channelId}${API_KEY}`)
        .then((res) => {
          dispatch(fetchChannels(res.data.items));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  useEffect(() => {
    dispatch(getChannels());
  }, []);

  return (
    <div className="sm:w-[32.2%] md:w-[90%] md4:w-[32%] h-80 md2:w-[46%] h-72 lg:w-[21%] h-56 m-[.5%]">
      <img className="w-full h-full " src={video.snippet.thumbnails.high.url} />
      <div className="w-[100%] h-[40%] py-[2.5%] flex">
        <div className="w-full h-8 ml-2">
          <h1 className="text-lg font-semibold">{video.snippet.title}</h1>
          <p className="text-md leading-5">{video.snippet.channelTitle}</p>
          <p className="leading-6 text-md">
            {video.statistics.viewCount} views
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    channels: state.channels,
  };
};
export default connect(mapStateToProps)(Recommended);
