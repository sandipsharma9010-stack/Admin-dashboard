import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div id ="cta-button-sidebar" className="flex">
      {/* Sidebar */}
      <div
        className={` text-black min-h-screen px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <ul className="space-y-4">
          <li className="hover:bg-gray-400 p-2 rounded font-semibold">
            🏠 {isOpen && "Home"}
          </li>

          <li
            className="hover:bg-gray-400 p-2 rounded font-semibold"
            onClick={toggleDropdown}
          >
            👤 {isOpen && "Profile"}
            <span className="ml-2">{isDropdownOpen ? "▲" : "▼"}</span>
          </li>
          {isDropdownOpen && (
            <ul className="space-y-2 ml-5">
              <li className="hover:bg-gray-400 p-2 rounded">
                👤 {isOpen && "User"}
              </li>
              <li className="hover:bg-gray-400 p-2 rounded">
                ⚙️ {isOpen && "User Settings"}
              </li>
              <li className="hover:bg-gray-400 p-2 rounded">
                🚪 {isOpen && "User Logout"}
              </li>
            </ul>
          )}

          <li className="hover:bg-gray-400 p-2 rounded font-semibold">
            ⚙️ {isOpen && "Settings"}
          </li>
          <li className="hover:bg-gray-400 p-2 rounded font-semibold">
            🚪 {isOpen && "Logout"}
          </li>
        </ul>
      </div>

      <button
        onClick={toggleSidebar}
        className="bg-gray-100 p-3 h-15 mx-2 rounded mb-50 font-bold text-black hover:bg-gray-400"
      >
        {isOpen ? "<" : ">"}
      </button>




      <button onClick={toggleSidebar} className="p-2 bg-gray-500 rounded text-white h-10">
  
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

      {/* Main content */}
      <div className="p-6 flex-1 mt-10">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
}







API-url= https://tech.portal-uat.dpdpconsultants.com/api/dpgr/dashboard

TOKEN= Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJodHRwczovL3RlY2gucG9ydGFsLXVhdC5kcGRwY29uc3VsdGFudHMuY29tIiwiaXNzIjoiaHR0cHM6Ly9wb3J0YWwtdWF0LmRwZHBjb25zdWx0YW50cy5jb20iLCJlbWFpbCI6Imphc3BhbC5zaW5naEBkcGRwY29uc3VsdGFudHMuY29tIiwiZXhwaXJ5IjoxNzUxMjc4MzA2fQ.xS0h2D1Cpaszz55koi0FYSr_uOvcYIPxvtda0bPkC6M


https://reqres.in/



const a = [1,2,3,4];
const b = [6,7,8,9];


const c =[...a, ...b];
console.log(c)



import { useState } from "react";
import {
  Home,
  User,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: <Home />, label: "Home" },
    { icon: <User />, label: "Profile" },
    { icon: <Settings />, label: "Settings" },
    { icon: <LogOut />, label: "Logout" },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-gray-800 text-white min-h-screen p-4 transition-all duration-300 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-xl font-bold transition-all ${isOpen ? "block" : "hidden"}`}>My App</h1>
          <button onClick={toggleSidebar}>
            <Menu />
          </button>
        </div>

        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
              {item.icon}
              <span className={`${isOpen ? "block" : "hidden"} transition-all`}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold">Welcome</h2>
        <p>This is your dashboard content.</p>
      </div>
    </div>
  );
}









import Sidebar from "./Sidebar";

export default function App() {
  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}





import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white h-screen p-4 transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="bg-gray-700 p-2 rounded mb-6 flex justify-center w-full"
        >
          <span className="text-white text-xl">☰</span>
        </button>

        <ul className="space-y-4 relative">
          {/* Home */}
          <li className="relative group">
            <div className="hover:bg-gray-700 p-3 rounded flex items-center justify-center">
              🏠
            </div>
            {!isOpen && (
              <div className="absolute left-16 top-0 bg-gray-800 text-white p-2 rounded shadow-lg w-32 opacity-0 group-hover:opacity-100 transition duration-200">
                Home
              </div>
            )}
          </li>

          {/* Profile */}
          <li className="relative group">
            <div className="hover:bg-gray-700 p-3 rounded flex items-center justify-center">
              👤
            </div>
            {!isOpen && (
              <ul className="absolute left-16 top-0 bg-gray-800 rounded shadow-lg w-40 space-y-1 p-2 opacity-0 group-hover:opacity-100 transition duration-200">
                <li className="hover:bg-gray-700 p-2 rounded">View Profile</li>
                <li className="hover:bg-gray-700 p-2 rounded">Edit Profile</li>
              </ul>
            )}
            {isOpen && (
              <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-700 rounded">
                👤 <span>Profile</span>
              </div>
            )}
          </li>

          {/* Components */}
          <li className="relative group">
            <div className="hover:bg-gray-700 p-3 rounded flex items-center justify-center">
              ❎
            </div>
            {!isOpen && (
              <div className="absolute left-16 top-0 bg-gray-800 text-white p-2 rounded shadow-lg w-32 opacity-0 group-hover:opacity-100 transition duration-200">
                Components
              </div>
            )}
            {isOpen && (
              <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-700 rounded">
                ❎ <span>Components</span>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Main Content</h1>
      </div>
    </div>
  );
}


