import React from "react";

const SubmitButton = ({
  variant = "solid",
  text = "Submit",
  children,
  disabled = false,
}) => {
  const baseStyles =
    "w-full px-4 py-2 mt-7 rounded-md font-semibold transition";
  const variants = {
    solid: "bg-red-500 text-white hover:bg-red-700",
    outline: "bg-transparent border border-white text-white hover:opacity-80",
  };
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {text}
      {children}
    </button>
  );
};

export default SubmitButton;
