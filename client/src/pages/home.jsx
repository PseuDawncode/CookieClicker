import React from "react";
import CookieClicker from "../components/CookieGame"

const home = () => {
  return (
    <div className="flex flex-row justify-center items-center px-4">
      <h1 className="sm:text-3xl md:text-5xl my-10 mx-4 text-center">
        Welcome to Game
      </h1>
      <CookieClicker/>
 
    </div>
  );
};

export default home;
