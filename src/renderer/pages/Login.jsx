import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-primary grid place-content-center">
      <h1 className="text-4xl font-bold">Welcome To Login Page!</h1>
      <Link
        to="/doctor"
        className="text-secondary hover:opacity-75 text-center mt-5"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default Login;
