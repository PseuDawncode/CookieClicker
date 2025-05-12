import React from "react";
import CookieGame from "../components/CookieGame";

const home = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <h1 className="sm:text-3xl md:text-5xl my-10 mx-4 text-center">
        Welcome to Game
      </h1>
      <CookieGame />
    </div>
  );
};

export default home;
