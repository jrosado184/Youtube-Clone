import React from "react";
import home from "../assets/home.svg";
import explore from "../assets/explore.png";
import subscriptions from "../assets/subscriptions.svg";
import library from "../assets/library.svg";
import history from "../assets/history.png";
import videos from "../assets/videos.svg";
import clock from "../assets/clock.svg";
import liked from "../assets/liked.svg";

const SideMenu = () => {
  return (
    <div className="h-screen w-[12%] leading-none my-4 ">
      {/*HOME ICON DIV*/}
      <div className="display: flex justify-start items-center bg-gray-200 h-10">
        <img className="w-5 ml-6" src={home} />
        <p className="ml-7">Home</p>
      </div>
      {/*EXPLORE ICON DIV*/}
      <div className="display: flex items-center h-10 hover:bg-gray-100">
        <img
          className="w-5 h-5 rounded-3xl border-2 border-gray-700 ml-6"
          src={explore}
          alt=""
        />
        <p className="ml-7">Explore</p>
      </div>
      {/*SUBSCRIPTIONS ICON DIV*/}
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-5 ml-6" src={subscriptions} alt="" />
        <p className="ml-7">Subscriptions</p>
      </div>
      {/*LINE*/}
      <div className="display: flex justify-start flex-col mr-2">
        <hr />
      </div>
      {/*LIBRARY ICON DIV*/}
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-5 ml-6" src={library} alt="" />
        <p className="ml-7">Library</p>
      </div>
      {/*HISTORY ICON DIV*/}
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-5 h-5 ml-6" src={history} alt="" />
        <p className="ml-7">History</p>
      </div>
      {/*YOUR VIDEOS ICON DIV*/}
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-5 ml-6" src={videos} alt="" />
        <p className="ml-7">Your videos</p>
      </div>
      {/*WATCH LATER ICON DIV*/}
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-5 ml-6" src={clock} alt="" />
        <p className="ml-7">Watch later</p>
      </div>
      {/*LIKED VIDEOS ICON DIV*/}
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-5 ml-6" src={liked} alt="" />
        <p className="ml-7">Liked videos</p>
      </div>
      {/*LINE*/}
      <div>
        <hr />
      </div>
      {/* SUBSCRIPTIONS DIV*/}
      <div>
        <h1 className="font-semibold my-3 ml-4">SUBSCRIPTIONS</h1>
      </div>
    </div>
  );
};

export default SideMenu;
