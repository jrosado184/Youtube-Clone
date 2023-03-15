import React from "react";
import Thumbsup from "./../assets/thumbs-up.jsx";
import Thumbsdown from "../assets/Thumbsdown.jsx";
import Share from "../assets/Share.jsx";
import Download from "./../assets/download.jsx";
import Dots from "../assets/Dots.jsx";

const WatchVideos = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col my-20 ml-6'>
      <div className='w-[63%] h-[60%] border-2 border-gray-500'></div>
      <h1 className='text-[1.4rem] font-semibold py-1'>
        why you NEED math for programming
      </h1>
      <div className='w-[60%] flex justify-between items-center pr-14'>
        <div className='w-[60%] flex justify-start items-start'>
          <div className='flex items-center w-[60%]'>
            <div className='w-11 h-11 border-2 border-black rounded-full'></div>
            <div className='flex flex-col justify-center'>
              <p className='ml-2'>Joma Tech</p>
              <p className='ml-2 text-sm'>2.15M Subscribers</p>
            </div>
            <button className='ml-4 border-2 border-black rounded-full w-[30%] h-9 text-sm'>
              Subscribe
            </button>
          </div>
        </div>
        <div className='w-[32%] flex gap-1'>
          <div className='border-2 border-black w-32 pl-2 pr-2 h-9 rounded-full flex justify-evenly items-center gap-2'>
            <Thumbsup /> <p className='text-sm'>379k</p>
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

export default WatchVideos;
