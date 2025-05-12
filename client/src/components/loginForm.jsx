//Login Page
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    const dataFromStorage = JSON.parse(localStorage.getItem("userProfile"));
    setErrorMessage([]);
    if (username !== dataFromStorage.username) {
      setErrorMessage(["Username is incorrect, Try again"]);
      setUsername("");
    }
    if (password !== dataFromStorage.password) {
      setErrorMessage(["Password is incorrect, Try again"]);
      setPassword("");
    } else if (
      username === dataFromStorage.username &&
      password === dataFromStorage.password
    ) {
      onLoginSuccess(username, dataFromStorage.profilePic);
      navigate("/");
    }
  }

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div className="w-1/3 h-2/3 flex-row m-20 p-10 border-2 rounded-2xl">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          {errorMessage.length > 0 && (
            <div className="text-sm text-red-500">
              {errorMessage.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
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
              className="block w-full border-b-2 outline-none mt-2"
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
              className="block w-full border-b-2 outline-none  mt-2"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button
              type="submit"
              className="mt-6 p-2 border-2 w-full rounded-2xl bg-white text-balance hover:text-white hover:bg-black"
            >
              Login
            </button>
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
