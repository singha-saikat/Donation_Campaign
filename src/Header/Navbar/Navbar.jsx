import { NavLink } from "react-router-dom";
import  { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className="hidden md:inline">
        <nav className=" mt-2  flex justify-between items-center">
          <div>
            <img src="/Resources/Logo.png" alt="" />
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 underline"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donation"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 underline "
                      : ""
                  }
                >
                  Donation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 underline"
                      : ""
                  }
                >
                  Statistics
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="md:hidden">
        <nav className="mt-2  flex justify-between items-center">
          <div>
            <img className="w-32" src="/Resources/Logo.png" alt="" />
          </div>
          <div>
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-red-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </nav>
        {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-2">
          <li>
            <NavLink
              to="/"
              activeClassName="text-red-500 underline"
              className="text-gray-500 hover:text-red-500"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              activeClassName="text-red-500 underline"
              className="text-gray-500 hover:text-red-500"
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              activeClassName="text-red-500 underline"
              className="text-gray-500 hover:text-red-500"
            >
              Statistics
            </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
