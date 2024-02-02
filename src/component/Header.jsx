import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#00496b] p-4">
      <div className="max-width-[1240px] py-[10px] items-center mx-auto flex justify-around">
        <div className="text-3xl text-[#fff] font-bold">Strength Studio</div>
        {!toggle && (
          <IoMdMenu
            className="md:hidden block text-white text-xl"
            onClick={() => setToggle(!toggle)}
          />
        )}
        {toggle && (
          <IoMdClose
            className="md:hidden block text-white text-xl"
            onClick={() => setToggle(!toggle)}
          />
        )}
        <ul className="hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Membership</li>
        </ul>
        {/* on small screen */}
        <ul
          className={`duration-500 md:hidden w-full h-screen text-white gap-10 fixed bg-black left-0 top-[89px]
         ${toggle ? "left-[0]" : "left-[-100%]"}
        `}
        >
          <li className="p-3">Home</li>
          <li className="p-3">About</li>
          <li className="p-3">Classes</li>
          <li className="p-3">Membership</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
