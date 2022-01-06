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
        <div className="w-[24%] h-56 border-2 border-gray-500 my-4 m-[.5%]">
          <img
            className="w-full h-full"
            src={videos.snippet.thumbnails.high.url}
          />
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
