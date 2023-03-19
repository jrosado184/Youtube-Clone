import React from 'react'
import Sidescrollbar from './Sidescrollbar';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

const SideVideos = ({ videos, channels }) => {

    const { id } = useParams()

    const nav = useNavigate()

    const videosExceptCurrent = videos?.filter((video) => video?.id !== id)
    
  return (
    <div className='w-[30%] py-20 flex flex-col gap-2'>
      <Sidescrollbar/>
       {videosExceptCurrent?.map((video, index) => (
        <div key={index}>
        <div onClick={() => nav(`/${video.id}`)} className='flex'>
         <div className='w-[45%] h-[6rem] ml-4 rounded-lg cursor-pointer'>
            <img className='w-full h-[100%] object-cover rounded-lg' src={video?.snippet?.thumbnails?.high?.url} alt=""/>
        </div>
        <div className='ml-2 w-[60%] cursor-pointer'>
          <h1 className='text-md font-semibold line-clamp-2 leading-tight ... dark:text-neutral-100'>{video?.snippet?.title}</h1>
          <p className='text-xm line-clamp-2 leading-tight ... py-[2%] dark:text-neutral-400'>{video?.snippet?.channelTitle}</p>
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
        </div>
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