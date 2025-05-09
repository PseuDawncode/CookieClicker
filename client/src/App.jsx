import { useState } from "react";
import CookieGame from "./components/cookieGame.jsx";

import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-row justify-center items-center align-middle h-screen bg-gray-100">
        
        <CookieGame />
      </div>
    </>
  );
}

export default App;
