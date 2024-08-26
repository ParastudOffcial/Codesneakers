// src/components/Navbar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or authentication tokens here if necessary
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl flex items-center">
          <img
            src="https://img.freepik.com/premium-vector/vector-illustration-yellow-bus-transparent-background_181203-31343.jpg?semt=ais_hybrid"
            alt="Bus Logo"
            className="w-12 h-12 mr-4"
          />
          <span className="font-bold">Bus Route Manager</span>
        </div>

        <div className="flex space-x-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? 'bg-blue-700' : 'hover:bg-gray-700'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? 'bg-blue-700' : 'hover:bg-gray-700'
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? 'bg-blue-700' : 'hover:bg-gray-700'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? 'bg-blue-700' : 'hover:bg-gray-700'
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? 'bg-blue-700' : 'hover:bg-gray-700'
              }`
            }
          >
            Blogs
          </NavLink>
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
