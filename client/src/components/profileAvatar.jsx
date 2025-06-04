import React, { useState, useEffect } from "react";
import CustomButton from "./customBtn";

const profileAvatar = ({ onAvatarSelect }) => {
  const [avatarArray, setAvatarArray] = useState([]);
  const [avatarSelected, setAvatarSelected] = useState([0]);
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
    <div className="flex flex-col items-center my-4 w-full h-fit">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
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
                className="w-15 h-15 md:w-24 md:h-24 hover:opacity-60 hover:rounded-full"
              />
            </div>
          ) : (
            <div key={index} className="text-center text-gray-500">
              Error loading avatar {index + 1}
            </div>
          )
        )}
      </div>
      <CustomButton type="button" onClick={generateAvatar}>
        View more...
      </CustomButton>
    </div>
  );
};

export default profileAvatar;
