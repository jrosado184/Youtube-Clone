import React from "react";
import right from "../assets/right.svg";

const Categories = () => {
  return (
    <div className="fixed z-30 w-[100%]">
      <div className="w-[80%] display: flex justify-end">
        <hr className="w-[80%] shadow" />
      </div>
      <div className="display: flex justify-end">
        <div className="w-[86%] h-14 display: flex justify-end">
          <div className="w-[100%] display: flex">
            <div className="w-28 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>All</h1>
            </div>
            <div className="w-44 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>Gaming</h1>
            </div>
            <div className="w-28 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>Live</h1>
            </div>
            <div className="w-44 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>Aviation</h1>
            </div>
            <div className="w-48 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>JavaScript</h1>
            </div>
            <div className="w-44 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>Humans</h1>
            </div>
            <div className="w-44 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>Engines</h1>
            </div>
            <div className="w-32 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>Sales</h1>
            </div>
            <div className="w-44 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>History</h1>
            </div>
            <div className="w-80 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>Law enforcement</h1>
            </div>
            <div className="w-44 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>Casinos</h1>
            </div>
            <div className="w-44 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>Python</h1>
            </div>
            <div className="w-64 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>Stock markets</h1>
            </div>
            <div className="w-60 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>Game shows</h1>
            </div>
            <div className="w-56 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>Computers</h1>
            </div>
            <div className="w-80 h-9 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center mr-14 my-3 ml-3">
              <h1>Cryptocurrency</h1>
            </div>
            <div className="w-12 h-9 display: flex justify-center items-center my-3">
              <img src={right} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full display: flex justify-end">
        <hr className="w-[84.5%]" />
      </div>
    </div>
  );
};

export default Categories;
