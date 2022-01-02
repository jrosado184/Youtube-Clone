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
    <div className="ml-8 h-screen mb-6 w-full">
      <div className="display: flex justify-start items-center my-5">
        <img className="w-5" src={home} />
        <p className="ml-7">Home</p>
      </div>
      <div className="display: flex items-center my-4">
        <img
          className="w-5 h-5 rounded-3xl border-2 border-gray-700"
          src={explore}
          alt=""
        />
        <p className="ml-7">Explore</p>
      </div>
      <div className="display: flex justify-start my-4">
        <img className="w-5" src={subscriptions} alt="" />
        <p className="ml-7">Subscriptions</p>
      </div>
      <div className="display: flex justify-start flex-col mr-2">
        <hr />
      </div>
      <div className="display: flex justify-start my-4">
        <img className="w-5" src={library} alt="" />
        <p className="ml-7">Library</p>
      </div>
      <div className="display: flex justify-start my-4">
        <img className="w-5 h-5" src={history} alt="" />
        <p className="ml-7">History</p>
      </div>
      <div className="display: flex justify-start my-4">
        <img className="w-5" src={videos} alt="" />
        <p className="ml-7">Your videos</p>
      </div>
      <div className="display: flex justify-start my-4">
        <img className="w-5" src={clock} alt="" />
        <p className="ml-7">Watch later</p>
      </div>
      <div className="display: flex justify-start my-4">
        <img className="w-5" src={liked} alt="" />
        <p className="ml-7">Liked videos</p>
      </div>
      <div>
        <hr />
      </div>
      <div>
        <h1 className="font-semibold my-3">SUBSCRIPTIONS</h1>
      </div>
    </div>
  );
};

export default SideMenu;
