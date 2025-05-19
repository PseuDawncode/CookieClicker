import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CookieClicker from "../components/CookieClicker";
const home = ({ loggedIn }) => {
  const navigate = useNavigate();

  // Navigate to login if user is not loggedIn else to game
  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn, navigate]);

  return (
    <>
      {loggedIn && (
        <div className="flex flex-col justify-center items-center px-4">
          <h1 className="sm:text-3xl md:text-5xl my-10 mx-4 text-center">
            Welcome to Game
          </h1>
          <p>
            This is a simple cookie clicker game demo. Where you click the cookie to earn
            cookies. With the earned cookies you can buy upgrades to increase your cookie production.
            For the purpose of this demo, we have added only two upgrades. The first one is a
            simple 'Auto Clicker' upgrade that counts as one click every second increaseing
            the cookie production by 1. The second one is a 'Double Click' upgrade that
            doubles the amount of cookies you earn per click. (does not stack with the auto clicker)
            Please note that to play the game you need to be logged in. 
            If you are not logged in, please login or register to play the game.
            <br />
            Have fun!
          </p>
          <CookieClicker />
        </div>
      )}
    </>
  );
};

export default home;
