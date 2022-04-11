import React from "react";
import { Link, useLocation } from "react-router-dom";
import history from "../../utils/history";

import { AiOutlineHome, AiFillHome, AiOutlinePlus } from "react-icons/ai";

function Navbar() {
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <nav className="navbar bg-primary-gray">
      <div className="container mx-auto py-2 h-full flex justify-between">
        <div className="mobile:w-2/4 sm:w-1/4">
          <Link className="font-grape text-2xl font-bold" to="/">
            Pos Ronda
          </Link>
        </div>
        <div className="mobile:w-2/4 bigMobile:w-2/4 md:w-2/4 sm:w-3/4 lg:w-2/4 xl:w-2/4 flex justify-between">
          <div className="form-control mobile:hidden bigMobile:hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => history.push("/")}
          >
            {pathMatchRoute("/") ? (
              <AiFillHome className="w-6 h-6 hover:cursor-pointer" />
            ) : (
              <AiOutlineHome className="w-6 h-6 hover:cursor-pointer" />
            )}
          </button>

          <button
            className="btn btn-ghost btn-circle"
            onClick={() => history.push("/")}
          >
            <AiOutlinePlus className="w-6 h-6 hover:cursor-pointer" />
          </button>

          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://cdn.discordapp.com/attachments/785540914323914785/961555377063882792/unknown.png"
                  alt="logo-profile"
                />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-5 p-2 shadow-lg menu menu-compact dropdown-content bg-primary-gray rounded-box w-52"
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
