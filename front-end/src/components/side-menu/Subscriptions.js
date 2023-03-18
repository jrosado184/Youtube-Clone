import React from "react";
import Joshua from "../../assets/joshua.jpg";
import { ReactComponent as DownArrow } from "../../assets/downArrow.svg";
import traversy from "../../assets/traversy.jpg";
import sonny from "../../assets/sonny.jpg";
import biaheza from "../../assets/biaheza.jpg";
import web from "../../assets/web.jpg";
import pedro from "../../assets/pedro.jpg";
import cody from "../../assets/cody.jpg";

const Subscriptions = () => {
  return (
    <>
      <div>
        <h1 className='text-gray-500 font-semibold ml-4 sm:hidden lg:flex my-4 text-md dark:text-neutral-100'>
          SUBSCRIPTIONS
        </h1>
      </div>
      <div className='md:hidden lg:flex p-3 items-center cursor-pointer lg:hover:bg-neutral-200/50 dark:hover:bg-neutral-600/25 rounded-lg'>
        <img className='w-6 ml-2 rounded-full' src={Joshua} alt='' />
        <p className='ml-4 text-md dark:text-neutral-100'>Joshua Fluke</p>
      </div>
      <div className='md:hidden lg:flex items-center p-3 cursor-pointer lg:hover:bg-neutral-200/50 dark:hover:bg-neutral-600/25 rounded-lg'>
        <img className='w-6 ml-2 rounded-full' src={traversy} alt='' />
        <p className='ml-4 text-md dark:text-neutral-100'>Traversy Media</p>
      </div>
      <div className='md:hidden lg:flex items-center p-3 cursor-pointer lg:hover:bg-neutral-200/50 dark:hover:bg-neutral-600/25 rounded-lg'>
        <img className='w-6 ml-2 rounded-full' src={sonny} alt='' />
        <p className='ml-4 text-md dark:text-neutral-100'>Sonny Sangha</p>
      </div>
      <div className='md:hidden lg:flex items-center py-3 cursor-pointer lg:hover:bg-neutral-200/50 dark:hover:bg-neutral-600/25 rounded-lg'>
        <img className='w-6 ml-2 rounded-full' src={biaheza} alt='' />
        <p className='ml-4 text-md dark:text-neutral-100'>Biaheza</p>
      </div>
      <div className='md:hidden lg:flex items-center my-4 cursor-pointer'>
        <img className='w-6 ml-5 rounded-full' src={web} alt='' />
        <p className='ml-4 text-md dark:text-neutral-100'>Web Dev Simplified</p>
      </div>
      <div className='md:hidden lg:flex items-center my-4 cursor-pointer'>
        <img className='w-6 ml-5 rounded-full' src={pedro} alt='' />
        <p className='ml-4 text-md dark:text-neutral-100'>PedroTech</p>
      </div>
      <div className='md:hidden lg:flex items-center my-4 cursor-pointer'>
        <img className='w-6 ml-5 rounded-full' src={cody} alt='' />
        <p className='ml-4 text-md dark:text-neutral-100'>Cody Engel</p>
      </div>
      <div className='md:hidden lg:flex items-center my-4 cursor-pointer'>
        <DownArrow className='w-6 ml-5 rounded-full dark:text-neutral-100' />
        <p className='ml-4 text-md dark:text-neutral-100'>Show 135 more </p>
      </div>
      <hr className='ml-6 sm:hidden lg:flex border-neutral-500/25' />
    </>
  );
};

export default Subscriptions;
