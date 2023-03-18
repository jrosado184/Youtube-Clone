import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Recommended = ({ info }) => {
  let views = info?.video?.statistics?.viewCount;

  const videoDuration = info?.video?.contentDetails?.duration;

  const nav = useNavigate();

  return (
    <div
      onClick={() => nav(`/${info.video.id}`)}
      className='sm:w-[32.2%] md:w-[90%] md4:w-[32%] md2:w-[46%] h-52 lg:w-[27.5%] m-[.5%]'
    >
      <div className='w-[100%] h-[95.5%] m-2 cursor-pointer '>
        <img
          className='w-full h-full object-cover rounded-xl'
          src={info?.video?.snippet?.thumbnails?.high?.url}
          alt=''
        />
        {/* <p className='relative'>Time</p> */}
      </div>
      <div className='w-[100%] flex ml-2'>
        <div className='w-9 h-8 border-black border 2 rounded-full'>
          <img
            className='w-full h-full rounded-full'
            src={info?.channel?.snippet?.thumbnails?.default?.url}
            alt=''
          />
        </div>
        <div className='w-full h-8 ml-2'>
          <h1 className='text-md font-semibold line-clamp-2 leading-tight ... cursor-pointer dark:text-neutral-100'>
            {info?.video?.snippet?.title}
          </h1>
          <div className='flex flex-col py-[2%]'>
            <p className='text-sm dark:text-neutral-400'>
              {info?.video?.snippet?.channelTitle}
            </p>
            <div className='flex items-center h-6 gap-1 pb-[3%]'>
              <p className=' text-sm dark:text-neutral-400'>
                {numeral(views).format("a")} views
              </p>
              <span className='pb-1 dark:text-neutral-400'> &#183;</span>
              <p className='text-xm dark:text-neutral-400'>
                {moment
                  .utc(`${info?.video?.snippet?.publishedAt}`)
                  .local()
                  .startOf("seconds")
                  .fromNow() === "a day ago"
                  ? "1 day ago"
                  : moment
                      .utc(`${info?.video?.snippet?.publishedAt}`)
                      .local()
                      .startOf("seconds")
                      .fromNow()}
              </p>
            </div>
          </div>
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
