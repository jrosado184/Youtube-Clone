import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSearchedChannels } from '../../actions';
import SideMenu from '../side-menu/SideMenu';

const SearchResults = ({ searchedVideos, dispatch }) => {

    const { id } = useParams()

    const searchResult = id.split("%20")

    useEffect(() => {
        dispatch(getSearchedChannels(searchResult));
    }, [id])

  return (
    <>
    <SideMenu/>
    <div className='w-[100%] h-[100vh] flex flex-wrap justify-center my-32 ml-[5%]'>
    <hr className='w-[70%] border-none h-[1px] bg-neutral-600/50 mb-4'/>
        {searchedVideos.map((video) => (
           <div className='w-[80%] ml-[10%] py-1 flex flex-col cursor-pointer '>
           <img
             className='w-[35%] h-[14.2rem] object-cover rounded-xl'
             src={video?.snippet?.thumbnails?.high?.url}
             alt=''
           />
         </div>
        ))}
    </div>
  </>
  )
}

const mapStateToProps = state => {
    return {
        searchedVideos: state.searchedVideos
    }
}

export default connect(mapStateToProps) (SearchResults)