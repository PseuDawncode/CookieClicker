<<<<<<< HEAD

=======
>>>>>>> d9f06f8f66ef9924c2b791b80b231f74dff90657
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginForm";
import Register from "./components/signupForm";
import Nav from "./components/navbar";
import Home from "./pages/home";
<<<<<<< HEAD
import "./App.css";
=======
>>>>>>> d9f06f8f66ef9924c2b791b80b231f74dff90657

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
<<<<<<< HEAD
      <div className="flex flex-row justify-center items-center">
        Cookie Clicker
      </div>
=======
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
>>>>>>> d9f06f8f66ef9924c2b791b80b231f74dff90657
    </>
  );
}

export default App;
