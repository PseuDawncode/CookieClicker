import React from "react";
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
      className="min-h-screen w-full bg-[#D27D2D] relative flex items-center justify-center"
    >
      <div className="absolute top-50 bg-[rgba(0,48,24,0.95)] p-4 sm:p-8 rounded-lg text-white w-11/12 min-w-[280px] max-w-xl text-center shadow-lg">
        <p className="font-light text-base leading-relaxed tracking-wide mb-4 font-poppins text-left">
          <span className="text-xl sm:text-2xl font-semibold block mb-4 text-center">
            Welcome to Cookie Clicker Game 🍪
          </span>

          <div className="mb-3 text-sm sm:text-base">
            Get ready for a fun clicking adventure!
          </div>

          <div className="mb-3 text-sm sm:text-base">
            Looking for a fresh, exciting way to play and earn? In Cookie Clicker, every tap brings you closer to awesome features. Accumulate cookies to unlock powerful upgrades, boost your clicking speed, and discover golden cookies that can be redeemed for real-world treats!
          </div>

          <div className="text-sm sm:text-base">
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
