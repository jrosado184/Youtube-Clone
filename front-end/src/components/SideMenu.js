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
    <div className=" h-screen ml-6 w-[13%] fixed">
      <div className="display: flex justify-start my-8 ">
        <img className="w-7" src={home} />
        <p className="ml-7">Home</p>
      </div>
      <div className="display: flex">
        <img
          className="w-6 rounded-3xl border-2 border-gray-700"
          src={explore}
        />
        <p className="ml-7">Explore</p>
      </div>
      <div className="display: flex justify-start my-8">
        <img className="w-7" src={subscriptions} />
        <p className="ml-7">Subscriptions</p>
      </div>
      <div className="display: flex justify-start flex-col mr-2">
        <hr />
      </div>
      <div className="display: flex justify-start my-8">
        <img className="w-7" src={library} />
        <p className="ml-7">Library</p>
      </div>
      <div className="display: flex justify-start my-8">
        <img className="w-7" src={history} />
        <p className="ml-7">History</p>
      </div>
      <div className="display: flex justify-start my-8">
        <img className="w-7" src={videos} />
        <p className="ml-7">Your videos</p>
      </div>
      <div className="display: flex justify-start my-8">
        <img className="w-7" src={clock} />
        <p className="ml-7">Watch later</p>
      </div>
      <div className="display: flex justify-start my-8">
        <img className="w-7" src={liked} />
        <p className="ml-7">Watch later</p>
      </div>
      <div>
        <hr />
      </div>
      <div className="my-5">
        <h1 className="font-semibold">SUBSCRIPTIONS</h1>
      </div>
    </div>
  );
};

export default SideMenu;
