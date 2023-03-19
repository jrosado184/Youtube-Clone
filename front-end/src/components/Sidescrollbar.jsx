import React from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Sidescrollbar({ videos, channels }) {

    const { id } = useParams()

    const currentVideo = videos.filter((video) => video.id === id)

  return (
    <div className='w-[90%] h-10 ml-4 flex gap-1 scrollbar-hide overflow-auto'>
        <div className='border border-black rounded-lg w-auto pl-3 pr-3 h-8 flex justify-center items-center cursor-pointer bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900'>All</div>
        <div className='border border-black rounded-lg flex w-auto pl-3 pr-3 h-8 justify-center items-center text-sm cursor-pointer dark:bg-neutral-700/[65%] dark:text-neutral-100'><p className='w-auto whitespace-nowrap'>From {currentVideo[0]?.snippet?.channelTitle }</p></div>
        <div className='border border-black rounded-lg flex w-auto pl-3 pr-3 h-8 justify-center items-center text-sm cursor-pointer dark:bg-neutral-700/[65%] dark:text-neutral-100'><p className='w-auto whitespace-nowrap'>Live</p></div>
        <div className='border border-black rounded-lg flex w-auto pl-3 pr-3 h-8 justify-center items-center text-sm cursor-pointer dark:bg-neutral-700/[65%] dark:text-neutral-100'><p className='w-auto whitespace-nowrap'>Recently Uploaded</p></div>
        <div className='border border-black rounded-lg flex w-auto pl-3 pr-3 h-8 justify-center items-center text-sm cursor-pointer  dark:bg-neutral-700/[65%] dark:text-neutral-100'><p className='w-auto whitespace-nowrap'></p>Watched</div>
        <div className='border border-black rounded-lg flex w-auto pl-3 pr-3 h-8 justify-center items-center text-sm cursor-pointer dark:bg-neutral-700/[65%] dark:text-neutral-100'>hello</div>
        <div className='border border-black rounded-lg flex w-auto pl-3 pr-3 h-8 justify-center items-center text-sm cursor-pointer  dark:bg-neutral-700/[65%] dark:text-neutral-100'><p className='w-auto whitespace-nowrap'>hello</p></div>
       
    </div>
  )
}

const mapStateToProps = state => {
    return {
        videos: state.videos,
        channels:state.channels
    }
}

export default connect(mapStateToProps)(Sidescrollbar)