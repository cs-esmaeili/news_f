import React, { useState } from "react";
import Image from "next/image";
import { FaBell } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const MiniProfile = ({ sliderIsOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex ml-3 relative"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <Image
        className="rounded-md"
        src="/avatar.jpg"
        alt="Site logo"
        width={50}
        height={50}
      />
      <div className="flex-col ml-3 text-center hidden sm:flex">
        <span>Javad Esmaeili</span>
        <span>Admin</span>
      </div>

      <div
        className={
          !open
            ? "hidden"
            : "flex flex-wrap  rounded-md min-w-max absolute top-[100%] mt-2 right-0 bg-secondary p-3"
        }
      >
        <div className="flex flex-col justify-center text-center">
          <div className="flex flex-row justify-center">
            <Image
              className="rounded-md"
              src="/avatar.jpg"
              alt="Site logo"
              width={50}
              height={50}
            />
            <div className="ml-2 flex flex-col text-center">
              <span className="text-nowrap">Javad Esmaeili</span>
              <span className="opacity-75">Admin</span>
            </div>
          </div>
          <hr className=" mt-2 mb-2" />
          <div>Main menu</div>
          <div className="flex flex-row">
            <div className="flex">
              <MdSunny className="text-2xl" />
              <span className="ml-2">Dark Mode</span>
            </div>
            <div className="flex">
              <FaBell className="text-2xl ml-3" />
              <span className="ml-2">Notifications</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniProfile;
