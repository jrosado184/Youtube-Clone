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
    <div className="display: flex items-center justify-between sticky inset-0 z-100 bg-white">
      <div className="display: flex items-center">
        {" "}
        {/* YOUTUBE LOGO AND MENU CONTAINER */}
        <img className="w-5 ml-6" src={menu} alt="menu" />
        <img className="w-24 ml-6 object-contain" src={youtube} alt="youtube" />
      </div>
      <div className="display: flex w-4/12 h-10">
        {" "}
        {/* SEARCH BAR AND VOICE LOGO CONTAINER */}
        <input className="p-3 w-20 flex-1 border-2" placeholder="Search" />
        <button className=" pl-1 border-slate-300 border bg-slate-50	">
          {" "}
          <img
            className="object-contain ml-4 w-[25px] pr-2 mr-4 "
            src={search}
            alt="search"
          />
        </button>
        <img className="w-6 ml-5" src={microphone} />
      </div>
      <div className="display: flex items-center">
        {" "}
        {/* VIDEO, APPS AND USER CONTAINER */}
        <img className="w-6 mr-4" src={camera} />
        <img className="w-4 h-4 mr-4" src={apps} />
        <img className="w-6 h-6 mr-4" src={bell} />
        <img className="w-8 h-28 mr-12" src={profile} />
      </div>
    </div>
  );
};

export default Header;
