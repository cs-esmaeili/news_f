import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [body, setBody] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, setBody }}
    >
      <div
        className={
          isModalOpen
            ? "absolute bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center"
            : "hidden"
        }
      >
        <div
          className="w-100% fixed bottom-0 left-0 right-0 top-0 z-20 h-screen cursor-pointer bg-black opacity-50"
          onClick={closeModal}
        />
        <div className="z-20 h-max rounded-md bg-primary p-4">{body}</div>
      </div>
      {children}
    </ModalContext.Provider>
  );
};
