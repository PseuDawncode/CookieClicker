//Login Page
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin(e) {
    console.log(e);
  }
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div className="w-1/3 h-2/3 flex-row m-20 p-10 border-2 rounded-2xl">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <form
            action={() => {
              handleLogin(e);
            }}
          >
            <label htmlFor="username" className="block mt-2">
              Username
            </label>
            <input
              required
              autoFocus
              type="text"
              name="username"
              id="username"
              className="block w-full border-b-2 outline-none mt-2"
            />
            <label htmlFor="passsword" className="block mt-4">
              Password
            </label>
            <input
              required
              type="text"
              name="passsword"
              id="passsword"
              className="block w-full border-b-2 outline-none  mt-2"
            />
            <p className="text-sm mt-3">
              {" "}
              Forgot Password? To reset click{" "}
              <a href="#" className="text-base hover:border-b-2">
                here
              </a>
            </p>
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
