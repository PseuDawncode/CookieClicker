import React, { useState, useEffect } from "react";
import CustomButton from "./customBtn";

const profileAvatar = ({ onAvatarSelect }) => {
  const [avatarArray, setAvatarArray] = useState([]);
  const [avatarSelected, setAvatarSelected] = useState([]);
  const numberOfAvatars = 6;

  useEffect(() => {
    generateAvatar();
  }, []);

  async function generateAvatar() {
    const avatars = [];
    for (let i = 0; i < numberOfAvatars; i++) {
      const randomSeed = Math.random().toString(36).substring(7);
      try {
        const response = await fetch(
          `https://api.dicebear.com/9.x/micah/svg?seed=${randomSeed}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const svgData = await response.text();
        avatars.push(svgData);
      } catch (error) {
        console.error("Error fetching avatar:", error);
        avatars.push(null);
      }
    }
    setAvatarArray(avatars);
  }

  const handleAvatarClick = (svgString, index) => {
    setAvatarSelected(index);
    if (onAvatarSelect) {
      onAvatarSelect(svgString);
    }
  };
  return (
    <div className="flex flex-col items-center my-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {avatarArray.map((svg, index) =>
          svg ? (
          <div
            key={index}
            className={`relative rounded-full overflow-hidden shadow-md cursor-pointer
            ${
              avatarSelected === index
                ? "border-2 border-black rounded-full"
                : ""
            }`}
            onClick={() => handleAvatarClick(svg, index)}
          >
            <div
              dangerouslySetInnerHTML={{ __html: svg }}
              className="w-20 h-20 md:w-24 md:h-24 hover:opacity-60 hover:rounded-full"
            />
          </div>
        ) : (
            <div key={index} className="text-center text-gray-500">
              Error loading avatar {index + 1}
            </div>
          )
        )}
      </div>
      <button
        type="button"
        onClick={generateAvatar}
        className="w-auto m-4 p-2 bg-[#D27D2D] text-white rounded hover:opacity-90 transition"
      >
        View more...
      </button>
    </div>
  );
};

export default profileAvatar;
