import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { AiOutlineHome, AiFillHome } from "react-icons/ai";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <nav className="navbar bg-primary-gray">
      <div className="container mx-auto px-2 py-2 h-full flex justify-between">
        <div className="w-1/4">
          <Link className="font-grape text-2xl font-bold" to="/">
            Pos Ronda
          </Link>
        </div>
        <div className="w-2/4 flex justify-between">
          <div class="form-control">
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered"
            />
          </div>
          <button class="btn btn-ghost btn-circle">
            {pathMatchRoute("/") ? (
              <AiFillHome
                onClick={() => navigate("/")}
                className="w-6 h-6 hover:cursor-pointer"
              />
            ) : (
              <AiOutlineHome
                onClick={() => navigate("/")}
                className="w-6 h-6 hover:cursor-pointer"
              />
            )}
          </button>

          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img
                  src="https://cdn.discordapp.com/attachments/785540914323914785/961555377063882792/unknown.png"
                  alt="logo-profile"
                />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-5 p-2 shadow-lg menu menu-compact dropdown-content bg-primary-gray rounded-box w-52"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
