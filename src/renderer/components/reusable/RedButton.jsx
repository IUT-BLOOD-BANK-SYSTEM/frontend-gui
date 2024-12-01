import React from "react";
import { Link } from "react-router-dom";
import { Trash } from "lucide-react";

const RedButton = () => {
  return (
    <button
      type="submit"
      className="mt-4 w-full bg-red-500 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring focus:ring-secondary hover:bg-red-600 transition-colors duration-300"
    >
      {Trash}
      <span>{"Remove"}</span>
    </button>
  );
};

export default RedButton;
