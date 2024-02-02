import React from "react";
import gym from "../assets/gym.jpg";
const Topics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 rounded" src={gym} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">
            Experience the Power of Fitness
          </p>
          <p>
            Transform your body and mind in our state-of-the-art facility,
            equipped with the latest fitness technology and led by experienced
            trainers.
          </p>
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topics;
