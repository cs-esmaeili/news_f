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
        class={
          isModalOpen
            ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20 cursor-pointer"
            : "hidden"
        }
        onClick={(e) => {closeModal(); e.stopPropagation()}}
      >
        <div class="w-max rounded-md bg-primary">
          <div class="p-2">{body}</div>
        </div>
      </div>
      {children}
    </ModalContext.Provider>
  );
};
