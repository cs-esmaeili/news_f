import { useState, useEffect } from "react";
import Image from "next/image";
import { FaHouseChimney } from "react-icons/fa6";

const Sidebar = ({ open, setOpen }) => {
  return (
    <div
      className={
        open
          ? "absolute bottom-0 left-0 top-0 z-30 h-full min-w-max bg-secondary p-7 duration-500 ease-in"
          : "absolute  left-[-100%] h-full z-30 min-w-max bg-secondary p-7 duration-500 ease-in lg:static lg:block"
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

      <div className="mb-5 mt-8 flex items-center rounded-md bg-secondary_dark p-3">
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
        <div className="mb-5 flex items-center p-3 text-dactive ">
          <FaHouseChimney className="text-2xl" />
          <span className="ml-3">Home</span>
        </div>
        <div className="mb-5 flex items-center p-3 text-dactive ">
          <FaHouseChimney className="text-2xl" />
          <span className="ml-3">Home</span>
        </div>
        <div className="bg-siebar_item mb-5 flex items-center rounded-lg bg-active_background p-3 text-accent">
          <FaHouseChimney className="text-2xl" />
          <span className="ml-3">Home</span>
        </div>
        <div className="mb-5 flex items-center p-3 text-dactive ">
          <FaHouseChimney className="text-2xl" />
          <span className="ml-3">Home</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
