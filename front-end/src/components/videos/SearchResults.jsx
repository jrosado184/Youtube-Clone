import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getChannels, getSearchedChannels } from '../../actions';
import SideMenu from '../side-menu/SideMenu';
import numeral from 'numeral';
import moment from 'moment';

const SearchResults = ({ searchedVideos, dispatch, channels }) => {

    const [loading, setLoading ] = useState(true)

    const dupChannelIdMap = {}

    const dupChannelIds = []

    const videos_and_channels = []

    const channelIds = []

    const { id } = useParams()

    for (let i = 0; i < searchedVideos?.length; i++) {
      channelIds.push(searchedVideos[i]?.snippet?.channelId);
        videos_and_channels.push({
          video: searchedVideos[i],
          channel: channels[i],
        });
    
        if (!dupChannelIdMap[searchedVideos[i].snippet.channelId]) {
          dupChannelIdMap[searchedVideos[i].snippet.channelId] = 1;
        } else {
          dupChannelIds.push(searchedVideos[i].snippet.channelId);
        }
      }
    

    useEffect(() => {
    dispatch(getSearchedChannels(id.split("%20")));
        searchedVideos.length && dispatch(getChannels(channelIds, dupChannelIds))
    }, [id, loading])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [loading])


  return (
    <>
    <SideMenu/>
    <div className='w-[100%] h-[100vh] flex flex-wrap justify-center my-32 ml-[5%]'>
    <hr className='w-[70%] border-none h-[1px] bg-neutral-600/50 mb-4'/>
         {channels.length && videos_and_channels.map((video, index) => (
              <div key={index} className='w-[80%] h-[27vh] ml-[10%] py-1 flex flex-col cursor-pointer desktop:h-[22vh]'>
            <div className='flex'>
            <img
                className='object-cover rounded-xl h-[12rem] w-[22rem]'
                src={video?.video?.snippet?.thumbnails?.high.url}
                alt=''
              />
              <div className='ml-4 flex flex-col items-start'>
              <h1 className='dark:text-neutral-100 text-[1.125] w-[18rem] leading-2 line-clamp-2 leading-tight ...'>{video?.video?.snippet?.title}</h1>
                <div className='flex gap-1 items-center'>
                <p className='text-sm dark:text-neutral-400'>{numeral(video?.video?.statistics?.views).format("a")} views</p>
                <span className='pb-1 dark:text-neutral-400'> &#183;</span>
                <p className='text-sm dark:text-neutral-400'> {moment
                  .utc(`${video?.video?.snippet?.publishedAt}`)
                  .local()
                  .startOf("seconds")
                  .fromNow() === "a day ago"
                  ? "1 day ago"
                  : moment
                      .utc(`${video?.video?.snippet?.publishedAt}`)
                      .local()
                      .startOf("seconds")
                      .fromNow()}</p>
                </div>
                <div className='flex items-center gap-2 my-2'>
                    <img className='w-7 h-7 bg-white rounded-full object-fit' src={video?.channel?.snippet?.thumbnails?.high?.url} alt=""/>
                    <p className='text-sm dark:text-neutral-400'>{video?.video?.snippet?.channelTitle}</p>
                </div>
                <p className='dark:text-neutral-100 text-[0.70rem] w-[18rem] whitespace-none'>{video?.video?.snippet?.description}</p>
              </div>
            </div>
            </div>
         ))}
    </div>
  </>
  )
}

const mapStateToProps = state => {
    return {
        searchedVideos: state.searchedVideos,
        channels: state.channels
    }
}

export default connect(mapStateToProps) (SearchResults)