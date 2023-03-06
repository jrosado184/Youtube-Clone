import React, { useEffect } from 'react';
import { fetchChannels } from '../actions';
import { connect } from 'react-redux';
import { CHANNELS, URL } from '../api/api';
import axios from 'axios';
import numeral from 'numeral';

const Recommended = ({ info }) => {
  
  let views = info?.video?.statistics?.viewCount;

  return (
    <div className='sm:w-[32.2%] md:w-[90%] md4:w-[32%] h-52 md2:w-[46%] h-72 lg:w-[21%] h-56 m-[.5%]'>
      <div className='w-[100%] h-[93%] m-2'>
      <img
        className='w-full h-full object-cover'
        src={info?.video?.snippet?.thumbnails?.high?.url}
        alt=''
      />
        
      </div>
      <div className='w-[100%] h-[40%] py-[2.5%] flex'>
        <div className='w-9 h-8 border-black border 2 rounded-full'>
          <img
            className='w-full h-full rounded-full'
            src={info?.channel?.snippet?.thumbnails?.default?.url}
            alt=''
          />
        </div>
        <div className='w-full h-8 ml-2'>
          <h1 className='text-lg font-semibold line-clamp-2 ...'>
            {info?.video?.snippet?.title}
          </h1>
          <p className='text-md leading-5'>{info?.video?.snippet?.channelTitle}</p>
          <p className='leading-6 text-md'>
            {numeral(views).format('a')} views
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
    videos: state.videos,
  };
};
export default connect(mapStateToProps)(Recommended);
