import React from "react";
import Joshua from "../../assets/joshua.jpg";
import downArrow from "../../assets/downArrow.svg";
import traversy from "../../assets/traversy.jpg";
import sonny from "../../assets/sonny.jpg";
import biaheza from "../../assets/biaheza.jpg";
import web from "../../assets/web.jpg";
import pedro from "../../assets/pedro.jpg";
import cody from "../../assets/cody.jpg";

const Subscriptions = () => {
  return (
    <div>
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
    </div>
  );
};

export default Subscriptions;
