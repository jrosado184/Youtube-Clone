import React from "react";
import home from "../assets/home.svg";
import explore from "../assets/explore.png";
import subscriptions from "../assets/subscriptions.svg";
import library from "../assets/library.svg";
import history from "../assets/history.png";
import videos from "../assets/videos.svg";
import clock from "../assets/clock.svg";
import liked from "../assets/liked.svg";
import Joshua from "../assets/joshua.jpg";
import downArrow from "../assets/downArrow.svg";
import traversy from "../assets/traversy.jpg";
import sonny from "../assets/sonny.jpg";
import biaheza from "../assets/biaheza.jpg";
import web from "../assets/web.jpg";
import pedro from "../assets/pedro.jpg";
import cody from "../assets/cody.jpg";
import premium from "../assets/youtube-premium.svg";
import movies from "../assets/m&s.svg";
import gaming from "../assets/gaming.svg";
import live from "../assets/live.svg";
import fashion from "../assets/fashion.svg";
import learning from "../assets/learning.svg";
import sports from "../assets/sports.svg";
import settings from "../assets/settings.svg";
import flag from "../assets/flag.svg";
import help from "../assets/help.svg";
import feedback from "../assets/feedback.svg";

const SideMenu = () => {
  return (
    <div className="md:w-12 lg:w-56 h-[90%] leading-none my-4 fixed left-0 top-12 bg-white scrollbar-thin overflow-hidden">
      {/*HOME ICON DIV*/}
      <div className=" sm:bg-white lg:bg-gray-200 display: flex justify-start items-center bg-gray-200 h-10 my-3">
        <img className="w-5 ml-6" src={home} />
        <p className="sm:hidden lg:inline ml-8">Home</p>
      </div>
      {/*EXPLORE ICON DIV*/}
      <div className="md:my-6 flex lg:my-1 flex items-center h-10 hover:bg-gray-100">
        <img
          className="w-6 h-6 rounded-3xl border-2 border-gray-700 ml-6"
          src={explore}
          alt=""
        />
        <p className="sm:hidden lg:inline ml-7">Explore</p>
      </div>
      {/*SUBSCRIPTIONS ICON DIV*/}
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-6 ml-6" src={subscriptions} alt="" />
        <p className="sm:hidden lg:inline ml-7">Subscriptions</p>
      </div>
      {/*LINE*/}
      <div className="display: flex justify-start flex-col mr-2 my-4">
        <hr className="sm:hidden lg:flex" />
      </div>
      {/*LIBRARY ICON DIV*/}
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-6 ml-6" src={library} alt="" />
        <p className="sm:hidden lg:inline ml-7">Library</p>
      </div>
      {/*HISTORY ICON DIV*/}
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center sm:hidden lg:flex">
        <img className="w-6 h-6 ml-6" src={history} alt="" />
        <p className="sm:hidden lg:inline ml-7">History</p>
      </div>
      {/*YOUR VIDEOS ICON DIV*/}
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center sm:hidden lg:flex">
        <img className="w-6 ml-6" src={videos} alt="" />
        <p className="sm:hidden lg:inline ml-7">Your videos</p>
      </div>
      {/*WATCH LATER ICON DIV*/}
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center sm:hidden lg:flex">
        <img className="w-6 ml-6" src={clock} alt="" />
        <p className="sm:hidden lg:inline ml-7">Watch later</p>
      </div>
      {/*LIKED VIDEOS ICON DIV*/}
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center sm:hidden lg:flex">
        <img className="w-6 ml-6" src={liked} alt="" />
        <p className="sm:hidden lg:inline ml-7">Liked videos</p>
      </div>
      {/*LINE*/}
      <div>
        <hr className="sm:hidden lg:flex" />
      </div>
      {/* SUBSCRIPTIONS DIV*/}
      <div>
        <h1 className="text-gray-500 font-semibold ml-4 sm:hidden lg:flex my-4">
          SUBSCRIPTIONS
        </h1>
      </div>
      <div className="md:hidden lg:flex items-center">
        <img className="w-6 ml-5 rounded-full" src={Joshua} />
        <p className="ml-4">Joshua Fluke</p>
      </div>
      <div className="md:hidden lg:flex items-center my-4">
        <img className="w-6 ml-5 rounded-full" src={traversy} />
        <p className="ml-4">Traversy Media</p>
      </div>
      <div className="md:hidden lg:flex items-center my-4">
        <img className="w-6 ml-5 rounded-full" src={sonny} />
        <p className="ml-4">Sonny Sangha</p>
      </div>
      <div className="md:hidden lg:flex items-center my-4">
        <img className="w-6 ml-5 rounded-full" src={biaheza} />
        <p className="ml-4">Biaheza</p>
      </div>
      <div className="md:hidden lg:flex items-center my-4">
        <img className="w-6 ml-5 rounded-full" src={web} />
        <p className="ml-4">Web Dev Simplified</p>
      </div>
      <div className="md:hidden lg:flex items-center my-4">
        <img className="w-6 ml-5 rounded-full" src={pedro} />
        <p className="ml-4">PedroTech</p>
      </div>
      <div className="md:hidden lg:flex items-center my-4">
        <img className="w-6 ml-5 rounded-full" src={cody} />
        <p className="ml-4">Cody Engel</p>
      </div>
      <div className="md:hidden lg:flex items-center my-4">
        <img className="w-6 ml-5 rounded-full" src={downArrow} />
        <p className="ml-4 text-sm">Show 135 more </p>
      </div>
      <hr className="sm:hidden lg:flex" />
      <h1 className="text-gray-500 font-semibold ml-4 sm:hidden lg:flex my-4">
        MORE FROM YOUTUBE
      </h1>
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-6 ml-6" src={premium} alt="" />
        <p className="sm:hidden lg:inline ml-5">Youtube Premium</p>
      </div>
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-6 ml-6" src={movies} alt="" />
        <p className="sm:hidden lg:inline ml-5">Movies & Shows</p>
      </div>
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-6 ml-6" src={gaming} alt="" />
        <p className="sm:hidden lg:inline ml-5">Gaming</p>
      </div>
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-6 ml-6" src={live} alt="" />
        <p className="sm:hidden lg:inline ml-5">Live</p>
      </div>
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-6 ml-6" src={fashion} alt="" />
        <p className="sm:hidden lg:inline ml-5">Fashion & Beauty</p>
      </div>
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-6 ml-6" src={learning} alt="" />
        <p className="sm:hidden lg:inline ml-5">Learning</p>
      </div>
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-6 ml-6" src={sports} alt="" />
        <p className="sm:hidden lg:inline ml-5">Sports</p>
      </div>
      <hr className="sm:hidden lg:flex" />
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-6 ml-6" src={settings} alt="" />
        <p className="sm:hidden lg:inline ml-5">Settings</p>
      </div>
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-6 ml-6" src={flag} alt="" />
        <p className="sm:hidden lg:inline ml-5">Report History</p>
      </div>
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-6 ml-6" src={help} alt="" />
        <p className="sm:hidden lg:inline ml-5">Help</p>
      </div>
      <div className="display: flex justify-start my-1 hover:bg-gray-100 h-10 items-center">
        <img className="w-6 ml-6" src={feedback} alt="" />
        <p className="sm:hidden lg:inline ml-5">Feedback</p>
      </div>
    </div>
  );
};

export default SideMenu;
