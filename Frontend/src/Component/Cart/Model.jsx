import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-top z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-11/12 max-w-md p-6 shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
