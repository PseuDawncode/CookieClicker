import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Music from "./music";
import musicImage from "../assets/images/music.png";
import noMusicImage from "../assets/images/nomusic.png";

const Navbar = ({ loggedIn, username, profilePic, onLogout }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const navigate = useNavigate();
  const startMusic = () => {
    setIsPlaying(!isPlaying);
  };
  const handleLogoutAndNavigate = () => {
    onLogout();
    navigate("/login");
  };
  return (
    <nav className="bg-amber-800 p-4 sm:p-5 flex justify-between items-center">
      <h1 className="flex text-white sm:text-2xl md:text-3xl font-bold cursor-pointer">
        {" "}
        <Link className="md:ml-9 md:p-4 ml-3 text-yellow-400 " to="/">
          Cookie Clicker
        </Link>
      </h1>
      <div className="flex-grow flex justify-center items-center">
        <button
          className="cursor-pointer sm:w-10 sm:h-10 w-7 h-7"
          onClick={startMusic}
        >
          {!isPlaying ? (
            <img
              src={musicImage}
              alt="music image"
              className="sm:w-10 sm:h-10 rounded-4xl w-7 h-7"
            />
          ) : (
            <img
              src={noMusicImage}
              alt="stop music image"
              className="sm:w-10 sm:h-10 rounded-4xl w-7 h-7"
            />
          )}
        </button>
      </div>
      {isPlaying && <Music soundId={251461} shouldLoop={true} />}
      <div className="flex items-center gap-4">
        {!loggedIn ? (
          <>
            <Link to="/login">
              <button className="px-1 py-2 mx-3 w-15 text-sm md:text-lg sm:w-23 md:w-30 bg-amber-800 text-yellow-400 font-semibold md:py-2 md:px-6 rounded-full border border-yellow-400 shadow-md hover:bg-yellow-300 hover:text-[#003018] transition-colors duration-300">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="px-1 py-2 w-18 text-sm md:text-lg sm:w-23 md:w-30 bg-amber-800 text-yellow-400 font-semibold md:py-2 md:px-6 rounded-full border border-yellow-400 shadow-md hover:bg-yellow-300 hover:text-[#003018] transition-colors duration-300">
                Register
              </button>
            </Link>
          </>
        ) : (
          <>
            <span className="text-yellow-300 text-sm sm:text-lg hidden md:inline">
              Welcome, {username}!{" "}
            </span>
            {typeof profilePic === "string" && profilePic && (
              <span
                dangerouslySetInnerHTML={{ __html: profilePic }}
                className="md:w-24 md:h-24 w-15 h-15"
              ></span>
            )}
            <Link to="/">
              <button
                onClick={handleLogoutAndNavigate}
                className="px-1 py-2 mx-3 w-20 text-sm sm:w-23 rounded md:w-30 bg-amber-800 text-yellow-400 font-semibold md:py-2 md:text-lg md:px-6 md:rounded-full border border-yellow-400 shadow-md hover:bg-yellow-300 hover:text-[#003018] transition-colors duration-300"
              >
                Log Out
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
