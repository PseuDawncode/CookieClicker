import React from "react";
import welcomeImage from "../assets/images/welcomeImg.png";
import { useNavigate } from "react-router-dom";

const home = ({ loggedIn }) => {
  const navigate = useNavigate();

  function handlePlayNow() {
    console.log(loggedIn);
    if (!loggedIn) {
      navigate("/login");
    } else if (loggedIn) {
      navigate("/game");
    }
  }

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${welcomeImage})` }}
    >
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-[rgba(0,48,24,0.95)] p-8 rounded-lg text-white max-w-xl text-center">
        <p className="font-light text-base leading-relaxed tracking-wide mb-4 font-poppins text-left">
          <span className="text-2xl font-semibold block mb-4">
            Welcome to Cookie Clicker Game 🍪
          </span>

          <div className="mb-3">
            Get ready for a fun clicking adventure!
          </div>

          <div className="mb-3">
            Looking for a fresh, exciting way to play and earn? In Cookie Clicker, every tap brings you closer to awesome features. Accumulate cookies to unlock powerful upgrades, boost your clicking speed, and discover golden cookies that can be redeemed for real-world treats!
          </div>

          <div>
            Start clicking. Start earning. Start enjoying!
          </div>
        </p>

        <button
          onClick={handlePlayNow}
          className="mt-5 px-8 py-2 border-2 border-yellow-300 rounded-full text-white text-base transition-all duration-300 hover:bg-yellow-300 hover:text-[#003018]"
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default home;
