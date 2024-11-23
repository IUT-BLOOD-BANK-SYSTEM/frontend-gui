import React from "react";
import { Link } from "react-router-dom";
import logImg1 from "../assets/login_image.png";
import Heading from "../components/reusable/Heading";

const Login = () => {
  return (
    <div className="min-h-screen bg-primary grid place-content-center mx-5">
      <div className="flex w-full items-center">
        <div className="flex w-1/2">
          <img src={logImg1} alt="img1" />
        </div>
        <div className="flex flex-col w-1/2 gap-6">
          <Heading />

          <form action="">
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="login" className="text-sm font-semibold">
                Login*
              </label>
              <input
                id="login"
                type="text"
                required
                className="border text-black border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="passsword" className="text-sm font-semibold">
                Password*
              </label>
              <input
                id="password"
                type="password"
                required
                className="border text-black border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>

          <div className="flex justify-center mt-5 text-center">
            <Link
              to="/role"
              className="bg-secondary w-full text-white py-2 px-4 rounded-md hover:bg-[#B01733] focus:outline-none focus:ring-2 focus:ring-[#D21F3C]"
            >
              Log in
            </Link>
          </div>

          <div className="flex flex-col items-center gap-2 mt-5">
            <div className="flex gap-2">
              <p>Don't have an account?</p>
              <p className="">
                <Link
                  to="/sign-up"
                  className="text-blue-500 font-semibold hover:opacity-75 text-center mt-5 underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <p>
              <a
                href="#"
                className="text-blue-500 font-semibold hover:opacity-75 text-center mt-5 underline"
              >
                Forgot Password
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
