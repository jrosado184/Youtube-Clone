import React from "react";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Shorts } from "../../assets/shorts.svg";
import { ReactComponent as Subscriptions } from "../../assets/subscriptions.svg";
import { ReactComponent as Library } from "../../assets/library.svg";
import { ReactComponent as History } from "../../assets/history.svg";
import { ReactComponent as Videos } from "../../assets/videos.svg";
import { ReactComponent as Clock } from "../../assets/clock.svg";
import { ReactComponent as Liked } from "../../assets/liked.svg";

const User = () => {
  return (
    <>
      <div className=' sm:bg-white lg:bg-neutral-200/50 lg:hover:bg-neutral-200/100 lg:dark:bg-neutral-600/25 flex justify-start items-center bg-gray-200 h-10 my-3 rounded-lg hover:bg-gray-200/[15%] dark:hover:bg-neutral-300/[20%] cursor-pointer'>
        <Home className='w-6 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-6 text-md dark:text-neutral-100'>
          Home
        </p>
      </div>
      <div className='md:my-6 flex lg:my-1 items-center h-10 lg:hover:bg-neutral-200/50 dark:hover:bg-neutral-600/25 rounded-lg cursor-pointer'>
        <Shorts className='w-5 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-5 text-md dark:text-neutral-100'>
          Shorts
        </p>
      </div>
      {/*SUBSCRIPTIONS ICON DIV*/}
      <div className='md:my-6 flex lg:my-1 items-center h-10 lg:hover:bg-neutral-200/50 dark:hover:bg-neutral-600/25 rounded-lg cursor-pointer'>
        <Subscriptions className='w-5 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-5 text-md dark:text-neutral-100'>
          Subscriptions
        </p>
      </div>
      {/*LINE*/}
      <div className='flex justify-start flex-col mr-2 my-4'>
        <hr className='sm:hidden lg:flex ml-4 border border-neutral-500/25' />
      </div>
      {/*LIBRARY ICON DIV*/}
      <div className='md:my-6 flex lg:my-1 items-center h-10 lg:hover:bg-neutral-200/50 dark:hover:bg-neutral-600/25 rounded-lg cursor-pointer'>
        <Library className='w-5 ml-6 text-neutral-100 dark:text-neutral-100/[90%]' />
        <p className='sm:hidden lg:inline ml-6 text-md dark:text-neutral-100'>
          Library
        </p>
      </div>
      {/*HISTORY ICON DIV*/}
      <div className='md:my-6 flex lg:my-1 items-center h-10 lg:hover:bg-neutral-200/50 dark:hover:bg-neutral-600/25 rounded-lg cursor-pointer'>
        <History className='w-5 h-6 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-6 text-md dark:text-neutral-100'>
          History
        </p>
      </div>
      {/*YOUR VIDEOS ICON DIV*/}
      <div className='md:my-6 flex lg:my-1 items-center h-10 lg:hover:bg-neutral-200/50 dark:hover:bg-neutral-600/25 rounded-lg cursor-pointer'>
        <Videos className='w-5 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-6 text-md dark:text-neutral-100'>
          Your videos
        </p>
      </div>
      {/*WATCH LATER ICON DIV*/}
      <div className='md:my-6 flex lg:my-1 items-center h-10 lg:hover:bg-neutral-200/50 dark:hover:bg-neutral-600/25 rounded-lg cursor-pointer'>
        <Clock className='w-5 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-6 text-md dark:text-neutral-100'>
          Watch later
        </p>
      </div>
      {/*LIKED VIDEOS ICON DIV*/}
      <div className='md:my-6 flex lg:my-1 items-center h-10 lg:hover:bg-neutral-200/50 dark:hover:bg-neutral-600/25 rounded-lg cursor-pointer'>
        <Liked className='w-5 ml-6 dark:text-neutral-100' />
        <p className='sm:hidden lg:inline ml-6 text-md dark:text-neutral-100'>
          Liked videos
        </p>
      </div>
      {/*LINE*/}
      <div>
        <hr className='ml-6 sm:hidden lg:flex border border-neutral-500/25' />
      </div>
    </>
  );
};

export default User;
