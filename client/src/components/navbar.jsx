//For Navigation Bar
import React, { useState } from "react";
import { Link } from "react-router-dom";

const navbar = ({ loggedIn, username, onLogout }) => {
  return (
    <nav className="bg-amber-800 p-8 flex justify-between items-center">
      <h1 className="text-white text-3xl font-bold cursor-pointer">
        {" "}
        <Link className="ml-9" to="/">
          Cookie Clicker
        </Link>
      </h1>

      {!loggedIn && (
        <div className="flex items-center gap-4">
          <Link to="/login">
            <button
              className="px-4 py-2 w-30 rounded text-white cursor-pointer"
              style={{ backgroundColor: "#D27D2D" }}
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
              className="px-4 py-2  w-30 rounded text-white cursor-pointer"
              style={{ backgroundColor: "#D27D2D" }}
            >
              Register
            </button>
          </Link>
        </div>
      )}

      {loggedIn && (
        <div className="flex items-center gap-4">
          <span className="text-yellow-300 text-lg">Welcome, {username}!</span>
          <Link to="/">
            <button
              onClick={onLogout}
              className="px-4 py-2  w-30 rounded text-white cursor-pointer"
              style={{ backgroundColor: "#D27D2D" }}
            >
              Logout
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default navbar;
