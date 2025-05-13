import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginForm";
import Register from "./components/signupForm";
import Nav from "./components/navbar";
import Home from "./pages/home";

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem("authToken") ? true : false;
  });
  const [loggedInUsername, setLoggedInUsername] = useState(
    localStorage.getItem("loggedInUsername" || "")
  );
  const [pic, setPic] = useState(localStorage.getItem("profilePic") || null);
  const handleLoginSuccess = (username, profilePic) => {
    setLoggedIn(true);
    setLoggedInUsername(username);
    setPic(profilePic);
    localStorage.setItem("authToken", "true");
    localStorage.setItem("loggedInUsername", username);
    localStorage.setItem("profilePic", profilePic);
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setLoggedInUsername("");
    localStorage.removeItem("authToken");
    localStorage.removeItem("loggedInUsername");
    localStorage.removeItem("profilePic");
    navigate("/login");
  };

  return (
    <>
      <BrowserRouter>
        <Nav
          loggedIn={loggedIn}
          username={loggedInUsername}
          profilePic={pic}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} />}>
            {" "}
            Home{" "}
          </Route>
          <Route
            path="/login"
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          >
            {" "}
            Login{" "}
          </Route>
          <Route path="/register" element={<Register />}>
            {" "}
            Register{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
