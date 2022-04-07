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
    <nav className="drop-shadow-lg w-100 h-20 bg-primary-gray">
      <div className="container mx-auto flex justify-between px-2 py-2 h-full">
        <div className="my-auto">
          <Link className="font-grape text-2xl font-bold" to="/">
            Pos Ronda
          </Link>
        </div>
        <div className="my-auto flex justify-between">
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
