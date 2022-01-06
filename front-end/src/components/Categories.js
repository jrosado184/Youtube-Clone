import React from "react";
import right from "../assets/right.svg";

const Categories = () => {
  return (
    <div className="scrollbar-hide bg-white fixed top-16 ml-[12%]">
      <div className=" w-[90.5%] h-100">
        {/*TOP LINE*/}
        <div className="w-[100%] display: flex justify-end">
          <hr className="w-[98%] shadow" />
        </div>
        <div className="display: flex justify-start ml-10">
          <div className="w-[100%] h-14 display: flex scrollbar-thin">
            <div className="w-[100%] display: flex">
              {/* ALL DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">All</h1>
              </div>
              {/* GAMING DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Gaming</h1>
              </div>
              {/* LIVE DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Live</h1>
              </div>
              {/* AVIATION DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Aviation</h1>
              </div>
              {/* JAVASCRIPT DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">JavaScript</h1>
              </div>
              {/* HUMANS DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
                <h1>Humans</h1>
              </div>
              {/* ENGINES DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Engines</h1>
              </div>
              {/* SALES DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Sales</h1>
              </div>
              {/* HISTORY DIV*/}
              <div className="w-fit p-3 h-8 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">History</h1>
              </div>
              {/* ADOBE DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Adobe</h1>
              </div>
              {/* CASINOS DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Casinos</h1>
              </div>
              {/* PYTHON DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Python</h1>
              </div>
              {/* MUSIC DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Music</h1>
              </div>
              {/* NODE DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Node</h1>
              </div>
              {/* COMPUTERS DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full  display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Computers</h1>
              </div>
              {/* CRYPTOCURRENCY DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Cryptocurrency</h1>
              </div>
              {/* JAVA DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Java</h1>
              </div>
              {/* AIRPLANES DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Airplanes</h1>
              </div>
              {/* PILOTS DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Pilots</h1>
              </div>
              {/* BACKEND DIV*/}
              <div className="w-fit p-4 h-8 bg-gray-100 border border-zinc-300 rounded-full display: flex justify-center items-center my-3 ml-3">
                <h1 className="text-md">Backend</h1>
              </div>
            </div>
          </div>
          {/* RIGHT ARROW DIV*/}
          <div className="display: flex ml-12">
            <img className="w-6" src={right} />
          </div>
        </div>
      </div>
      <div className="w-full display: flex justify-end">
        <hr className="w-[98%]" />
      </div>
    </div>
  );
};

export default Categories;
