import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginForm";
import Register from "./components/signupForm";
import Nav from "./components/navbar";
import Home from "./pages/home";

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
      <BrowserRouter>
        <Nav
          loggedIn={loggedIn}
          username={loggedInUsername}
          profilePic={pic}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
            Home{" "}
          </Route>
          <Route
            path="/login"
            element={<Login onLoginSuccess={handleLoginSuccess}  />}
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
