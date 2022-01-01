import React from "react";
import right from "../assets/right.svg";

const Categories = () => {
  return (
    <>
      <div className="display: flex justify-end">
        <hr className="w-10/12 shadow" />
      </div>
      <div className="w-full display: flex justify-end">
        <div className="w-10/12 display: flex justify-end items-center">
          <div className="w-20 h-8 bg-gray-100 border border-zinc-300 rounded-2xl display: flex justify-center items-center my-3 m-1">
            <h1>All</h1>
          </div>
          <div className="w-32 h-8 bg-gray-100 border border-zinc-300 rounded-xl display: flex justify-center items-center my-3 m-1">
            <h1>Gaming</h1>
          </div>
          <div className="w-20 h-8 bg-gray-100 border border-zinc-300 rounded-xl display: flex justify-center items-center my-3 m-1">
            <h1>Live</h1>
          </div>
          <div className="w-32 h-8 bg-gray-100 border border-zinc-300 rounded-xl display: flex justify-center items-center my-3 m-1">
            <h1>Aviation</h1>
          </div>
          <div className="w-40 h-8 bg-gray-100 border border-zinc-300 rounded-xl display: flex justify-center items-center my-3 m-1">
            <h1>JavaScript</h1>
          </div>
          <div className="w-32 h-8 bg-gray-100 border border-zinc-300 rounded-xl display: flex justify-center items-center my-3 m-1">
            <h1>Humans</h1>
          </div>
          <div className="w-32 h-8 bg-gray-100 border border-zinc-300 rounded-xl display: flex justify-center items-center my-3 m-1">
            <h1>Engines</h1>
          </div>
          <div className="w-24 h-8 bg-gray-100 border border-zinc-300 rounded-xl display: flex justify-center items-center my-3 m-1">
            <h1>Sales</h1>
          </div>
          <div className="w-32 h-8 bg-gray-100 border border-zinc-300 rounded-xl display: flex justify-center items-center my-3 m-1">
            <h1>History</h1>
          </div>
          <div className="w-64 h-8 bg-gray-100 border border-zinc-300 rounded-xl display: flex justify-center items-center my-3 m-1">
            <h1>Law enforcement</h1>
          </div>
          <div className="w-32 h-8 bg-gray-100 border border-zinc-300 rounded-xl display: flex justify-center items-center my-3 m-1">
            <h1>Casinos</h1>
          </div>
          <div className="w-32 h-8 bg-gray-100 border border-zinc-300 rounded-xl display: flex justify-center items-center my-3 m-1">
            <h1>Python</h1>
          </div>
          <div className="w-52 h-8 bg-gray-100 border border-zinc-300 rounded-xl display: flex justify-center items-center my-3 m-1">
            <h1>Stock markets</h1>
          </div>
          <div className="w-52 h-8 bg-gray-100 border border-zinc-300 rounded-xl display: flex justify-center items-center my-3 m-1">
            <h1>Game shows</h1>
          </div>
          <div className="w-52 h-8 bg-gray-100 border border-zinc-300 rounded-xl display: flex justify-center items-center my-3 m-1">
            <h1>Computers</h1>
          </div>
          <div className="w-64 h-8 bg-gray-100 border border-zinc-300 rounded-xl display: flex justify-center items-center mr-14 my-3 m-1">
            <h1>Cryptocurrencies</h1>
          </div>
          <div className="w-6 h-6 mr-6">
            <img className="w-6" src={right} />
          </div>
        </div>
      </div>
      <div className="w-full display: flex justify-end">
        <hr className="w-10/12" />
      </div>
    </>
  );
};

export default Categories;
