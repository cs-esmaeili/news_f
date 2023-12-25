import React from "react";
import Image from "next/image";

const MiniProfile = () => {
  return (
    <div className="flex">
      <Image
        className="rounded-md"
        src="/avatar.jpg"
        alt="Site logo"
        width={50}
        height={50}
      />
      <div className="flex flex-col ml-3 text-center">
        <span>Javad Esmaeili</span>
        <span>Admin</span>
      </div>
    </div>
  );
};

export default MiniProfile;
