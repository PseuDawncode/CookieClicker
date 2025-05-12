//Reusable Buttons for Login Button and Submit Button
import React from 'react';

const CustomButton = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-[269px] h-[29px] bg-[#D27D2D] text-white rounded hover:opacity-90 transition"
    >
      {children}
    </button>
  );
};

export default CustomButton;