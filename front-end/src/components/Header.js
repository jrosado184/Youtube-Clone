import React from "react";
import menu from "../assets/menu.svg";
import youtube from "../assets/youtube.png";
import search from "../assets/search.svg";
import microphone from "../assets/microphone.svg";
import camera from "../assets/camera.svg";
import apps from "../assets/apps.png";
import bell from "../assets/bell.svg";
import me from "../assets/me.png";
import searchIcon from "../assets/searchIcon.svg";

const Header = () => {
  return (
    <div className='w-full h-12 py-8 display: flex items-center justify-between fixed top-0 bg-white'>
      <div className='display: flex items-center'>
        <img className='sm:hidden lg:flex w-5 ml-7' src={menu} alt='menu' />
        <img
          className='sm:ml-6 w-24 object-contain lg:w-24 ml-12'
          src={youtube}
          alt='youtube'
        />
      </div>
      <div className='md:hidden md2:flex flex-shrink w-[47%] lg:w-[37%]'>
        <input
          className='p-2 w-20 h-10 flex-1 border-2 border-gray-300 rounded-full'
          placeholder='Search'
        />
        {/* <button className=' pl-1 border-slate-300 border bg-slate-100 absolute'>
          <img
            className="object-contain ml-4 w-[29px] pr-2 left-80 relative rounded-full "
            src={search}
            alt="search"
          />
        </button> */}
        <img className='w-6 ml-5' src={microphone} />
      </div>
      <div className='display: flex items-center'>
        <img className='md2:flex w-5 mr-6 sm:hidden' src={camera} />
        <img className='md2:flex w-4 h-4 mr-4 sm:hidden' src={apps} />
        <img className='lg:w-6 h-8 mr-2' src={bell} />
        <img className='md:w-6 mr-2 md2:hidden' src={searchIcon} />
        <img className='w-10 h-10 mr-6' src={me} />
      </div>
    </div>
  );
};

export default Header;
