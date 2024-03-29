import React, { useEffect, useState } from "react";
import Recommended from "./Recommended";
import { getChannels, getVideos } from "../../actions";
import { connect } from "react-redux";
import Categories from "./Categories";
import SideMenu from "../side-menu/SideMenu";

const RecommendedList = ({ dispatch, videos, channels }) => {
  const videos_and_channels = [];
  const channelId = [],
    dupChannelIdMap = {},
    dupChannelIds = [];

  const [loading, setLoading] = useState(true);

  for (let i = 0; i < videos.length; i++) {
    channelId.push(videos[i]?.snippet?.channelId);

    videos_and_channels.push({
      video: videos[i],
      channel: channels[i],
    });

    if (!dupChannelIdMap[videos[i].snippet.channelId]) {
      dupChannelIdMap[videos[i].snippet.channelId] = 1;
    } else {
      dupChannelIds.push(videos[i].snippet.channelId);
    }
  }

  useEffect(() => {
    dispatch(getVideos());
    !loading && dispatch(getChannels(channelId, dupChannelIds));
  }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <SideMenu />
      <Categories />
      <div className='w-[90%] h-2 flex flex-wrap justify-center my-32 sm:ml-[6%] md:ml-[12%] md3:ml-[8%] md4:ml-[8%] md4:ml-[13%] desktop:ml-[12%] gap-y-20'>
        {channels.length === videos.length && !loading
          ? videos_and_channels?.map((info, index) => (
              <Recommended info={info} key={index} />
            ))
          : null}
      </div>
    </>
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
