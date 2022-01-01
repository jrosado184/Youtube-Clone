import React from "react";
import menu from "../assets/menu.svg";
import youtube from "../assets/youtube.png";
import search from "../assets/search.svg";
import microphone from "../assets/microphone.svg";
import camera from "../assets/camera.svg";
import apps from "../assets/apps.png";
import bell from "../assets/bell.svg";
import profile from "../assets/profile.svg";

const Header = () => {
  return (
    <div className="w-full h-16 display: flex items-center justify-between">
      <div className="display: flex items-center">
        {" "}
        {/* YOUTUBE LOGO AND MENU CONTAINER */}
        <img className="w-6 ml-7" src={menu} alt="menu" />
        <img className="w-28 ml-8 object-contain" src={youtube} alt="youtube" />
      </div>
      <div className="display: flex w-4/12 h-12    ">
        {" "}
        {/* SEARCH BAR AND VOICE LOGO CONTAINER */}
        <input
          className="p-2 w-20 flex-1 border-2 border-gray-300 shadow-md"
          placeholder="Search"
        />
        <button className=" pl-1 border-slate-300 border bg-slate-100 shadow-md border-gray-300 border-1 border-l-0">
          {" "}
          <img
            className="object-contain ml-4 w-[29px] pr-2 mr-4 "
            src={search}
            alt="search"
          />
        </button>
        <img className="w-6 ml-5" src={microphone} />
      </div>
      <div className="display: flex items-center">
        {" "}
        {/* VIDEO, APPS AND USER CONTAINER */}
        <img className="w-7 mr-7" src={camera} />
        <img className="w-5 h-5 mr-7" src={apps} />
        <img className="w-8 h-8 mr-7" src={bell} />
        <img className="w-10 h-28 mr-12" src={profile} />
      </div>
    </div>
  );
};

export default Header;
