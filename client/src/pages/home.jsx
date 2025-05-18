import React, { useState } from 'react';
import welcomeImg from '../assets/images/welcomeImg';

const WelcomePage = () => {
  
  const [imageSize, setImageSize] = useState(300);

  const increaseSize = () => {
    setImageSize(prevSize => prevSize + 20);
  };

  const decreaseSize = () => {
    setImageSize(prevSize => Math.max(100, prevSize - 20));
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-custom-gold">
        Welcome to Our Website
      </h1>
      <p className="text-lg mb-8 text-custom-gold">
        This text is using our custom gold color (#B88917)
      </p>
      <button 
        className="px-6 py-2 mb-8 bg-custom-gold text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        Golden Button
      </button>
      
      {/* Resizable image section */}
      <div className="mt-8 border-t border-custom-gold pt-8 w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-custom-gold">Resizable Image</h2>
        
        {/* Welcome image with dynamic width based on state */}
        <img 
          src={welcomeImg}
          alt="Welcome" 
          style={{ width: `${imageSize}px` }}
          className="mb-4 border-4 border-custom-gold rounded-lg"
        />
        
        {/* Controls for resizing */}
        <div className="flex space-x-4 mt-4">
          <button 
            onClick={decreaseSize}
            className="px-4 py-2 bg-custom-gold text-white rounded-lg hover:opacity-90"
          >
            Smaller
          </button>
          
          <button 
            onClick={increaseSize}
            className="px-4 py-2 bg-custom-gold text-white rounded-lg hover:opacity-90"
          >
            Larger
          </button>
        </div>
        
        <p className="mt-2 text-sm text-gray-600">
          Current width: {imageSize}px
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;