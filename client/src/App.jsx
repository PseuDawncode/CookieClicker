import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginForm";
import Register from "./components/signupForm";
import Nav from "./components/navbar";
import Home from "./pages/home";
import CookieGame from "./components/CookieGame";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("loggedInUser");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse loggedInUser from localStorage:", error);
      return null;
    }
  });

  const loggedIn = !!loggedInUser;
  const loggedInUsername = loggedInUser ? loggedInUser.username : "";
  const pic = loggedInUser ? loggedInUser.profilePic : null;

  const handleLoginSuccess = (userProfile) => {
    setLoggedInUser(userProfile);
    localStorage.setItem("loggedInUser", JSON.stringify(userProfile));
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  const handleSaveGameProgress = (gameData) => {
    if (loggedInUser) {
      const updatedUser = {
        ...loggedInUser,
        ...gameData,
      };
      setLoggedInUser(updatedUser);
      localStorage.setItem(
        `user_${updatedUser.username}`,
        JSON.stringify(updatedUser)
      );
      localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    }
  };

  return (
    <>
      <BrowserRouter basename="/CookieClicker">
        <Nav
          loggedIn={loggedIn}
          username={loggedInUsername}
          profilePic={pic}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} />} />
          <Route
            path="/game"
            element={
              loggedInUser ? (
                <CookieGame
                  initialClickCount={loggedInUser.clickCount || 0}
                  initialDoubleClickLevel={loggedInUser.doubleClickLevel || 0}
                  initialAutoClickerActive={
                    loggedInUser.autoClickerActive || false
                  }
                  onSaveGame={handleSaveGameProgress}
                />
              ) : (
                <Home loggedIn={loggedIn} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
