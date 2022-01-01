import React from "react";
import right from "../assets/right.svg";

const Categories = () => {
  return (
    <div className=" w-[100%] fixed">
      <div className="w-[100%] display: flex justify-end">
        <hr className="w-[80%] shadow" />
      </div>
      <div className="display: flex justify-end">
        <div className="w-[93%] h-18 display: flex justify-end">
          <div className="w-[93%] display: flex">
            <div className="w-28 h-12 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">All</h1>
            </div>
            <div className="w-44 h-11 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Gaming</h1>
            </div>
            <div className="w-28 h-11 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Live</h1>
            </div>
            <div className="w-44 h-11 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Aviation</h1>
            </div>
            <div className="w-48 h-11 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">JavaScript</h1>
            </div>
            <div className="w-44 h-11 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1>Humans</h1>
            </div>
            <div className="w-44 h-11 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Engines</h1>
            </div>
            <div className="w-32 h-11 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Sales</h1>
            </div>
            <div className="w-44 h-11 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">History</h1>
            </div>
            <div className="w-80 h-11 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Law enforcement</h1>
            </div>
            <div className="w-44 h-11 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Casinos</h1>
            </div>
            <div className="w-44 h-11 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Python</h1>
            </div>
            <div className="w-64 h-11 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Stock markets</h1>
            </div>
            <div className="w-60 h-11 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Game shows</h1>
            </div>
            <div className="w-56 h-11 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Computers</h1>
            </div>
            <div className="w-80 h-11 bg-gray-100 border border-zinc-300 rounded-3xl display: flex justify-center items-center mr-14 my-3 ml-3">
              <h1 className="text-lg">Cryptocurrency</h1>
            </div>
            <div className="w-12 h-9 display: flex justify-center items-center my-4 mr-8">
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
