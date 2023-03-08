import React from "react";
import premium from "../../assets/youtube-premium.svg";
import movies from "../../assets/m&s.svg";
import gaming from "../../assets/gaming.svg";
import live from "../../assets/live.svg";
import fashion from "../../assets/fashion.svg";
import learning from "../../assets/learning.svg";
import sports from "../../assets/sports.svg";
import settings from "../../assets/settings.svg";
import flag from "../../assets/flag.svg";
import help from "../../assets/help.svg";
import feedback from "../../assets/feedback.svg";

const MoreYT = () => {
  return (
    <div className='pb-6'>
      <h1 className='text-gray-500 font-semibold ml-4 sm:hidden lg:flex my-4 text-md'>
        MORE FROM YOUTUBE
      </h1>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <img className='w-6 ml-6' src={premium} alt='' />
        <p className='sm:hidden lg:inline ml-5 text-md'>Youtube Premium</p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <img className='w-6 ml-6' src={movies} alt='' />
        <p className='sm:hidden lg:inline ml-5 text-md'>Movies & Shows</p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <img className='w-6 ml-6' src={gaming} alt='' />
        <p className='sm:hidden lg:inline ml-5 text-md'>Gaming</p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <img className='w-6 ml-6' src={live} alt='' />
        <p className='sm:hidden lg:inline ml-5 text-md'>Live</p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <img className='w-6 ml-6' src={fashion} alt='' />
        <p className='sm:hidden lg:inline ml-5 text-md'>Fashion & Beauty</p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <img className='w-6 ml-6' src={learning} alt='' />
        <p className='sm:hidden lg:inline ml-5 text-md'>Learning</p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <img className='w-6 ml-6' src={sports} alt='' />
        <p className='sm:hidden lg:inline ml-5 text-md'>Sports</p>
      </div>
      <hr className='sm:hidden lg:flex' />
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <img className='w-6 ml-6' src={settings} alt='' />
        <p className='sm:hidden lg:inline ml-5 text-md'>Settings</p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <img className='w-6 ml-6' src={flag} alt='' />
        <p className='sm:hidden lg:inline ml-5 text-md'>Report History</p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <img className='w-6 ml-6' src={help} alt='' />
        <p className='sm:hidden lg:inline ml-5 text-md'>Help</p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <img className='w-6 ml-6' src={feedback} alt='' />
        <p className='sm:hidden lg:inline ml-5 text-md'>Feedback</p>
      </div>
    </div>
  );
};

export default MoreYT;
