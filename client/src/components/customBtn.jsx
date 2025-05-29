//Reusable Buttons for Login Button and Submit Button
import React from 'react';

const CustomButton = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="m-4 p-2  w-full  bg-amber-800 text-yellow-400 font-semibold md:py-2 md:px-6 rounded-full border border-yellow-400 shadow-md hover:bg-yellow-300 hover:text-[#003018] transition-colors duration-300 cursor-pointer"
    >
      {children}
    </button>
  );
};

export default CustomButton;