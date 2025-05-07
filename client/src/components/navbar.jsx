//For Navigation Bar
import React from 'react';


const Navbar = ({ username, onLogout }) => {
    return (
      <nav className="bg-amber-800 p-8 flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Cookie Clicker</h1>
        <div className="flex items-center gap-4">
          <span className="text-yellow-300 text-lg">Welcome, {username}!</span>
          <button
          onClick={onLogout}
          className="px-4 py-2 rounded text-white"
          style={{ backgroundColor: '#D27D2D' }}
        >
          Logout
        </button>
        </div>
      </nav>
    );
  }

  export default Navbar;