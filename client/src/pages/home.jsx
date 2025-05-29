import React from "react";
import { useNavigate } from "react-router-dom";
import CookieCharacter from "../assets/images/CookieCharacter.png";

const home = ({ loggedIn }) => {
  const navigate = useNavigate();

  function handlePlayNow() {
    if (!loggedIn) {
      navigate("/login");
    } else {
      navigate("/game");
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#D27D2D] flex flex-col sm:flex-row items-center justify-center px-4 py-10">
      {/* Cookie Character */}
      <div className="mb-5 sm:mb-0 sm:mr-5">
        <img
          src={CookieCharacter}
          alt="Cookie Character"
          className="w-150 h-auto"
        />
      </div>

      {/* Info Card */}
      <div className="bg-[#e0872f] rounded-2xl shadow-xl max-w-xl w-full text-white px-6 py-8 text-left">
        <h1 className="text-2xl sm:text-4xl font-bold mb-8 font-sans">
          Welcome to Cookie Clicker Game 🍪
        </h1>
        <p className="text-lg mb-3 leading-relaxed">
          Get ready for a fun clicking adventure! Looking for a fresh, exciting
          way to play and earn? In Cookie Clicker, every tap brings you closer
          to awesome features.
        </p>
        <p className="text-lg mb-3 leading-relaxed">
          Accumulate cookies to unlock powerful upgrades, boost your clicking
          speed, and discover golden cookies that can be redeemed for real-world
          treats!
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Start clicking. Start earning. Start enjoying!
        </p>
        <div className="flex justify-center mt-6">
          <button
            onClick={handlePlayNow}
            className="bg-amber-800 text-yellow-400 font-semibold py-2 px-6 rounded-full border border-yellow-400 shadow-md hover:bg-yellow-300 hover:text-[#003018] transition-colors duration-300"
          >
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default home;
