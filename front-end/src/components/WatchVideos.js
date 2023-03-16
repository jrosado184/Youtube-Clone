import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Thumbsup from "./../assets/thumbs-up.jsx";
import Thumbsdown from "../assets/Thumbsdown.jsx";
import Share from "../assets/Share.jsx";
import Download from "./../assets/download.jsx";
import Dots from "../assets/Dots.jsx";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getChannels, getVideos } from "../actions/index.js";
import numeral from "numeral";

const WatchVideos = ({ videos, channels, dispatch }) => {
  const { id } = useParams();
  console.log(videos[0]);

  const [loading, setLoading] = useState(true);

  const videoInfo = videos.filter((video) => video.id === id);

  useEffect(() => {
    dispatch(getVideos());
    !loading && dispatch(getChannels(videoInfo[0]?.snippet?.channelId));
  }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='w-full h-[100vh] flex flex-col my-20 ml-6'>
      <div className='w-[68.2%] h-[70%]'>
        <ReactPlayer
          controls={true}
          playing={true}
          muted={true}
          width={"100%"}
          height={"100%"}
          url={`https://youtube.com/watch?v=${id}`}
        />
      </div>
      <h1 className='text-[1.4rem] font-medium py-1'>
        {videoInfo[0]?.snippet.title}
      </h1>
      <div className='w-[70%] flex justify-between items-center pr-20'>
        <div className='w-[60%] flex justify-start items-start'>
          <div className='flex items-center w-[60%]'>
            <div className='w-11 h-11 border-black border 2 rounded-full'>
              <img
                className='w-full h-full rounded-full'
                src={channels[0]?.snippet?.thumbnails?.default?.url}
                alt=''
              />
            </div>
            <div className='flex flex-col justify-center'>
              <p className='ml-2'>{channels[0]?.snippet.title}</p>
              <p className='ml-2 text-sm'>
                {numeral(channels[0]?.statistics?.subscriberCount).format("a")}{" "}
                subscribers
              </p>
            </div>
            <button className='ml-4 border-2 border-black rounded-full w-[30%] h-9 text-sm'>
              Subscribe
            </button>
          </div>
        </div>
        <div className='w-[32%] flex gap-1'>
          <div className='border-2 border-black w-32 pl-2 pr-2 h-9 rounded-full flex justify-evenly items-center gap-2'>
            <Thumbsup />{" "}
            <p className='text-sm'>
              {numeral(videoInfo[0]?.statistics?.likeCount).format("a")}
            </p>
            <hr className='h-6 border border-gray-400' />
            <Thumbsdown />
          </div>
          <button className='border-2 border-black w-28 h-9 rounded-full text-sm flex items-center gap-1 pl-2 pr-2 justify-center'>
            <Share /> Share
          </button>
          <div className='border-2 border-black w-36 gap-1 pl-2 pr-2 h-9 rounded-full flex items-center justify-center text-sm'>
            <Download /> Download
          </div>
          <div className='border-2 border-black w-10 gap-1 pl-2 pr-2 h-9 rounded-full flex items-center justify-center text-sm'>
            <Dots />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
    channels: state.channels,
  };
};

export default connect(mapStateToProps)(WatchVideos);
