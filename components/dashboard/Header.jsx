import React from "react";
import MiniProfile from "./MiniProfile";
import { FaBell } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { BiSolidStar } from "react-icons/bi";
import { PiArrowFatDownFill } from "react-icons/pi";
import { PiArrowFatUpFill } from "react-icons/pi";
import { GiOpenTreasureChest } from "react-icons/gi";

const Header = ({ open, setOpen }) => {
  return (
    <div className="flex p-2  items-center">
      <RiMenu3Line
        className="text-2xl mr-3 lg:hidden"
        onClick={() => setOpen(!open)}
      />
      <div className="flex justify-around gap-1   flex-wrap grow bg-secondary rounded-xl p-2">
        <div className="hidden md:flex justify-center">
          <BiSolidStar className="text-2xl  text-blue-400" />
          <span>300</span>
        </div>
        <div className="flex text-green-400">
          <PiArrowFatDownFill className="text-2xl" />
          <span>12,000,000 M</span>
        </div>
        <div className="flex  text-red-400">
          <PiArrowFatUpFill className="text-2xl" />
          <span>10,000,000 M</span>
        </div>
        <div className="hidden md:flex text-yellow-400">
          <GiOpenTreasureChest className="text-2xl" />
          <span>10 G</span>
        </div>
      </div>
      <div className="ml-3 hidden sm:flex">
        <MdSunny className="text-2xl" />
        <FaBell className="text-2xl ml-3" />
      </div>
      <MiniProfile sliderIsOpen={open} />
    </div>
  );
};

export default Header;
