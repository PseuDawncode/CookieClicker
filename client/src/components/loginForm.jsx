//Login Page
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "./customBtn";
const login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setErrorMessage("");

    const storedUserProfileString = localStorage.getItem(`user_${username}`);

    if (storedUserProfileString) {
      const userProfile = JSON.parse(storedUserProfileString);
      if (userProfile.password === password) {
        onLoginSuccess(userProfile);
        navigate("/");
      } else {
        setErrorMessage("Incorrect password.");
      }
    } else {
      setErrorMessage("Username not found.");
    }
  };

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center ">
        <div className="w-1/3 h-2/3 flex-row m-20 p-10 border-2 rounded-2xl bg-[#c9a685]">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          {errorMessage && (
            <div className="text-sm text-red-500 bg-amber-100">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleLogin}>
            <label htmlFor="username" className="block mt-2">
              Username
            </label>
            <input
              required
              autoFocus
              type="email"
              name="username"
              id="username"
              className="block w-full border-b-2 h-14 p-2 outline-none mt-2 rounded-lg"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <label htmlFor="passsword" className="block mt-4">
              Password
            </label>
            <input
              required
              type="password"
              name="passsword"
              id="passsword"
              className="block w-full border-b-2 h-14 p-2 outline-none mt-2 rounded-lg"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <CustomButton type="submit">Login</CustomButton>
            <p className="text-sm mt-3">
              New User? Please{" "}
              <Link className="text-base  hover:border-b-2" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
