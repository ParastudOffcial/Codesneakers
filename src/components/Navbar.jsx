import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import img from '../../assets/buslogo.png';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or authentication tokens here if necessary
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">
          logo
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
