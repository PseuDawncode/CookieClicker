import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginForm";
import Register from "./components/signupForm";
import Nav from "./components/navbar";
import Home from "./pages/home";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState(""); // To pass username to Nav

  const handleLoginSuccess = (username) => {
    setLoggedIn(true);
    setLoggedInUsername(username);
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
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<Home />}>
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
