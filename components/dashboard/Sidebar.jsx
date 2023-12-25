import { useState, useEffect } from "react";
import Image from "next/image";
import { FaHouseChimney } from "react-icons/fa6";

const Sidebar = ({ open, setOpen }) => {
  return (
    <div
      className={
        open
          ? "bg-secondary p-7 h-full absolute top-0 left-0 bottom-0 z-10 ease-in duration-500"
          : "bg-secondary p-7 h-full absolute left-[-100%] lg:block lg:static ease-in duration-500"
      }
    >
      <div className="flex items-center justify-center">
        <Image
          className="rounded-md"
          src="/logo.jpg"
          alt="Site logo"
          width={60}
          height={60}
        />
        <span className="ml-3 font-bold"> WEB site Name </span>
      </div>

      <div className="flex items-center p-3 mt-8 mb-5 bg-secondary_dark rounded-md">
        <Image
          className="rounded-full"
          src="/avatar.jpg"
          alt="Site logo"
          width={45}
          height={45}
        />
        <span className="ml-3"> Javad Esmaeili </span>
      </div>
      <div>
        <div className="flex items-center mb-5 p-3 text-dactive ">
          <FaHouseChimney className="text-2xl" />
          <span className="ml-3">Home</span>
        </div>
        <div className="flex items-center mb-5 p-3 text-dactive ">
          <FaHouseChimney className="text-2xl" />
          <span className="ml-3">Home</span>
        </div>
        <div className="flex items-center text-accent bg-active_background mb-5 bg-siebar_item p-3 rounded-lg">
          <FaHouseChimney className="text-2xl" />
          <span className="ml-3">Home</span>
        </div>
        <div className="flex items-center mb-5 p-3 text-dactive ">
          <FaHouseChimney className="text-2xl" />
          <span className="ml-3">Home</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
