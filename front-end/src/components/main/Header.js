import React, { useState } from "react";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";
import { ReactComponent as Microphone } from "../../assets/microphone.svg";
import { ReactComponent as Camera } from "../../assets/camera.svg";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import me from "../../assets/me.png";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getSearchedChannels } from "../../actions";

const Header = ({ dispatch, searchedVideos }) => {
  const nav = useNavigate();

  const [searchResults, setSearchResults] = useState("");

  const handleSearch = () => {
    nav(`/results/${searchResults}`);
  };

  return (
    <div className='w-full h-12 py-8 display: flex items-center justify-between fixed top-0 bg-white dark:bg-black'>
      <div className='display: flex items-center'>
        <Menu className='sm:hidden lg:flex w-5 ml-7 dark:text-neutral-100' />
        <Youtube
          onClick={() => nav("/")}
          className='w-32 dark:text-neutral-100 cursor-pointer'
        />
      </div>
      <div className='md:hidden md2:flex flex-shrink w-[40%] lg:w-[44%]'>
        <input
          onChange={(e) => setSearchResults(e.target.value)}
          className='pl-3 h-10 flex-1 border-2 border-gray-300 rounded-l-full dark:bg-black dark:border-neutral-800 placeholder:dark:text-neutral-500 dark:focus:border-blue-900/75 outline-0 dark:text-neutral-100'
          placeholder='Search'
          name='searchResults'
          value={searchResults}
        />
        <button className='flex justify-center items-center h-10 w-14 rounded-r-full dark:bg-neutral-800 dark:border dark:border-neutral-800'>
          <SearchIcon
            onClick={handleSearch}
            className='dark:text-neutral-100 w-5 h-5'
          />
        </button>
        <Microphone className='w-6 ml-5 dark:text-neutral-100' />
      </div>
      <div className='display: flex items-center'>
        <Camera className='dark:text-neutral-100 md2:flex w-6 mr-6 sm:hidden' />
        <Bell className='dark:text-neutral-100 lg:w-6 h-7 mr-6' />
        {/* <img className='md:w-6 mr-2 md2:hidden' src={searchIcon} /> */}
        <div>
          <img
            className='bg-white rounded-full w-10 h-10 mr-6 p-[.9]'
            src={me}
            alt='avatar'
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchedVideos: state.searchedVideos,
  };
};

export default connect(mapStateToProps)(Header);
