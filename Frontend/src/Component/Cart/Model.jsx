import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white rounded-lg w-11/12 max-w-lg p-6 shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
