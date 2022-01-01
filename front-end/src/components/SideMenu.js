import React from "react";
import home from "../assets/home.svg";
import explore from "../assets/explore.png";
import subscriptions from "../assets/subscriptions.svg";

const SideMenu = () => {
  return (
    <div className=" h-screen ml-6 h-full">
      <div className="display: flex">
        <img className="w-6" src={home} />
        <p>Home</p>
      </div>
      <div className="display: flex">
        <img
          className="w-6 rounded-3xl border-2 border-gray-500"
          src={explore}
        />
        <p>Explore</p>
      </div>
      <div className="display: flex">
        <img className="w-6" src={subscriptions} />
        <p>Subscriptions</p>
      </div>
    </div>
  );
};

export default SideMenu;
