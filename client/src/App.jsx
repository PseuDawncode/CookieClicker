
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginForm";
import Register from "./components/signupForm";
import Nav from "./components/navbar";
import Home from "./pages/home";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState("");
  const [pic, setPic] = useState(null);
  const handleLoginSuccess = (username, profilePic) => {
    setLoggedIn(true);
    setLoggedInUsername(username);
    setPic(profilePic);
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setLoggedInUsername("");
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        Cookie Clicker
      </div>
    </>
  );
}

export default App;
