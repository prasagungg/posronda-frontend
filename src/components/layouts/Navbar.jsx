import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import history from "../../utils/history";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineHome, AiFillHome, AiOutlinePlus } from "react-icons/ai";

import { logout, getProfile } from "../../redux/actions";

function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    //fetch data profile
    dispatch(getProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const handleLogout = async () => {
    dispatch(logout());
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
            <label
              tabIndex="0"
              className={
                user?.profile_picture
                  ? `btn btn-ghost btn-circle avatar`
                  : `btn btn-ghost btn-circle avatar placeholder`
              }
            >
              {user?.profile_picture ? (
                <div className="w-10 rounded-full">
                  <div></div>
                  <img src={user?.profile_picture} alt="logo-profile" />
                </div>
              ) : (
                <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                  <span className="text-xl">
                    {user?.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </label>
            <ul
              tabIndex="0"
              className="mt-5 p-2 shadow-lg menu menu-compact dropdown-content bg-primary-gray rounded-box w-52"
            >
              <li>
                <Link to={`/${user?.username}`}>Profile</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li onClick={handleLogout}>
                <h1>Logout</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
