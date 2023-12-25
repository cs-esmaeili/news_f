import React from "react";
import MiniProfile from "./MiniProfile";
import { FaBell } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

const Header = ({open , setOpen}) => {
  return (
    <div className="flex p-2  items-center">
      <RiMenu3Line className="text-2xl mr-3 lg:hidden" onClick={() => setOpen(!open)}/>
      <div className="grow bg-secondary rounded-xl p-2">header</div>
      <div className="flex ml-3 mr-3">
        <MdSunny className="text-2xl" />
        <FaBell className="text-2xl ml-3" />
      </div>
      <MiniProfile />
    </div>
  );
};

export default Header;
