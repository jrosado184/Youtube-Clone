import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { videos_and_channels } from './RecommendedList';
import { useParams } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

const SideVideos = ({ videos, channels }) => {

    const { id } = useParams()

    const videosExceptCurrent = videos?.filter((video) => video?.id !== id)
    
  return (
    <div className='w-[40%] py-20 flex flex-col gap-1'>
       {videosExceptCurrent?.map((video) => (
        <>
        <div className='flex'>
         <div className='w-[55%] h-[6.6rem] border border-black ml-4 rounded-lg cursor-pointer'>
            <img className='w-full h-[100%] object-cover' src={video?.snippet?.thumbnails?.high?.url} alt=""/>
        </div>
        <div className='ml-1 w-[60%]'>
          <h1 className='text-md font-semibold line-clamp-2 leading-tight ...'>{video?.snippet?.title}</h1>
          <p className='text-xm line-clamp-2 leading-tight ... py-1'>{video?.snippet?.channelTitle}</p>
          <div className='flex items-center h-6 gap-1 pb-[3%]'>
              <p className=' text-sm dark:text-neutral-400'>
                {numeral(video.statistics.viewCount).format("a")} views
              </p>
              <span className='pb-1 dark:text-neutral-400'> &#183;</span>
              <p className='text-xm dark:text-neutral-400'>
                {moment
                  .utc(`${video?.snippet?.publishedAt}`)
                  .local()
                  .startOf("seconds")
                  .fromNow() === "a day ago"
                  ? "1 day ago"
                  : moment
                      .utc(`${video?.snippet?.publishedAt}`)
                      .local()
                      .startOf("seconds")
                      .fromNow()}
              </p>
            </div>
        </div>
        </div>
        </>
       ))}
      </div>
  )
}

const mapStateToProps = (state) => {
    return {
        videos: state.videos,
        channels:state.videos
    }
}

export default connect(mapStateToProps)(SideVideos)