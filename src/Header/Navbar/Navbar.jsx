import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex  justify-between items-center">
        <div>
          <img src="/Resources/Logo.png" alt="" />
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500 underline ": ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
