import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-primary grid place-content-center">
      <h1 className="text-4xl font-bold">Welcome To Sign Up Page!</h1>
      <Link to="/" className="text-secondary hover:opacity-75 text-center mt-5">
        Go to Login
      </Link>
    </div>
  );
};

export default SignUp;
