import React from "react";
import { useState } from "react";
import CookieGame from "../components/cookieGame";

const home = () => {
  return (
    <div className="flex flex-row justify-center items-center px-4">
      <h1 className="sm:text-3xl md:text-5xl my-10 mx-4 text-center">
       <CookieGame />
      </h1>
    </div>
  );
};

export default home;
