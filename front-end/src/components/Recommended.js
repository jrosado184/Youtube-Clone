import React, { useEffect } from "react";
import { API_KEY, VIDEOS } from "../api/api";
import axios from "axios";
import { fetchVideos, getVideos } from "../actions";
import Recommended from "./Recommended";
import { connect } from "react-redux";

const RecommendedList = ({ fetchVideos, dispatch }) => {
  useEffect(() => {
    dispatch(getVideos());
    console.log(fetchVideos);
  }, []);

  return (
    <div className="w-[88%] display: flex flex-wrap ml-20">
      {fetchVideos.map((videos) => (
        <div key={videos.id} className="w-[24%] h-56 my-4 m-[.5%] my-20">
          <img
            className="w-full h-full"
            src={videos.snippet.thumbnails.high.url}
          />
          <div className="w-[100%] h-[40%] py-[2.5%] flex">
            <div className="w-10 h-9 border-2 border-gray-500 rounded-full"></div>
            <div className="w-full h-8 ml-2">
              <h1 className="text-lg font-semibold">{videos.snippet.title}</h1>
              <p className="text-sm leading-5">{videos.snippet.channelTitle}</p>
              <p className="leading-5 text-sm">
                {videos.statistics.viewCount} views
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    fetchVideos: state.fetchVideos,
  };
};
export default connect(mapStateToProps)(RecommendedList);
