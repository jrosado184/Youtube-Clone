import React from "react";
import right from "../assets/right.svg";

const Categories = () => {
  return (
    <div className=" w-[100%]">
      <div className="w-[100%] display: flex justify-end">
        <hr className="w-[80%] shadow" />
      </div>
      <div className="display: flex justify-end">
        <div className="w-[100%] h-18 display: flex justify-end">
          <div className="w-[100%] display: flex">
            <div className="w-36 h-10 bg-gray-100 border border-zinc-300 rounded-full display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">All</h1>
            </div>
            <div className="w-72 h-10 bg-gray-100 border border-zinc-300 rounded-full display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Gaming</h1>
            </div>
            <div className="w-44 h-10 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Live</h1>
            </div>
            <div className="w-72 h-10 bg-gray-100 border border-zinc-300 rounded-full display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Aviation</h1>
            </div>
            <div className="w-96 h-10 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">JavaScript</h1>
            </div>
            <div className="w-72 h-10 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
              <h1>Humans</h1>
            </div>
            <div className="w-72 h-10 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Engines</h1>
            </div>
            <div className="w-64 h-10 bg-gray-100 border border-zinc-300 rounded-full display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Sales</h1>
            </div>
            <div className="w-64 h-10 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">History</h1>
            </div>
            <div className="w-1/3 h-10 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Law enforcement</h1>
            </div>
            <div className="w-72 h-10 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Casinos</h1>
            </div>
            <div className="w-72 h-10 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Python</h1>
            </div>
            <div className="w-1/3 h-10 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Stock markets</h1>
            </div>
            <div className="w-1/3 h-10 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Game shows</h1>
            </div>
            <div className="w-96 h-10 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
              <h1 className="text-lg">Computers</h1>
            </div>
            <div className="w-1/3 h-10 bg-gray-100 border border-zinc-300 rounded-full display: flex justify-center items-center mr-14 my-3 ml-3">
              <h1 className="text-lg">Cryptocurrency</h1>
            </div>
            <div className="w-12 h-9 display: flex justify-center items-center my-4">
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
