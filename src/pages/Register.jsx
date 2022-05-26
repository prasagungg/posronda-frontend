import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";

function Register() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="bg-primary-gray py-4 px-4 shadow-md w-80 h-auto">
        <div className="flex justify-start flex-col items-center">
          <Link className="font-grape text-2xl font-bold" to="/">
            Pos Ronda
          </Link>
          <RegisterForm />
          <Link to="/" className="text-xs text-gray-400 hover:text-gray-300">
            Forgot Password ?
          </Link>
        </div>
      </div>

      <div className="bg-primary-gray py-4 px-4 my-3 shadow-md w-80 h-auto text-center">
        <h5 className="text-sm text-gray-400">Already have an account?</h5>
        <Link
          className="text-[#60a5fa] text-sm hover:text-[#bfdbfe]"
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
