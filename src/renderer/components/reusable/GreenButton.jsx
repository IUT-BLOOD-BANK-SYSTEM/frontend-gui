import React from "react";
import { Link } from "react-router-dom";
import { Circleplus } from "lucide-react";

const GreenButton = () => {
  return (
    <button
      type="submit"
      className="mt-4 w-full bg- text-green-500 white font-medium py-2 px-4 rounded focus:outline-none focus:ring focus:ring-secondary hover:bg-green-600 transition-colors duration-300"
   
    >
         {Circleplus}
         <span>{"Add"}</span>
    </button>
  );
};

export default GreenButton;
