import { X } from 'lucide-react'
import React from 'react'

const PopModal = ({ Component, onCancel, heading }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel(); // close only when background clicked
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className='w-full bg-black/70 fixed z-50 flex justify-center items-center inset-0'
    >
      <div className='flex-col p-5 w-1/2 h-auto items-center bg-white rounded-md overflow-y-scroll scrollbar-hide'>
        <div className='flex p-1 rounded-md bg-gray-200 py-3 border-gray-500 items-center justify-between'>
          <p className='font-mono pl-4 text-lg font-bold text-green-500'>{heading}</p>
          <X className='text-red-500 cursor-pointer' onClick={()=>onCancel()} />
        </div>
        <div className='flex items-center justify-center'>
          {Component}
        </div>
      </div>
    </div>
  );
};

export default PopModal;
