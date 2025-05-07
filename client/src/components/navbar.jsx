//For Navigation Bar
import { useState, useEffect } from 'react';


const Navbar = ({ username, onLogout }) => {
    return (
      <nav className="bg-amber-800 p-4 flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Cookie Clicker</h1>
        <div className="flex items-center gap-4">
          <span className="text-yellow-300 text-lg">Welcome, {username}!</span>
          <LogoutButton onLogout={onLogout} />
        </div>
      </nav>
    );
  };