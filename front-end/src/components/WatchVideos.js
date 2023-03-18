import React, { useEffect, useState } from "react";
import RecommendedList from "./RecommendedList";
import ReactPlayer from "react-player/youtube";
import { ReactComponent as Thumbsup } from "./../assets/thumbs-up.svg";
import { ReactComponent as Thumbsdown } from "../assets/Thumbsdown.svg";
import { ReactComponent as Share } from "../assets/Share.svg";
import { ReactComponent as Download } from "./../assets/download.svg";
import { ReactComponent as Dots } from "../assets/Dots.svg";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getChannels, getVideos } from "../actions/index.js";
import numeral from "numeral";
import moment from "moment";
import SideVideos from "./SideVideos";

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
    <div className='flex'>
      <div className='w-[80%] h-[100vh] flex flex-col my-20 ml-6'>
        <div className='w-[100%] h-[67.25%]'>
          <ReactPlayer
            controls={true}
            playing={true}
            muted={true}
            width={"100%"}
            height={"100%"}
            url={`https://youtube.com/watch?v=${id}`}
          />
        </div>
        <h1 className='text-[1.4rem] font-medium py-1 dark:text-neutral-100'>
          {videoInfo[0]?.snippet.title}
        </h1>
        <div className='w-[100%] flex justify-between items-center pr-36'>
          <div className='w-[100%] flex justify-start items-start'>
            <div className='flex items-center w-[60%]'>
              <div className='w-11 h-11 border-black border 2 rounded-full'>
                <img
                  className='w-full h-full rounded-full'
                  src={channels[0]?.snippet?.thumbnails?.default?.url}
                  alt=''
                />
              </div>
              <div className='flex flex-col justify-center'>
                <p className='ml-2 dark:text-neutral-100'>
                  {channels[0]?.snippet.title}
                </p>
                <p className='ml-2 text-sm dark:text-neutral-100'>
                  {numeral(channels[0]?.statistics?.subscriberCount).format(
                    "a"
                  )}
                  subscribers
                </p>
              </div>
              <button className='ml-4 border-2 border-black rounded-full w-[30%] h-9 text-sm dark:bg-neutral-100'>
                Subscribe
              </button>
            </div>
          </div>
          <div className='w-[32%] flex gap-1'>
            <div className='border-2 border-black w-32 pl-4 pr-4 h-9 rounded-full flex justify-evenly items-center gap-2 dark:bg-neutral-700/50'>
              <Thumbsup className='dark:text-neutral-100 w-5 h-5' />
              <p className='text-sm dark:text-neutral-100'>
                {numeral(videoInfo[0]?.statistics?.likeCount).format("a")}
              </p>
              <hr className='h-6 border border-gray-400 dark:text-neutral-100 dark:border-gray-600' />
              <Thumbsdown className='dark:text-neutral-100 w-5 h-5' />
            </div>
            <button className='border-2 border-black w-28 h-9 rounded-full text-sm flex items-center gap-1 pl-4 pr-4 justify-center dark:bg-neutral-700/50'>
              <Share className='dark:text-neutral-100 w-5 h-5' />{" "}
              <p className='dark:text-neutral-100'>Share</p>
            </button>
            <div className='border-2 border-black w-36 gap-2 pl-4 pr-4 h-9 rounded-full flex items-center justify-center text-sm dark:bg-neutral-700/50'>
              <Download className='dark:text-neutral-100 w-5 h-5' />{" "}
              <p className='dark:text-neutral-100'>Download</p>
            </div>
            <div className='border-2 border-black w-10 gap-1 pl-2 pr-2 h-9 rounded-full flex items-center justify-center text-sm dark:bg-neutral-700/50'>
              <Dots className='dark:text-neutral-100 w-5 h-5' />
            </div>
          </div>
        </div>
        <div className='w-[100%] h-fit border border-black my-4 py-1 rounded-xl line-clamp-2 leading-tight ... p-4 dark:bg-neutral-700/50'>
          <div className='flex gap-2 my-2'>
            <p className='dark:text-neutral-100'>
              {numeral(videoInfo[0]?.statistics?.viewCount).format("a")} views
            </p>
            <p className='dark:text-neutral-100'>
              {moment
                .utc(`${videoInfo[0]?.snippet?.publishedAt}`)
                .local()
                .startOf("seconds")
                .fromNow() === "a day ago"
                ? "1 day ago"
                : moment
                    .utc(`${videoInfo[0]?.snippet?.publishedAt}`)
                    .local()
                    .startOf("seconds")
                    .fromNow()}
            </p>
          </div>
          <p className='dark:text-neutral-100'>
            {videoInfo[0]?.snippet?.description}
          </p>
        </div>
      </div>
      <SideVideos />
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
