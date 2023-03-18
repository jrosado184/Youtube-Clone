import React from "react";
import Subscriptions from "./Subscriptions";
import User from "./User.js";
import MoreYT from "./MoreYT";
const SideMenu = () => {
  return (
    <>
      <div className='md:w-12 lg:w-56 h-[94%] leading-none my-4 fixed left-0 top-12 bg-white scrollbar-thin overflow-hidden dark:bg-neutral-900'>
        <User />
        <Subscriptions />
        <MoreYT />
      </div>
    </>
  );
};

export default SideMenu;
