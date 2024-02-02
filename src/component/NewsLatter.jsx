import React from "react";

const NewsLatter = () => {
  return (
    <div className="bg-[#00496b] p-4">
      <div className="max-w-[1240px] mx-auto  md:flex justify-between pi-[50px]">

        <div className="h-[200px] flex flex-col justify-center">
          <h1 className="text-[#fff] text-2xl md:text-3xl font-bold">
          Fitness Insider
          </h1>
          <p className="text-[#fff] font-bold">
            Sign up to our newslatter and stay up to date.
          </p>
        </div>
        
        <div className="h-[200px] py-2 mt-12">
          <input
            type="text"
            placeholder=" email"
            className="p-3 mx-2 rounded"
          />
          <button className="bg-black text-white p-3 rounded md:w-[19%]">
            Notify
          </button>
          <br />
          <p className="text-[#fff]">
            your privacy is our main concern, <br /> read privacy & policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
