import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiSearch, HiBell, HiCog } from "react-icons/hi";

const Navbar = ({ onDrawerToggle }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  console.log(showDropdown);

  return (
    <div className="bg-[#f4f7fb] text-white px-2 py-2 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-6 ml-10">
        {/* <Link to="/team" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Team</Link>
        <Link to="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Projects</Link>
        <Link to="/calendar" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Calendar</Link> */}
      </div>

      <div className="hidden md:flex items-center bg-[#dce2eb] px-3 py-2 rounded-md w-72 text-sm">
        <HiSearch className="text-gray-400 mr-2" />
        <input type="text" placeholder="Search" className="bg-transparent w-full text-gray-900 focus:outline-none" />
      </div>

      <div className="relative flex items-center gap-4">
        <HiBell className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
        <HiCog className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" onClick={onDrawerToggle} />

        <img
          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2.5&w=64&h=64&q=80"
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer"
          onClick={toggleDropdown}
        />

        {showDropdown && (
          <div className="absolute right-0 top-12 bg-white text-black w-40 rounded-md shadow-md py-2 z-50">
            <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 text-sm">Your Profile</Link>
            <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 text-sm">Settings</Link>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">Sign Out</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
