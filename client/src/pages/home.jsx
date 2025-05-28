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
        <p className="font-light text-base leading-relaxed tracking-wide mb-4 font-poppins">
          This is a simple cookie clicker game demo. Where you click the cookie
          to earn cookies. With the earned cookies you can buy upgrades to
          increase your cookie production. For the purpose of this demo, we have
          added only two upgrades. The first one is a simple 'Auto Clicker'
          upgrade that counts as one click every second increasing the cookie
          production by one. The second one is a 'Double Click' upgrade that
          doubles the amount of cookies you earn per click. (does not stack with
          the auto clicker). Please note that to play the game you need to be
          logged in. If you are not logged in, please login or register to play
          the game. Have fun!
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
