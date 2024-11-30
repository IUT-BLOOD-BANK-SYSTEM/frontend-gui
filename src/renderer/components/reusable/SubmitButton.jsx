import React from "react";
import { Link } from "react-router-dom";

const SubmitButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="mt-4 w-full bg-secondary text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-secondary hover:bg-[#B01733] transition-colors duration-300"
    >
      {text || "Sign Up"}
    </button>
  );
};

export default SubmitButton;
