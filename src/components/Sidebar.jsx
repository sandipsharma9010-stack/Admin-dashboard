import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiHome,
  HiUserGroup,
  HiFolder,
  HiCalendar,
  HiDocumentText,
  HiChartPie,
  HiCog,
  HiChevronDown,
} from "react-icons/hi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    projects: false,
    methods: false,
  });

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleProjectsDropdown = (id) => {
  if (!isOpen) return;

  setDropdowns((prev) => ({
    ...prev,
    [id]: !prev[id],
  }));
};


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative bg-[#5584cb] min-h-screen">
      <button
        onClick={toggleSidebar}
        className={`absolute top-1 ${
          isOpen ? "left-60" : "left-4"
        } z-40 bg-[#dce2eb] text-white p-2 rounded-md hover:bg-gray-700`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 h-full bg-[#f4f7fb] text-white transition-all duration-300 flex flex-col z-30 ${
          isOpen ? "w-60" : "w-0"
        } overflow-hidden`}
      >
        <div className="mr-5 mt-4 flex items-center justify-center">
          <span
            className={`text-indigo-400 text-3xl font-bold overflow-hidden transition-all ${
              isOpen ? "w-20" : "w-0"
            }`}
          >
            Teach
          </span>
        </div>

        <nav className="flex-1 px-2 space-y-1 mt-4">
          <NavLink to="/dashbord">
            <SidebarItem icon={<HiHome />} label="Dashboard" isOpen={isOpen} />
          </NavLink>

          <NavLink to="/team">
            <SidebarItem icon={<HiUserGroup />} label="Team" isOpen={isOpen} />
          </NavLink>
          <li className="group relative list-none">
            <div
              onClick={() => toggleProjectsDropdown("projects")}
              className="flex items-center justify-between gap-2 hover:bg-[#fff] text-sm text-gray-300 px-3 py-2 rounded-md cursor-pointer transition"
            >
              <div className="flex items-center gap-3 text-gray-900">
                {isOpen && (
                  <>
                    <HiFolder className="text-xl" />
                    <span>Projects</span>
                  </>
                )}
              </div>
              {isOpen && (
                <HiChevronDown
                  className={`text-sm transition-transform duration-200 text-gray-900 ${
                    dropdowns.projects ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>

            {(dropdowns.projects && isOpen) || !isOpen ? (
              <ul
                className={`text-sm mt-1 space-y-1 ${
                  isOpen
                    ? "pl-10"
                    : "absolute left-full top-0 bg-gray-800 rounded-md shadow-md px-2 py-2 hidden group-hover:block z-20 w-40"
                }`}
              >
                <NavLink to="/projecta">
                  <li className="hover:bg-[#fff] px-3 py-2 rounded text-gray-900 cursor-pointer">
                    Project A
                  </li>
                </NavLink>
                <NavLink to="/projectb">
                  <li className="hover:bg-[#fff] px-3 py-2 rounded text-gray-900 cursor-pointer">
                    Project B
                  </li>
                </NavLink>
              </ul>
            ) : null}
          </li>

          <li id="methods" className="group relative list-none">
            <div
              onClick={() => toggleProjectsDropdown("methods")}
              className="flex items-center justify-between gap-2 hover:bg-[#fff] text-sm text-gray-300 px-3 py-2 rounded-md cursor-pointer transition"
            >
              <div className="flex items-center gap-3 text-gray-900">
                {isOpen && (
                  <>
                    <HiFolder className="text-xl" />
                    <span>Methods</span>
                  </>
                )}
              </div>
              {isOpen && (
                <HiChevronDown
                  className={`text-sm transition-transform duration-200 text-gray-900 ${
                    dropdowns.methods ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>

            {(dropdowns.methods && isOpen) || !isOpen ? (
              <ul
                className={`text-sm mt-1 space-y-1 ${
                  isOpen
                    ? "pl-10"
                    : "absolute left-full top-0 bg-gray-800 rounded-md shadow-md px-2 py-2 hidden group-hover:block z-20 w-40"
                }`}
              >
                <NavLink to="/array">
                  <li className="hover:bg-[#fff] px-3 py-2 rounded text-gray-900 cursor-pointer">
                    Arrays Method
                  </li>
                </NavLink>
                <NavLink to="/string">
                  <li className="hover:bg-[#fff] px-3 py-2 rounded text-gray-900 cursor-pointer">
                    String Method
                  </li>
                </NavLink>
                <NavLink to="/math">
                  <li className="hover:bg-[#fff] px-3 py-2 rounded text-gray-900 cursor-pointer">
                    Math Method
                  </li>
                </NavLink>
              </ul>
            ) : null}
          </li>

          <NavLink to="/calendar">
            <SidebarItem
              icon={<HiCalendar />}
              label="Calendar"
              isOpen={isOpen}
            />
          </NavLink>
          <NavLink to="/documents">
            <SidebarItem
              icon={<HiDocumentText />}
              label="Documents"
              isOpen={isOpen}
            />
          </NavLink>
          <NavLink to="/reports">
            <SidebarItem
              icon={<HiChartPie />}
              label="Reports"
              isOpen={isOpen}
            />
          </NavLink>
          <NavLink to="/chart">
            <SidebarItem icon={<HiChartPie />} label="Charts" isOpen={isOpen} />
          </NavLink>
        </nav>

        {/* Teams Section */}
        <div className="mt-4 px-3 text-xs text-gray-500 uppercase tracking-wide">
          {isOpen && "Your Teams"}
        </div>
        <ul className="px-2 space-y-1 mt-2">
          <SidebarItem
            icon={
              <span className="bg-[#fff] w-7 h-7 flex items-center justify-center text-sm font-medium rounded-full">
                H
              </span>
            }
            label="Heroicons"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={
              <span className="bg-[#fff] w-7 h-7 flex items-center justify-center text-sm font-medium rounded-full">
                T
              </span>
            }
            label="Tailwind Labs"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={
              <span className="bg-[#fff] w-7 h-7 flex items-center justify-center text-sm font-medium rounded-full">
                W
              </span>
            }
            label="Workcation"
            isOpen={isOpen}
          />
        </ul>

        {/* Settings */}
        <div className="mt-auto p-4">
          <SidebarItem icon={<HiCog />} label="Settings" isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, isOpen }) {
  return (
    <li className="group relative list-none">
      <div className="flex items-center gap-3 text-sm text-gray-900 hover:bg-[#fff] px-3 py-2 rounded-md cursor-pointer transition">
        <span className="text-xl">{isOpen && icon}</span>
        {isOpen && <span>{label}</span>}
      </div>
      {!isOpen && (
        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition z-20">
          {label}
        </span>
      )}
    </li>
  );
}
