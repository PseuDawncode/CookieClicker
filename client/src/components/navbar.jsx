//For Navigation Bar
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Music from "./music";
import musicImage from "../assets/images/music.png";
const navbar = ({ loggedIn, username, profilePic, onLogout }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const startMusic = () => {
    setIsPlaying(true);
  };

  return (
    <nav className="bg-amber-800 p-8 flex justify-between items-center">
      <h1 className="flex text-white text-3xl font-bold cursor-pointer">
        {" "}
        <Link className="ml-9" to="/">
          Cookie Clicker
        </Link>
      </h1>
      {!isPlaying && (
        <button className="cursor-pointer" onClick={startMusic}>
          <img
            src={musicImage}
            alt="music image"
            className="w-10 h-10 rounded-4xl"
          />{" "}
        </button>
      )}
      {isPlaying && <Music soundId={699618} shouldLoop={true} />}
      {!loggedIn && (
        <div className="flex items-center gap-4">
          <Link to="/login">
            <button
              className="px-4 py-2 w-30 rounded text-white cursor-pointer"
              style={{ backgroundColor: "#D27D2D" }}
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
              className="px-4 py-2  w-30 rounded text-white cursor-pointer"
              style={{ backgroundColor: "#D27D2D" }}
            >
              Register
            </button>
          </Link>
        </div>
      )}

      {loggedIn && (
        <div className="flex items-center gap-4">
          <span className="text-yellow-300 text-lg hidden md:inline">
            Welcome, {username}!{" "}
          </span>
          <span
            dangerouslySetInnerHTML={{ __html: profilePic }}
            className="md:w-24 md:h-24  w-15 h-15 "
          ></span>
          <Link to="/">
            <button
              onClick={onLogout}
              className="px-4 py-2  w-30 rounded text-white cursor-pointer"
              style={{ backgroundColor: "#D27D2D" }}
            >
              Logout
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default navbar;
