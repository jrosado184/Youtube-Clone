import React from "react";
import premium from "../../assets/youtube.svg";
import { ReactComponent as Trending } from "../../assets/m&s.svg";
import { ReactComponent as Gaming } from "../../assets/gaming.svg";
import { ReactComponent as Music } from "../../assets/live.svg";
import { ReactComponent as News } from "../../assets/fashion.svg";
import { ReactComponent as Learning } from "../../assets/learning.svg";
import { ReactComponent as Sports } from "../../assets/sports.svg";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { ReactComponent as Flag } from "../../assets/flag.svg";
import { ReactComponent as Help } from "../../assets/help.svg";
import { ReactComponent as Feedback } from "../../assets/feedback.svg";

const MoreYT = () => {
  return (
    <div className='pb-6'>
      <h1 className='text-neutral-500 font-semibold ml-4 sm:hidden lg:flex my-4 text-md dark:text-neutral-100'>
        EXPLORE
      </h1>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <Trending className='w-6 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-5 text-md dark:text-neutral-100'>
          Trending
        </p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <Gaming className='w-6 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-5 text-md dark:text-neutral-100'>
          Gaming
        </p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <Music className='w-6 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-5 text-md dark:text-neutral-100'>
          Music
        </p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <News className='w-6 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-5 text-md dark:text-neutral-100'>
          News
        </p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <Learning className='w-6 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-5 text-md dark:text-neutral-100'>
          Learning
        </p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <Sports className='w-6 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-5 text-md dark:text-neutral-100'>
          Sports
        </p>
      </div>
      <hr className='ml-6 sm:hidden lg:flex border-neutral-500/25' />
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <Settings className='w-6 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-5 text-md dark:text-neutral-100'>
          Settings
        </p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <Flag className='w-6 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-5 text-md dark:text-neutral-100'>
          Report History
        </p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <Help className='w-6 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-5 text-md dark:text-neutral-100'>
          Help
        </p>
      </div>
      <div className='md:hidden lg:flex justify-start my-1 hover:bg-gray-100 h-10 items-center'>
        <Feedback className='w-6 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-5 text-md dark:text-neutral-100'>
          Feedback
        </p>
      </div>
    </div>
  );
};

export default MoreYT;
