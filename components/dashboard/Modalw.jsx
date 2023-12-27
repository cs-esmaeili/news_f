import React from "react";

const Modal = () => {
  return (
    <div className="absolute flex">
      <div className="w-100% fixed bottom-0 left-0 right-0 top-0 z-0 h-screen cursor-pointer bg-black opacity-50" />
      <div className="z-10 bg-white text-black rounded-md p-4">
          This is modal
      </div>
    </div>
  );
};

export default Modal;
