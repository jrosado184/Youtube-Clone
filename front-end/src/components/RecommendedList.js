import React, { useEffect } from "react";
import { getVideos } from "../actions";
import Recommended from "./Recommended";
import { connect } from "react-redux";

const RecommendedList = ({ dispatch, videos, loading }) => {
  useEffect(() => {
    dispatch(getVideos());
  }, []);

  return (
    <div className="w-[87%] h-2 display: flex flex-wrap justify-center my-32 sm:ml-[6%] md:ml-[12%] md3:ml-[8%] md4:ml-[8%] lg:ml-[13%] gap-y-32">
      {videos.map((video) => (
        <Recommended key={video.id} video={video} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    videos: state.videos,
  };
};

export default connect(mapStateToProps)(RecommendedList);