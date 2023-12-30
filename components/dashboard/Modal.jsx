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
      {isModalOpen && (
        <div
          className="fixed inset-0 z-20 flex cursor-pointer items-center justify-center bg-black bg-opacity-50"
          onClick={(e) => {
            closeModal();
            e.stopPropagation();
          }}
        >
          <div className="w-max rounded-md bg-primary">
            <div className="p-2">{body}</div>
          </div>
        </div>
      )}
      {children}
    </ModalContext.Provider>
  );
};
