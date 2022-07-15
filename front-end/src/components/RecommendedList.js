import React, { useEffect } from 'react';
import { getVideos } from '../actions';
import Recommended from './Recommended';
import { fetchChannels } from '../actions';
import { CHANNELS, URL } from '../api/api';
import axios from 'axios';
import { connect } from 'react-redux';

const RecommendedList = ({ dispatch, videos, channels }) => {
  const getChannels = () => {
    return (dispatch) => {
      axios
        .get(
          `${URL}${CHANNELS}${videos[0]?.videos[1]?.snippet.channelId}${process.env.REACT_APP_API_KEY}`,
          { params: { part: 'snippet', id: videos[0]?.snippet.channelId } }
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
  }, []);

  useEffect(() => {
    dispatch(getChannels());
  }, [getVideos]);

  return (
    <div className='w-[87%] h-2 display: flex flex-wrap justify-center my-32 sm:ml-[6%] md:ml-[12%] md3:ml-[8%] md4:ml-[8%] lg:ml-[13%] gap-y-32'>
      {videos.map((video) => (
        <Recommended key={video.id} video={video} channels={channels} />
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
