import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const home = ({ loggedIn }) => {
  console.log(loggedIn);
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
        </div>
      )}
    </>
  );
};

export default home;
