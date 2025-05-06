import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/login";
import Register from "../components/signup";
import Nav from "../components/navbar";
import Home from "./pages/home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
            Home{" "}
          </Route>
          <Route path="/login" element={<Login />}>
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
